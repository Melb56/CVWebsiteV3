'use client'

import Image from 'next/image'
import React from 'react'
import './styles/experience.css'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="fade-in">
      <div className="container-exp">
        <h1 data-aos="fade-down" data-aos-duration="1500">Mon Parcours</h1>

      {/* Expériences professionnelles */}
        <div className="experience" data-aos="fade-right" data-aos-duration="1500">

          <div className="title-exp">
            <div>
              <Image
                src="/img/Experience/suitcase.svg"
                alt="Expériences professionnelles"
                width={32}
                height={32}
              />
            </div>
            <div>
              <h2>Expériences professionnelles</h2>              
            </div>

          </div>

          <div className="container-pro transition duration-500 transform hover:scale-120 hover:shadow-xl">
            <h5>Développeuse Web Freelance</h5>
            <p className="date">Mai 2025 à maintenant</p>
            <ul>
              <li>Conception et développement de sites web modernes et responsives.</li>
              <li>Intégration de maquettes UI/UX.</li>
              <li>Optimisation des performances et SEO.</li>
              <li>Maintenance et gestion de contenu.</li>
              <li>Déploiement sur OVH ou Vercel.</li>
            </ul>
          </div>

          <div className="container-pro transition duration-500 transform hover:scale-120 hover:shadow-xl">
            <h5>Agent polyvalent</h5>
            <p>Association Avenir Solidarité Emploi, Kervignac</p>
            <p className="date">Novembre 2022 à août 2024 et étés 2021, 2020, 2019 et 2018</p>
            <ul>
              <li>Assurer l’entretien et le nettoyage chez des particuliers, en entreprises, cabinets et écoles.</li>
              <li>Accompagner et encadrer les élèves de Moyenne et Grande Section en tant qu’ASEM.</li>
              <li>Surveiller les enfants pendant le temps du midi en tant qu’agent des écoles.</li>
              <li>Distribuer des prospectus pour des campagnes de communication.</li>
            </ul>
          </div>

          <div className="container-pro transition duration-500 transform hover:scale-120 hover:shadow-xl">
            <h5>Ripeur</h5>
            <p>Lorient Agglomération, Lanester</p>
            <p className="date">Été 2019</p>
            <ul>
              <li>Assurer la collecte des poubelles</li>
            </ul>
          </div>

          <div className="container-pro transition duration-500 transform hover:scale-120 hover:shadow-xl">
            <h5>Agent de conditionnement </h5>
            <p>Cité Marine, Kervignac</p>
            <p className="date">Été 2017</p>
            <ul>
              <li>Conditionner les aliments en barquettes et en cartons.</li>
            </ul>
          </div>

          <div className="container-pro transition duration-500 transform hover:scale-120 hover:shadow-xl">
            <h5>Adjoint administratif </h5>
            <p>Camping municipal, Port-Louis</p>
            <p className="date">Été 2015</p>
            <ul>
              <li>Accueillir les clients, gérer leur installation et veiller à la qualité de leur séjour.</li>
              <li>Gérer la facturation des séjours, les encaissements et le suivi administratif.</li>
              <li>Accueillir et installer les clients.</li>
              <li>Assurer la facturation des séjours.</li>
            </ul>
          </div>
        </div>

      {/* Scolarité */}
        <div className="experience" data-aos="fade-left" data-aos-duration="1500">
          <div className="title-exp">
            <div>
              <Image
              src="/img/Experience/graduation-cap.svg"
              alt="Scolarité"
              width={32}
              height={32}
              />
            </div>
            <div>
              <h2>Scolarité</h2>
            </div>
          </div>

          <div className="container-pro transition duration-500 transform hover:scale-120 hover:shadow-xl">
            <h5>STUDI</h5>
            <p className="date">Septembre 2022 à Décembre 2023</p>
            <p className="diploma">Graduate Développeur web full stack (obtenu)</p>
            <p>
              Enseignement des compétences pour créer et maintenir un site web,
              Front-end et Back-end.
            </p>
          </div>

          <div className="container-pro transition duration-500 transform hover:scale-120 hover:shadow-xl">
            <h5>Université de Kagoshima, JAPON</h5>
            <p className="date">Avril à juillet 2022</p>
            <p>Séjour universitaire validant mon 2ème semestre à l’EMBA Business School.</p>
            <p>Cours de japonais et d’anglais.</p>
          </div>

          <div className="container-pro transition duration-500 transform hover:scale-120 hover:shadow-xl">
            <h5>EMBA Business School, Quimper</h5>
            <p className="date">Septembre 2019 à juillet 2022</p>
            <p className="diploma">
              Bachelor in Europe-Asia International Business & diplôme chargé d’affaire
              Europe-Asie (obtenu)
            </p>
            <p>
              Enseignement des compétences techniques, culturelles et linguistiques
              permettant de construire et de développer des relations d&apos;affaires entre
              l&apos;Europe et l&apos;Asie, plus précisément sur les marchés japonais, coréen et chinois.
              <br />
              Cours de : Japonais, Cultures asiatiques, Marketing digital & Marketing,
              Import-Export, Comptabilité, Stratégie d&apos;entreprise, Négociation, Droit des contrats
              internationaux, Achat, Développement d&apos;un Business Plan.
              <br />
              Organisation de la Journée Japon 2020, équipe sponsoring.
            </p>
          </div>

          <div className="container-pro transition duration-500 transform hover:scale-120 hover:shadow-xl">
            <h5>Université de Nantes, Nantes</h5>
            <p className="date">Septembre 2018 à juin 2019</p>
            <p className="diploma">Licence 2 LEA Anglais-Allemand (validé)</p>
            <p>
              Licence pluridisciplinaire associant des cours de langues et cultures étrangères
              à des compétences techniques fondamentaux dans le commerce international et les affaires internationales.
            </p>
          </div>

          <div className="container-pro transition duration-500 transform hover:scale-120 hover:shadow-xl">
            <h5>EF écoles de langue, LONDRES & SAN FRANCISCO</h5>
            <p className="date">Septembre 2017 à mai 2018</p>
            <p className="diploma">Multiple Center Academic Year Diploma (obtenu)</p>
            <p>Cours intensif d&apos;anglais</p>
          </div>

          <div className="container-pro transition duration-500 transform hover:scale-120 hover:shadow-xl">
            <h5>Université de Nantes, Nantes</h5>
            <p className="date">Septembre 2015 à juin 2017</p>
            <p className="diploma">Licence 1 & 2 LEA Anglais-Japonais</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
