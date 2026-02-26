export const SITE_CONFIG = {
  title: "Merlijn Passier",
  description: "Film Director & Producer",
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

Passier is known for his documentary work and has received critical acclaim for his films. His short documentary "De tranen van Castro" (2018) won the Golden Calf for Best Short Documentary at the Netherlands Film Festival. He has also worked extensively in television, both as a director and presenter.

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
  awards?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "tranen-castro",
    title: "Castro's Tears",
    year: 1997,
    type: "Documentary - 1 x 55 minutes",
    image: "/images/projects/Castro-Poster.jpg",
    imageSecondary: "/images/projects/Castro-Golden-Calf-Color.jpg",
    trailer: "https://vimeo.com/486723293",
    trailerSecondary: "https://vimeo.com/364925571",
    description: "Driven by his ideals, a Dutch Communist travels to Cuba in order to obtain the ultimate trophy for his body fluid collection from Fidel Castro.",
    awards: [
      "Golden Calf - Best Documentary 2018",
      "Golden Calf - Best Actor 2018",
      "Fourth International Festival of Film Schools in Mexico 1997 - Best Fiction Video Award",
      "DocumentArt Film Festival Neubrandenburg 1998 - Eerste Prijs voor de Beste Film: \"Latüchtpreis des Kulturministeriums\""
    ]
  },
  {
    id: "bullet-time",
    title: "Bullet Time",
    year: 2017,
    type: "animation - 1 x 5 minuten",
    trailer: "https://vimeo.com/486723240",
    trailerSecondary: "https://vimeo.com/52169657",
    description: "This Dutch entry for the Oscars 2018 is about two bullets that fall in love while taking part in an old fashioned shootout. A film made with paper and ink and the talented Frodo Kuipers.",
    awards: []
  },
  {
    id: "icarus",
    title: "Icarus",
    year: 2017,
    type: "Drama - 1 x 50 minutes",
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
    description: "A weekly talk show featuring human interest stories, politics, and compelling interviews with extraordinary people.",
    awards: []
  },
  {
    id: "olifantendoders",
    title: "Olifantendoders",
    year: "2003 - 2008",
    type: "Documentary series - 52 x 25 minutes",
    image: "/images/projects/IMG-20190111-WA0017.jpg",
    description: "Merlijn Passier and Leon van der Zanden immerse themselves in subcultures defined by stigma and stereotypes. Their journey results in raw, vulnerable encounters where they aren't afraid to put themselves on the line.",
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

export const PRESENTER_WORK = {
  shows: []
};

export const GALLERY_IMAGES = [
  {
    src: "/images/gallery/Merlijn Tanja Chris.jpg",
    alt: "Merlijn directing on set with crew"
  },
  {
    src: "/images/gallery/IMG-20190111-WA0015.jpg",
    alt: "Behind the scenes - production"
  },
  {
    src: "/images/gallery/Merlijn en Kalf.jpg",
    alt: "Merlijn with Golden Calf award"
  },
  {
    src: "/images/gallery/M&L1.jpg",
    alt: "Production meeting"
  },
  {
    src: "/images/gallery/Merlijn & Reinout.jpg",
    alt: "On location shoot"
  },
  {
    src: "/images/gallery/IMG-20190111-WA0016.jpg",
    alt: "Director at work"
  }
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
