


import { useLanguage } from '../contexts/LanguageContext';

export default function AboutPreview() {
  const { t } = useLanguage();
  return (
    <>
      <section id="about" className="about section-padding">
          <div className="container about-container">
              <div className="about-image animate-on-scroll">
                  <div className="about-img-box">
                      <img src="/01.jpg" alt="ANF Technology Office" />
                  </div>
              </div>
              <div className="about-text animate-on-scroll">
                  <p className="hero-label text-primary uppercase tracker" style={{ marginBottom: '0.5rem' }}>{t('about_preview.who_we_are_label')}</p>
                  <h2 className="section-title">{t('about_preview.who_we_are_title')}</h2>
                  <p>{t('about_preview.who_we_are_desc')}</p>
                  <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openAboutModal')); }} className="link-btn">{t('about_preview.learn_more')} &rarr;</a>
              </div>
          </div>
      </section>

      <section id="services-overview" className="services section-padding bg-light">
          <div className="container about-container">
              <div className="about-text animate-on-scroll">
                  <p className="hero-label text-primary uppercase tracker" style={{ marginBottom: '0.5rem' }}>{t('about_preview.services_label')}</p>
                  <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>{t('about_preview.services_title')}</h2>
                  <p style={{ color: '#9ca3af', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                      {t('about_preview.services_desc')}
                  </p>
                  
                  <ul style={{ listStyle: 'none', marginBottom: '2.5rem', color: 'var(--text)' }}>
                      <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', fontSize: '1.1rem', fontWeight: 600 }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '15px', minWidth: '20px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                          {t('about_preview.ai_integration')}
                      </li>
                      <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', fontSize: '1.1rem', fontWeight: 600 }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '15px', minWidth: '20px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                          {t('about_preview.ai_model')}
                      </li>
                      <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', fontSize: '1.1rem', fontWeight: 600 }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '15px', minWidth: '20px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                          {t('about_preview.product_dev')}
                      </li>
                      <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', fontSize: '1.1rem', fontWeight: 600 }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '15px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                          {t('about_preview.outsourcing')}
                      </li>
                      <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', fontSize: '1.1rem', fontWeight: 600 }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '15px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                          {t('about_preview.digital_transformation')}
                      </li>
                  </ul>
                  
                  <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openServicesModal')); }} className="link-btn uppercase" style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px' }}>{t('about_preview.learn_more').toUpperCase()} &rarr;</a>
              </div>
              
              <div className="about-image animate-on-scroll">
                  <div className="about-img-box">
                      <img src="/services_office.png" alt="ANF Technology Services" style={{ borderRadius: '12px' }} />
                  </div>
              </div>
          </div>
      </section>

      <section className="cta-banner">
          <div className="container animate-on-scroll">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#3b82f6', marginRight: '8px' }}></div>
                  <p className="uppercase tracker" style={{ margin: 0, color: '#a5b4fc', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 'bold' }}>{t('cta_banner.label')}</p>
              </div>
              <h2 className="cta-title">{t('cta_banner.title')}</h2>
              <p className="cta-subtitle">{t('cta_banner.subtitle')}</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openContactModal')); }} className="btn btn-solid">{t('cta_banner.btn_info')} &rarr;</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openContactModal')); }} className="btn btn-outline">{t('cta_banner.btn_contact')} &rarr;</a>
              </div>
          </div>
      </section>

    </>
  );
}
