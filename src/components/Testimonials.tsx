import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const changeTestimonial = (direction: number) => {
    setCurrentSlide((prev) => (prev + direction + totalSlides) % totalSlides);
  };

  return (
    <section className="testimonials-slider-section section-padding bg-light">
        <div className="container animate-on-scroll" style={{ position: 'relative', maxWidth: '1000px', textAlign: 'center' }}>
            <div className="slider-controls">
                <button className="slider-btn prev-btn" onClick={() => changeTestimonial(-1)}>
                    <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <div id="testimo-slider" className="testimo-slider">
                    {/* Slide 1 */}
                    <div className={`testimo-slide ${currentSlide === 0 ? 'active' : ''}`}>
                        <h3 className="testimo-quote">"{t('testimonials.t1_quote')}"</h3>
                        <div className="testimo-author">
                            <div className="testimo-avatar" style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)' }}>DK</div>
                            <div className="testimo-info-single">
                                <h4>{t('testimonials.t1_author')}</h4>
                                <p>{t('testimonials.t1_role')}</p>
                            </div>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className={`testimo-slide ${currentSlide === 1 ? 'active' : ''}`}>
                        <h3 className="testimo-quote">"{t('testimonials.t2_quote')}"</h3>
                        <div className="testimo-author">
                            <div className="testimo-avatar" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)' }}>HA</div>
                            <div className="testimo-info-single">
                                <h4>{t('testimonials.t2_author')}</h4>
                                <p>{t('testimonials.t2_role')}</p>
                            </div>
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div className={`testimo-slide ${currentSlide === 2 ? 'active' : ''}`}>
                        <h3 className="testimo-quote">"{t('testimonials.t3_quote')}"</h3>
                        <div className="testimo-author">
                            <div className="testimo-avatar" style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #38bdf8 100%)' }}>CN</div>
                            <div className="testimo-info-single">
                                <h4>{t('testimonials.t3_author')}</h4>
                                <p>{t('testimonials.t3_role')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="slider-btn next-btn" onClick={() => changeTestimonial(1)}>
                    <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
        </div>
    </section>
  );
}
