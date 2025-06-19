import React, { useEffect, useState } from 'react';

function PatternItem({ name, description }) {
  return (
    <div style={{
      marginBottom: 20,
      padding: 16,
      background: 'white',
      border: '1.5px solid rgba(0,200,83,0.3)',
      borderRadius: 16,
      boxShadow: '0 2px 8px rgba(0,200,83,0.08)',
      cursor: 'pointer',
      transition: 'box-shadow 0.2s',
    }}>
      <div style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>{name}</div>
      <div style={{ height: 8 }} />
      <div style={{ fontSize: 16 }}>{description}</div>
    </div>
  );
}

export default function BottomCandlesticksPage() {
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
          Bottom Candlesticks
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
          <div style={{ fontSize: 24, fontWeight: 'bold', color: 'green' }}>
            Bottom Reversal Patterns
          </div>
          <div style={{ height: 16 }} />
          <div style={{ fontSize: 18, fontWeight: 500 }}>
            These patterns suggest a potential reversal from a downtrend to an uptrend:
          </div>
          <div style={{ height: 24 }} />
          <PatternItem
            name="Hammer"
            description="Small body near the high with a long lower shadow, appearing after a downtrend."
          />
          <PatternItem
            name="Bullish Engulfing"
            description="A green candle that completely engulfs the body of the previous red candle."
          />
          <PatternItem
            name="Piercing Line"
            description="A green candle that opens below but closes above the midpoint of the previous red candle."
          />
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