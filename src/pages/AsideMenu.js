import React, { useState } from 'react';

const sectionStyles = [
  {
    label: 'Forex Basics',
    color: '#e96443',
    bg: 'rgba(233,100,67,0.07)',
    icon: '💱',
  },
  {
    label: 'Technical Analysis',
    color: '#904e95',
    bg: 'rgba(144,78,149,0.07)',
    icon: '📊',
  },
  {
    label: 'Candlestick Patterns',
    color: '#fbc02d',
    bg: 'rgba(251,192,45,0.07)',
    icon: '🕯️',
  },
  {
    label: 'Indicators',
    color: '#1976d2',
    bg: 'rgba(25,118,210,0.07)',
    icon: '📈',
  },
];

const sections = [
  {
    label: 'Forex Basics',
    links: [
      { to: '/what-is-forex-page', label: 'What is Forex?' },
      { to: '/ecn-brokers-page', label: 'ECN vs Market Maker Brokers' },
      { to: '/currency-pairs-page', label: 'Currency Pairs' },
      { to: '/pips-spreads-page', label: 'Pips & Spreads' },
      { to: '/leverage-margin-page', label: 'Leverage & Margin' },
      { to: '/long-short-page', label: 'Long vs. Short' },
      { to: '/market-hours-page', label: 'Market Hours' },
      { to: '/fundamental-analysis-page', label: 'Fundamental Analysis' },
      { to: '/risk-management', label: 'Risk Management' },
      { to: '/trading-psychology', label: 'Psychology' },
    ],
  },
  {
    label: 'Technical Analysis',
    links: [
      { to: '/technical-analysis-intro', label: 'Intro to Technical Analysis' },
      { to: '/support-resistance-page', label: 'Support & Resistance' },
    ],
  },
  {
    label: 'Candlestick Patterns',
    links: [
      { to: '/candlestick-basics-page', label: 'Candlestick Basics' },
      { to: '/top-candlesticks-page', label: 'Top Reversal Patterns' },
      { to: '/bottom-candlesticks-page', label: 'Bottom Reversal Patterns' },
      { to: '/indecision-candlesticks-page', label: 'Indecision Patterns' },
      { to: '/bullish-engulfing-page', label: 'Bullish Engulfing' },
      { to: '/bearish-engulfing-page', label: 'Bearish Engulfing' },
      { to: '/shooting-star-page', label: 'Shooting Star' },
      { to: '/spinning-top-page', label: 'Spinning Top' },
      { to: '/high-wave-page', label: 'High Wave' },
      { to: '/dark-cloud-cover-page', label: 'Dark Cloud Cover' },
      { to: '/piercing-line-page', label: 'Piercing Line' },
      { to: '/separating-lines-page', label: 'Separating Lines' },
      { to: '/falling-three-page', label: 'Falling Three' },
      { to: '/rising-three-page', label: 'Rising Three' },
      { to: '/on-neck-line-page', label: 'On Neck Line' },
      { to: '/tasuki-gap-page', label: 'Tasuki Gap' },
      { to: '/mat-hold-page', label: 'Mat Hold' },
      { to: '/hammer-page', label: 'Hammer' },
      { to: '/doji-page', label: 'Doji' },
    ],
  },
  {
    label: 'Indicators',
    links: [
      { to: '/aroon-indicator-page', label: 'Aroon Indicator' },
      { to: '/bollinger-bands-page', label: 'Bollinger Bands' },
      { to: '/distribution-line-page', label: 'Distribution Line' },
      { to: '/exponential-ma-page', label: 'Exponential MA' },
      { to: '/ichimoku-page', label: 'Ichimoku' },
      { to: '/macd-page', label: 'MACD' },
      { to: '/moving-average-page', label: 'Moving Average' },
      { to: '/on-balance-volume-page', label: 'On Balance Volume' },
      { to: '/parabolic-sar-page', label: 'Parabolic SAR' },
      { to: '/ppo-page', label: 'PPO' },
      { to: '/rsi-page', label: 'RSI' },
      { to: '/stochastic-page', label: 'Stochastic' },
      { to: '/standard-deviation-page', label: 'Standard Deviation' },
      { to: '/adx-page', label: 'ADX' },
    ],
  },
];

export default function AsideMenu({ open, onClose, onNavigate, currentPath }) {
  const [search, setSearch] = useState('');

  // Filtered sections based on search
  const filteredSections = search.trim()
    ? sections
        .map(section => ({
            ...section,
            links: section.links.filter(link => link.label.toLowerCase().includes(search.trim().toLowerCase())),
          }))
        .filter(section => section.links.length > 0)
    : sections;

  const hasResults = filteredSections.some(section => section.links.length > 0);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: open ? 'rgba(0,0,0,0.25)' : 'transparent',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s',
          zIndex: 200,
        }}
      />
      {/* Drawer */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '96vh',
          width: 320,
          maxWidth: '90vw',
          background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
          boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderRadius: '0 24px 24px 0',
          border: '1.5px solid rgba(255,255,255,0.25)',
          zIndex: 300,
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s',
          display: 'flex',
          flexDirection: 'column',
          margin: '2vh 0',
        }}
      >
        {/* Header with gradient and logo */}
        <div style={{
          background: 'linear-gradient(135deg, #e96443 0%, #904e95 100%)',
          padding: '36px 0 24px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          boxShadow: '0 4px 24px #904e9540',
        }}>
          <img src="/assets/images/forex.jpeg" alt="Logo" style={{ height: 54, borderRadius: 14, marginBottom: 12, boxShadow: '0 2px 8px #0003' }} />
          <span style={{ fontWeight: 'bold', fontSize: 26, color: 'white', letterSpacing: 1, textShadow: '0 2px 8px #0002' }}>B. Algo FX</span>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 14,
              right: 14,
              background: 'rgba(255,255,255,0.18)',
              border: 'none',
              borderRadius: '50%',
              fontSize: 28,
              color: 'white',
              cursor: 'pointer',
              width: 38,
              height: 38,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px #0002',
              transition: 'background 0.2s',
            }}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        {/* Search box */}
        <div style={{ padding: '20px 24px 0 24px', background: 'transparent', boxShadow: 'none', zIndex: 2 }}>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search topics..."
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: 14,
              border: '1.5px solid #e0e0e0',
              fontSize: 17,
              outline: 'none',
              marginBottom: 6,
              background: 'rgba(255,255,255,0.5)',
              boxShadow: '0 2px 8px #e9644322',
              transition: 'border 0.2s, box-shadow 0.2s',
            }}
            onFocus={e => e.target.style.border = '1.5px solid #e96443'}
            onBlur={e => e.target.style.border = '1.5px solid #e0e0e0'}
            autoFocus={open}
          />
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 10px 18px 10px' }}>
          {hasResults ? (
            filteredSections.map((section, idx) => {
              const style = sectionStyles.find(s => s.label === section.label) || {};
              return (
                <div
                  key={section.label}
                  style={{
                    marginBottom: 32,
                    borderLeft: `6px solid ${style.color || '#eee'}`,
                    background: style.bg || 'transparent',
                    borderRadius: 16,
                    boxShadow: '0 2px 12px #0001',
                    padding: '14px 0 14px 0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: style.color || '#904e95', fontSize: 18, marginBottom: 12, paddingLeft: 18, letterSpacing: 0.5, textShadow: '0 2px 8px #0001' }}>
                    <span style={{ fontSize: 22, marginRight: 10 }}>{style.icon}</span>
                    {section.label}
                  </div>
                  {section.links.map(link => (
                    <div
                      key={link.to}
                      onClick={() => { onNavigate(link.to); }}
                      style={{
                        padding: '12px 0 12px 32px',
                        borderRadius: 10,
                        color: link.to === currentPath ? 'white' : '#333',
                        fontSize: 17,
                        cursor: 'pointer',
                        marginBottom: 3,
                        marginRight: 8,
                        marginLeft: 2,
                        transition: 'background 0.25s, color 0.25s, box-shadow 0.25s',
                        background: link.to === currentPath ? `linear-gradient(90deg, ${style.color || '#904e95'} 60%, #43cea2 100%)` : 'transparent',
                        boxShadow: link.to === currentPath ? '0 4px 18px #43cea255, 0 1.5px 8px #904e9540' : 'none',
                        borderLeft: link.to === currentPath ? '5px solid #fff' : '5px solid transparent',
                        fontWeight: link.to === currentPath ? 800 : 500,
                        filter: link.to === currentPath ? 'brightness(1.08) drop-shadow(0 2px 8px #43cea2aa)' : 'none',
                        outline: link.to === currentPath ? '2px solid #43cea2' : 'none',
                      }}
                      onMouseOver={e => e.currentTarget.style.background = link.to === currentPath ? `linear-gradient(90deg, ${style.color || '#904e95'} 60%, #43cea2 100%)` : (style.bg || '#f3e8ff')}
                      onMouseOut={e => e.currentTarget.style.background = link.to === currentPath ? `linear-gradient(90deg, ${style.color || '#904e95'} 60%, #43cea2 100%)` : 'transparent'}
                    >
                      {link.label}
                    </div>
                  ))}
                </div>
              );
            })
          ) : (
            <div style={{ color: '#b71c1c', fontWeight: 500, fontSize: 18, textAlign: 'center', marginTop: 32 }}>
              No results found
            </div>
          )}
        </div>
      </aside>
    </>
  );
} 