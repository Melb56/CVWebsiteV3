'use client'

import Image from 'next/image';
import './styles/skills.css';

const Skills: React.FC = () => {


  return (
    <section id="skills" className="fade-in">
      <h1 data-aos="fade-down" data-aos-duration="1500">Mes compétences</h1>

      <div className='skills'>
          {/* Front-end */}
        <div className='container-skills' data-aos="fade-right" data-aos-duration="1500">
          <h2>Front-end</h2>
          <p>Création et intégration de sites web responsive, moderne et sécurisé.</p>
          <div className='container-img fbop'>
            <div className='image'>
              <Image
                src="/img/Skills/html.svg"
                alt="HTML"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>HTML</p>
              </div>
            </div>
            <div className='image'>
            <Image
              src="/img/Skills/css.svg"
              alt="CSS"
              width={90}
              height={90}/>
              <div className='overlay'>
                <p>CSS</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/bootstrap.svg"
                alt="Boostratp"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>Bootstrap</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/scss.svg"
                alt="SCSS"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>SCSS</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/tailwind.svg"
                alt="Tailwind"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>Tailwind</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/javascript.svg"
                alt="JS"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>Javascript</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/jquery.svg"
                alt="JS"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>jQuery</p>
              </div>
            </div>
            {/* <div className='image'>
              <Image
                src="/img/Skills/typescript.svg"
                alt="TS"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>Typecript</p>
              </div>
            </div> */}
            <div className='image'>
              <Image
                src="/img/Skills/react.svg"
                alt="React"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>React.js</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/next.svg"
                alt="Next"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>Next.js</p>
              </div>

            </div>
          </div>
        </div>

          {/* Back-end */}
        <div className='container-skills' data-aos="fade-left" data-aos-duration="1500">
          <h2>Back-end</h2>
          <p>Création et gestion de données (CRUD).</p>
          <div className='container-img back'>
            <div className='image'>
              <Image
                src="/img/Skills/php.svg"
                alt="PHP"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>PHP</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/symfony.svg"
                alt="Symfony"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>Symfony</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/mysql.svg"
                alt="MySQL"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>MySQL</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/nodejs.svg"
                alt="Node"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>Node.js</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/xampp.svg"
                alt="Xampp"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>Xampp</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/prisma.svg"
                alt="Prisma"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>Prisma</p>
              </div>
            </div>
          </div>
        </div>

          {/* Outils & Platformes */}
        <div className='container-skills' data-aos="fade-right" data-aos-duration="1500">
          <h2>Outils & Platformes</h2>
          <p>Versionnage des projet, création de maquettes et de prototypes, responsives et centrées utilisateur, création et édition de thèmes Wordpress. </p>
          <div className='container-img fbop'>
            <div className='image'>
              <Image
                src="/img/Skills/figma.svg"
                alt="Figma"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>Figma</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/canva.svg"
                alt="Canva"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>Canva</p>
              </div>

            </div>
            <div className='image'>
              <Image
                src="/img/Skills/git.svg"
                alt="Git"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>Git</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/github.svg"
                alt="GH"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>GitHub</p>
              </div>
            </div>
            <div className='image'>
              <Image
                src="/img/Skills/wordpress.svg"
                alt="WP"
                width={90}
                height={90}/>
              <div className='overlay'>
                <p>Wordpress</p>
              </div>
            </div>
          </div>

        </div>

          {/* Langues */}
        <div className='container-skills' data-aos="fade-left" data-aos-duration="1500">
          <h2>Langues</h2>
          <div className='container-img langues'>
              <div className='image'>
                <Image
                  src="/img/Flags/france.png"
                  alt="français"
                  width={90}
                  height={100}/>
                <div className='overlay'>
                  <p>français</p>
                </div>
              </div>
              <div className='image'>
                <Image
                  src="/img/Flags/royaume-uni.png"
                  alt="UK"
                  width={90}
                  height={100}/>
                <div className='overlay'>
                  <p>anglais <br /> TOEIC : 840 pts</p>
                </div>
              </div>
              <div className='image'>
                <Image
                  src="/img/Flags/japon.png"
                  alt="japon"
                  width={90}
                  height={100}/>
                <div className='overlay'>
                  <p>japonais</p>
                </div>
              </div>
              <div className='image'>
                <Image
                  src="/img/Flags/allemand.png"
                  alt="allemand"
                  width={90}
                  height={100}/>
                <div className='overlay'>
                  <p>allemand</p>
                </div>
              </div>
            </div>
          </div>
          
      </div>
 
    </section>
  )
}

export default Skills
