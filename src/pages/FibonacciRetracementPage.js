import React from 'react';

export default function FibonacciRetracementPage({ onBack }) {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #e96443 0%, #904e95 100%)',
      position: 'relative',
      overflowX: 'hidden',
    }}>
      <header style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 10,
        background: 'transparent', boxShadow: 'none', padding: '24px 0 0 0',
        textAlign: 'left',
      }}>
        <button
          onClick={onBack}
          style={{ background: 'none', border: 'none', color: 'white', fontSize: 28, cursor: 'pointer', marginLeft: 16 }}
        >
          ←
        </button>
      </header>
      <div style={{ paddingTop: 100, paddingBottom: 40 }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', color: 'white', textAlign: 'center', textShadow: '0 2px 8px #0002' }}>
            Fibonacci Retracement
          </h2>
          <div style={{ height: 32 }} />
          <div style={{
            background: '#F3E8FF', borderRadius: 28, boxShadow: '0 4px 16px #0002', padding: 36, textAlign: 'center',
            margin: '0 auto', maxWidth: '100%', border: '1.5px solid rgba(103,58,183,0.08)'
          }}>
            <img
              src={'/assets/images/fibinacci.jpeg'}
              alt="Fibonacci Retracement"
              style={{ borderRadius: 16, width: '100%', maxWidth: 500, height: 220, objectFit: 'contain' }}
            />
            <div style={{ height: 24 }} />
            <div style={{ fontSize: 18, color: '#222', lineHeight: 1.5, textAlign: 'center' }}>
              Fibonacci Retracement uses horizontal lines at key ratios (23.6%, 38.2%, 50%, 61.8%, 78.6%) to identify potential support/resistance levels during pullbacks. The chart shows these levels drawn between a swing low and high. Prices often find support/resistance at these levels before continuing the trend. The 61.8% level is particularly significant. Traders watch for price action signals (candlestick patterns, volume) at these levels to confirm reversals. Fibonacci extensions (not shown) project potential profit targets.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 