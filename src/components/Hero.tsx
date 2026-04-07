

import { useLanguage } from '../contexts/LanguageContext';
import heroImg from '../assets/hero.png';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="container hero-container">
            <div className="hero-content">
                <p className="hero-label animate-up text-primary uppercase tracker">{t('hero.label')}</p>
                <h1 className="hero-title animate-up delay-1">{t('hero.title1')} <span>{t('hero.title2')}</span></h1>
                <p className="hero-subtitle animate-up delay-2">{t('hero.subtitle')}</p>
                <div className="hero-cta animate-up delay-3">
                    <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openContactModal')); }} className="btn btn-primary">{t('hero.cta_primary')} &rarr;</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openServicesModal')); }} className="btn btn-secondary">{t('hero.cta_secondary')} &rarr;</a>
                </div>
            </div>
            <div className="hero-image animate-up delay-2">
                <img 
                    src={heroImg} 
                    alt="Hero Illustration" 
                    style={{ maxWidth: '100%', maxHeight: '600px', objectFit: 'contain', margin: '0 auto', display: 'block' }} 
                    className="anim-isometric-illustration"
                />
            </div>
        </div>
    </section>
  );
}
