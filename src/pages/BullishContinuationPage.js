import React from 'react';

function PatternItem({ name, description }) {
  return (
    <div style={{
      marginBottom: 20,
      padding: 16,
      background: 'white',
      border: '1px solid rgba(0,128,0,0.3)',
      borderRadius: 16,
      boxShadow: '0 2px 8px rgba(0,128,0,0.08)',
    }}>
      <div style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>{name}</div>
      <div style={{ height: 8 }} />
      <div style={{ fontSize: 16 }}>{description}</div>
    </div>
  );
}

export default function BullishContinuationPage({ onBack }) {
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
            Bullish Continuation
          </h2>
          <div style={{ height: 32 }} />
          <div style={{
            background: '#F3E8FF', borderRadius: 28, boxShadow: '0 4px 16px #0002', padding: 36, textAlign: 'left',
            margin: '0 auto', maxWidth: '100%', border: '1.5px solid rgba(103,58,183,0.08)'
          }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'purple' }}>
              Bullish Continuation Patterns
            </div>
            <div style={{ height: 16 }} />
            <div style={{ fontSize: 18, fontWeight: 500 }}>
              These patterns suggest the current uptrend is likely to continue:
            </div>
            <div style={{ height: 24 }} />
            <PatternItem
              name="Rising Three Methods"
              description="A long green candle followed by three small red candles that stay within the range of the first candle, then another long green candle."
            />
            <PatternItem
              name="Mat Hold"
              description="A gap up followed by several small candles moving downward, then a strong green candle confirming the continuation."
            />
            <PatternItem
              name="On Neck Line"
              description="A long green candle followed by a small red candle that closes near the low of the first candle."
            />
          </div>
        </div>
      </div>
    </div>
  );
} 