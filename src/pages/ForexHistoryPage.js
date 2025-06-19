import React from 'react';

const concepts = [
  { title: '1. What is Forex Trading?', icon: '❓', color: 'blue', route: 'WhatIsForexPage' },
  { title: '2. Understanding Currency Pairs', icon: '💱', color: 'green', route: 'CurrencyPairsPage' },
  { title: '3. Pips and Spreads', icon: '📈', color: 'purple', route: 'PipsSpreadsPage' },
  { title: '4. Leverage and Margin (Risk!)', icon: '⚠️', color: 'red', route: 'LeverageMarginPage' },
  { title: '5. Going Long vs. Short', icon: '🔁', color: 'orange', route: 'LongShortPage' },
  { title: '6. Forex Market Hours', icon: '⏰', color: 'teal', route: 'MarketHoursPage' },
  { title: '7. Fundamental Analysis', icon: '📊', color: 'indigo', route: 'FundamentalAnalysisPage' },
  { title: '8. Technical Analysis', icon: '📉', color: 'blue', route: 'TechnicalAnalysisIntroPage' },
  { title: '9. Risk Management (Critical!)', icon: '🛡️', color: 'red', route: 'RiskManagementPage' },
  { title: '10. Trading Psychology', icon: '🧠', color: 'purple', route: 'TradingPsychologyPage' },
];

function ConceptCard({ title, icon, color, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: '#F3E8FF',
        borderRadius: 28,
        boxShadow: '0 4px 16px #0002',
        border: '1.5px solid rgba(103,58,183,0.08)',
        marginBottom: 24,
        display: 'flex',
        alignItems: 'center',
        padding: '24px 12px',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s',
      }}
    >
      <span style={{ fontSize: 40, color, marginRight: 24 }}>{icon}</span>
      <span style={{ fontWeight: 'bold', fontSize: 20, flex: 1, textAlign: 'center' }}>{title}</span>
      <span style={{ color: 'purple', fontSize: 22, marginLeft: 24 }}>→</span>
    </div>
  );
}

export default function ForexHistoryPage({ onNavigate }) {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #e96443 0%, #904e95 100%)',
      position: 'relative',
      overflowX: 'hidden',
    }}>
      <div style={{ paddingTop: 100, paddingBottom: 40 }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: 20 }}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', color: 'white', textAlign: 'center', textShadow: '0 2px 8px #0002' }}>
            Forex Concepts & History
          </h2>
          <div style={{ height: 32 }} />
          {concepts.map((concept) => (
            <ConceptCard
              key={concept.route}
              title={concept.title}
              icon={concept.icon}
              color={concept.color}
              onClick={() => onNavigate && onNavigate(concept.route)}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 