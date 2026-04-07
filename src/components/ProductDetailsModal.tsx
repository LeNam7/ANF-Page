import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Product } from '../data/products';

interface ProductDetailsModalProps {
  product: Product;
  onClose: () => void;
}

import { useLanguage } from '../contexts/LanguageContext';

export default function ProductDetailsModal({ product, onClose }: ProductDetailsModalProps) {
  const { t, language } = useLanguage();
  useEffect(() => {
    // We already have main navbar controlling some overflow, but let's Ensure body overflow is hidden
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return createPortal(
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
      backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 10000, 
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      padding: '1rem', backdropFilter: 'blur(8px)', opacity: 1, 
      animation: 'fadeIn 0.3s ease-out'
    }}>
      <div className="glass-card modal-content" onClick={(e) => e.stopPropagation()} style={{
        width: '100%', maxWidth: '1000px', maxHeight: '90vh', overflowY: 'auto', 
        padding: '0', position: 'relative', border: '1px solid rgba(0, 229, 255, 0.2)', 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)', borderRadius: '16px'
      }}>
        
        {/* Header (Sticky) */}
        <div style={{
          position: 'sticky', top: '0', background: 'rgba(6,9,19,0.9)', 
          backdropFilter: 'blur(10px)', padding: '1rem 2rem', zIndex: 20, 
          borderBottom: '1px solid rgba(255,255,255,0.05)', 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <h2 className="section-title" style={{ fontSize: '1.5rem', margin: 0 }}>{t('products.modal_title')}</h2>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', 
            color: '#fff', width: '36px', height: '36px', borderRadius: '50%', 
            fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', transition: 'all 0.3s'
          }} onMouseEnter={(e) => { e.currentTarget.style.background = '#ef4444'; e.currentTarget.style.borderColor = '#ef4444'; }} 
             onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}>
            &times;
          </button>
        </div>
        
        {/* Main Content */}
        <div style={{ padding: '3rem' }} className="product-modal-body">
          <style>
             {`
              .product-modal-body img { max-width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); margin: 2rem 0; }
              .product-modal-body p { color: #9ca3af; font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.2rem; }
              .product-modal-body h2 { color: #fff; font-size: 1.6rem; margin: 2rem 0 1rem; }
              .product-modal-body ul { padding-left: 1.5rem; margin-bottom: 1.5rem; color: #e2e8f0; }
              .product-modal-body li { margin-bottom: 0.5rem; line-height: 1.6; }
              
              .meta-grid { display: grid; gap: 1rem; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); }
              .meta-item { display: flex; align-items: flex-start; gap: 1rem; background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); }
              .meta-label { font-weight: 600; color: #00e5ff; min-width: 150px; }
              .meta-value { color: #d1d5db; }
              
              @media (min-width: 768px) {
                .meta-grid { grid-template-columns: 1fr 1fr; }
              }
             `}
          </style>

          <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '-10px' }}>
             <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem', color: '#fff' }}>{language === 'en' ? (product.enTitle || product.title) : product.title}</h1>
             <p style={{ color: '#00e5ff', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>{language === 'en' ? (product.enDescription || product.description) : product.description}</p>
          </div>

          <div className="content-render">
            {(language === 'en' && product.enContent ? product.enContent : product.content).map((item, idx) => {
              if (item.type === 'paragraph') return <p key={idx}>{item.text}</p>;
              if (item.type === 'heading') return <h2 key={idx}>{item.text}</h2>;
              if (item.type === 'image') return <img key={idx} src={item.src} alt={item.alt} />;
              if (item.type === 'list') return (
                <ul key={idx}>
                  {item.items?.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
              );
              return null;
            })}
          </div>

          <div className="meta-grid">
            {(language === 'en' && product.enContent ? product.enContent : product.content).map((item, idx) => {
               if (item.type === 'platforms') return (
                 <div key={idx} className="meta-item">
                   <div className="meta-label">{t('products.platforms')}</div>
                   <div className="meta-value">{item.text}</div>
                 </div>
               );
               if (item.type === 'fields') return (
                 <div key={idx} className="meta-item">
                   <div className="meta-label">{t('products.fields')}</div>
                   <div className="meta-value">{item.text}</div>
                 </div>
               );
               if (item.type === 'technologies') return (
                 <div key={idx} className="meta-item">
                   <div className="meta-label">{t('products.technologies')}</div>
                   <div className="meta-value">{item.text}</div>
                 </div>
               );
               if (item.type === 'workload') return (
                 <div key={idx} className="meta-item">
                   <div className="meta-label">⏱ Workload</div>
                   <div className="meta-value">{item.text}</div>
                 </div>
               );
               return null;
            })}
            
            {product.tags && product.tags.length > 0 && (
              <div className="meta-item" style={{ gridColumn: '1 / -1' }}>
                <div className="meta-label">{t('products.tags')}</div>
                <div className="meta-value" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {product.tags.map(tag => (
                    <span key={tag} style={{ background: 'rgba(0,229,255,0.1)', color: '#00e5ff', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>,
    document.body
  );
}
