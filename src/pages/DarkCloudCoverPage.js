import React from 'react';

function BulletPoint({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', margin: '4px 0' }}>
      <span style={{ color: 'purple', fontSize: 18, marginRight: 8 }}>&bull;</span>
      <span style={{ fontSize: 16 }}>{text}</span>
    </div>
  );
}

export default function DarkCloudCoverPage({ onBack }) {
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
            Dark Cloud Cover
          </h2>
          <div style={{ height: 32 }} />
          <div style={{
            background: '#F3E8FF', borderRadius: 28, boxShadow: '0 4px 16px #0002', padding: 36, textAlign: 'center',
            margin: '0 auto', maxWidth: '100%', border: '1.5px solid rgba(103,58,183,0.08)'
          }}>
            <img
              src={'/assets/images/dark.jpeg'}
              alt="Dark Cloud Cover"
              style={{ display: 'block', margin: '0 auto 24px auto', width: '100%', maxWidth: '100%', borderRadius: 16, boxShadow: '0 2px 8px #0002' }}
            />
            <div style={{ height: 24 }} />
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'red', textAlign: 'center' }}>
              Dark Cloud Cover Pattern
            </div>
            <div style={{ height: 16 }} />
            <div style={{ fontSize: 18, fontWeight: 500, textAlign: 'center' }}>
              The Dark Cloud Cover is a bearish reversal pattern consisting of two candles that appears during an uptrend. It has the following characteristics:
            </div>
            <div style={{ height: 16 }} />
            <BulletPoint text="First candle is a strong green (bullish) candle" />
            <BulletPoint text="Second candle opens above the high of the first candle" />
            <BulletPoint text="Second candle closes below the midpoint of the first candle's body" />
            <BulletPoint text="The deeper the penetration into the first candle, the stronger the signal" />
            <div style={{ height: 24 }} />
            <div style={{
              padding: 16,
              background: '#fff5f5',
              border: '1px solid red',
              borderRadius: 16,
              textAlign: 'left',
              margin: '0 auto',
              maxWidth: 500
            }}>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>Trading Implications:</div>
              <div style={{ height: 8 }} />
              <div style={{ fontSize: 16, lineHeight: 1.5 }}>
                The Dark Cloud Cover suggests that the uptrend may be losing momentum as sellers take control. The pattern is more reliable when it occurs after a prolonged uptrend and is confirmed by high volume on the second candle.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 