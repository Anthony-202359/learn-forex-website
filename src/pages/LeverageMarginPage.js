import React, { useEffect, useState } from 'react';

export default function LeverageMarginPage() {
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
          Leverage & Margin
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
          <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 24 }}>
            Leverage lets you control a large position with a small amount of capital. Margin is the amount required to open a trade.
          </div>
          <div style={{ fontSize: 22, fontWeight: 'bold', color: 'purple', marginBottom: 8 }}>
            Example:
          </div>
          <ul style={{ fontSize: 18, marginBottom: 16 }}>
            <li>Leverage 100:1 means you can control $10,000 with $100.</li>
            <li>Margin required for $10,000 position at 100:1 = $100.</li>
          </ul>
          <div style={{ fontSize: 22, fontWeight: 'bold', color: 'purple', marginBottom: 8 }}>
            Caution:
          </div>
          <ul style={{ fontSize: 18 }}>
            <li>Leverage magnifies both gains and losses.</li>
            <li>Use leverage wisely to avoid large losses.</li>
          </ul>
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