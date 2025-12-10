import React from 'react';
import Image from 'next/image';

const Linkedin: React.FC = () => {
  return (
    <div>
        <a
            href="https://www.linkedin.com/in/melaniebruzac/"
            target="_blank"
            rel="noopener noreferrer"
        >
        <Image
            className='linkedin'
            src="img/linkedin-full.svg"
            alt="LogoLinkedin"
            width={50}
            height={50}
        />
        </a>
    </div>
  )
}

export default Linkedin
