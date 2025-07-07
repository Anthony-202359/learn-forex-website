import React from 'react';

export default function DisclaimerPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #e96443, #904e95, #43cea2, #185a9d)',
      backgroundSize: '400% 400%',
      animation: 'gradientBG 12s ease-in-out infinite',
      padding: 32,
    }}>
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
        }}>
          Disclaimer
        </h2>
        <div style={{ height: 24 }} />
        <div style={{ fontSize: 18, color: '#222', background: '#fff8', borderRadius: 18, padding: 24, textAlign: 'left', boxShadow: '0 2px 8px #0001' }}>
          <p>
            The information provided on this website is for educational purposes only and does not constitute financial or investment advice. While we aim to share accurate and helpful insights about forex trading, trading in financial markets involves risk and may not be suitable for all individuals.
          </p>
          <p>
            We strongly encourage you to conduct your own research, seek advice from certified financial professionals, and fully understand the risks before making any trading or investment decisions. Your financial choices should be based on your personal objectives, risk tolerance, and financial situation.
          </p>
          <p>
            By using this site, you acknowledge that you are responsible for your own financial decisions and outcomes.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes gradientBG {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
      `}</style>
    </div>
  );
} 