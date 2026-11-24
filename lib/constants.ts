import { GalleryImage } from '@/types';

export const SITE_CONFIG = {
  title: "Merlijn Passier",
  description: "Director | Creative | Writer | Producer",
  navigation: [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#bio" },
    { label: "Awards", href: "#awards" },
    { label: "the_new", href: "#the_new" },
    { label: "Cutjongens", href: "#cutjongens" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ]
};

export const BIO_CONTENT = {
  name: "Merlijn Passier",
  birthDate: "July 8, 1972",
  birthPlace: "Nuenen, Netherlands",
  education: "Netherlands Film Academy (graduated 1997)",
  biography: `Merlijn Passier (born July 8, 1972, in Nuenen) is a Dutch film director and producer. He graduated from the Netherlands Film Academy in 1997 and is the owner of production company Cutjongens.

Passier is known for his documentary work and has received critical acclaim for his films. His short documentary "De tranen van Castro" (1997) won the Golden Calf for Best Short Documentary at the Netherlands Film Festival. He has also worked extensively in television, both as a director and presenter.

As the founder of Cutjongens, Passier has produced numerous films and video productions, establishing himself as a prominent figure in Dutch cinema and television.`,
  highlights: [
    "Golden Calf winner for Best Short Documentary",
    "Graduated from Netherlands Film Academy in 1997",
    "Owner of production company Cutjongens",
    "Television presenter and documentary filmmaker"
  ]
};

export interface Project {
  id: string;
  title: string;
  year: number | string;
  type: string;
  image?: string;
  imageSecondary?: string;
  trailer?: string;
  trailerSecondary?: string;
  description: string;
  /** An optional closing sentence of the description, rendered as a link. */
  link?: { label: string; href: string };
  awards?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "tranen-castro",
    title: "Castro's Tears",
    year: 1997,
    type: "Documentary - 55 minutes",
    image: "/images/projects/Castro-Poster.jpg",
    imageSecondary: "/images/projects/Castro-Golden-Calf-Color.jpg",
    trailer: "https://vimeo.com/486723293",
    trailerSecondary: "https://vimeo.com/364925571",
    description: "Driven by his ideals, a Dutch Communist travels to Cuba in order to obtain the ultimate trophy for his body fluid collection from Fidel Castro.",
    awards: [
      "Golden Calf - Best Documentary 1997",
      "Golden Calf - Best Actor 1997",
      "Fourth International Festival of Film Schools in Mexico 1997 - Best Fiction Video Award",
      "DocumentArt Film Festival Neubrandenburg 1998 - Eerste Prijs voor de Beste Film: \"Latüchtpreis des Kulturministeriums\""
    ]
  },
  {
    id: "bullet-time",
    title: "Bullet Time",
    year: 2017,
    type: "animation - 5 minuten",
    trailer: "https://vimeo.com/486723240",
    trailerSecondary: "https://vimeo.com/52169657",
    description: "This Dutch entry for the Oscars 2018 is about two bullets that fall in love while taking part in an old fashioned shootout. A film made with paper and ink and the talented Frodo Kuipers.",
    awards: []
  },
  {
    id: "icarus",
    title: "Icarus",
    year: 2017,
    type: "Drama - 50 minutes",
    trailer: "https://vimeo.com/1164316927",
    description: "Marcel Hensema plays the fallen professor Diederik Stapel, who attempts to create a theater show with director Frank Lammers. For his role in 2017, Lammers won a \"Gouden TV-beeld\" (Golden TV Award) for Best Supporting Actor.",
    awards: []
  },
  {
    id: "merlijn-over-de-grens",
    title: "Merlijn over de grens",
    year: "2014 - 2020",
    type: "Documentary series - 45 x 23 minutes",
    trailer: "https://vimeo.com/1164638521",
    description: "Merlijn Passier travels along the border between Brabant and Belgium with his cameraman Okkie to explore cultural differences and gather beautiful, unique stories from the people living there.",
    awards: []
  },
  {
    id: "merlijn-napoleon",
    title: "Merlijn in het spoor van Napoleon",
    year: 2021,
    type: "Documentary series - 15 x 23 minutes",
    trailer: "https://vimeo.com/1165106884",
    description: "Merlijn Passier travels the route taken by King Louis Napoleon in 1809 as an introduction to the province of Brabant. Merlijn retraces his steps and collects unique stories from the people living along this route.",
    awards: []
  },
  {
    id: "merlijn-atlantikwall",
    title: "Merlijn over de Atlantikwall",
    year: 2022,
    type: "Documentary series - 15 x 23 minutes",
    trailer: "https://vimeo.com/1165106872",
    description: "Merlijn Passier travels across the Atlantic Wall in the province of South Holland, the German defense line from the Second World War. Merlijn uncovers traces of the Atlantic Wall and collects stories from the residents living along this extraordinary line.",
    awards: []
  },
  {
    id: "nachtbrakers",
    title: "Merlijn en de Nachtbrakers",
    year: "2025 - 2026",
    type: "documentary series - 18 x 23 minutes",
    image: "/images/projects/merlijn-nacht-thumb.png",
    imageSecondary: "/images/projects/FB-Banner.png",
    description: "Merlijn Passier travels through Brabant by night, in search of the stories that only the darkness can reveal. From mysterious encounters and secret confessions to unique nocturnal hobbies, nothing is left unsaid. What drives these night owls to come to life after dark? What is whispered while our cities and villages are asleep?",
    awards: []
  },
  {
    id: "kamer-van-brabant",
    title: "De kamer van Brabant",
    year: "2011 - 2014",
    type: "Talkshow - 54 x 40 minutes",
    image: "/images/projects/Merlijn-DKVB-Abri.jpg",
    trailer: "https://vimeo.com/1164643064",
    description: "A weekly talkshow featuring human interest stories, politics, and compelling interviews with extraordinary people.",
    awards: []
  },
  {
    id: "olifantendoders",
    title: "Olifantendoders",
    year: "2003 - 2008",
    type: "Documentary series - 52 x 25 minutes",
    image: "/images/projects/IMG-20190111-WA0017.jpg",
    description: "Merlijn Passier and Leon van der Zanden immerse themselves in subcultures defined by stigma and stereotypes. Their journey results in raw, vulnerable encounters where they aren't afraid to put themselves on the line.",
    link: {
      label: "Click here to watch an old episode on joining the army.",
      href: "https://www.youtube.com/watch?v=lEcHM5YFDYU"
    },
    awards: []
  }
];

export const SHOWREELS = {
  general: "https://vimeo.com/486722681",
  cutjongens: "https://vimeo.com/917081302"
};

export const THE_NEW_INFO = {
  name: "the_new",
  tagline: "Media, Reimagined.",
  intro: "The media world is stuck in a loop. While the industry clings to the \"tried and true,\" the world has moved on. We are here to break the cycle.\n\nFounded by Merlijn Passier and Jolien van de Griendt, the_new is a global innovation powerhouse and production house designed for the frontlines of the digital frontier. We don't just observe the future; we build it.",
  sections: [
    {
      title: "What We Do",
      content: "We bridge the gap between creative vision and technical possibility. From high-end film and television to immersive podcasts and cutting-edge journalism, we develop and produce formats that others find \"too complex\" or \"too risky.\""
    },
    {
      title: "Our Toolkit",
      content: "We embrace what others fear. By integrating AI, XR (VR/AR), interactive gaming, and immersive tech into the very fabric of our storytelling, we create experiences that resonate on a global scale. We don't treat innovation as a buzzword—we treat it as our primary language."
    },
    {
      title: "The Alternative",
      content: "Whether you are a broadcaster, a producer, or a global brand, the_new is your fresh alternative to the \"old guard.\" We don't just hand over a concept; we bring it to life, ensuring that every project stays at the razor-sharp edge of innovation."
    }
  ],
  closing: "The old world is watching. the_new is creating.",
  image: "/images/projects/AI-Media-Innovation.png"
};

export const CUTJONGENS_INFO = {
  name: "Cutjongens",
  description: "Cutjongens is a Dutch production company specializing in film and video production. Founded and owned by director Merlijn Passier and editor Bart van Sinten, the company produces feature films, documentaries, commercials, corporate films, and other narrative content, such as TV shows and online media. Check us out here: www.cutjongens.nl",
  image: "/images/projects/Merlijn_Bart2.jpg",
  showreel: SHOWREELS.cutjongens,
  services: [
    "Documentary Production",
    "Commercial Video Production",
    "Corporate Films",
    "Creative Direction"
  ]
};

export const GALLERY_IMAGES = [
  {
    src: "/images/gallery/Merlijn Tanja Chris.jpg",
    alt: "Merlijn directing on set with crew"
  },
  {
    src: "/images/gallery/Merlijn & Reinout.jpg",
    alt: "On location shoot"
  },
  {
    src: "/images/gallery/studio-interview-opname.jpg",
    alt: "Filming an interview in the studio"
  },
  {
    src: "/images/gallery/regiekamer.jpg",
    alt: "Vision mixing in the gallery during a recording"
  },
  {
    src: "/images/gallery/merlijn-cameraman-locatie.jpg",
    alt: "Merlijn on location with his cameraman"
  },
  {
    src: "/images/gallery/studio-setbouw.jpg",
    alt: "Lighting the studio set before a shoot"
  },
  {
    src: "/images/gallery/opname-interieur.jpg",
    alt: "Shooting an interview on location"
  },
  {
    src: "/images/gallery/merlijn-okkie-camera.jpg",
    alt: "Merlijn and his cameraman filming outdoors"
  },
  {
    src: "/images/gallery/greenscreen-studio.jpg",
    alt: "Directing a green screen shoot"
  }
];

// The slideshow under the gallery grid: every unique photograph in the
// Setfoto's folder, including the nine that also appear in the grid above.
// `upright` marks the portraits. The band is 16:9, so object-cover would crop
// those to a sliver; the slideshow shows them whole against the black instead.
//
// The order is shuffled on purpose. Shot in sequence they arrived in clusters
// from the same set-up, which read as one long scene in the band; no two
// neighbours here come from the same shoot.
export const SLIDESHOW_IMAGES: GalleryImage[] = [
  { src: "/images/slideshow/slide-16.jpg", alt: "Watching the shot on the monitor on location" },
  { src: "/images/slideshow/slide-06.jpg", alt: "Merlijn and Bart of Cutjongens" },
  { src: "/images/slideshow/slide-21.jpg", alt: "Shooting an interview on location" },
  { src: "/images/slideshow/slide-30.jpg", alt: "Directing a green screen shoot" },
  { src: "/images/slideshow/slide-17.jpg", alt: "Recording an interview in a gym" },
  { src: "/images/slideshow/slide-11.jpg", alt: "Recording a studio talkshow" },
  { src: "/images/slideshow/slide-27.jpg", alt: "Shooting on a rooftop terrace" },
  { src: "/images/slideshow/slide-10.jpg", alt: "A talkshow set lit in blue" },
  { src: "/images/slideshow/slide-25.jpg", alt: "Merlijn and his cameraman on a winter shoot" },
  { src: "/images/slideshow/slide-36.jpg", alt: "Following the scene on the monitor" },
  { src: "/images/slideshow/slide-22.jpg", alt: "Filming in a dressed living room" },
  { src: "/images/slideshow/slide-34.jpg", alt: "Filming in a home kitchen" },
  { src: "/images/slideshow/slide-18.jpg", alt: "A camera crane in the office set" },
  { src: "/images/slideshow/slide-15.jpg", alt: "Merlijn on location with his cameraman" },
  { src: "/images/slideshow/slide-33.jpg", alt: "Shooting a scene against the white cyclorama" },
  { src: "/images/slideshow/slide-05.jpg", alt: "Working at dusk above the city" },
  { src: "/images/slideshow/slide-12.jpg", alt: "Two chairs on a warmly lit location set" },
  { src: "/images/slideshow/slide-29.jpg", alt: "Recording an interview on location" },
  { src: "/images/slideshow/slide-32.jpg", alt: "An office scene built in the studio" },
  { src: "/images/slideshow/slide-02.jpg", alt: "Director at work", upright: true },
  { src: "/images/slideshow/slide-26.jpg", alt: "Merlijn and his cameraman filming outdoors" },
  { src: "/images/slideshow/slide-09.jpg", alt: "Vision mixing in the gallery during a recording" },
  { src: "/images/slideshow/slide-23.jpg", alt: "On set between takes", upright: true },
  { src: "/images/slideshow/slide-04.jpg", alt: "Merlijn Passier", upright: true },
  { src: "/images/slideshow/slide-19.jpg", alt: "Crew and cast in the white studio" },
  { src: "/images/slideshow/slide-38.jpg", alt: "Merlijn by night for Merlijn en de Nachtbrakers" },
  { src: "/images/slideshow/slide-08.jpg", alt: "Filming an interview in the studio" },
  { src: "/images/slideshow/slide-37.jpg", alt: "Behind the camera" },
  { src: "/images/slideshow/slide-28.jpg", alt: "Merlijn with his crew during a shoot" },
  { src: "/images/slideshow/slide-01.jpg", alt: "Merlijn behind the tripod on location", upright: true },
  { src: "/images/slideshow/slide-35.jpg", alt: "Crew filming an office scene" },
  { src: "/images/slideshow/slide-13.jpg", alt: "A location hall dressed for a shoot" },
  { src: "/images/slideshow/slide-03.jpg", alt: "Filming at a border marker in the fields" },
  { src: "/images/slideshow/slide-20.jpg", alt: "Lighting the studio set before a shoot" },
  { src: "/images/slideshow/slide-07.jpg", alt: "The studio set up for a recording" },
  { src: "/images/slideshow/slide-14.jpg", alt: "Two cameras set up in a classroom" },
  { src: "/images/slideshow/slide-31.jpg", alt: "The studio lit for a shoot" },
  { src: "/images/slideshow/slide-24.jpg", alt: "An evening scene lit on location" }
];

export const CONTACT_INFO = {
  email: "merlijnpassier@gmail.com",
  company: "Cutjongens",
  images: [
    "/images/contact/20190110-LAVFotografie-ZoNuenen-Merlijn-Passier-05.jpg",
    "/images/contact/20190110-LAVFotografie-ZoNuenen-Merlijn-Passier-12.jpg"
  ]
};

export const AWARDS_IMAGE = "/images/laurels/Laurels Bullet Time.jpg";
