import type { CampsiteConfig } from "../types";

/**
 * Stellplatz Duxeralm — Hochkrimml (Zillertal Arena).
 * 100 % aus den eigenen Quellseiten (raw/digest) abgeleitet. Einfacher Stellplatz
 * am Skigebiet, Familienbetrieb Oberhollenzer ("Duxer Buam"). Keine Preise in der
 * Quelle → Richtpreise offen ausgewiesen. Bilder nur von dieser Anlage.
 */
const IMG = "/campsites/duxer";

const duxer: CampsiteConfig = {
  name: "Stellplatz Duxeralm",
  shortName: "Duxeralm",
  slug: "duxer",
  ort: "Hochkrimml",
  region: "Salzburger Land",
  brandKind: "Stellplatz im Skigebiet",
  regionLong: "Hochkrimml · Zillertal Arena · Österreich",

  heroVariant: "center",

  claim: "Dein Stellplatz auf 1.700 m, direkt am Lift",
  claimEmphasis: "auf 1.700 m",
  intro:
    "Einfache Stellplätze gegenüber dem Duxer X-Press, mitten im Skigebiet Hochkrimml auf rund 1.700 Metern. Für alle, die ihr Wohnmobil selbst versorgen und morgens als Erstes die Gipfel der Zillertal Arena sehen wollen.",

  statement: {
    text: "Bei uns zählt nicht die Ausstattung, sondern die Lage — 1.700 Höhenmeter und der Lift gleich gegenüber.",
    emphasis: "die Lage",
  },

  pillars: [
    {
      title: "Auf rund 1.700 Metern",
      text: "Dein Platz liegt hoch über dem Tal in Hochkrimml — schneesicher, sonnig und mit Bergpanorama in jede Richtung.",
      image: { src: `${IMG}/gallery-ed8b6aefe7.webp`, alt: "Gäste genießen Getränke auf der sonnigen Terrasse der Duxeralm mit Bergpanorama" },
    },
    {
      title: "Familienbetrieb der Duxer Buam",
      text: "Ferdinand und Hans-Peter Oberhollenzer führen Restaurant, Landwirtschaft und Stellplatz gemeinsam als Familie weiter.",
      image: { src: `${IMG}/gallery-bb271bbe62.webp`, alt: "Ferdinand und Hans-Peter Oberhollenzer, die Duxer Buam" },
    },
    {
      title: "Mitten in der Zillertal Arena",
      text: "Der Stellplatz liegt direkt gegenüber dem Duxer X-Press — im Winter geht es Ski-In hinaus ins Pistennetz der Region.",
      image: { src: `${IMG}/gallery-a649137165.webp`, alt: "Skigebiet Zillertal Arena rund um die Duxeralm" },
    },
  ],

  usps: [
    "Direkt am Duxer X-Press",
    "Rund 1.700 m Seehöhe",
    "Restaurant Duxeralm vor Ort",
    "Familiär geführt",
    "Anmeldung mit Kennzeichen",
  ],

  trust: {
    heading: "Ehrlich einfach, mitten in den Bergen",
    headingEmphasis: "Ehrlich einfach",
    intro:
      "Die Duxeralm ist ein Familienbetrieb der Oberhollenzer: Bergrestaurant, eigene Landwirtschaft und Unterkünfte aus einer Hand. Der Stellplatz bleibt bewusst schlicht — dafür stimmt drumherum alles.",
  },

  awards: [],

  saison: { von: "Juni", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/gallery-5dde5c96ee.webp`, alt: "Die Duxeralm in Hochkrimml im Skigebiet Zillertal Arena von oben" },
  },

  camping: {
    heading: "Der Stellplatz an der Duxeralm",
    intro:
      "Zwei einfache Stellplatz-Bereiche direkt am Skigebiet — ohne weitere Ausstattung. Die Sanitäreinrichtung des Restaurants darfst du während der Öffnungszeiten mitbenutzen.",
    features: [
      {
        title: "Stellplatz Camping 1",
        text: "Gegenüber dem Duxer X-Press und dem Restaurant gelegen — die Anmeldung läuft vorab ganz einfach mit deinem Kennzeichen.",
        image: { src: `${IMG}/gallery-9c1bf59371.webp`, alt: "Lageplan Stellplatz Camping 1 an der Duxeralm" },
      },
      {
        title: "Stellplatz Camping 2",
        text: "Etwas weiter oben am Duxer 6er-Bubble — ein ruhiger Platz auf der Wiese, mitten im Skigebiet Hochkrimml.",
        image: { src: `${IMG}/gallery-421cd7e03c.webp`, alt: "Lageplan Stellplatz Camping 2 am Duxer 6er-Bubble" },
      },
    ],
  },

  mobilheime: {
    heading: "Lieber ein Dach über dem Kopf?",
    intro:
      "Wer es etwas komfortabler mag, übernachtet bei Familie Oberhollenzer gleich nebenan — von der urigen Hütte bis zum Doppelzimmer.",
    items: [
      {
        name: "Alte Duxerhütte",
        kind: "Gruppenhütte",
        text: "An der Talstation des Duxer X-Press: Platz für bis zu 50 Personen, ideal für Feiern und Gruppenausflüge.",
        image: { src: `${IMG}/gallery-3fce8b98a6.webp`, alt: "Urige Stube in der alten Duxerhütte" },
        features: ["13 Schlafzimmer", "55 Betten", "Heizung", "Eigene Küche"],
      },
      {
        name: "Doppelzimmer",
        kind: "Zimmer mit Frühstück",
        text: "Direkt an der Duxeralm, nur 20 Meter zum Skilift — auf Wunsch mit Frühstück oder Halbpension.",
        image: { src: `${IMG}/gallery-38ec3c0736.webp`, alt: "Doppelzimmer an der Duxeralm mit Balkon und Bergblick" },
        features: ["Optionales Frühstück", "20 m zum Skilift", "Bergpanorama"],
      },
      {
        name: "Ferienhaus Söllhof",
        kind: "Ferienhaus im Tal",
        text: "Der Söllhof am Bauernhof im Tal lässt sich für Gruppen bis zu 30 Personen mieten.",
        image: { src: `${IMG}/gallery-10395b5281.webp`, alt: "Gasthof Söllhof im Tal bei Krimml" },
        features: ["Bis 30 Personen", "Am Bauernhof im Tal"],
      },
    ],
  },

  anreise: {
    heading: "So kommst du nach Hochkrimml",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Gerlosstraße (B 165) nach Hochkrimml — aus dem Zillertal über Zell am Ziller, aus dem Pinzgau über Krimml.",
      },
      {
        title: "Mit Bahn & Bus",
        text: "Mit der Zillertalbahn bis Zell am Ziller, von dort weiter mit dem Postbus hinauf nach Hochkrimml.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Die Flughäfen Salzburg und Innsbruck liegen jeweils rund 1,5 Autostunden entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Einblicke in die alte Duxerhütte",
    headingEmphasis: "alte Duxerhütte",
    intro:
      "Holz, gemütliche Stuben und einfache Zimmer — so urig schläft es sich in der alten Duxerhütte an der Talstation.",
    tag: "urig & einfach",
    images: [
      { src: `${IMG}/gallery-883cb44cd3.webp`, alt: "Schlafzimmer unterm Dach in der alten Duxerhütte" },
      { src: `${IMG}/gallery-151ec1b7d9.webp`, alt: "Zimmer mit Stockbett in der alten Duxerhütte" },
      { src: `${IMG}/gallery-c2eaf7599b.webp`, alt: "Küche der alten Duxerhütte" },
      { src: `${IMG}/gallery-e72d00cfb3.webp`, alt: "Einfaches Zimmer in der alten Duxerhütte" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz auf 1.700 m",
    headingEmphasis: "auf 1.700 m",
    intro:
      "Reserviere deinen Stellplatz oder melde dich kurz mit dem Kennzeichen an — Familie Oberhollenzer meldet sich persönlich bei dir.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen). Sanitär über das Restaurant während der Öffnungszeiten, zzgl. Ortstaxe.",
    highlight: {
      title: "Anmeldung mit Kennzeichen",
      text: "Vor der Anreise kurz online registrieren — den Link findest du bei der Buchung.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 30 },
      { id: "doppelzimmer", label: "Doppelzimmer m. Frühstück", perNight: 90 },
    ],
  },

  kontakt: {
    tel: "+43 677 64452559",
    telHref: "tel:+4367764452559",
    mail: "office@duxer.at",
    facebook: "https://www.facebook.com/Bergrestaurant.Duxeralm",
    adresse: "Fam. Oberhollenzer · Hochkrimml 2 · A-5743 Krimml",
  },

  languages: ["DE"],

  nav: [
    { label: "Stellplatz", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Lage", href: "#anreise" },
    ]},
    { label: "Unterkünfte", href: "#mobilheime", children: [
      { label: "Alte Duxerhütte", href: "#mobilheime" },
      { label: "Doppelzimmer", href: "#mobilheime" },
      { label: "Söllhof", href: "#mobilheime" },
    ]},
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default duxer;
