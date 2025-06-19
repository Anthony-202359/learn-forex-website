import React, { useEffect, useRef } from 'react';

export default function LandingPage({ onGetStarted }) {
  // For animated title
  const titleRef = useRef();
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = 1;
      titleRef.current.style.transform = 'translateY(0)';
    }
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
        fontSize: 80,
        color: 'rgba(255,255,255,0.18)',
        filter: 'blur(0.5px)',
        animation: 'floatIcon 4s ease-in-out infinite',
        zIndex: 1,
        pointerEvents: 'none',
      }}>💱</span>
      <div style={{
        maxWidth: 480,
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
        <div
          ref={titleRef}
          style={{
            fontSize: 38,
            fontWeight: 'bold',
            color: 'white',
            letterSpacing: 1.2,
            textAlign: 'center',
            textShadow: '0 2px 12px #0003',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 1.2s cubic-bezier(.77,0,.18,1), transform 1.2s cubic-bezier(.77,0,.18,1)',
          }}
        >
          B. Algo FX Experts
        </div>
        <div style={{ height: 18 }} />
        <div style={{ fontSize: 19, color: 'white', opacity: 0.92, textAlign: 'center', textShadow: '0 2px 8px #0002' }}>
          Master Forex trading with expert strategies.<br />All you need to succeed, in one place.
        </div>
        <div style={{ height: 40 }} />
        <button
          onClick={onGetStarted}
          style={{
            width: '100%',
            background: 'linear-gradient(90deg, #e96443 0%, #904e95 100%)',
            color: 'white',
            padding: '18px 0',
            border: 'none',
            borderRadius: 30,
            fontSize: 20,
            fontWeight: 'bold',
            boxShadow: '0 2px 16px #904e9540',
            cursor: 'pointer',
            transition: 'background 0.3s, transform 0.2s',
            outline: 'none',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)';
            e.currentTarget.style.transform = 'scale(1.04)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #e96443 0%, #904e95 100%)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Get Started for free
        </button>
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