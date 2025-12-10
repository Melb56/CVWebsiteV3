'use client'

import React from 'react'
import './styles/portfolio.css';
import { useState } from 'react';
import Overlay from './components/Overlay';
import Image from 'next/image';
import { useEffect, useRef } from "react";

const Portfolio: React.FC = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [selectedProject, setSelectedProject] = useState<string | null>(null);
     const projectRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    if (selectedProject && projectRef.current) {
        projectRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center", // centre verticalement
        inline: "center", // centre horizontalement si horizontal scroll
        });
    }
    }, [selectedProject]);

  return (
    <section id="portfolio">
        <h1 data-aos="fade-down" data-aos-duration="1500">Mes projets</h1> 

        <div className='card-container' data-aos="fade-right" data-aos-duration="1500">

            <div className='osteo'>
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
                            <div className="projet-card" ref={projectRef}>
                                <h2>Ostéopathe Charlotte Tanguy</h2>
                                <div className='portfolio-img'>
                                    <Image
                                        src="/img/Portfolio/OsteoCT.png"
                                        alt="Photo de profil"
                                        width={500}
                                        height={100}
                                    />
                                </div>
                                <div className='tags'>
                                    <p>Refonte complète du site vitrine d’une ostéopathe basée à Locmiquélic, avec pour objectif d’améliorer la visibilité en ligne et l’expérience utilisateur.</p>
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
                            </div>
                        </Overlay>
                    )}     
                </div>
            </div>
            
            <div className='daily'>
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
                            <div className="projet-card" ref={projectRef}>
                                <h2>Daily Books</h2>
                                <div className='portfolio-img'>
                                    <Image
                                        src="/img/Portfolio/LogoDB.png"
                                        alt="Photo de profil"
                                        width={200}
                                        height={100}
                                    />
                                </div>
                                <div className='tags'>
                                    <p>Daily Books est une application web développée avec Next.js et Prisma, permettant aux utilisateurs de créer un compte pour gérer leur propre répertoire de livres. L’application offre la possibilité d’ajouter, modifier et supprimer des livres, avec un système de filtrage par thème. Des fonctionnalités avancées sont également en cours de développement, comme les listes de souhaits (à lire, favoris, à relire, etc.).</p>
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
                            </div>  
                        </Overlay>
                    )}     
                </div>
            </div>
            
            <div className='flotti'>
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
                            <div className="projet-card" ref={projectRef}>
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
                                    <p>Création du site vitrine WordPress pour Flottibulle, une école de natation située en Bretagne, avec pour objectif de valoriser l’activité, faciliter la prise d’informations et renforcer la présence en ligne.</p>
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
                            </div>

                        
                        </Overlay>
                    )}     
                </div>
            </div>

            <div className='MB3'>
                <div className="card" id="MB3">
                    <div className="intro">
                        <h4>Mon CV en ligne - version actuelle</h4>
                        <div className='tags'>
                            <li>Next.js</li>
                            <li>Tailwind</li>
                            <li>CSS</li>
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
                            <div className="projet-card" ref={projectRef}>
                                <h2>Mon CV en ligne</h2>
                                <div className='portfolio-img'>
                                    <Image
                                        src="/img/Portfolio/CvVersion2.png"
                                        alt="CV1"
                                        width={500}
                                        height={50}
                                    />
                                </div>
                                <div className='tags'>
                                    <p>Refonte complète de mon CV en ligne, développée en Next.js, avec pour objectif de proposer une présentation claire, moderne et responsive de mon profil, de mes compétences et de mes projets, tout en optimisant l’expérience utilisateur.</p>
                                    <li>Next.js</li>
                                    <li>Tailwind</li>
                                    <li>CSS</li>
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
                            </div>

                        </Overlay>
                    )}     
                </div>
            </div>

            <div className='MB'>
                <div className="card" id="MB">
                    <div className="intro">
                        <h4>Mon CV en ligne - version 2</h4>
                        <div className='tags'>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
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
                            <div className="projet-card" ref={projectRef}>
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
                                    <p>Création de la première version de mon CV en ligne en HTML, CSS et JavaScript, avec pour objectifs de gagner en visibilité, de présenter mes projets et de me démarquer en tant que développeuse front-end.</p>
                                    <li>JavaScript</li>
                                    <li>CSS</li>
                                    <li>Bootstrap</li>
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
                            </div>

                        </Overlay>
                    )}     
                </div>
            </div>

            <div className='QA'>
                <div className="card" id="QA">
                    <div className="intro">
                        <h4>Quai Antique</h4>
                        <p>Site vitrine et de réservation pour un restaurant Fictif.</p>
                        <div className='tags'>
                            <li>React.js</li>
                            <li>CSS</li>
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
                            <div className="projet-card" ref={projectRef}>
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
                                    <p>Création d’un site vitrine avec système de réservation pour un restaurant fictif, développé en React.js, avec pour objectif de proposer une expérience utilisateur moderne et intuitive. </p>
                                    <li>React.js</li>
                                    <li>CSS</li>
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
                            </div>

                        </Overlay>
                    )}     
                </div>
            </div>

        </div>

    </section>
  );
}

export default Portfolio
