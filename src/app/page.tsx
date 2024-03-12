import Link from 'next/link';
import Image from 'next/image';
import "app/styles/main.scss";
import { Button } from 'app/components/shared/Button';

export default function Home() {
  return (
    <main className= "contentWithFooterAndNavbar">
      <div className='welcomeBanner'>
        <div className='welcomeBanner__Message'>
          <p>Caring for learning.</p>
          <h2>Immerse yourself in a new language with IdioMind.</h2>
          <Button />
        </div>
        <Image src="/images/welcomeSVG.svg" alt="welcome image IdioMind" width={500} height={500} />
      </div>
      <div className = "secondMessage">
        <h2>Learn a language whenever and wherever you want with the best tools designed for you.</h2>
      </div>
      <div>
        Awui mas contenido
      </div>
    </main>
  );
}
