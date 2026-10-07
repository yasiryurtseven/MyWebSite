import css from './Hero.module.css';
import MicroSlats from '../MicroSlats/MicroSlats';

import TextType from '../TextType/TextType';

<TextType 
  text={["Text typing effect", "for your websites", "Happy coding!"]}
  typingSpeed={15}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/>
function Hero() {
  return (
    <section id="hero" className={css.hero}>
      <MicroSlats />
      <div className={css.heroContent}>
        <h1 className={css.heroTitle}> <TextType text={["Merhaba, ben Ubeydullah Yazılım Geliştirici", "Modern Web Tasarımcısı"]} /></h1>
        {/* <p className={css.heroSubtitle}>
          <TextType text={["Yazılım Geliştirici", "Web Tasarımcısı", "React Uzmanı"]} />
        </p> */}
      </div>
    </section>
  );
}

export default Hero; 