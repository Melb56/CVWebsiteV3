'use client'

import Image from 'next/image';
import Link from 'next/link';
import './styles/about.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="card-about" data-aos ="zoom-in-right" data-aos-duration="1500">
        <div className="card-img">
          <div className="about-img">
            <Image
              src="/img/About/About.jpg"
              alt="Photo de profil"
              width={300}
              height={300}
            />
          </div>
          <div className="about-text">
            <p>Mélanie Bruzac</p>
            <p>Développeuse front-end junior</p>
            <p>Bretagne</p>
            <p>Permis B</p>
            <p>Hobbies : lecture, cuisiner, voyager</p>
          </div>
        </div>
      </div>

      <div className="container-about">
        <h1 className='titre'  data-aos ="fade-left" data-aos-duration="1000">À propos</h1>
        <p  data-aos ="fade-left" >
Passionnée par le web et les interfaces interactives, j’aime donner vie à des idées grâce au code. Ce qui m’anime, c’est la recherche du bon équilibre entre design, fluidité et performance pour créer des expériences utilisateur à la fois belles et intuitives. <br/>
Après une formation complète en développement web fullstack, j’ai choisi de me spécialiser dans le front-end, où je peux exprimer ma créativité tout en restant proche de la technique. Je travaille avec React, Next.js, HTML, CSS et JavaScript, tout en continuant à explorer de nouvelles approches et technologies. <br/>
Curieuse, autonome et toujours prête à apprendre, j’aime les environnements dynamiques où les idées circulent librement. <br/>
        </p>
        <div className="btnAbout">
          <a
            className="btn"
            href="/CV_MelanieBruzac.pdf"
            download="CV_MelanieBruzac.pdf"
            data-aos ="fade-left" 
          >
            Télécharger mon CV
          </a>
          <Link className="btn" href="#contact"  data-aos ="fade-left" >
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
