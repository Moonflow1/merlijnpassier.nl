# Deployment Guide - Merlijn Passier Portfolio

## 🚀 Quick Deployment to Vercel

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
```bash
cd merlijn-portfolio
git init
```

2. **Create a `.gitignore`** (already exists, verify it includes):
```
node_modules
.next
.env*.local
```

3. **Commit your code**:
```bash
git add .
git commit -m "Initial commit: Merlijn Passier portfolio website"
```

4. **Push to GitHub**:
```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/merlijn-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to [Vercel](https://vercel.com)**
2. Click **"Add New Project"**
3. **Import** your GitHub repository
4. Vercel will auto-detect Next.js settings:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click **"Deploy"**
6. Wait 2-3 minutes for deployment

### Step 3: Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to **"Domains"**
3. Add your custom domain (e.g., `merlijnpassier.com`)
4. Follow DNS configuration instructions
5. Vercel handles SSL certificates automatically

---

## 🌐 Alternative Deployment Options

### Netlify

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Build the project**:
```bash
npm run build
```

3. **Deploy**:
```bash
netlify deploy --prod
```

**netlify.toml configuration** (create this file):
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### AWS Amplify

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
3. Environment variables: None required for basic setup
4. Deploy

### Self-Hosted (VPS/Dedicated Server)

1. **Install Node.js 18+** on your server

2. **Upload your code** via Git or SFTP

3. **Install dependencies**:
```bash
npm ci --production
```

4. **Build the application**:
```bash
npm run build
```

5. **Start with PM2** (recommended):
```bash
# Install PM2
npm install -g pm2

# Start the app
pm2 start npm --name "merlijn-portfolio" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

6. **Configure Nginx** as reverse proxy:
```nginx
server {
    listen 80;
    server_name merlijnpassier.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

7. **Setup SSL with Let's Encrypt**:
```bash
sudo certbot --nginx -d merlijnpassier.com
```

---

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**:
   - Images are already optimized by Next.js Image component
   - Ensure source images are reasonable size (< 5MB each)

2. **Check Build**:
```bash
npm run build
```
Review the output for:
- Bundle sizes
- Page sizes
- Any warnings

3. **Test Production Build Locally**:
```bash
npm run build
npm start
```

### After Deployment

1. **Run Lighthouse Audit**:
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit
   - Aim for 90+ scores

2. **Monitor Performance**:
   - Use Vercel Analytics (if on Vercel)
   - Google Analytics
   - Console for errors

---

## 🔧 Environment Variables

This project doesn't require environment variables for basic functionality.

**If you add features later** (e.g., contact form with email service):

1. Create `.env.local` file:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
EMAIL_SERVICE_KEY=your_key_here
```

2. Add to Vercel:
   - Project Settings → Environment Variables
   - Add each variable
   - Redeploy

---

## 🔄 Continuous Deployment

### Vercel (Automatic)

- Every push to `main` branch = automatic deployment
- Pull requests get preview deployments
- No configuration needed

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

---

## 📱 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All images display in full color
- [ ] Videos play from Vimeo
- [ ] Navigation works smoothly
- [ ] Parallax effects work on desktop
- [ ] Mobile responsive design works
- [ ] All links work
- [ ] Contact email link works
- [ ] Page titles and meta descriptions are correct
- [ ] Favicon displays
- [ ] SSL certificate is active (HTTPS)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)

---

## 🐛 Troubleshooting

### Images Not Loading

**Issue**: Images show broken or don't load

**Solution**:
1. Check file paths in `lib/constants.ts`
2. Verify images exist in `public/images/`
3. Check browser console for errors
4. Clear browser cache

### Videos Not Playing

**Issue**: Vimeo videos don't embed

**Solution**:
1. Verify Vimeo URLs are correct
2. Check video privacy settings on Vimeo (must be public or unlisted)
3. Check browser console for CORS errors
4. Verify `next.config.ts` has correct image domains

### Build Errors

**Issue**: Build fails with errors

**Solution**:
1. Delete `.next` folder: `rm -rf .next`
2. Delete `node_modules`: `rm -rf node_modules`
3. Reinstall: `npm install`
4. Rebuild: `npm run build`

### Performance Issues

**Issue**: Site loads slowly

**Solution**:
1. Check image sizes (optimize if > 2MB each)
2. Reduce parallax speed on mobile
3. Enable Vercel/CDN caching
4. Compress images further

---

## 📞 Support

For deployment issues:
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Check [Vercel Documentation](https://vercel.com/docs)
- Email: info@cutjongens.nl

---

**Last Updated**: February 2026
