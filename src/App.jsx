import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronUp,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from 'lucide-react'
import { categories, projects } from './data/portfolio.js'
import './App.css'

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

const FORM_ENDPOINT = ''
const asset = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`

const NAV_LINKS = [
  { href: '#works', label: 'Проекты' },
  { href: '#services', label: 'Возможности' },
  { href: '#about', label: 'Студия' },
  { href: '#contacts', label: 'Контакты' },
]

const SERVICES_TICKER = [
  'Кухни',
  'Частные интерьеры',
  'Мебель на заказ',
  'Ритейл',
  'HoReCa',
  'Стекло и зеркала',
]

const CLIENTS = [
  { name: 'Beeline', font: 'Inter, sans-serif', weight: 700 },
  { name: 'SOKOLOV', font: 'Georgia, serif', weight: 600 },
  { name: '585 Золотой', font: 'Inter, sans-serif', weight: 700 },
  { name: 'Giorgio Armani', font: '"Source Serif 4", serif', weight: 600 },
  { name: 'RED Valentino', font: '"Source Serif 4", serif', weight: 600 },
  { name: 'Picart', font: 'Georgia, serif', weight: 500 },
  { name: 'SOHO Restaurant', font: 'Inter, sans-serif', weight: 700 },
  { name: 'Siebel Jewellery', font: 'Georgia, serif', weight: 600 },
]

const SERVICES = [
  {
    n: '01',
    title: 'Кухни',
    text: 'От лаконичных решений до сложных авторских проектов — с точной посадкой по месту и вниманием к каждой линии.',
  },
  {
    n: '02',
    title: 'Мебель для дома',
    text: 'Гардеробные, гостиные, спальни и детские, спроектированные как естественное продолжение интерьера.',
  },
  {
    n: '03',
    title: 'Индивидуальные решения',
    text: 'Нестандартные формы, редкие материалы и сложная инженерия по эскизам архитектора или нашей команды.',
  },
  {
    n: '04',
    title: 'Коммерческие пространства',
    text: 'Ресепшн, офисы, рестораны и общественные зоны, где функциональность работает на впечатление от бренда.',
  },
  {
    n: '05',
    title: 'Стекло и зеркала',
    text: 'Витрины, перегородки, фасады и зеркала с собственной обработкой и аккуратной интеграцией в проект.',
  },
  {
    n: '06',
    title: 'Ритейл',
    text: 'Торговое оборудование для магазинов, салонов и шоурумов — единый стандарт от первого объекта до сети.',
  },
]

const PROCESS = [
  ['01', 'Знакомство', 'Обсуждаем пространство, сценарии жизни, эстетику и ориентиры по бюджету.'],
  ['02', 'Проект', 'Делаем замер, продумываем конструкцию, материалы и визуальную подачу.'],
  ['03', 'Производство', 'Изготавливаем на собственных мощностях и контролируем каждый узел.'],
  ['04', 'Монтаж', 'Доставляем, собираем и сдаём готовый интерьер без разрыва между идеей и реализацией.'],
]

const OGRN = ['11561', '71000', '457'].join('')
const INN = ['61300', '09848'].join('')
const KPP = ['61300', '1001'].join('')
const LEGAL = {
  entity: 'ООО «Мебельный стиль»',
  ogrn: `${OGRN} от 27 мая 2015 г.`,
  inn: INN,
  kpp: KPP,
  address: '346584, Ростовская область, Родионово-Несветайский р-н, с. Генеральское, Советская ул., зд. 4б',
  director: 'Хмелевский Олег Валентинович',
}

function BrandLogo() {
  return <img className="brand-logo" src={asset('logo-dark.png')} alt="Khmelevsky Furniture Studio" />
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#top" aria-label="Khmelevsky Furniture Studio — на главную">
            <BrandLogo />
          </a>

          <button
            className="menu-pill"
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Открыть меню"
            aria-expanded={open}
          >
            Меню
            <ChevronUp size={16} strokeWidth={2.1} />
          </button>
        </div>
      </header>

      <div className={`drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer-top">
          <BrandLogo />
          <button className="menu-pill" type="button" onClick={() => setOpen(false)} aria-label="Закрыть меню">
            Закрыть
            <X size={16} strokeWidth={2.1} />
          </button>
        </div>

        <nav className="drawer-links" aria-label="Основная навигация">
          {NAV_LINKS.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="drawer-link">
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}
          <a href={CONTACTS.telegramHref} target="_blank" rel="noreferrer" className="drawer-contact">
            Начать проект <ArrowUpRight size={20} />
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

function Marquee({ items, renderItem, className = '' }) {
  const loop = [...items, ...items, ...items, ...items]
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span className="marquee-item" key={`${index}-${typeof item === 'string' ? item : item.name}`}>
            {renderItem(item)}
          </span>
        ))}
      </div>
    </div>
  )
}

function LineField({ side }) {
  return (
    <div className={`line-field line-field-${side}`} aria-hidden="true">
      {Array.from({ length: 20 }, (_, index) => (
        <span
          className="curve-line"
          key={index}
          style={{ '--line-index': index, '--line-width': `${60 + index * 10}px` }}
        />
      ))}
    </div>
  )
}

function TopLines() {
  return (
    <div className="top-lines" aria-hidden="true">
      {Array.from({ length: 20 }, (_, index) => (
        <span className="top-line" key={index} style={{ '--line-index': index }} />
      ))}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <LineField side="left" />
      <LineField side="right" />
      <TopLines />

      <div className="hero-content">
        <Marquee
          items={SERVICES_TICKER}
          className="hero-ticker"
          renderItem={(item) => <span className="ticker-chip">{item}</span>}
        />

        <p className="hero-kicker">Мебельная студия полного цикла · {CONTACTS.city}</p>

        <h1 className="hero-title">
          Мебель, созданная <span className="serif italic">для&nbsp;вас</span>
        </h1>

        <p className="hero-subtitle">
          Проектируем и производим индивидуальную мебель для частных и коммерческих интерьеров —
          от первой линии на эскизе до безупречного монтажа.
        </p>

        <div className="hero-cta">
          <a className="btn-primary" href="#works">
            Смотреть проекты
            <ArrowDownRight size={18} strokeWidth={2.2} />
          </a>

          <a className="btn-book" href="#callback">
            <span className="btn-book-avatar"><Phone size={18} strokeWidth={1.9} /></span>
            <span className="btn-book-text">
              <span className="btn-book-primary">Обсудить проект</span>
              <span className="btn-book-secondary"><span className="dot" /> Перезвоним за 15 минут</span>
            </span>
          </a>
        </div>
      </div>

      <div className="hero-blur" aria-hidden="true" />
      <a className="hero-scroll" href="#clients" aria-label="Прокрутить к следующему разделу">
        <span>листайте</span>
        <ArrowDownRight size={16} />
      </a>
    </section>
  )
}

function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="clients-inner">
        <p className="clients-label">Опыт в проектах для частных интерьеров, ритейла и HoReCa</p>
        <Marquee
          items={CLIENTS}
          className="clients-marquee"
          renderItem={(client) => (
            <span className="client-logo" style={{ fontFamily: client.font, fontWeight: client.weight }}>
              {client.name}
            </span>
          )}
        />
      </div>
    </section>
  )
}

function ProjectTile({ project, index }) {
  const [error, setError] = useState(false)
  return (
    <article className={`tile tile-${(index % 4) + 1}`}>
      <div className="tile-media">
        {!error ? (
          <img src={asset(project.image)} alt={project.title} loading="lazy" onError={() => setError(true)} />
        ) : (
          <div className="tile-placeholder">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{project.title}</p>
          </div>
        )}
        <span className="tile-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="tile-arrow"><ArrowUpRight size={18} strokeWidth={1.8} /></span>
      </div>
      <div className="tile-caption">
        <h3>{project.title}</h3>
        <span><MapPin size={13} strokeWidth={1.8} /> {project.location}</span>
      </div>
    </article>
  )
}

function Portfolio() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? projects : projects.filter((project) => project.category === active)

  return (
    <section className="section works" id="works">
      <div className="section-head editorial-head">
        <div>
          <span className="eyebrow">Избранные проекты</span>
          <h2 className="section-title">Пространства с&nbsp;<span className="serif italic">характером</span></h2>
        </div>
        <p className="section-lead">
          Частные и коммерческие интерьеры, где мебель становится частью архитектуры, а не просто заполняет пространство.
        </p>
      </div>

      <div className="filters" aria-label="Фильтр проектов">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`filter ${active === category.key ? 'is-active' : ''}`}
            type="button"
            onClick={() => setActive(category.key)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="tiles">
        {filtered.map((project, index) => <ProjectTile key={project.title} project={project} index={index} />)}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-intro">
          <span className="eyebrow light">Возможности</span>
          <h2 className="section-title light-title">От идеи до&nbsp;<span className="serif italic">последней детали</span></h2>
          <p>Единая команда отвечает за проект, производство и монтаж — поэтому результат остаётся цельным.</p>
        </div>

        <div className="service-list">
          {SERVICES.map((service) => (
            <article className="service-row" key={service.n}>
              <span className="service-n">{service.n}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ArrowUpRight className="service-arrow" size={21} strokeWidth={1.6} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="about-visual">
        <img src={asset('images/portfolio/house-kayani.jpg')} alt="Интерьер, реализованный Khmelevsky Furniture Studio" loading="lazy" />
        <span className="about-stamp">KFS · с 2015</span>
      </div>

      <div className="about-copy">
        <span className="eyebrow">О студии</span>
        <h2 className="section-title">Красота начинается с&nbsp;<span className="serif italic">точности</span></h2>
        <p className="about-lead">
          Khmelevsky Furniture Studio — производство, проектная команда и монтаж в одном процессе.
          Мы создаём мебель, которая точно отвечает архитектуре пространства и ритму жизни владельца.
        </p>
        <p className="about-text">
          Работаем без посредников, соединяем современные технологии с ручным вниманием к материалу
          и не выпускаем из поля зрения ни один этап — от замера до финальной регулировки фасада.
        </p>
        <a className="text-link" href="#contacts">Познакомиться со студией <ArrowUpRight size={18} /></a>
      </div>

      <div className="process-grid">
        {PROCESS.map(([number, title, text]) => (
          <article className="process-step" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CallbackForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')
  const [status, setStatus] = useState('idle')

  const submit = async (event) => {
    event.preventDefault()
    if (!phone.trim()) return
    setStatus('sending')

    if (FORM_ENDPOINT) {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ Имя: name, Телефон: phone, Комментарий: comment }),
        })
        setStatus(response.ok ? 'ok' : 'error')
      } catch {
        setStatus('error')
      }
      return
    }

    const subject = encodeURIComponent('Заявка на обратный звонок с сайта')
    const body = encodeURIComponent(`Имя: ${name || '—'}\nТелефон: ${phone}\nКомментарий: ${comment || '—'}`)
    window.location.href = `${CONTACTS.emailHref}?subject=${subject}&body=${body}`
    setStatus('ok')
  }

  if (status === 'ok') {
    return (
      <div className="form-done">
        <span className="form-done-icon"><Check size={22} strokeWidth={2.2} /></span>
        <p className="form-kicker">Заявка отправлена</p>
        <h3>Спасибо, скоро свяжемся</h3>
        <p>Если удобнее продолжить сейчас — напишите нам в Telegram.</p>
        <a className="btn-primary btn-light" href={CONTACTS.telegramHref} target="_blank" rel="noreferrer">
          Открыть Telegram <ArrowUpRight size={18} />
        </a>
      </div>
    )
  }

  return (
    <form className="callback" onSubmit={submit}>
      <p className="form-kicker">Оставить заявку</p>
      <h3>Давайте обсудим ваш проект</h3>

      <label className="field">
        <span>Ваше имя</span>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Как к вам обращаться" />
      </label>
      <label className="field">
        <span>Телефон *</span>
        <input type="tel" required value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+7 (___) ___-__-__" />
      </label>
      <label className="field">
        <span>Коротко о задаче</span>
        <textarea rows={2} value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Кухня, гардеробная, коммерческий проект…" />
      </label>

      <button className="form-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Отправляем…' : 'Отправить заявку'}
        <ArrowUpRight size={18} />
      </button>
      {status === 'error' && <p className="form-error">Не удалось отправить. Позвоните нам: {CONTACTS.phoneLabel}</p>}
      <p className="form-note">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
    </form>
  )
}

function Contact() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts-inner">
        <div className="contacts-copy">
          <span className="eyebrow light">Контакты</span>
          <h2>Начнём с&nbsp;<span className="serif italic">разговора</span></h2>
          <p>Расскажите об идее, пространстве и желаемых сроках — мы предложим следующий шаг.</p>

          <div className="contact-links">
            <a href={CONTACTS.telegramHref} target="_blank" rel="noreferrer"><Send size={18} /> Telegram <span>{CONTACTS.telegramLabel}</span></a>
            <a href={CONTACTS.phoneHref}><Phone size={18} /> Телефон <span>{CONTACTS.phoneLabel}</span></a>
            <a href={CONTACTS.emailHref}><Mail size={18} /> Почта <span>{CONTACTS.email}</span></a>
            <div><MapPin size={18} /> Город <span>{CONTACTS.city}</span></div>
          </div>
        </div>

        <div id="callback"><CallbackForm /></div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <BrandLogo />
        <p>Индивидуальная мебель и интерьеры полного цикла. {CONTACTS.city}.</p>
        <a className="footer-top" href="#top">Наверх <ChevronUp size={16} /></a>
      </div>

      <div className="footer-meta">
        <nav>{NAV_LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
        <div className="footer-legal">
          <strong>{LEGAL.entity}</strong>
          <span>ОГРН: {LEGAL.ogrn}</span>
          <span>ИНН: {LEGAL.inn} · КПП: {LEGAL.kpp}</span>
          <span>Генеральный директор: {LEGAL.director}</span>
          <span>{LEGAL.address}</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Khmelevsky Furniture Studio</span>
        <span>Все права защищены</span>
      </div>
    </footer>
  )
}

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
