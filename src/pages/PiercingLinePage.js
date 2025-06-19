import React from 'react';

function BulletPoint({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', margin: '4px 0' }}>
      <span style={{ color: 'purple', fontSize: 18, marginRight: 8 }}>&bull;</span>
      <span style={{ fontSize: 16 }}>{text}</span>
    </div>
  );
}

export default function PiercingLinePage({ onBack }) {
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
        <div style={{ maxWidth: 700, margin: '0 auto', padding: 20 }}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', color: 'white', textAlign: 'center', textShadow: '0 2px 8px #0002' }}>
            Piercing Line
          </h2>
          <div style={{ height: 32 }} />
          <div style={{
            background: '#F3E8FF', borderRadius: 28, boxShadow: '0 4px 16px #0002', padding: 36, textAlign: 'center',
            margin: '0 auto', maxWidth: '100%', border: '1.5px solid rgba(103,58,183,0.08)'
          }}>
            <img
              src={'/assets/images/pline.jpeg'}
              alt="Piercing Line"
              style={{ display: 'block', margin: '0 auto 24px auto', width: '100%', maxWidth: '100%', borderRadius: 16, boxShadow: '0 2px 8px #0002' }}
            />
            <div style={{ height: 24 }} />
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'green', textAlign: 'center' }}>
              Piercing Line Pattern
            </div>
            <div style={{ height: 16 }} />
            <div style={{ fontSize: 18, fontWeight: 500, textAlign: 'center' }}>
              The Piercing Line is a bullish reversal pattern consisting of two candles that appears during a downtrend. It has the following characteristics:
            </div>
            <div style={{ height: 16 }} />
            <BulletPoint text="First candle is a strong red (bearish) candle" />
            <BulletPoint text="Second candle opens below the low of the first candle" />
            <BulletPoint text="Second candle closes above the midpoint of the first candle's body" />
            <BulletPoint text="The deeper the penetration into the first candle, the stronger the signal" />
            <div style={{ height: 24 }} />
            <div style={{
              padding: 16,
              background: '#e8f5e9',
              border: '1.5px solid green',
              borderRadius: 16,
              margin: '0 auto',
              maxWidth: 480,
              textAlign: 'left',
            }}>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: 'green', marginBottom: 8 }}>Trading Implications:</div>
              <div style={{ fontSize: 16, lineHeight: 1.5 }}>
                The Piercing Line suggests that the downtrend may be losing momentum as buyers take control. The pattern is more reliable when it occurs after a prolonged downtrend and is confirmed by high volume on the second candle.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 