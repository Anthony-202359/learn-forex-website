import React, { useEffect, useState } from 'react';

function PatternCard({ title, icon, color }) {
  return (
    <div style={{
      marginBottom: 20,
      background: '#F3E8FF',
      borderRadius: 24,
      border: '1.5px solid rgba(103,58,183,0.08)',
      boxShadow: '0 4px 16px #0002',
      padding: '20px 18px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <span style={{ fontSize: 36, color, marginRight: 20 }}>{icon}</span>
      <span style={{ fontSize: 20, fontWeight: 'bold', flex: 1 }}>{title}</span>
      <span style={{ fontSize: 22, color: 'purple', marginLeft: 12 }}>{'>'}</span>
    </div>
  );
}

export default function CandlestickBasicsPage({ onBack }) {
  const [showTitle, setShowTitle] = useState(false);
  const [showMain, setShowMain] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowTitle(true), 100);
    setTimeout(() => setShowMain(true), 600);
  }, []);
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #e96443, #904e95, #43cea2, #185a9d)',
      backgroundSize: '400% 400%',
      animation: 'gradientBG 12s ease-in-out infinite',
    }}>
      {/* Floating Forex Icon */}
      <span style={{
        position: 'absolute',
        top: 60,
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: 70,
        color: 'rgba(255,255,255,0.16)',
        filter: 'blur(0.5px)',
        animation: 'floatIcon 4s ease-in-out infinite',
        zIndex: 1,
        pointerEvents: 'none',
      }}>💱</span>
      <div style={{
        maxWidth: 600,
        width: '100%',
        padding: 36,
        background: 'rgba(255,255,255,0.18)',
        borderRadius: 32,
        boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1.5px solid rgba(255,255,255,0.25)',
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{
          fontSize: 32,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          textShadow: '0 2px 8px #0002',
          opacity: 0,
          transform: 'translateY(40px)',
          transition: 'opacity 1.2s cubic-bezier(.77,0,.18,1), transform 1.2s cubic-bezier(.77,0,.18,1)',
          ...(showTitle && { opacity: 1, transform: 'translateY(0)' }),
        }}>
          Candlestick Patterns
        </h2>
        <div style={{ height: 32 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: 0, transform: 'translateY(40px)', transition: 'opacity 1.1s 0.2s cubic-bezier(.77,0,.18,1), transform 1.1s 0.2s cubic-bezier(.77,0,.18,1)', ...(showMain && { opacity: 1, transform: 'translateY(0)' }) }}>
          <PatternCard title="Bullish Continuation" icon="📈" color="green" />
          <PatternCard title="Bearish Continuation" icon="📉" color="red" />
          <PatternCard title="Indecision Candlesticks" icon="🔄" color="gray" />
          <PatternCard title="Top Candlesticks" icon="🔺" color="red" />
          <PatternCard title="Bottom Candlesticks" icon="🔻" color="green" />
        </div>
      </div>
      {/* Keyframes for background and icon animation */}
      <style>{`
        @keyframes gradientBG {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
        @keyframes floatIcon {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-18px); }
        }
      `}</style>
    </div>
  );
} 