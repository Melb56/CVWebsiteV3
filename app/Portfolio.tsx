'use client'

import React from 'react'
import './styles/portfolio.css';
import { useState } from 'react';
import Overlay from './components/Overlay';
import Image from 'next/image';

const Portfolio: React.FC = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="portfolio">
        <h1 data-aos="fade-down" data-aos-duration="1500">Mes projets</h1> 

        <div className='card-container' data-aos="fade-right" data-aos-duration="1500">

            <div className='flotti' data-category="front">
                <div className="card" id="Osteo" >
                    <div className="intro">
                        <h4>Otéopathe Charlotte Tanguy</h4>
                        <p>Refonte du site vitrine pour une ostéopathe à Locmiquélic</p>
                        <div className='tags'>
                            <li>Wordpress</li>
                            <li>CSS</li> 
                        </div>
                        <div className='btnPlus'>
                            <button className="see-more-btn" onClick={() => setSelectedProject("osteo")}>
                                +
                            </button>
                        </div>

                    </div>
                </div>
                <div>
                    {selectedProject === "osteo" && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <h2>Ostéopathe Charlotte Tanguy</h2>
                            <div className='portfolio-img'>
                                <Image
                                    src="/img/Portfolio/osteoCT.png"
                                    alt="Photo de profil"
                                    width={500}
                                    height={100}
                                />
                            </div>
                            <div className='tags'>
                                <li>Wordpress</li>
                                <li>CSS</li> 
                            </div>
                            <ul className='tasks'>
                                <li>Analyse des besoins</li>
                                <li>Elaboration d&apos;une maquette responsive</li>
                                <li>Personnalisation complète d&apos;un thème Wordpress</li>
                                <li>Développement du front</li>
                                <li>Gestion du contenu</li>
                                <li>Hébergement</li>
                                <li>Mise en ligne</li>
                            </ul>
                            <div className="btn-projet">
                                <button>
                                    <a href="https://osteopathe-tanguy-locmiquelic.fr/" target="_blank" rel="noreferrer">
                                        Voir le site
                                    </a>
                                </button>
                            </div>
                        
                        </Overlay>
                    )}     
                </div>
            </div>
            
            <div className='daily' data-category="fullstack">
                <div className="card" id="dailybooks">
                    <div className="intro">
                        <h4>Daily Books</h4>
                        <p>Répértoire de livre EN COURS DE DEVELOPPEMENT</p>
                        <div className='tags'>
                            <li>Next.js</li>
                            <li>Prisma</li>
                            <li>SASS</li> 
                        </div>
                        <div className='btnPlus'>
                            <button className="see-more-btn" onClick={() => setSelectedProject("daily")}>
                                +
                            </button>
                        </div>

                    </div>
                </div>
                <div>
                    {selectedProject === "daily" && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <h2>Daily Books</h2>
                            <div className='portfolio-img'>
                                <Image
                                    src="/img/Portfolio/LogoDB.png"
                                    alt="Photo de profil"
                                    width={500}
                                    height={100}
                                />
                            </div>
                            <div className='tags'>
                                <li>Next.js</li>
                                <li>Prisma</li>
                                <li>SASS</li>
                            </div>
                            <ul className='tasks'>
                                <li>Elaboration d&apos;une maquette responsive</li>
                                <li>Developpement d&apos;une BD avec Prisma (MySQL)</li>
                                <li>Installation d&apos;une authentification avec Nextauth.js</li>
                                <li>Développement du front.</li>
                                <li>Mise en ligne sur Vercel.</li>
                            </ul>
                            <div className="btn-projet">
                                <button>
                                    <a href="https://daily-books.vercel.app/" target="_blank" rel="noreferrer">
                                        Voir le site
                                    </a>
                                </button>
                            </div>
                        </Overlay>
                    )}     
                </div>
            </div>
            
            <div className='flotti' data-category="front">
                <div className="card" id="Flotti" >
                    <div className="intro">
                        <h4>Flottibulle</h4>
                        <p>Site vitrine pour une école de natation en Bretagne</p>
                        <div className='tags'>
                            <li>Wordpress</li>
                            <li>CSS</li> 
                        </div>
                        <div className='btnPlus'>
                            <button className="see-more-btn" onClick={() => setSelectedProject("flotti")}>
                                +
                            </button>
                        </div>

                    </div>
                </div>
                <div>
                    {selectedProject === "flotti" && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <h2>Flottibulle</h2>
                            <div className='portfolio-img'>
                                <Image
                                    src="/img/Portfolio/Flotti.png"
                                    alt="Photo de profil"
                                    width={500}
                                    height={100}
                                />
                            </div>
                            <div className='tags'>
                                <li>Wordpress</li>
                                <li>CSS</li> 
                            </div>
                            <ul className='tasks'>
                                <li>Analyse des besoins</li>
                                <li>Elaboration d&apos;une maquette responsive</li>
                                <li>Personnalisation complète d&apos;un thème Wordpress</li>
                                <li>Développement du front</li>
                                <li>Mise en ligne</li>
                                <li>Formation du client à l’interface admin</li>
                            </ul>
                            <div className="btn-projet">
                                <button>
                                    <a href="https://flottibulle.fr/" target="_blank" rel="noreferrer">
                                        Voir le site
                                    </a>
                                </button>
                            </div>
                        
                        </Overlay>
                    )}     
                </div>
            </div>

            <div className='MB3' data-category="front">
                <div className="card" id="MB3">
                    <div className="intro">
                        <h4>Mon CV en ligne - version actuelle</h4>
                        <div className='tags'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Next.js</li>
                    </div>
                        <div className='btnPlus'>
                            <button className="see-more-btn" onClick={() => setSelectedProject("MB3")}>
                                +
                            </button>
                        </div>

                    </div>
                </div>
                <div>
                    {selectedProject === "MB3" && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <h2>Mon CV en ligne</h2>
                            <div className='portfolio-img'>
                                <Image
                                    src="/img/Portfolio/LogoMB3.png"
                                    alt="CV1"
                                    width={500}
                                    height={50}
                                />
                            </div>
                            <div className='tags'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Next.js</li>
                            </div>
                            <ul className='tasks'>
                                <li>Elaboration d&apos;une maquette responsive.</li>
                                <li>Développement du front</li>
                                <li>Mise en ligne</li>
                            </ul>
                            <div className="btn-projet">
                                <button>
                                    <a href="https://melanie-bruzac.fr/" target="_blank" rel="noreferrer">
                                        Voir le site
                                    </a>
                                </button>
                            </div>
                        </Overlay>
                    )}     
                </div>
            </div>

            <div className='MB' data-category="front">
                <div className="card" id="MB">
                    <div className="intro">
                        <h4>Mon CV en ligne - version 2</h4>
                        <div className='tags'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                    </div>
                    <div className='btnPlus'>
                        <button className="see-more-btn" onClick={() => setSelectedProject("MB")}>
                            +
                        </button>
                    </div>

                        </div>
                </div>
                <div>
                    {selectedProject === "MB" && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <h2>Mon CV en ligne</h2>
                            <div className='portfolio-img'>
                                <Image
                                    src="/img/Portfolio/MB2.png"
                                    alt="CV2"
                                    width={500}
                                    height={100}
                                />
                            </div>
                            <div className='tags'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            </div>
                            <ul className='tasks'>
                                <li>Elaboration d&apos;une maquette responsive.</li>
                                <li>Développement du front</li>
                                <li>Mise en ligne</li>
                            </ul>
                            <div className="btn-projet">
                                <button>
                                    <a href="https://cv-website-topaz.vercel.app/" target="_blank" rel="noreferrer">
                                        Voir le site
                                    </a>
                                </button>
                            </div>
                        </Overlay>
                    )}     
                </div>
            </div>
            
            <div className='MB1' data-category="front">
                <div className="card" id="MB1">
                    <div className="intro">
                        <h4>Mon CV en ligne - version 1</h4>
                        <div className='tags'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                    </div>
                        <div className='btnPlus'>
                            <button className="see-more-btn" onClick={() => setSelectedProject("MB1")}>
                                +
                            </button>
                        </div>

                        </div>
                </div>
                <div>
                    {selectedProject === "MB1" && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <h2>Mon CV en ligne</h2>
                            <div className='portfolio-img'>
                                <Image
                                    src="/img/Portfolio/MB1.png"
                                    alt="CV1"
                                    width={500}
                                    height={100}
                                />
                            </div>
                            <div className='tags'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            </div>
                            <ul className='tasks'>
                                <li>Elaboration d&apos;une maquette responsive.</li>
                                <li>Développement du front</li>
                                <li>Mise en ligne</li>
                            </ul>
                            <div className="btn-projet">
                                <button>
                                    <a href="https://cv-web-site-v1.vercel.app/" target="_blank" rel="noreferrer">
                                        Voir le site
                                    </a>
                                </button>
                            </div>
                        </Overlay>
                    )}     
                </div>
            </div>


            <div className='QA' data-category="front">
                <div className="card" id="QA">
                    <div className="intro">
                        <h4>Quai Antique</h4>
                        <p>Site vitrine et de réservation pour un restaurant Fictif.</p>
                        <div className='tags'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React.js</li>
                        </div>
                        <div className='btnPlus'>
                            <button className="see-more-btn" onClick={() => setSelectedProject("QA")}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {selectedProject === "QA" && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <h2>Quai Antique</h2>
                            <div className='portfolio-img'>
                                <Image
                                    src="/img/Portfolio/QA.png"
                                    alt="Quai Antique"
                                    width={500}
                                    height={100}
                                />
                            </div>
                            <div className='tags'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React.js</li>
                            </div>
                            <ul className='tasks'>
                                <li>Elaboration d&apos;une maquette responsive.</li>
                                <li>Développement du front</li>
                                <li>Mise en place d’une page de réservation avec la possibilité de choisir une date sur un calendrier.</li>
                            </ul>
                            <div className="btn-projet">
                                <button>
                                    <a href="https://quai-antique.vercel.app/" target="_blank" rel="noreferrer">
                                        Voir le site
                                    </a>
                                </button>
                            </div>
                        </Overlay>
                    )}     
                </div>
            </div>

            {/* <div className='GVP' data-category="fullstack">
                <div className="card" id="GVP">
                    <div className="intro">
                        <h4>Garage V. Parrot</h4>
                        <p>Projet de fin de formation qui ma permis de voir tous les étapes d'un développement fullstack.</p>
                        <div className='tags'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Symfony</li>
                        </div>
                        <button className="see-more-btn" onClick={() => setSelectedProject("GVP")}>
                            +
                        </button>
                    </div>
                </div>
                <div>
                    {selectedProject === "GVP" && (
                        <Overlay onClose={() => setSelectedProject(null)} disableBodyScroll>
                            <h2>Garage V. Parrot</h2>
                            <div className='portfolio-img'>
                                <Image
                                    src=""
                                    alt="Quai Antique"
                                    width={500}
                                    height={100}
                                />
                            </div>
                            <div className='tags'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>Symfony</li>
                            </div>
                            <ul className='tasks'>
                                <li>Elaboration d'une maquette responsive selon un cahier de charge.</li>
                                <li>Développement du front.</li>
                                <li>Développement du back avec MySQL</li>
                                <li>Création d'une interface administrative pour le compte admin et les comptes des employés</li>
                                <li>Tests</li>
                            </ul>
                            <div className="btn-projet">
                                <button>
                                    <a href="https://github.com/Melb56/Garage_V_Parrot" target="_blank" rel="noreferrer">
                                        Voir le site
                                    </a>
                                </button>
                            </div>
                        </Overlay>
                    )}     
                </div>
            </div> */}


        </div>


    



    
        


                {/* <div className="filter-container">
            <label>
                <input type="checkbox" value="front" className="filter-checkbox" checked />Front
                <span className="custom-checkbox"></span>
            </label>
            <label>
                <input type="checkbox" value="back" className="filter-checkbox" checked />Back
                <span className="custom-checkbox"></span>
            </label>
            <label>
                <input type="checkbox" value="fullstack" className="filter-checkbox" checked />Fullstack
                <span className="custom-checkbox"></span>
            </label>
        </div>  */}

    </section>
  );
}

export default Portfolio
