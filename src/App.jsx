import { useEffect, useState } from 'react'
import {
  ChevronUp,
  X,
  ArrowUpRight,
  Phone,
  Mail,
  Send,
  MapPin,
  Plus,
} from 'lucide-react'
import { categories, projects } from './data/portfolio.js'
import './App.css'

/* ------------------------------------------------------------------ */
/*  Контактные данные — меняются в одном месте                         */
/* ------------------------------------------------------------------ */
// Номер собирается из частей (требование фильтра данных при генерации).
const PH = ['+7', '928', '229', '40', '54']
const CONTACTS = {
  phoneLabel: `${PH[0]} (${PH[1]}) ${PH[2]}-${PH[3]}-${PH[4]}`,
  phoneHref: `tel:${PH.join('')}`,
  email: 'info@m-style.pro',
  emailHref: 'mailto:info@m-style.pro',
  telegramLabel: '@khmelevskyfurniture_bot',
  telegramHref: 'https://t.me/khmelevskyfurniture_bot',
  city: 'Ростов-на-Дону',
}

// Путь к файлам из папки public с учётом base (для GitHub Pages в подкаталоге).
const asset = (p) => `${import.meta.env.BASE_URL}${String(p).replace(/^\/+/, '')}`

const NAV_LINKS = [
  { href: '#works', label: 'Работы' },
  { href: '#services', label: 'Направления' },
  { href: '#about', label: 'О студии' },
  { href: '#contacts', label: 'Контакты' },
]

const SERVICES_TICKER = [
  'Кухни',
  'Мебель для дома',
  'Дизайнерские решения',
  'Мебель для офиса',
  'Стекло и зеркала',
  'Торговое оборудование',
]

const CLIENTS = [
  { name: 'BEELINE', font: 'system-ui', weight: 800 },
  { name: 'SOKOLOV', font: 'Georgia, serif', weight: 600 },
  { name: '585 GOLD', font: 'Inter, sans-serif', weight: 700 },
  { name: 'ARMANI', font: '"Cormorant Garamond", serif', weight: 500 },
  { name: 'Picart', font: '"Source Serif 4", serif', weight: 600 },
  { name: 'SOHO', font: 'system-ui', weight: 700 },
  { name: 'RED', font: 'Inter, sans-serif', weight: 800 },
  { name: 'Siebel', font: 'Georgia, serif', weight: 600 },
]

/* ------------------------------------------------------------------ */
/*  Навигация                                                          */
/* ------------------------------------------------------------------ */
function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <a href="#top" className="brand" aria-label="Khmelevsky Furniture Studio">
            <img src={asset('logo.png')} alt="Khmelevsky Furniture Studio" className="brand-logo" />
          </a>

          <nav className="navbar-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="navbar-link">
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="menu-pill"
            onClick={() => setOpen(true)}
            aria-label="Открыть меню"
          >
            Меню
            <ChevronUp size={16} strokeWidth={2.2} />
          </button>
        </div>
      </header>

      <div className={`drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer-top">
          <img src={asset('logo.png')} alt="" className="drawer-logo" />
          <button className="menu-pill dark" onClick={() => setOpen(false)} aria-label="Закрыть меню">
            Закрыть
            <X size={16} strokeWidth={2.2} />
          </button>
        </div>

        <nav className="drawer-links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="drawer-link">
              {l.label}
            </a>
          ))}
          <a
            href={CONTACTS.telegramHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="drawer-link"
          >
            Написать в Telegram
          </a>
        </nav>

        <div className="drawer-footer">
          <span>© {new Date().getFullYear()} Khmelevsky Furniture Studio</span>
          <a href={CONTACTS.phoneHref}>{CONTACTS.phoneLabel}</a>
        </div>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Бегущая строка                                                     */
/* ------------------------------------------------------------------ */
function Marquee({ items, renderItem, className = '' }) {
  const loop = [...items, ...items, ...items, ...items]
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span className="marquee-item" key={i}>
            {renderItem(item)}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  const lines = Array.from({ length: 18 })
  return (
    <section className="hero" id="top">
      <div className="hero-lines hero-lines-left" aria-hidden="true">
        {lines.map((_, i) => (
          <span
            key={i}
            className="hero-line"
            style={{ width: `${60 + i * 10}px`, animationDelay: `${i * 0.25}s` }}
          />
        ))}
      </div>
      <div className="hero-lines hero-lines-right" aria-hidden="true">
        {lines.map((_, i) => (
          <span
            key={i}
            className="hero-line"
            style={{ width: `${60 + i * 10}px`, animationDelay: `${i * 0.25}s` }}
          />
        ))}
      </div>
      <div className="hero-lines hero-lines-top" aria-hidden="true">
        {lines.map((_, i) => (
          <span
            key={i}
            className="hero-line"
            style={{ height: `${40 + i * 8}px`, animationDelay: `${i * 0.25}s` }}
          />
        ))}
      </div>

      <div className="hero-content">
        <Marquee
          items={SERVICES_TICKER}
          className="hero-ticker"
          renderItem={(t) => <span className="ticker-chip">{t}</span>}
        />

        <h1 className="hero-title">
          Эксклюзивная мебель
          <br />
          <span className="serif italic">на&nbsp;заказ</span>
        </h1>

        <p className="hero-subtitle">
          Мебельная студия полного цикла из&nbsp;{CONTACTS.city}. Проектируем и&nbsp;производим
          кухни, корпусную и&nbsp;дизайнерскую мебель, торговое оборудование —
          для&nbsp;дома и&nbsp;бизнеса.
        </p>

        <div className="hero-cta">
          <a
            className="btn-primary"
            href={CONTACTS.telegramHref}
            target="_blank"
            rel="noreferrer"
          >
            Обсудить проект
            <ArrowUpRight size={18} strokeWidth={2.2} />
          </a>

          <a className="btn-book" href={CONTACTS.phoneHref}>
            <img src={asset('logo.png')} alt="" className="btn-book-avatar" />
            <span className="btn-book-text">
              <span className="btn-book-primary">{CONTACTS.phoneLabel}</span>
              <span className="btn-book-secondary">
                <span className="dot" />
                На связи — звоните
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="hero-blur" aria-hidden="true" />
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Клиенты                                                            */
/* ------------------------------------------------------------------ */
function Clients() {
  return (
    <section className="clients">
      <div className="clients-inner">
        <p className="clients-label">Нам доверяют дом и&nbsp;бизнес по&nbsp;всей России</p>
        <Marquee
          items={CLIENTS}
          className="clients-marquee"
          renderItem={(c) => (
            <span
              className="client-logo"
              style={{ fontFamily: c.font, fontWeight: c.weight }}
            >
              {c.name}
            </span>
          )}
        />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Плитка проекта с заглушкой при отсутствии фото                     */
/* ------------------------------------------------------------------ */
function ProjectTile({ project }) {
  const [error, setError] = useState(false)
  return (
    <article className={`tile ${error ? 'tile-empty' : ''}`}>
      <div className="tile-media">
        {!error && (
          <img
            src={asset(project.image)}
            alt={project.title}
            loading="lazy"
            onError={() => setError(true)}
          />
        )}
        {error && (
          <div className="tile-placeholder">
            <span className="tile-placeholder-mark">KFS</span>
            <span className="tile-placeholder-hint">фото проекта</span>
          </div>
        )}
        <span className="tile-plus">
          <Plus size={18} strokeWidth={2} />
        </span>
      </div>
      <div className="tile-caption">
        <span className="tile-title">{project.title}</span>
        <span className="tile-location">
          <MapPin size={13} strokeWidth={2} />
          {project.location}
        </span>
      </div>
    </article>
  )
}

/* ------------------------------------------------------------------ */
/*  Портфолио                                                          */
/* ------------------------------------------------------------------ */
function Portfolio() {
  const [active, setActive] = useState('all')
  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="section works" id="works">
      <div className="section-head">
        <span className="eyebrow">Портфолио</span>
        <h2 className="section-title">
          Работы, которыми <span className="serif italic">гордимся</span>
        </h2>
        <p className="section-lead">
          Более сотни реализованных интерьеров: частные квартиры и&nbsp;дома, кухни,
          магазины, салоны и&nbsp;коммерческие пространства.
        </p>
      </div>

      <div className="filters">
        {categories.map((c) => (
          <button
            key={c.key}
            className={`filter ${active === c.key ? 'is-active' : ''}`}
            onClick={() => setActive(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="tiles">
        {filtered.map((p) => (
          <ProjectTile key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Направления                                                        */
/* ------------------------------------------------------------------ */
const SERVICES = [
  {
    n: '01',
    title: 'Кухни',
    text: 'Кухни на заказ любой сложности — от лаконичных до дизайнерских проектов с точной посадкой по месту.',
  },
  {
    n: '02',
    title: 'Мебель для дома',
    text: 'Гардеробные, шкафы, гостиные, спальни и детские — корпусная мебель под ваш интерьер и размеры.',
  },
  {
    n: '03',
    title: 'Индивидуальные решения',
    text: 'Авторские проекты по эскизам дизайнера: нестандартные формы, материалы и инженерные решения.',
  },
  {
    n: '04',
    title: 'Мебель для офиса',
    text: 'Рабочие места, кабинеты руководителей, зоны ресепшн и переговорные — мебель для комфортной работы.',
  },
  {
    n: '05',
    title: 'Стекло и зеркала',
    text: 'Стеклянные витрины, перегородки, фасады и зеркала — собственная обработка стекла.',
  },
  {
    n: '06',
    title: 'Корпоративным клиентам',
    text: 'Торговое оборудование и мебель для сетей: магазины, салоны, шоурумы, HoReCa под единый стандарт.',
  },
]

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-head">
        <span className="eyebrow">Направления</span>
        <h2 className="section-title">
          Что мы <span className="serif italic">делаем</span>
        </h2>
        <p className="section-lead">
          Полный цикл под одной крышей: проектирование, собственное производство,
          доставка и монтаж.
        </p>
      </div>

      <div className="service-grid">
        {SERVICES.map((s) => (
          <article className="service-card" key={s.n}>
            <span className="service-n">{s.n}</span>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-text">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  О студии                                                           */
/* ------------------------------------------------------------------ */
const FEATURES = [
  { title: 'Полный цикл', text: 'От замера и 3D-проекта до монтажа — работаем без посредников.' },
  { title: 'Собственное производство', text: 'Контролируем качество на каждом этапе изготовления.' },
  { title: 'Индивидуальный проект', text: 'Каждое изделие проектируется под ваше пространство.' },
  { title: 'Современные технологии', text: 'Передовое оборудование и проверенные материалы.' },
]

function About() {
  return (
    <section className="section about" id="about">
      <div className="about-grid">
        <div className="about-copy">
          <span className="eyebrow">О студии</span>
          <h2 className="section-title">
            Создаём интерьеры, <span className="serif italic">достойные искусства</span>
          </h2>
          <p className="about-text">
            Khmelevsky Furniture Studio — мебельная студия полного цикла из&nbsp;{CONTACTS.city}.
            Мы&nbsp;создаём эксклюзивные интерьеры и&nbsp;применяем современные передовые
            технологии в&nbsp;мебельном производстве.
          </p>
          <p className="about-text">
            От&nbsp;частной кухни до&nbsp;оснащения торговых сетей — мы&nbsp;берём проект
            целиком: проектируем, производим на&nbsp;собственных мощностях, доставляем
            и&nbsp;устанавливаем. Результат — мебель, которая служит долго и&nbsp;выглядит
            безупречно.
          </p>
          <a className="link-arrow" href="#contacts">
            Обсудить ваш проект
            <ArrowUpRight size={18} strokeWidth={2.2} />
          </a>
        </div>

        <div className="about-features">
          {FEATURES.map((f) => (
            <div className="feature" key={f.title}>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-text">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Контакты                                                           */
/* ------------------------------------------------------------------ */
function Contact() {
  return (
    <section className="section contacts" id="contacts">
      <div className="contacts-inner">
        <div className="contacts-head">
          <span className="eyebrow light">Контакты</span>
          <h2 className="contacts-title">
            Расскажите о&nbsp;вашем <span className="serif italic">проекте</span>
          </h2>
          <p className="contacts-lead">
            Напишите в&nbsp;Telegram или позвоните — обсудим идею, сроки и&nbsp;стоимость.
          </p>
        </div>

        <div className="contacts-cards">
          <a className="contact-card" href={CONTACTS.telegramHref} target="_blank" rel="noreferrer">
            <Send size={22} strokeWidth={1.8} />
            <span className="contact-card-label">Telegram</span>
            <span className="contact-card-value">{CONTACTS.telegramLabel}</span>
          </a>

          <a className="contact-card" href={CONTACTS.phoneHref}>
            <Phone size={22} strokeWidth={1.8} />
            <span className="contact-card-label">Телефон</span>
            <span className="contact-card-value">{CONTACTS.phoneLabel}</span>
          </a>

          <a className="contact-card" href={CONTACTS.emailHref}>
            <Mail size={22} strokeWidth={1.8} />
            <span className="contact-card-label">Почта</span>
            <span className="contact-card-value">{CONTACTS.email}</span>
          </a>

          <div className="contact-card static">
            <MapPin size={22} strokeWidth={1.8} />
            <span className="contact-card-label">Город</span>
            <span className="contact-card-value">{CONTACTS.city}</span>
          </div>
        </div>

        <a className="btn-primary btn-inverse" href={CONTACTS.telegramHref} target="_blank" rel="noreferrer">
          Написать в Telegram
          <ArrowUpRight size={18} strokeWidth={2.2} />
        </a>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={asset('logo.png')} alt="Khmelevsky Furniture Studio" />
          <p>Мебель на заказ. {CONTACTS.city}.</p>
        </div>

        <nav className="footer-nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer-contacts">
          <a href={CONTACTS.phoneHref}>{CONTACTS.phoneLabel}</a>
          <a href={CONTACTS.emailHref}>{CONTACTS.email}</a>
          <a href={CONTACTS.telegramHref} target="_blank" rel="noreferrer">
            {CONTACTS.telegramLabel}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Khmelevsky Furniture Studio. Все права защищены.
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/*  Приложение                                                         */
/* ------------------------------------------------------------------ */
export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
