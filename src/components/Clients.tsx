
import { useLanguage } from '../contexts/LanguageContext';

export default function Clients() {
  const { t } = useLanguage();
  return (
    <section className="clients section-padding">
        <div className="container">
            <p className="clients-title">{t('clients.title')}</p>
            <div className="clients-slider">
                <div className="clients-logos">
                    <img src="/viettel.png" alt="Viettel" className="client-logo" />
                    <img src="/techx.png" alt="TechX" className="client-logo" />
                    <img src="/elise.png" alt="Elise" className="client-logo" style={{ background: 'rgba(255,255,255,0.85)', padding: '0.4rem 1rem', borderRadius: '8px' }} />
                    <img src="/fpt.png" alt="FPT Software" className="client-logo" />
                    <img src="/microsoft.png" alt="Microsoft" className="client-logo" />
                    <img src="/dell.png" alt="Dell Technologies" className="client-logo" />
                    <img src="/viettel.png" alt="Viettel" className="client-logo" />
                    <img src="/techx.png" alt="TechX" className="client-logo" />
                    <img src="/elise.png" alt="Elise" className="client-logo" style={{ background: 'rgba(255,255,255,0.85)', padding: '0.4rem 1rem', borderRadius: '8px' }} />
                    <img src="/fpt.png" alt="FPT Software" className="client-logo" />
                    <img src="/microsoft.png" alt="Microsoft" className="client-logo" />
                    <img src="/dell.png" alt="Dell Technologies" className="client-logo" />
                </div>
            </div>
        </div>
    </section>
  );
}
