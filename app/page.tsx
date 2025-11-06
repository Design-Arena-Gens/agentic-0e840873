'use client';

import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

export default function Home() {
  const [template, setTemplate] = useState('modern');
  const [title, setTitle] = useState('حلول التسويق الرقمي');
  const [subtitle, setSubtitle] = useState('نساعدك على تحقيق أهدافك التسويقية');
  const [description, setDescription] = useState('✓ تصميم محتوى إبداعي\n✓ إدارة حسابات التواصل\n✓ حملات إعلانية ناجحة');
  const [bgColor, setBgColor] = useState('#667eea');
  const [textColor, setTextColor] = useState('#ffffff');
  const [accentColor, setAccentColor] = useState('#ffd700');
  const postRef = useRef<HTMLDivElement>(null);

  const templates = {
    modern: {
      name: 'عصري',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    vibrant: {
      name: 'نابض',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    professional: {
      name: 'احترافي',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    elegant: {
      name: 'أنيق',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    bold: {
      name: 'جريء',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    minimal: {
      name: 'بسيط',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    },
  };

  const downloadPost = async () => {
    if (postRef.current) {
      const canvas = await html2canvas(postRef.current, {
        scale: 2,
        backgroundColor: null,
        logging: false,
      });

      const link = document.createElement('a');
      link.download = 'marketing-post.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const getTemplateGradient = () => {
    return templates[template as keyof typeof templates]?.gradient || bgColor;
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.pageTitle}>🎨 مصمم البوستات الاحترافي</h1>

        <div style={styles.content}>
          {/* Preview */}
          <div style={styles.previewSection}>
            <div
              ref={postRef}
              style={{
                ...styles.post,
                background: getTemplateGradient(),
                color: textColor,
              }}
            >
              <div style={styles.postHeader}>
                <div style={{
                  ...styles.logo,
                  background: accentColor,
                }}>
                  <span style={styles.logoText}>M</span>
                </div>
                <div style={styles.companyInfo}>
                  <div style={styles.companyName}>Digital Marketing</div>
                  <div style={styles.companyTagline}>شركة التسويق الإلكتروني</div>
                </div>
              </div>

              <div style={styles.postContent}>
                <h2 style={styles.postTitle}>{title}</h2>
                <p style={styles.postSubtitle}>{subtitle}</p>
                <div style={styles.postDescription}>
                  {description.split('\n').map((line, i) => (
                    <div key={i} style={styles.descriptionLine}>{line}</div>
                  ))}
                </div>
              </div>

              <div style={styles.postFooter}>
                <div style={styles.ctaButton}>
                  <span>تواصل معنا الآن</span>
                </div>
                <div style={styles.contactInfo}>
                  <span>📱 +966 XX XXX XXXX</span>
                  <span>🌐 www.company.com</span>
                </div>
              </div>

              <div style={{
                ...styles.decorativeCircle,
                background: `${accentColor}33`,
              }}></div>
              <div style={{
                ...styles.decorativeCircle2,
                background: `${accentColor}22`,
              }}></div>
            </div>

            <button onClick={downloadPost} style={styles.downloadBtn}>
              ⬇️ تحميل البوست
            </button>
          </div>

          {/* Controls */}
          <div style={styles.controlsSection}>
            <div style={styles.controlGroup}>
              <label style={styles.label}>القالب</label>
              <div style={styles.templateGrid}>
                {Object.entries(templates).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setTemplate(key)}
                    style={{
                      ...styles.templateBtn,
                      background: value.gradient,
                      border: template === key ? '3px solid #fff' : 'none',
                      transform: template === key ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    {value.name}
                  </button>
                ))}
              </div>
            </div>

            <div style={styles.controlGroup}>
              <label style={styles.label}>العنوان الرئيسي</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.controlGroup}>
              <label style={styles.label}>العنوان الفرعي</label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.controlGroup}>
              <label style={styles.label}>الوصف / النقاط</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={styles.textarea}
                rows={5}
              />
            </div>

            <div style={styles.colorRow}>
              <div style={styles.colorControl}>
                <label style={styles.label}>لون النص</label>
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  style={styles.colorInput}
                />
              </div>

              <div style={styles.colorControl}>
                <label style={styles.label}>اللون المميز</label>
                <input
                  type="color"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  style={styles.colorInput}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: '100vh',
    padding: '20px',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  pageTitle: {
    fontSize: '2.5rem',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '30px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    alignItems: 'start',
  },
  previewSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  post: {
    width: '600px',
    height: '600px',
    borderRadius: '20px',
    padding: '40px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  postHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    position: 'relative',
    zIndex: 2,
  },
  logo: {
    width: '60px',
    height: '60px',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '28px',
    color: '#000',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  logoText: {
    fontWeight: 'bold',
  },
  companyInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  companyName: {
    fontSize: '18px',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
  },
  companyTagline: {
    fontSize: '14px',
    opacity: 0.9,
  },
  postContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  postTitle: {
    fontSize: '42px',
    fontWeight: 'bold',
    marginBottom: '15px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    lineHeight: '1.2',
  },
  postSubtitle: {
    fontSize: '22px',
    marginBottom: '25px',
    opacity: 0.95,
  },
  postDescription: {
    fontSize: '18px',
    lineHeight: '1.8',
    textAlign: 'right',
  },
  descriptionLine: {
    marginBottom: '8px',
  },
  postFooter: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  ctaButton: {
    background: 'rgba(255,255,255,0.3)',
    backdropFilter: 'blur(10px)',
    padding: '15px 30px',
    borderRadius: '50px',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    border: '2px solid rgba(255,255,255,0.5)',
    cursor: 'pointer',
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '14px',
    opacity: 0.9,
  },
  decorativeCircle: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    top: '-100px',
    right: '-100px',
    zIndex: 1,
  },
  decorativeCircle2: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    bottom: '-150px',
    left: '-150px',
    zIndex: 1,
  },
  downloadBtn: {
    background: '#fff',
    color: '#667eea',
    padding: '15px 30px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s',
  },
  controlsSection: {
    background: 'rgba(255,255,255,0.95)',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
    maxHeight: '650px',
    overflowY: 'auto',
  },
  controlGroup: {
    marginBottom: '25px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#333',
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '2px solid #ddd',
    fontSize: '16px',
    fontFamily: 'inherit',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '2px solid #ddd',
    fontSize: '16px',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  templateGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
  },
  templateBtn: {
    padding: '20px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
    transition: 'all 0.3s',
  },
  colorRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
  },
  colorControl: {
    display: 'flex',
    flexDirection: 'column',
  },
  colorInput: {
    width: '100%',
    height: '50px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};
