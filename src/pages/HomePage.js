import React, { useEffect, useRef, useState } from 'react';

const FEATURE_TILES = [
  'Proven trading strategies',
  'Risk management techniques',
  'Algorithmic trading insights',
];

function FeatureTile({ text, visible, delay }) {
  const tileRef = useRef();
  useEffect(() => {
    if (visible && tileRef.current) {
      tileRef.current.style.opacity = 1;
      tileRef.current.style.transform = 'translateY(0) scale(1)';
    }
  }, [visible]);
  return (
    <div
      ref={tileRef}
      style={{
        margin: '10px 0',
        transition: 'transform 0.5s cubic-bezier(.77,0,.18,1), box-shadow 0.2s, opacity 0.5s',
        transitionDelay: visible ? `${delay}ms` : '0ms',
        cursor: 'pointer',
        opacity: 0,
        transform: 'translateY(40px) scale(0.98)',
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1.04)';
        e.currentTarget.style.boxShadow = '0 4px 16px #43cea2cc';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', background: 'white', borderRadius: 12, padding: '10px 20px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)', minHeight: 48
      }}>
        <span style={{ color: 'green', fontSize: 28, marginRight: 12 }}>✔️</span>
        <span style={{ color: '#222', fontWeight: 600, fontSize: 18 }}>{text}</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showWhy, setShowWhy] = useState(false);
  const [showTiles, setShowTiles] = useState([false, false, false]);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 100);
    setTimeout(() => setShowSubtitle(true), 600);
    setTimeout(() => setShowImage(true), 1100);
    setTimeout(() => setShowWhy(true), 1700);
    FEATURE_TILES.forEach((_, i) => {
      setTimeout(() => setShowTiles(tiles => {
        const newTiles = [...tiles];
        newTiles[i] = true;
        return newTiles;
      }), 2000 + i * 350);
    });
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
        {/* Animated Welcome Title */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            textShadow: '0 2px 12px #0003',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 1.2s cubic-bezier(.77,0,.18,1), transform 1.2s cubic-bezier(.77,0,.18,1)',
            ...(showTitle && { opacity: 1, transform: 'translateY(0)' }),
          }}
        >
          Welcome! 👋
        </div>
        <div style={{ height: 18 }} />
        {/* Animated Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: 'white',
            fontWeight: 500,
            textAlign: 'center',
            textShadow: '0 2px 8px #0002',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 1.2s 0.2s cubic-bezier(.77,0,.18,1), transform 1.2s 0.2s cubic-bezier(.77,0,.18,1)',
            ...(showSubtitle && { opacity: 0.92, transform: 'translateY(0)' }),
          }}
        >
          Master Forex Trading with <span style={{ color: '#43cea2', fontWeight: 700 }}>B. Algo FX Experts</span>
        </div>
        <div style={{ height: 36 }} />
        {/* Animated Image Card */}
        <div
          style={{
            background: 'rgba(255,255,255,0.22)',
            borderRadius: 20,
            boxShadow: '0 4px 16px #0002',
            padding: 18,
            textAlign: 'center',
            margin: '0 auto',
            maxWidth: '95%',
            border: '1.5px solid rgba(103,58,183,0.08)',
            opacity: 0,
            transform: 'scale(0.98)',
            transition: 'opacity 1.1s 0.3s cubic-bezier(.77,0,.18,1), transform 1.1s 0.3s cubic-bezier(.77,0,.18,1)',
            ...(showImage && { opacity: 1, transform: 'scale(1)' }),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 'bold', color: '#6c3483', marginBottom: 10 }}>
            Key Forex Concepts
          </div>
          <img
            src={'/assets/images/person.jpeg'}
            alt="Key Forex Concepts"
            style={{ borderRadius: 16, width: '100%', maxWidth: 500, height: 200, objectFit: 'cover', boxShadow: '0 2px 12px #904e9522', transition: 'transform 0.7s cubic-bezier(.77,0,.18,1)' }}
          />
        </div>
        <div style={{ height: 36 }} />
        {/* Animated Section Header */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            textShadow: '0 2px 8px #0002',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 1.1s 0.5s cubic-bezier(.77,0,.18,1), transform 1.1s 0.5s cubic-bezier(.77,0,.18,1)',
            ...(showWhy && { opacity: 1, transform: 'translateY(0)' }),
          }}
        >
          Why Learn With Us?
        </div>
        <div style={{ height: 18 }} />
        {/* Animated Feature Tiles */}
        {FEATURE_TILES.map((text, i) => (
          <FeatureTile key={text} text={text} visible={showTiles[i]} delay={i * 200} />
        ))}
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