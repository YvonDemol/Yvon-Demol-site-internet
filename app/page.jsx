"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const content = {
  fr: {
    nav: { about: "À propos", works: "Pièces", contact: "Contact" },
    labels: {
      choreographer: "Chorégraphe",
      piece: "Pièce",
      credits: "Crédits",
      creation: "Création",
      choreography: "Chorégraphie",
      interpretation: "Interprétation",
      music: "Musique",
      costumesMasks: "Costumes & masques",
      costumes: "Costumes",
      lights: "Lumières",
      makeup: "Maquillage",
      photographs: "Photographies",
      choreographyCostumes: "Chorégraphie & costumes",
      choreographyLights: "Chorégraphie & lumières",
      creations: "Créations :",
    },
    works: {
      supercorps: (
        <>
          Inspiré par les œuvres de Michel-Ange et de Rodin,
          <span className="italic"> Supercorps </span>
          explore ce qui rapproche leurs regards : une attention portée au corps comme lieu de transformation.
          <br /><br />
          Qu’il soit idéalisé ou imparfait, le corps y apparaît toujours en tension, en torsion, traversé par une énergie qui le met en mouvement.
          <br /><br />
          Les deux interprètes évoluent dans une relation d’écoute et d’équilibre, tour à tour appui, résistance ou prolongement l’un de l’autre.
          <br /><br />
          Ils incarnent à la fois l’œuvre et l’artiste, le corps façonné et la force qui le met en forme.
        </>
      ),
      ultra: (
        <>
          L’une regarde, l’autre inspire. Le geste naît de l’admiration, glisse vers l’imitation, puis vers l’envie.
          <br /><br />
          À force de copier, les mouvements se confondent, les identités vacillent.
          <br /><br />
          Le duo explore cette frontière fragile entre le désir d’être soi et celui de devenir l’autre.
        </>
      ),
      mainCharacter: (
        <>
          <span className="italic">Main character</span> explore la notion de protagoniste dans nos vies quotidiennes et interroge ce besoin profondément humain d’être vu, reconnu, choisi.
          <br /><br />
          Sur scène, les corps racontent ce moment où l’on décide — ou non — de se placer au centre de sa propre histoire.
          <br /><br />
          Portée par des élans individuels et des dynamiques de groupe, <span className="italic">Main character</span> traverse l’espace où se négocie la place de chacun, dans un monde saturé de récits concurrents.
          <br /><br />
          La danse y devient un langage pour dire le doute, le besoin d’exister, et le désir de prendre sa place.
        </>
      ),
      minuit: (
        <>
          À minuit, lors d’un mauvais rêve, quelqu’un est visité par des fantômes.
          <br /><br />
          Des élans de sensualité, de violence, une suite d’images sans chronologie, composent un monde un peu étrange.
          <br /><br />
          Dans la lumière grise des rêves, on devient quelque chose que l’on n’est pas dans la vie.
        </>
      ),
    },
    bio: (
      <>
        <p>
          Yvon Demol commence la danse à l’âge de 8 ans au Conservatoire de Vitry-sur-Seine.
          <br />
          En 1998 il intègre l’École de danse de l’Opéra de Paris.
          <br />
          Engagé en 2007 dans le Ballet de l’Opéra de Paris, il est promu Coryphée l’année suivante.
        </p>
        <p>
          Depuis il se produit dans de nombreux ballets du répertoire classique et contemporain et danse des rôles de soliste notamment dans les ballets de Jiri Kylian (<span className="italic">Kaguyahime, Bella Figura, Tar and feathers, Petite mort, Sechs tänze</span>), William Forsythe (<span className="italic">Artifact suite, Pas./Parts, Herman Schmerman</span>), Ohad Naharin (<span className="italic">Decadance</span>), Johan Inger (<span className="italic">Impasse</span>), Mthuthuzeli November (<span className="italic">Rhapsodies</span>) ou Maurice Béjart (<span className="italic">L’Oiseau de feu</span>).
        </p>
        <p>
          Il participe également à de nombreuses créations : <span className="italic">The Seasons’ canon</span> et <span className="italic">Body and soul</span> de Crystal Pite, <span className="italic">The Male dancer</span> d’Ivan Perez, <span className="italic">Horizon</span> de Xi Xin, <span className="italic">Faunes</span> et <span className="italic">Vers la mort</span> de Sharon Eyal, <span className="italic">Cri de coeur</span> d’Alan Lucien Oyen, <span className="italic">Exposure</span> de Sidi Larbi Cherkaoui, <span className="italic">Play</span> d’Alexander Ekman, <span className="italic">Clear,loud,bright,forward</span> de Benjamin Millepied, <span className="italic">L’Anatomie de la sensation</span> de Wayne McGregor, <span className="italic">Les Noces</span> de Pontus Lidberg, <span className="italic">Drift wood</span> d’Imre et Marne Van Opstal, <span className="italic">Etude</span> de Marcos Morau ou encore <span className="italic">Pit</span> de Bobbi Jene Smith & Or Schraiber.
        </p>
        <p>
          Parallèlement à sa carrière de danseur au sein du Ballet de l’Opéra de Paris, Yvon Demol est également chorégraphe et co-directeur, depuis 2017, de la compagnie Incidence Chorégraphique.
        </p>
      </>
    ),
  },
  en: {
    nav: { about: "About", works: "Works", contact: "Contact" },
    labels: {
      choreographer: "Choreographer",
      piece: "Work",
      credits: "Credits",
      creation: "Creation",
      choreography: "Choreography",
      interpretation: "Performance",
      music: "Music",
      costumesMasks: "Costumes & masks",
      costumes: "Costumes",
      lights: "Lighting",
      makeup: "Make-up",
      photographs: "Photography",
      choreographyCostumes: "Choreography & costumes",
      choreographyLights: "Choreography & lighting",
      creations: "Creations:",
    },
    works: {
      supercorps: (
        <>
          Inspired by the works of Michelangelo and Rodin,
          <span className="italic"> Supercorps </span>
          explores what connects their gaze: an attention to the body as a place of transformation.
          <br /><br />
          Whether idealized or imperfect, the body always appears in tension, in torsion, crossed by an energy that sets it in motion.
          <br /><br />
          The two performers evolve through a relationship of listening and balance, becoming in turn support, resistance, or an extension of one another.
          <br /><br />
          They embody both the artwork and the artist, the shaped body and the force that gives it form.
        </>
      ),
      ultra: (
        <>
          One watches, the other inspires. The gesture is born from admiration, slipping into imitation, then into desire.
          <br /><br />
          Through repetition, movements begin to merge and identities start to waver.
          <br /><br />
          The duet explores this fragile boundary between the desire to be oneself and the desire to become the other.
        </>
      ),
      mainCharacter: (
        <>
          <span className="italic">Main character</span> explores the notion of the protagonist in our daily lives and questions the deeply human need to be seen, recognized, chosen.
          <br /><br />
          On stage, the bodies tell of the moment when one decides — or not — to place oneself at the center of one’s own story.
          <br /><br />
          Carried by individual impulses and group dynamics, <span className="italic">Main character</span> moves through the space where each person’s place is negotiated, in a world saturated with competing narratives.
          <br /><br />
          Dance becomes a language for doubt, the need to exist, and the desire to take one’s place.
        </>
      ),
      minuit: (
        <>
          At midnight, during a bad dream, someone is visited by ghosts.
          <br /><br />
          Impulses of sensuality and violence, a sequence of images without chronology, compose a slightly strange world.
          <br /><br />
          In the grey light of dreams, we become something we are not in life.
        </>
      ),
    },
    bio: (
      <>
        <p>
          Yvon Demol began dancing at the age of eight at the Conservatoire de Vitry-sur-Seine.
          <br />
          In 1998, he joined the Paris Opera Ballet School.
          <br />
          He entered the Paris Opera Ballet in 2007 and was promoted to Coryphée the following year.
        </p>
        <p>
          Since then, he has performed in numerous classical and contemporary ballets, dancing soloist roles in works by Jiri Kylian (<span className="italic">Kaguyahime, Bella Figura, Tar and feathers, Petite mort, Sechs tänze</span>), William Forsythe (<span className="italic">Artifact suite, Pas./Parts, Herman Schmerman</span>), Ohad Naharin (<span className="italic">Decadance</span>), Johan Inger (<span className="italic">Impasse</span>), Mthuthuzeli November (<span className="italic">Rhapsodies</span>) and Maurice Béjart (<span className="italic">L’Oiseau de feu</span>).
        </p>
        <p>
          He has also taken part in many creations, including <span className="italic">The Seasons’ canon</span> and <span className="italic">Body and soul</span> by Crystal Pite, <span className="italic">The Male dancer</span> by Ivan Perez, <span className="italic">Horizon</span> by Xi Xin, <span className="italic">Faunes</span> and <span className="italic">Vers la mort</span> by Sharon Eyal, <span className="italic">Cri de coeur</span> by Alan Lucien Oyen, <span className="italic">Exposure</span> by Sidi Larbi Cherkaoui, <span className="italic">Play</span> by Alexander Ekman, <span className="italic">Clear,loud,bright,forward</span> by Benjamin Millepied, <span className="italic">L’Anatomie de la sensation</span> by Wayne McGregor, <span className="italic">Les Noces</span> by Pontus Lidberg, <span className="italic">Drift wood</span> by Imre and Marne Van Opstal, <span className="italic">Etude</span> by Marcos Morau, and <span className="italic">Pit</span> by Bobbi Jene Smith & Or Schraiber.
        </p>
        <p>
          Alongside his career as a dancer with the Paris Opera Ballet, Yvon Demol is also a choreographer and, since 2017, co-director of the company Incidence Chorégraphique.
        </p>
      </>
    ),
  },
};

const supercorpsImages = ["/images/supercorps/01.jpeg", "/images/supercorps/02.jpeg", "/images/supercorps/03.jpeg", "/images/supercorps/04.jpeg"];
const ultraImages = ["/images/ultra/01.jpeg", "/images/ultra/02.jpeg", "/images/ultra/03.jpeg", "/images/ultra/04.jpeg", "/images/ultra/05.jpeg"];
const mainCharacterImages = ["/images/main-character/01.jpeg", "/images/main-character/02.jpeg", "/images/main-character/03.jpeg", "/images/main-character/04.jpeg", "/images/main-character/05.jpeg", "/images/main-character/06.jpeg", "/images/main-character/07.jpeg", "/images/main-character/08.jpeg"];
const minuitImages = ["/images/minuit/01.jpeg", "/images/minuit/02.jpeg", "/images/minuit/03.jpeg", "/images/minuit/04.jpeg", "/images/minuit/05.jpeg", "/images/minuit/06.jpeg", "/images/minuit/07.jpeg", "/images/minuit/08.jpeg"];
const portraitImage = "/images/portrait/yvon-demol.jpeg";

function SectionIntro({ title, label, children }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
      <div>
        <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-4">{label}</p>
        <h2 className="text-5xl md:text-7xl font-extralight tracking-[-0.04em] leading-none">{title}</h2>
      </div>
      <div className="max-w-2xl">
        <p className="text-sm md:text-[15px] leading-[1.9] opacity-70 font-light">{children}</p>
      </div>
    </div>
  );
}

function FadeImage({ src, alt, className }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="mb-8">
      <img src={src} alt={alt} className={className} loading="lazy" />
    </motion.div>
  );
}

function VideoBlock({ src, title }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="mb-24">
      <div className="aspect-video w-full overflow-hidden rounded-sm bg-white/5">
        <iframe src={src} className="w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title={title} />
      </div>
    </motion.div>
  );
}

function Credits({ label, children }) {
  return (
    <div className="border-t border-white/10 pt-10 mt-24 grid md:grid-cols-2 gap-12">
      <div><p className="text-[10px] uppercase tracking-[0.35em] opacity-40 mb-8">{label}</p></div>
      <div className="space-y-4 text-sm leading-[1.9] font-light opacity-70">{children}</div>
    </div>
  );
}

function Credit({ label, children }) {
  return (
    <p>
      <span className="opacity-40">{label}</span><br />
      {children}
    </p>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState("fr");
  const c = content[lang];

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-16 font-sans">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extralight tracking-[-0.02em] leading-none">Yvon Demol</h1>
        <div className="flex flex-col items-start md:items-end gap-6 mt-8 md:mt-0">
          <div className="flex gap-3 text-[10px] uppercase tracking-[0.3em] opacity-70">
            <button onClick={() => setLang("fr")} className={lang === "fr" ? "opacity-100" : "opacity-40"}>FR</button>
            <button onClick={() => setLang("en")} className={lang === "en" ? "opacity-100" : "opacity-40"}>EN</button>
          </div>
          <nav className="space-x-8 text-[10px] uppercase tracking-[0.35em] opacity-70">
            <a href="#about" className="hover:opacity-100">{c.nav.about}</a>
            <a href="#works" className="hover:opacity-100">{c.nav.works}</a>
            <a href="#contact" className="hover:opacity-100">{c.nav.contact}</a>
          </nav>
        </div>
      </header>

      <section id="works" className="mb-48">
        <SectionIntro title="Supercorps" label={c.labels.piece}>{c.works.supercorps}</SectionIntro>
        <FadeImage src={supercorpsImages[0]} alt="Supercorps" className="w-full h-[90vh] object-cover rounded-sm" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <img src={supercorpsImages[1]} alt="Supercorps" className="w-full h-[80vh] object-cover" loading="lazy" />
          <img src={supercorpsImages[2]} alt="Supercorps" className="w-full h-[80vh] object-cover" loading="lazy" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-24">
          <img src={supercorpsImages[3]} alt="Supercorps" className="w-full h-[70vh] object-cover md:col-span-3" loading="lazy" />
        </div>
        <Credits label={c.labels.credits}>
          <Credit label={c.labels.choreography}>Yvon Demol</Credit>
          <Credit label={c.labels.interpretation}>Hohyun Kang & Yvon Demol</Credit>
          <Credit label={c.labels.music}>Michel Dietlin (création) & Ludwig van Beethoven</Credit>
          <Credit label={c.labels.costumesMasks}>imaginés par Yvon Demol<br />réalisés par Elsa Depardieu, Bernard Connan, Aziliz Denis, Atelier bas et hauts</Credit>
          <Credit label={c.labels.makeup}>Aude Durocher & Joa Nauche</Credit>
          <Credit label={c.labels.photographs}>Maria-Helena Buckley</Credit>
          <Credit label={c.labels.creation}>Musée du Louvre<br />Exposition <span className="italic">Michel-Ange / Rodin, corps vivants</span><br />Avril 2026</Credit>
        </Credits>
      </section>

      <section className="mb-48 border-t border-white/10 pt-20">
        <SectionIntro title="Ultra" label={c.labels.piece}>{c.works.ultra}</SectionIntro>
        <VideoBlock src="https://player.vimeo.com/video/1192419719" title="Ultra" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <img src={ultraImages[0]} alt="Ultra" className="w-full h-[85vh] object-cover" loading="lazy" />
          <img src={ultraImages[1]} alt="Ultra" className="w-full h-[85vh] object-cover" loading="lazy" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <img src={ultraImages[2]} alt="Ultra" className="w-full h-[70vh] object-cover" loading="lazy" />
          <img src={ultraImages[3]} alt="Ultra" className="w-full h-[70vh] object-cover md:col-span-2" loading="lazy" />
        </div>
        <FadeImage src={ultraImages[4]} alt="Ultra" className="w-full h-[90vh] object-cover" />
        <Credits label={c.labels.credits}>
          <Credit label={c.labels.choreographyCostumes}>Yvon Demol</Credit>
          <Credit label={c.labels.interpretation}>Apolline Anquetil & Naïs Duboscq</Credit>
          <Credit label={c.labels.music}>Peter Gregson — <span className="italic">Drone</span> & <span className="italic">Cantus</span><br />Peter Broderick — <span className="italic">Eyes Closed and Traveling</span></Credit>
          <Credit label={c.labels.lights}>Tom Klefstad</Credit>
          <Credit label={c.labels.makeup}>Rosa Conforti & Aude Durocher</Credit>
          <Credit label={c.labels.photographs}>Benoite Fanton</Credit>
          <Credit label={c.labels.creation}>Opéra de Paris<br />Février 2026</Credit>
        </Credits>
      </section>

      <section className="mb-48 border-t border-white/10 pt-20">
        <SectionIntro title="Main Character" label={c.labels.piece}>{c.works.mainCharacter}</SectionIntro>
        <VideoBlock src="https://player.vimeo.com/video/1192418223" title="Main Character" />
        <FadeImage src={mainCharacterImages[0]} alt="Main Character" className="w-full h-[90vh] object-cover rounded-sm" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <img src={mainCharacterImages[1]} alt="Main Character" className="w-full h-[80vh] object-cover" loading="lazy" />
          <img src={mainCharacterImages[2]} alt="Main Character" className="w-full h-[80vh] object-cover" loading="lazy" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <img src={mainCharacterImages[3]} alt="Main Character" className="w-full h-[65vh] object-cover" loading="lazy" />
          <img src={mainCharacterImages[4]} alt="Main Character" className="w-full h-[65vh] object-cover" loading="lazy" />
          <img src={mainCharacterImages[5]} alt="Main Character" className="w-full h-[65vh] object-cover" loading="lazy" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <img src={mainCharacterImages[6]} alt="Main Character" className="w-full h-[85vh] object-cover" loading="lazy" />
          <img src={mainCharacterImages[7]} alt="Main Character" className="w-full h-[85vh] object-cover" loading="lazy" />
        </div>
        <Credits label={c.labels.credits}>
          <Credit label={c.labels.choreographyLights}>Yvon Demol</Credit>
          <Credit label={c.labels.music}>Sergueï Rachmaninov</Credit>
          <Credit label={c.labels.costumes}>Charlie Le Mindu</Credit>
          <Credit label={c.labels.photographs}>Patricia Portetelle</Credit>
          <Credit label={c.labels.interpretation}>Europa Danse Company</Credit>
          <Credit label={c.labels.creation}>Bruxelles<br />Juin 2025</Credit>
        </Credits>
      </section>

      <section className="mb-48 border-t border-white/10 pt-20">
        <SectionIntro title="Minuit" label={c.labels.piece}>{c.works.minuit}</SectionIntro>
        <FadeImage src={minuitImages[0]} alt="Minuit" className="w-full h-[90vh] object-cover rounded-sm" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <img src={minuitImages[1]} alt="Minuit" className="w-full h-[80vh] object-cover" loading="lazy" />
          <img src={minuitImages[2]} alt="Minuit" className="w-full h-[80vh] object-cover" loading="lazy" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <img src={minuitImages[3]} alt="Minuit" className="w-full h-[65vh] object-cover" loading="lazy" />
          <img src={minuitImages[4]} alt="Minuit" className="w-full h-[65vh] object-cover" loading="lazy" />
          <img src={minuitImages[5]} alt="Minuit" className="w-full h-[65vh] object-cover" loading="lazy" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <img src={minuitImages[6]} alt="Minuit" className="w-full h-[85vh] object-cover" loading="lazy" />
          <img src={minuitImages[7]} alt="Minuit" className="w-full h-[85vh] object-cover" loading="lazy" />
        </div>
        <Credits label={c.labels.credits}>
          <Credit label={c.labels.choreography}>Yvon Demol</Credit>
          <Credit label={c.labels.music}>Evgueni Galperine<br /><span className="italic">This Town Will Burn Before Dawn</span>, <span className="italic">The Wheel Has Come Full Circle</span>, <span className="italic">La Lettre d’un disparu</span>, <span className="italic">Cold Front</span></Credit>
          <Credit label={c.labels.costumes}>Charlie Le Mindu</Credit>
          <Credit label={c.labels.lights}>Tom Klefstad</Credit>
          <Credit label={c.labels.interpretation}>Apolline Anquetil, Milo Avêque, Keita Bellali, Nathan Bisson, Naïs Duboscq, Seojun Yoon</Credit>
          <Credit label={c.labels.photographs}>Julien Benhamou</Credit>
          <Credit label={c.labels.creation}>Opéra de Paris<br />Mai 2025</Credit>
        </Credits>
      </section>

      <section id="about" className="mb-40 border-t border-white/10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] mb-6 opacity-50">{c.nav.about}</p>
            <h2 className="text-5xl md:text-7xl font-extralight tracking-[-0.04em] leading-none mb-16">
              Yvon Demol<br /><span className="text-3xl md:text-5xl opacity-60">{c.labels.choreographer}</span>
            </h2>
            <div className="space-y-8 text-base md:text-lg leading-[1.9] font-light opacity-80 max-w-3xl">
              {c.bio}
              <p><span className="opacity-50">{c.labels.creations}</span><br /><span className="italic">1827, Blue Sunday, Camille, Dauphins, Merrymaking, Bien que, Boléro, Folamour, Run, Minuit, Main character, Supercorps, Ultra.</span></p>
            </div>
          </div>
          <div className="sticky top-10">
            <img src={portraitImage} alt="Yvon Demol" className="w-full h-auto object-cover rounded-sm" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="contact" className="mb-20">
        <h2 className="text-[10px] uppercase tracking-[0.4em] mb-10 opacity-50">{c.nav.contact}</h2>
        <div className="flex flex-col items-start gap-6">
          <a href="mailto:yvondemol@gmail.com" className="text-xl md:text-2xl font-light hover:opacity-60 transition-opacity">yvondemol@gmail.com</a>
          <a href="https://instagram.com/yvondemol" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-[0.3em] opacity-70 hover:opacity-100 transition-opacity">Instagram — @yvondemol</a>
        </div>
      </section>

      <footer className="text-[10px] opacity-30 mt-32">© {new Date().getFullYear()} Yvon Demol</footer>
    </main>
  );
}
