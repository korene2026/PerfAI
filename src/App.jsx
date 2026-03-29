import React, { useState } from 'react';
import './index.css';

function App() {
  const [input, setInput] = useState("");

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Hareketli Arka Plan */}
      <div className="bg-circles">
        <div className="circle" style={{ width: '450px', height: '450px', top: '5%', left: '10%' }}></div>
        <div className="circle" style={{ width: '350px', height: '350px', bottom: '15%', right: '10%', background: '#9b72f3' }}></div>
      </div>

      {/* SOL PANEL (SIDEBAR) */}
      <aside className="sidebar">
        <div style={{ fontSize: '22px', fontWeight: '800', marginBottom: '30px', color: 'var(--accent)' }}>PerfAI</div>
        
        <button className="btn-modern" style={{ width: '100%', justifyContent: 'center', marginBottom: '10px', background: 'var(--accent)', color: 'white', border: 'none' }}>
          + Yeni Sohbet
        </button>

        {/* İSTEDİĞİN OKUTAN BUTONU */}
        <button className="btn-modern" style={{ width: '100%', marginBottom: '20px' }}>
          📷 <b>Okutan (Scan)</b>
        </button>
        
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <p style={{ opacity: 0.5, fontSize: '11px', letterSpacing: '1px', marginBottom: '15px' }}>GEÇMİŞ SOHBETLER</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="btn-modern" style={{ border: 'none', padding: '8px' }}>🚀 Proje Fikirlerim</div>
            <div className="btn-modern" style={{ border: 'none', padding: '8px' }}>💻 Kodlama Notları</div>
          </div>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
          <button className="btn-modern" style={{ width: '100%', border: 'none' }}>⚙️ Ayarlar ve Yardım</button>
        </div>
      </aside>

      {/* ANA İÇERİK ALANI */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        
        <header style={{ position: 'absolute', top: '20px', right: '30px', display: 'flex', gap: '10px' }}>
          <div className="btn-modern" style={{ borderRadius: '20px', fontSize: '12px' }}>AI Plus'a Geç</div>
          <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>U</div>
        </header>

        <h1 style={{ fontSize: '48px', fontWeight: '600', marginBottom: '40px', textAlign: 'center' }}>
          Merhaba Uğur, <br />
          <span style={{ opacity: 0.4 }}>Nereden başlayalım?</span>
        </h1>

        <div className="search-container">
          <span style={{ fontSize: '20px', opacity: 0.5, cursor: 'pointer' }}>+</span>
          <input 
            type="text" 
            placeholder="PerfAI 2026'ya bir şey sorun..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div style={{ background: 'var(--accent)', color: 'white', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', marginLeft: '10px', cursor: 'pointer' }}>
            Düşünen ▾
          </div>
          <span style={{ marginLeft: '15px', cursor: 'pointer' }}>🎙️</span>
        </div>

        {/* ARAÇLAR / HIZLI BUTONLAR */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn-modern">🖼️ Resim Oluştur</button>
          <button className="btn-modern">🔍 Derin Araştırma</button>
          <button className="btn-modern">🎵 Müzik Bestele</button>
          <button className="btn-modern">💡 Fikir Al</button>
        </div>
      </main>
    </div>
  );
}

export default App;
