import React, { useState, useRef } from 'react';
import './index.css'; // veya index.css

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Gizli inputları tetiklemek için referanslar
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  // Dosya Yükleme Yakalayıcı
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) alert(`"${file.name}" yüklendi. (Dosya boyutu: ${(file.size / 1024 / 1024).toFixed(2)} MB)\nAPI bağlantısı bekleniyor...`);
  };

  // Kamera Çekimi Yakalayıcı (Mobilde doğrudan kamerayı açar)
  const handleCameraCapture = (e) => {
    const file = e.target.files[0];
    if (file) alert("Fotoğraf başarıyla çekildi!\nAPI bağlantısı bekleniyor...");
  };

  // GİRİŞ EKRANI
  if (!isLoggedIn) {
    return (
      <div className="login-screen">
        <div className="login-box">
          <h1 style={{marginBottom: '10px', fontSize: '28px', color: 'var(--accent)'}}>PerfAI</h1>
          <p style={{marginBottom: '30px', opacity: 0.6}}>Tüm cihazlardan erişim için giriş yap</p>
          <input type="email" placeholder="E-posta Adresi" className="login-input" />
          <input type="password" placeholder="Şifre" className="login-input" />
          <button onClick={() => setIsLoggedIn(true)} style={{width: '100%', padding: '14px', borderRadius: '12px', border: 'none', background: 'var(--accent)', color: '#fff', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'}}>
            Giriş Yap
          </button>
        </div>
      </div>
    );
  }

  // ANA UYGULAMA EKRANI
  return (
    <div className="app-wrapper">
      
      {/* SOL MENÜ */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="new-chat-btn">
          <span style={{fontSize: '20px'}}>+</span> Yeni sohbet
        </button>
        
        <div style={{marginTop: '30px', flex: 1, overflowY: 'auto'}}>
          <p style={{fontSize: '12px', fontWeight: 'bold', opacity: 0.5, margin: '0 0 10px 10px'}}>GEÇMİŞ SOHBETLER</p>
          <div className="menu-item">💬 PerfAI API Entegrasyonu</div>
          <div className="menu-item">🖼️ Logo Tasarım Fikirleri</div>
        </div>

        <div style={{marginTop: 'auto'}}>
          <div className="menu-item">⚙️ Ayarlar</div>
          <div className="menu-item">📝 Hakkında</div>
          <div className="menu-item" onClick={() => setIsLoggedIn(false)} style={{color: '#d93025'}}>🚪 Çıkış Yap</div>
        </div>
      </aside>

      {/* ANA SOHBET ALANI */}
      <main className="chat-container">
        <header style={{padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <button className="icon-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{display: window.innerWidth < 768 ? 'block' : 'none'}}>☰</button>
            <span style={{fontWeight: '600', fontSize: '18px', opacity: 0.8}}>PerfAI Pro ▾</span>
          </div>
          <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
            U
          </div>
        </header>

        <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
          <h1 className="welcome-title" style={{fontSize: '44px', fontWeight: '500', textAlign: 'center', marginBottom: '40px', background: 'linear-gradient(90deg, #4285f4, #d96570)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Merhaba Uğur
          </h1>
        </div>

        {/* INPUT ALANI */}
        <div className="chat-input-wrapper">
          <div className="chat-box">
            
            {/* GİZLİ İNPUTLAR (Dosya ve Kamera için) */}
            <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{display: 'none'}} accept=".pdf,.doc,.docx,.txt,.csv,.js,.py,.html" />
            <input type="file" ref={cameraInputRef} onChange={handleCameraCapture} style={{display: 'none'}} accept="image/*" capture="environment" />
            
            <button title="Dosya Yükle" className="icon-btn" onClick={() => fileInputRef.current.click()}>📎</button>
            <button title="Kamera ile Çek" className="icon-btn" onClick={() => cameraInputRef.current.click()}>📷</button>
            
            <textarea 
              placeholder="PerfAI'ye bir soru sorun..." 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows="1"
            />
            
            <button title="Mikrofon" className="icon-btn">🎙️</button>
            <button title="Gönder" className="icon-btn" style={{background: inputText.length > 0 ? 'var(--accent)' : 'transparent', color: inputText.length > 0 ? 'white' : 'inherit'}}>
              ➤
            </button>
          </div>
          
          <div style={{display: 'flex', gap: '10px', marginTop: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button className="new-chat-btn" style={{padding: '8px 16px', fontSize: '13px'}}>🔍 Derin Araştırma</button>
            <button className="new-chat-btn" style={{padding: '8px 16px', fontSize: '13px'}}>🖼️ Resim Oluştur</button>
            <button className="new-chat-btn" style={{padding: '8px 16px', fontSize: '13px'}}>🎵 Müzik Ekle</button>
          </div>
          <p style={{textAlign: 'center', fontSize: '11px', opacity: 0.5, marginTop: '16px'}}>PerfAI, Korene altyapısı ile çalışır. Hata yapabilir.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
