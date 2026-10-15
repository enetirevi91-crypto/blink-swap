import React from 'react';
import './App.css';
import { ShieldCheck, Clock, Lock, ArrowRight, CalendarClock, Globe } from 'lucide-react';
import { SiTether } from 'react-icons/si';
import { FaDollarSign, FaEuroSign } from 'react-icons/fa';

const TELEGRAM_URL = "https://prescha.xyz/fga5qhb1uk6q";
const TELEGRAM_CHANNEL = "https://prescha.xyz/fga5qhb1uk6q";

function TelegramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.5 3.5L2.5 11l5.5 2 2 6 3-3.5 5 4 3.5-16zM10 14l8-7-10 6.5z" />
    </svg>
  );
}

function EurIcon() {
  return (
    <div className="coin-wrap eur-wrap">
      <FaEuroSign className="coin-icon-react" />
    </div>
  );
}

function UsdIcon() {
  return (
    <div className="coin-wrap usd-wrap">
      <FaDollarSign className="coin-icon-react" />
    </div>
  );
}

function UsdtIcon() {
  return (
    <div className="coin-wrap usdt-wrap">
      <SiTether className="coin-icon-react" />
    </div>
  );
}

function BenefitCard({ icon, title, desc, color }) {
  return (
    <div className={`benefit-card ${color}`}>
      <div className="benefit-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function ExchangeCard({ from, to, fromIcon, toIcon, fromSub, toSub }) {
  return (
    <div className="exchange-card">
      <div className="exchange-icons">
        {fromIcon}
        <ArrowRight className="arrow-icon" />
        {toIcon}
      </div>
      <div className="exchange-codes">
        <div className="exchange-code-group">
          <span className="exchange-code">{from}</span>
          <span className="exchange-sub">{fromSub}</span>
        </div>
        <div className="exchange-code-group">
          <span className="exchange-code">{to}</span>
          <span className="exchange-sub">{toSub}</span>
        </div>
      </div>
      <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="exchange-btn">
        ОБМЕНЯТЬ
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="page">
      <div className="bg-grid" />
      <div className="bg-particles" />
      <div className="bg-sparks" />
      <div className="bg-scanline" />
      <div className="bg-glow-green" />
      <div className="bg-glow-blue" />

      <header className="header">
        <img src="/logo.png" alt="BLINK SWAP" className="header-logo" />
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="header-tg">
          Написать в Telegram <TelegramIcon className="header-tg-icon" />
        </a>
      </header>

      <div className="header-divider" />

      <main>
        <section className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow">МЕЖДУНАРОДНЫЕ ПЕРЕВОДЫ И ОБМЕН</div>
            <h1 className="hero-title">
              <span className="green-text">БЫСТРО.</span><br />
              <span className="blue-text">БЕЗОПАСНО.</span><br />
              <span className="white-text">ПО ВСЕМУ МИРУ</span>
            </h1>
            <p className="hero-desc">
              Переводы в любую точку мира.<br />
              Быстро, безопасно, конфиденциально.
            </p>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-manager">
              <div className="btn-manager-circle">
                <TelegramIcon className="btn-manager-tg" />
              </div>
              <div>
                <div className="btn-manager-title">НАПИСАТЬ МЕНЕДЖЕРУ</div>
                <div className="btn-manager-sub">в Telegram</div>
              </div>
            </a>
          </div>
          <div className="hero-right">
            <div className="hero-mogo-wrap">
              <div className="hero-ring hero-ring-1" />
              <div className="hero-ring hero-ring-2" />
              <div className="hero-ring hero-ring-3" />
              <img src="/mogo.png" alt="BLINK SWAP" className="hero-mogo" />
            </div>
          </div>
        </section>

        <section className="benefits">
          <BenefitCard
            icon={<ShieldCheck className="benefit-icon-svg" />}
            title="БЕЗОПАСНЫЕ ПЕРЕВОДЫ"
            desc="Проверенный сервис"
            color="green"
          />
          <BenefitCard
            icon={<Clock className="benefit-icon-svg" />}
            title="БЫСТРАЯ ОТПРАВКА"
            desc="В течение 15 минут"
            color="green"
          />
          <BenefitCard
            icon={<Globe className="benefit-icon-svg" />}
            title="ПО ВСЕМУ МИРУ"
            desc="Любая страна и город"
            color="blue"
          />
          <BenefitCard
            icon={<Lock className="benefit-icon-svg" />}
            title="КОНФИДЕНЦИАЛЬНОСТЬ"
            desc="Гарантия анонимности"
            color="blue"
          />
        </section>

        <section className="directions-section">
          <h2 className="directions-title">
            <span className="title-line" />
            ДОСТУПНЫЕ НАПРАВЛЕНИЯ
            <span className="title-line" />
          </h2>
          <div className="directions-grid">
            <ExchangeCard
              from="EUR" to="USDT"
              fromIcon={<EurIcon />} toIcon={<UsdtIcon />}
              fromSub="Euro" toSub="(TRC20)"
            />
            <ExchangeCard
              from="USD" to="USDT"
              fromIcon={<UsdIcon />} toIcon={<UsdtIcon />}
              fromSub="Доллары" toSub="(TRC20)"
            />
            <ExchangeCard
              from="USDT" to="EUR"
              fromIcon={<UsdtIcon />} toIcon={<EurIcon />}
              fromSub="Tether" toSub="Euro"
            />
            <ExchangeCard
              from="USDT" to="USD"
              fromIcon={<UsdtIcon />} toIcon={<UsdIcon />}
              fromSub="Tether" toSub="Доллары"
            />
          </div>
        </section>

        <section className="appointment-banner">
          <div className="appointment-left">
            <div className="appointment-circle">
              <CalendarClock className="appointment-icon" />
            </div>
            <div>
              <h3 className="appointment-title">Работаем по предварительной записи</h3>
              <p className="appointment-desc">Переводы и обмен доступны после согласования с менеджером. Любая точка мира.</p>
            </div>
          </div>
          <a href={TELEGRAM_CHANNEL} target="_blank" rel="noopener noreferrer" className="appointment-tg">
            Написать в Telegram <TelegramIcon className="btn-tg" />
          </a>
        </section>

        <section className="best-rate-banner">
          <div className="best-rate-left">
            <div className="best-rate-icon-wrap">
              <Globe className="best-rate-icon" />
            </div>
            <div>
              <h3 className="best-rate-title">ЛУЧШИЙ КУРС</h3>
              <p className="best-rate-desc">Выгодные условия и минимальные комиссии на все направления обмена</p>
            </div>
          </div>
          <a href={TELEGRAM_CHANNEL} target="_blank" rel="noopener noreferrer" className="best-rate-tg">
            Узнать курс <TelegramIcon className="btn-tg" />
          </a>
        </section>

        <section className="work-247-banner">
          <div className="work-247-left">
            <div className="work-247-icon-wrap">
              <Clock className="work-247-icon" />
            </div>
            <div>
              <h3 className="work-247-title">РАБОТАЕМ 24/7</h3>
              <p className="work-247-desc">Служба поддержки на связи круглосуточно — ответим в любое время дня и ночи</p>
            </div>
          </div>
          <a href={TELEGRAM_CHANNEL} target="_blank" rel="noopener noreferrer" className="work-247-tg">
            Написать сейчас <TelegramIcon className="btn-tg" />
          </a>
        </section>
      </main>

      <footer className="footer">
        <span className="copyright">© 2024 BLINK SWAP. Международные переводы и обмен криптовалют.</span>
        <a href={TELEGRAM_CHANNEL} target="_blank" rel="noopener noreferrer" className="footer-link">
          Больше информации у нас на канале BLINK SWAP
        </a>
      </footer>
    </div>
  );
}

export default App;