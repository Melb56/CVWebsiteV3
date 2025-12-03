'use client'

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import './styles/hero.css';
import Linkedin from './components/Linkedin';

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      strings: [
        'Créative',
        'Motivée',
        'Bienvenue !',
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: false,
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div id="hero-area" >
      <div className="hero-content" data-aos="fade-right" data-aos-duration="1500">
        <p>Bonjour, je suis</p>
        <p className="title-hero">Mélanie Bruzac</p>
        <p className="job">Développeuse front-end junior</p>
        <div id="typed-output" ref={typedRef}></div>

        <Linkedin/>

        <a
          className="btn"
          href="/CV_DevFront_MelanieBruzac.pdf"
          download="CV-DevWeb_MelanieBruzac.pdf"
        >
          Télécharger mon CV
        </a>
      </div>

      <div className="img-hero" data-aos="zoom-in-left" data-aos-duration="1500">
        <Image
            src="/img/hero-img.svg"
            alt="Icône hero"
            width={1000}
            height={1000}
        />
      </div>
    </div>
  )
}

export default Hero
