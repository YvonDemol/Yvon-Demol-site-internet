'use client';

import { motion } from 'framer-motion';

const supercorpsImages = [
  '/images/supercorps/01.jpeg',
  '/images/supercorps/02.jpeg',
  '/images/supercorps/03.jpeg',
  '/images/supercorps/04.jpeg'
];

const ultraImages = [
  '/images/ultra/01.jpeg',
  '/images/ultra/02.jpeg',
  '/images/ultra/03.jpeg',
  '/images/ultra/04.jpeg',
  '/images/ultra/05.jpeg'
];

const mainCharacterImages = [
  '/images/main-character/01.jpeg',
  '/images/main-character/02.jpeg',
  '/images/main-character/03.jpeg',
  '/images/main-character/04.jpeg',
  '/images/main-character/05.jpeg',
  '/images/main-character/06.jpeg',
  '/images/main-character/07.jpeg',
  '/images/main-character/08.jpeg'
];

const minuitImages = [
  '/images/minuit/01.jpeg',
  '/images/minuit/02.jpeg',
  '/images/minuit/03.jpeg',
  '/images/minuit/04.jpeg',
  '/images/minuit/05.jpeg',
  '/images/minuit/06.jpeg',
  '/images/minuit/07.jpeg',
  '/images/minuit/08.jpeg'
];

function SectionIntro({ title, children }) {
  return (
    <div className="sectionIntro">
      <div>
        <p className="eyebrow">Pièce</p>
        <h2 className="pieceTitle">{title}</h2>
      </div>
      <div className="introText">{children}</div>
    </div>
  );
}

function FadeImage({ src, alt, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="imageReveal"
    >
      <img src={src} alt={alt} className={className} loading="lazy" />
    </motion.div>
  );
}

function VideoBlock({ src, title }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="videoBlock"
    >
      <iframe
        src={src}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </motion.div>
  );
}

function Credits({ children }) {
  return (
    <div className="credits">
      <div>
        <p className="eyebrow">Crédits</p>
      </div>
      <div className="creditsList">{children}</div>
    </div>
  );
}

function Credit({ label, children }) {
  return (
    <p>
      <span>{label}</span>
      <br />
      {children}
    </p>
  );
}

export default function Portfolio() {
  return (
    <main>
      <header className="siteHeader">
        <h1>Yvon Demol</h1>
        <nav>
          <a href="#about">À propos</a>
          <a href="#works">Pièces</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="works" className="pieceSection firstPiece">
        <SectionIntro title="Supercorps">
          <p>
            Inspiré par les œuvres de Michel-Ange et de Rodin,
            <span className="italic"> Supercorps </span>
            explore ce qui rapproche leurs regards : une attention portée au corps comme lieu de transformation.
          </p>
          <p>
            Qu’il soit idéalisé ou imparfait, le corps y apparaît toujours en tension, en torsion, traversé par une énergie qui le met en mouvement.
          </p>
          <p>
            Les deux interprètes évoluent dans une relation d’écoute et d’équilibre, tour à tour appui, résistance ou prolongement l’un de l’autre.
          </p>
          <p>
            Ils incarnent à la fois l’œuvre et l’artiste, le corps façonné et la force qui le met en forme.
          </p>
        </SectionIntro>

        <FadeImage src={supercorpsImages[0]} alt="Supercorps" className="heroImage" />

        <div className="gridTwo">
          <img src={supercorpsImages[1]} alt="Supercorps" loading="lazy" />
          <img src={supercorpsImages[2]} alt="Supercorps" loading="lazy" />
        </div>

        <div className="singleWide">
          <img src={supercorpsImages[3]} alt="Supercorps" loading="lazy" />
        </div>

        <Credits>
          <Credit label="Chorégraphie">Yvon Demol</Credit>
          <Credit label="Interprétation">Hohyun Kang & Yvon Demol</Credit>
          <Credit label="Musique">Michel Dietlin (création) & Ludwig van Beethoven</Credit>
          <Credit label="Costumes & masques">
            imaginés par Yvon Demol
            <br />
            réalisés par Elsa Depardieu, Bernard Connan, Aziliz Denis, Atelier bas et hauts
          </Credit>
          <Credit label="Maquillage">Aude Durocher & Joa Nauche</Credit>
          <Credit label="Photographies">Maria-Helena Buckley</Credit>
          <Credit label="Création">
            Musée du Louvre
            <br />
            Exposition <span className="italic">Michel-Ange / Rodin, corps vivants</span>
            <br />
            Avril 2026
          </Credit>
        </Credits>
      </section>

      <section className="pieceSection">
        <SectionIntro title="Ultra">
          <p>L’une regarde, l’autre inspire. Le geste naît de l’admiration, glisse vers l’imitation, puis vers l’envie.</p>
          <p>À force de copier, les mouvements se confondent, les identités vacillent.</p>
          <p>Le duo explore cette frontière fragile entre le désir d’être soi et celui de devenir l’autre.</p>
        </SectionIntro>

        <VideoBlock src="https://player.vimeo.com/video/1192419719" title="Ultra" />

        <div className="gridTwo">
          <img src={ultraImages[0]} alt="Ultra" loading="lazy" />
          <img src={ultraImages[1]} alt="Ultra" loading="lazy" />
        </div>

        <div className="gridAsymmetric">
          <img src={ultraImages[2]} alt="Ultra" loading="lazy" />
          <img src={ultraImages[3]} alt="Ultra" loading="lazy" />
        </div>

        <FadeImage src={ultraImages[4]} alt="Ultra" className="heroImage" />

        <Credits>
          <Credit label="Chorégraphie & costumes">Yvon Demol</Credit>
          <Credit label="Interprétation">Apolline Anquetil & Naïs Duboscq</Credit>
          <Credit label="Musique">
            Peter Gregson — <span className="italic">Drone</span> & <span className="italic">Cantus</span>
            <br />
            Peter Broderick — <span className="italic">Eyes Closed and Traveling</span>
          </Credit>
          <Credit label="Lumières">Tom Klefstad</Credit>
          <Credit label="Maquillage">Rosa Conforti & Aude Durocher</Credit>
          <Credit label="Photographies">Benoite Fanton</Credit>
          <Credit label="Création">Opéra de Paris<br />Février 2026</Credit>
        </Credits>
      </section>

      <section className="pieceSection">
        <SectionIntro title="Main Character">
          <p><span className="italic">Main character</span> explore la notion de protagoniste dans nos vies quotidiennes et interroge ce besoin profondément humain d’être vu, reconnu, choisi.</p>
          <p>Sur scène, les corps racontent ce moment où l’on décide — ou non — de se placer au centre de sa propre histoire.</p>
          <p>Portée par des élans individuels et des dynamiques de groupe, <span className="italic">Main character</span> traverse l’espace où se négocie la place de chacun, dans un monde saturé de récits concurrents.</p>
          <p>La danse y devient un langage pour dire le doute, le besoin d’exister, et le désir de prendre sa place.</p>
        </SectionIntro>

        <VideoBlock src="https://player.vimeo.com/video/1192418223" title="Main Character" />

        <FadeImage src={mainCharacterImages[0]} alt="Main Character" className="heroImage" />

        <div className="gridTwo">
          <img src={mainCharacterImages[1]} alt="Main Character" loading="lazy" />
          <img src={mainCharacterImages[2]} alt="Main Character" loading="lazy" />
        </div>

        <div className="gridThree">
          <img src={mainCharacterImages[3]} alt="Main Character" loading="lazy" />
          <img src={mainCharacterImages[4]} alt="Main Character" loading="lazy" />
          <img src={mainCharacterImages[5]} alt="Main Character" loading="lazy" />
        </div>

        <div className="gridTwo bottomGallery">
          <img src={mainCharacterImages[6]} alt="Main Character" loading="lazy" />
          <img src={mainCharacterImages[7]} alt="Main Character" loading="lazy" />
        </div>

        <Credits>
          <Credit label="Chorégraphie & lumières">Yvon Demol</Credit>
          <Credit label="Musique">Sergueï Rachmaninov</Credit>
          <Credit label="Costumes">Charlie Le Mindu</Credit>
          <Credit label="Photographies">Patricia Portetelle</Credit>
          <Credit label="Interprétation">Europa Danse Company</Credit>
          <Credit label="Création">Bruxelles<br />Juin 2025</Credit>
        </Credits>
      </section>

      <section className="pieceSection">
        <SectionIntro title="Minuit">
          <p>À minuit, lors d’un mauvais rêve, quelqu’un est visité par des fantômes.</p>
          <p>Des élans de sensualité, de violence, une suite d’images sans chronologie, composent un monde un peu étrange.</p>
          <p>Dans la lumière grise des rêves, on devient quelque chose que l’on n’est pas dans la vie.</p>
        </SectionIntro>

        <FadeImage src={minuitImages[0]} alt="Minuit" className="heroImage" />

        <div className="gridTwo">
          <img src={minuitImages[1]} alt="Minuit" loading="lazy" />
          <img src={minuitImages[2]} alt="Minuit" loading="lazy" />
        </div>

        <div className="gridThree">
          <img src={minuitImages[3]} alt="Minuit" loading="lazy" />
          <img src={minuitImages[4]} alt="Minuit" loading="lazy" />
          <img src={minuitImages[5]} alt="Minuit" loading="lazy" />
        </div>

        <div className="gridTwo bottomGallery">
          <img src={minuitImages[6]} alt="Minuit" loading="lazy" />
          <img src={minuitImages[7]} alt="Minuit" loading="lazy" />
        </div>

        <Credits>
          <Credit label="Chorégraphie">Yvon Demol</Credit>
          <Credit label="Musique">
            Evgueni Galperine
            <br />
            <span className="italic">This Town Will Burn Before Dawn</span>, <span className="italic">The Wheel Has Come Full Circle</span>, <span className="italic">La Lettre d’un disparu</span>, <span className="italic">Cold Front</span>
          </Credit>
          <Credit label="Costumes">Charlie Le Mindu</Credit>
          <Credit label="Lumières">Tom Klefstad</Credit>
          <Credit label="Interprétation">Apolline Anquetil, Milo Avêque, Keita Bellali, Nathan Bisson, Naïs Duboscq, Seojun Yoon</Credit>
          <Credit label="Photographies">Julien Benhamou</Credit>
          <Credit label="Création">Opéra de Paris<br />Mai 2025</Credit>
        </Credits>
      </section>

      <section id="about" className="aboutSection">
        <div className="aboutGrid">
          <div>
            <p className="eyebrow">À propos</p>
            <h2 className="aboutTitle">
              Yvon Demol
              <br />
              <span>Chorégraphe</span>
            </h2>

            <div className="bioText">
              <p>
                Yvon Demol commence la danse à l’âge de 8 ans au Conservatoire de Vitry-sur-Seine.
                <br />
                En 1998 il intègre l’Ecole de danse de l’Opéra de Paris.
                <br />
                Engagé en 2007 dans le Ballet de l’Opéra de Paris, il est promu Coryphée l’année suivante.
              </p>

              <p>
                Depuis il se produit dans de nombreux ballets du répertoire classique et contemporain et danse des rôles de soliste notamment dans les ballets de Jiri Kylian (<span className="italic">Kaguyahime, Bella Figura, Tar and feathers, Petite mort, Sechs tänze</span>), William Forsythe (<span className="italic">Artifact suite, Pas./Parts, Herman Schmerman</span>), Ohad Naharin (<span className="italic">Decadance</span>), Johan Inger (<span className="italic">Impasse</span>), Mthuthuzeli November (<span className="italic">Rhapsodies</span>) ou Maurice Béjart (<span className="italic">L’Oiseau de feu</span>).
              </p>

              <p>
                Il participe également à de nombreuses créations: <span className="italic">The Seasons’ canon</span> et <span className="italic">Body and soul</span> de Crystal Pite, <span className="italic">The Male dancer</span> d’Ivan Perez, <span className="italic">Horizon</span> de Xi Xin, <span className="italic">Faunes</span> et <span className="italic">Vers la mort</span> de Sharon Eyal, <span className="italic">Cri de coeur</span> d’Alan Lucien Oyen, <span className="italic">Exposure</span> de Sidi Larbi Cherkaoui, <span className="italic">Play</span> d’Alexander Ekman, <span className="italic">Clear,loud,bright,forward</span> de Benjamin Millepied, <span className="italic">L’Anatomie de la sensation</span> de Wayne McGregor, <span className="italic">Les Noces</span> de Pontus Lidberg, <span className="italic">Drift wood</span> d’Imre et Marne Van Opstal, <span className="italic">Etude</span> de Marcos Morau ou encore <span className="italic">Pit</span> de Bobbi Jene Smith & Or Schraiber.
              </p>

              <p>
                Parallèlement à sa carrière de danseur au sein du Ballet de l’Opéra de Paris, Yvon Demol est également chorégraphe et co-directeur, depuis 2017, de la compagnie Incidence Chorégraphique.
              </p>

              <p>
                <span className="muted">Créations :</span>
                <br />
                <span className="italic">1827, Blue Sunday, Camille, Dauphins, Merrymaking, Bien que, Boléro, Folamour, Run, Minuit, Main character, Supercorps, Ultra.</span>
              </p>
            </div>
          </div>

          <div className="portraitWrap">
            <img src="/images/portrait/yvon-demol.jpeg" alt="Yvon Demol" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="contact" className="contactSection">
        <h2 className="eyebrow">Contact</h2>
        <div className="contactLinks">
          <a href="mailto:yvondemol@gmail.com">yvondemol@gmail.com</a>
          <a href="https://instagram.com/yvondemol" target="_blank" rel="noopener noreferrer">Instagram — @yvondemol</a>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Yvon Demol</footer>
    </main>
  );
}
