import React, { useEffect, useState } from 'react';

function BrokerSection({ title, icon, color, children, show }) {
  return (
    <div style={{
      background: '#F3E8FF', borderRadius: 28, boxShadow: '0 4px 16px #0002', padding: 36, textAlign: 'left',
      margin: '0 auto', maxWidth: '100%', border: '1.5px solid rgba(103,58,183,0.08)', marginBottom: 32,
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(40px)',
      transition: 'opacity 1.1s 0.2s cubic-bezier(.77,0,.18,1), transform 1.1s 0.2s cubic-bezier(.77,0,.18,1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 38, background: 'rgba(103,58,183,0.08)', borderRadius: '50%', padding: 10, color }}>{icon}</span>
        <span style={{ fontSize: 26, fontWeight: 'bold', color, marginLeft: 16 }}>{title}</span>
      </div>
      {children}
    </div>
  );
}

function BulletPoint({ text, isImportant = false, fontSize = 16 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', margin: '4px 0' }}>
      <span style={{ fontSize: 18, marginRight: 8 }}>&bull;</span>
      <span style={{
        color: isImportant ? 'red' : '#222',
        fontWeight: isImportant ? 'bold' : 500,
        fontSize,
      }}>{text}</span>
    </div>
  );
}

export default function EcnBrokersPage() {
  const [showTitle, setShowTitle] = useState(false);
  const [showEcn, setShowEcn] = useState(false);
  const [showMm, setShowMm] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowTitle(true), 100);
    setTimeout(() => setShowEcn(true), 600);
    setTimeout(() => setShowMm(true), 1200);
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
          Types of Forex Brokers: ECN vs Market Maker
        </h2>
        <div style={{ height: 32 }} />
        <BrokerSection title="ECN Brokers (Electronic Communication Network)" icon="🔗" color="#1976d2" show={showEcn}>
          <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 18 }}>
            How They Work:
          </div>
          <BulletPoint text="Connect traders directly to other market participants (banks, hedge funds, other traders)." fontSize={18} />
          <BulletPoint text="Orders are matched within a network — the broker is not your counterparty." fontSize={18} />
          <div style={{ fontSize: 20, fontWeight: 500, margin: '18px 0 8px 0' }}>
            Pricing & Fees:
          </div>
          <BulletPoint text="Raw market prices with variable (often tight) spreads." fontSize={18} />
          <BulletPoint text="Usually charge a small commission per trade." fontSize={18} />
          <div style={{ fontSize: 20, fontWeight: 500, margin: '18px 0 8px 0' }}>
            Transparency:
          </div>
          <BulletPoint text="High transparency – see real-time market depth and liquidity." fontSize={18} />
          <div style={{ fontSize: 20, fontWeight: 500, margin: '18px 0 8px 0' }}>
            Best For:
          </div>
          <BulletPoint text="Scalpers, news traders, and those who want access to real market conditions." fontSize={18} />
        </BrokerSection>
        <BrokerSection title="Market Maker Brokers" icon="🏦" color="#e96443" show={showMm}>
          <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 18 }}>
            How They Work:
          </div>
          <BulletPoint text="Create their own market and take the opposite side of your trade." fontSize={18} />
          <BulletPoint text="Trades are filled internally — the broker may be your counterparty." fontSize={18} />
          <div style={{ fontSize: 20, fontWeight: 500, margin: '18px 0 8px 0' }}>
            Pricing & Fees:
          </div>
          <BulletPoint text="Usually offer fixed spreads, stable even in volatile markets." fontSize={18} />
          <BulletPoint text="No commissions in most cases — profit is built into the spread." fontSize={18} />
          <div style={{ fontSize: 20, fontWeight: 500, margin: '18px 0 8px 0' }}>
            Transparency:
          </div>
          <BulletPoint text="Lower transparency; prices may not reflect real market conditions." fontSize={18} />
          <div style={{ fontSize: 20, fontWeight: 500, margin: '18px 0 8px 0' }}>
            Best For:
          </div>
          <BulletPoint text="Beginners or casual traders who prefer simplicity and stability." fontSize={18} />
        </BrokerSection>
        
        <BrokerSection title="Recommended ECN Broker: Fusion Markets" icon="⚡" color="#43cea2" show={showMm}>
          <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 18 }}>
            Why Choose Fusion Markets:
          </div>
          <BulletPoint text="Ultra-low $2.25 per side commission - 36% lower than competitors!" fontSize={18} isImportant={true} />
          <BulletPoint text="Average spreads of 0.0 on forex majors" fontSize={18} isImportant={true} />
          <BulletPoint text="No minimum account size required" fontSize={18} />
          <BulletPoint text="No fees on deposits (Visa, MasterCard, PayPal, Skrill & Neteller)" fontSize={18} />
          <BulletPoint text="Lightning-fast execution speed for optimal trading performance" fontSize={18} />
          <BulletPoint text="Regulated by ASIC, VFSC, and FSA Seychelles" fontSize={18} />
          <BulletPoint text="250+ financial products including forex, indices, commodities, and US Share CFDs" fontSize={18} />
          <BulletPoint text="White glove support with dedicated trading specialist" fontSize={18} />
          <div style={{ fontSize: 20, fontWeight: 500, margin: '18px 0 8px 0' }}>
            Perfect For:
          </div>
          <BulletPoint text="Cost-conscious traders who want maximum value" fontSize={18} />
          <BulletPoint text="Scalpers and high-frequency traders" fontSize={18} />
          <BulletPoint text="Anyone looking for transparent, low-cost trading" fontSize={18} />
          <a 
            href="https://fusionmarkets.com/?refcode=99007" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              textDecoration: 'none',
              display: 'block'
            }}
          >
            <div style={{ 
              textAlign: 'center', 
              marginTop: 24, 
              padding: '16px 24px', 
              background: 'linear-gradient(135deg, #43cea2, #185a9d)', 
              borderRadius: 12, 
              boxShadow: '0 4px 12px rgba(67, 206, 162, 0.3)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              <div style={{ 
                color: 'white', 
                fontSize: 22, 
                fontWeight: 'bold'
              }}>
                🚀 Start Trading with Fusion Markets
              </div>
              <div style={{ fontSize: 14, marginTop: 8, opacity: 0.9, color: 'white' }}>
                Get the lowest trading costs in the industry
              </div>
            </div>
          </a>
        </BrokerSection>
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