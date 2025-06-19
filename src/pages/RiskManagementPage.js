import React, { useEffect, useState } from 'react';

function Rule({ title, description }) {
  return (
    <div style={{
      marginBottom: 12,
      background: '#F8F8FF',
      borderRadius: 18,
      boxShadow: '0 2px 8px #0001',
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <span style={{ fontSize: 24, color: 'purple', marginRight: 16 }}>✔️</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 'bold', fontSize: 17 }}>{title}</div>
        <div style={{ fontSize: 15 }}>{description}</div>
      </div>
    </div>
  );
}

function BulletPoint({ text, isImportant = false, fontSize = 16 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', margin: '4px 0' }}>
      <span style={{ fontSize: 18, marginRight: 8 }}>&bull;</span>
      <span style={{ color: isImportant ? 'red' : '#222', fontWeight: isImportant ? 'bold' : 500, fontSize }}>{text}</span>
    </div>
  );
}

export default function RiskManagementPage() {
  const [showTitle, setShowTitle] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowTitle(true), 100);
    setTimeout(() => setShowMain(true), 600);
    setTimeout(() => setShowWarning(true), 1200);
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
        maxWidth: 700,
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
          Risk Management
        </h2>
        <div style={{ height: 32 }} />
        <div style={{
          background: '#F3E8FF', borderRadius: 28, boxShadow: '0 4px 16px #0002', padding: 36, textAlign: 'left',
          margin: '0 auto', maxWidth: '100%', border: '1.5px solid rgba(103,58,183,0.08)', marginBottom: 32,
          opacity: 0,
          transform: 'translateY(40px)',
          transition: 'opacity 1.1s 0.2s cubic-bezier(.77,0,.18,1), transform 1.1s 0.2s cubic-bezier(.77,0,.18,1)',
          ...(showMain && { opacity: 1, transform: 'translateY(0)' }),
        }}>
          <div style={{ color: '#b71c1c', fontWeight: 'bold', fontSize: 20, marginBottom: 24 }}>
            Risk management is the MOST IMPORTANT aspect of trading.
          </div>
          <div style={{ fontSize: 22, fontWeight: 'bold', color: 'purple', marginBottom: 8 }}>Essential Rules:</div>
          <Rule title="1-2% Rule" description="Never risk more than 1-2% of capital on a single trade" />
          <Rule title="Stop Losses" description="Always use stop loss orders" />
          <Rule title="Take Profits" description="Set profit targets before entering" />
          <Rule title="Risk/Reward" description="Aim for at least 1:2 ratio" />
          <div style={{ height: 24 }} />
          <div style={{ fontSize: 22, fontWeight: 'bold', color: 'purple', marginBottom: 8 }}>Common Mistakes:</div>
          <BulletPoint text="Overtrading (too many positions)" fontSize={18} />
          <BulletPoint text="Moving stop losses further away" fontSize={18} />
          <BulletPoint text="Revenge trading after losses" fontSize={18} />
        </div>
        <div style={{ height: 32 }} />
        <div style={{
          background: '#ffe5e5',
          borderRadius: 16,
          boxShadow: '0 2px 8px #0001',
          padding: '18px 16px',
          display: 'flex',
          alignItems: 'center',
          marginBottom: 16,
          opacity: 0,
          transform: 'translateY(40px)',
          transition: 'opacity 1.1s 0.4s cubic-bezier(.77,0,.18,1), transform 1.1s 0.4s cubic-bezier(.77,0,.18,1)',
          ...(showWarning && { opacity: 1, transform: 'translateY(0)' }),
        }}>
          <span style={{ fontSize: 32, color: 'red', marginRight: 16 }}>⚠️</span>
          <span style={{ color: '#b71c1c', fontWeight: 'bold', fontSize: 18 }}>
            WARNING: Poor risk management is the #1 reason traders fail.
          </span>
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