import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import ForexHistoryPage from './ForexHistoryPage';
import WhatIsForexPage from './WhatIsForexPage';
import CurrencyPairsPage from './CurrencyPairsPage';
import PipsSpreadsPage from './PipsSpreadsPage';
import LeverageMarginPage from './LeverageMarginPage';
import LongShortPage from './LongShortPage';
import MarketHoursPage from './MarketHoursPage';
import FundamentalAnalysisPage from './FundamentalAnalysisPage';
import TechnicalAnalysisIntroPage from './TechnicalAnalysisIntroPage';
import TechnicalAnalysisPage from './TechnicalAnalysisPage';
import RiskManagementPage from './RiskManagementPage';
import TradingPsychologyPage from './TradingPsychologyPage';
import SupportResistancePage from './SupportResistancePage';
import CandlestickBasicsPage from './CandlestickBasicsPage';
import CandlestickPatternsPage from './CandlestickPatternsPage';
import TopCandlesticksPage from './TopCandlesticksPage';
import BottomCandlesticksPage from './BottomCandlesticksPage';
import IndecisionCandlesticksPage from './IndecisionCandlesticksPage';
import BullishEngulfingPage from './BullishEngulfingPage';
import BearishEngulfingPage from './BearishEngulfingPage';
import ShootingStarPage from './ShootingStarPage';
import SpinningTopPage from './SpinningTopPage';
import HighWavePage from './HighWavePage';
import DarkCloudCoverPage from './DarkCloudCoverPage';
import PiercingLinePage from './PiercingLinePage';
import SeparatingLinesPage from './SeparatingLinesPage';
import FallingThreePage from './FallingThreePage';
import RisingThreePage from './RisingThreePage';
import OnNeckLinePage from './OnNeckLinePage';
import TasukiGapPage from './TasukiGapPage';
import MatHoldPage from './MatHoldPage';
import HammerPage from './HammerPage';
import DojiPage from './DojiPage';
import AroonIndicatorPage from './AroonIndicatorPage';
import BollingerBandsPage from './BollingerBandsPage';
import DistributionLinePage from './DistributionLinePage';
import ExponentialMaPage from './ExponentialMaPage';
import IchimokuPage from './IchimokuPage';
import MacdPage from './MacdPage';
import MovingAveragePage from './MovingAveragePage';
import OnBalanceVolumePage from './OnBalanceVolumePage';
import ParabolicSarPage from './ParabolicSarPage';
import PpoPage from './PpoPage';
import RsiPage from './RsiPage';
import StochasticPage from './StochasticPage';
import StandardDeviationPage from './StandardDeviationPage';
import AdxPage from './AdxPage';
import AsideMenu from './AsideMenu';
import EcnBrokersPage from './EcnBrokersPage';
import DisclaimerPage from './DisclaimerPage';
import { useState } from 'react';

function HamburgerIcon({ open }) {
  return (
    <div style={{
      width: 32,
      height: 32,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      cursor: 'pointer',
    }}>
      {[0, 1, 2].map(i => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: 2,
            width: 28,
            height: 2.5,
            borderRadius: 2,
            background: open
              ? 'linear-gradient(90deg, #FFD700 0%, #FFB300 100%)'
              : 'linear-gradient(90deg, #FFD700 0%, #FFB300 100%)',
            boxShadow: open
              ? '0 2px 16px #FFD700cc, 0 0px 8px #FFB30080'
              : '0 2px 16px #FFD70080, 0 0px 8px #FFB30080',
            transition: 'all 0.5s cubic-bezier(.77,0,.18,1)',
            top: i === 0 ? (open ? 15 : 6) : i === 1 ? 15 : (open ? 15 : 24),
            transform:
              open
                ? i === 0
                  ? 'rotate(42deg) scaleX(1.1)'
                  : i === 1
                  ? 'scaleX(0)'
                  : 'rotate(-42deg) scaleX(1.1)'
                : 'none',
            opacity: i === 1 && open ? 0 : 1,
          }}
        />
      ))}
    </div>
  );
}

export default function MainApp() {
  const navigate = useNavigate();
  const [asideOpen, setAsideOpen] = useState(false);
  const location = window.location.pathname;
  const showHamburger = location !== '/';
  return (
    <div style={{ minHeight: '100vh', background: '#faf9fd' }}>
      {showHamburger && (
        <button
          onClick={() => setAsideOpen(true)}
          style={{
            position: 'fixed',
            top: 20,
            left: 20,
            zIndex: 500,
            background: 'linear-gradient(120deg, #0f2027 0%, #2c5364 100%)',
            border: '2.5px solid #FFD700',
            borderRadius: '50%',
            boxShadow:
              '0 4px 32px 0 #FFD70055, 0 0 0 8px #FFB30022',
            width: 62,
            height: 62,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition:
              'background 0.3s, box-shadow 0.3s, border 0.3s, transform 0.2s',
            outline: 'none',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            overflow: 'visible',
          }}
          aria-label="Open menu"
          onMouseOver={e => {
            e.currentTarget.style.background =
              'linear-gradient(120deg, #FFD700 0%, #FFB300 100%)';
            e.currentTarget.style.boxShadow =
              '0 8px 32px #FFD700cc, 0 0 0 14px #FFB30033';
            e.currentTarget.style.border =
              '2.5px solid #0f2027';
            e.currentTarget.style.transform = 'scale(1.10)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'linear-gradient(120deg, #0f2027 0%, #2c5364 100%)';
            e.currentTarget.style.boxShadow =
              '0 4px 32px 0 #FFD70055, 0 0 0 8px #FFB30022';
            e.currentTarget.style.border =
              '2.5px solid #FFD700';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <HamburgerIcon open={asideOpen} />
        </button>
      )}
      <AsideMenu open={asideOpen} onClose={() => setAsideOpen(false)} onNavigate={to => navigate(to)} currentPath={location} />
      <div style={{ paddingTop: 0 }}>
        <Routes>
          <Route path="/" element={<LandingPage onGetStarted={() => navigate('/home')} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/forex-history" element={<ForexHistoryPage onNavigate={route => navigate(`/${route.replace(/Page$/, '').replace(/Intro/, '-intro').toLowerCase()}`)} />} />
          <Route path="/what-is-forex-page" element={<WhatIsForexPage />} />
          <Route path="/ecn-brokers-page" element={<EcnBrokersPage />} />
          <Route path="/currency-pairs-page" element={<CurrencyPairsPage />} />
          <Route path="/pips-spreads-page" element={<PipsSpreadsPage />} />
          <Route path="/leverage-margin-page" element={<LeverageMarginPage />} />
          <Route path="/long-short-page" element={<LongShortPage />} />
          <Route path="/market-hours-page" element={<MarketHoursPage />} />
          <Route path="/fundamental-analysis-page" element={<FundamentalAnalysisPage />} />
          <Route path="/technical-analysis-intro" element={<TechnicalAnalysisIntroPage />} />
          <Route path="/technical-analysis" element={<TechnicalAnalysisPage />} />
          <Route path="/risk-management" element={<RiskManagementPage />} />
          <Route path="/trading-psychology" element={<TradingPsychologyPage />} />
          <Route path="/support-resistance-page" element={<SupportResistancePage />} />
          <Route path="/candlestick-basics-page" element={<CandlestickBasicsPage />} />
          <Route path="/candlestick-patterns" element={<CandlestickPatternsPage />} />
          <Route path="/top-candlesticks-page" element={<TopCandlesticksPage />} />
          <Route path="/bottom-candlesticks-page" element={<BottomCandlesticksPage />} />
          <Route path="/indecision-candlesticks-page" element={<IndecisionCandlesticksPage />} />
          <Route path="/bullish-engulfing-page" element={<BullishEngulfingPage />} />
          <Route path="/bearish-engulfing-page" element={<BearishEngulfingPage />} />
          <Route path="/shooting-star-page" element={<ShootingStarPage />} />
          <Route path="/spinning-top-page" element={<SpinningTopPage />} />
          <Route path="/high-wave-page" element={<HighWavePage />} />
          <Route path="/dark-cloud-cover-page" element={<DarkCloudCoverPage />} />
          <Route path="/piercing-line-page" element={<PiercingLinePage />} />
          <Route path="/separating-lines-page" element={<SeparatingLinesPage />} />
          <Route path="/falling-three-page" element={<FallingThreePage />} />
          <Route path="/rising-three-page" element={<RisingThreePage />} />
          <Route path="/on-neck-line-page" element={<OnNeckLinePage />} />
          <Route path="/tasuki-gap-page" element={<TasukiGapPage />} />
          <Route path="/mat-hold-page" element={<MatHoldPage />} />
          <Route path="/hammer-page" element={<HammerPage />} />
          <Route path="/doji-page" element={<DojiPage />} />
          <Route path="/aroon-indicator-page" element={<AroonIndicatorPage />} />
          <Route path="/bollinger-bands-page" element={<BollingerBandsPage />} />
          <Route path="/distribution-line-page" element={<DistributionLinePage />} />
          <Route path="/exponential-ma-page" element={<ExponentialMaPage />} />
          <Route path="/ichimoku-page" element={<IchimokuPage />} />
          <Route path="/macd-page" element={<MacdPage />} />
          <Route path="/moving-average-page" element={<MovingAveragePage />} />
          <Route path="/on-balance-volume-page" element={<OnBalanceVolumePage />} />
          <Route path="/parabolic-sar-page" element={<ParabolicSarPage />} />
          <Route path="/ppo-page" element={<PpoPage />} />
          <Route path="/rsi-page" element={<RsiPage />} />
          <Route path="/stochastic-page" element={<StochasticPage />} />
          <Route path="/standard-deviation-page" element={<StandardDeviationPage />} />
          <Route path="/adx-page" element={<AdxPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
        </Routes>
      </div>
    </div>
  );
} 