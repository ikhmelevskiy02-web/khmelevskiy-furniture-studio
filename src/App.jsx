import { useEffect, useRef, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Factory,
  Mail,
  MapPin,
  Minus,
  Phone,
  Plus,
  RotateCcw,
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

const ASSET_VERSION = '20260719-1'
const asset = (path) => {
  const normalizedPath = String(path).replace(/^\/+/, '')
  const url = `${import.meta.env.BASE_URL}${normalizedPath}`
  return /\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(normalizedPath) ? `${url}?v=${ASSET_VERSION}` : url
}

const NAV_LINKS = [
  { href: '#works', label: 'Проекты' },
  { href: '#services', label: 'Возможности' },
  { href: '#production', label: 'Производство' },
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
  { name: 'Beeline', font: 'Manrope, sans-serif', weight: 700 },
  { name: 'SOKOLOV', font: 'Georgia, serif', weight: 600 },
  { name: '585 Золотой', font: 'Manrope, sans-serif', weight: 700 },
  { name: 'Giorgio Armani', font: '"Cormorant Garamond", serif', weight: 600 },
  { name: 'RED Valentino', font: '"Cormorant Garamond", serif', weight: 600 },
  { name: 'Picart', font: 'Georgia, serif', weight: 500 },
  { name: 'SOHO Restaurant', font: 'Manrope, sans-serif', weight: 700 },
  { name: 'Siebel Jewellery', font: 'Georgia, serif', weight: 600 },
]

const SERVICES = [
  {
    n: '01',
    title: 'Кухни',
    text: 'От лаконичных решений до сложных авторских проектов — с точной посадкой по месту и вниманием к каждой линии.',
    image: 'images/workshop/workshop-kitchens.webp',
    note: 'Точность до миллиметра',
  },
  {
    n: '02',
    title: 'Мебель для дома',
    text: 'Гардеробные, гостиные, спальни и детские, спроектированные как естественное продолжение интерьера.',
    image: 'images/portfolio/apt-alye-parusa.jpg',
    note: 'В ритме вашего дома',
  },
  {
    n: '03',
    title: 'Индивидуальные решения',
    text: 'Нестандартные формы, редкие материалы и сложная инженерия по эскизам архитектора или нашей команды.',
    image: 'images/workshop/workshop-custom-solutions.webp',
    note: 'Без типовых модулей',
  },
  {
    n: '04',
    title: 'Коммерческие пространства',
    text: 'Ресепшн, офисы, рестораны и общественные зоны, где функциональность работает на впечатление от бренда.',
    image: 'images/workshop/workshop-commercial.webp',
    note: 'Функция становится образом',
  },
  {
    n: '05',
    title: 'Стекло и зеркала',
    text: 'Витрины, перегородки, фасады и зеркала с собственной обработкой и аккуратной интеграцией в проект.',
    image: 'images/workshop/workshop-glass-mirrors.webp',
    note: 'Свет как материал',
  },
  {
    n: '06',
    title: 'Двери',
    text: 'Межкомнатные двери, скрытые полотна и декоративные порталы, выполненные в единой стилистике с интерьером.',
    image: 'images/workshop/workshop-doors.webp',
    note: 'Продолжение архитектуры',
  },
  {
    n: '07',
    title: 'Ритейл',
    text: 'Торговое оборудование для магазинов, салонов и шоурумов — единый стандарт от первого объекта до сети.',
    image: 'images/portfolio/salon-avenue23.jpg',
    note: 'Пространство работает на бренд',
  },
]

const PRODUCTION_ADDRESS = 'Ростовская область, Родионово-Несветайский район, Волошинское сельское поселение, село Генеральское, Советская улица, 4Б/2'
const PRODUCTION_MAP_URL = `https://yandex.ru/map-widget/v1/?mode=search&text=${encodeURIComponent(PRODUCTION_ADDRESS)}&z=15`
const PRODUCTION_MAP_LINK = `https://yandex.ru/maps/?mode=search&text=${encodeURIComponent(PRODUCTION_ADDRESS)}`

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
      <div className="hero-mobile-art" aria-hidden="true">
        <span className="mobile-orbit mobile-orbit-a" />
        <span className="mobile-orbit mobile-orbit-b" />
        <span className="mobile-orbit mobile-orbit-c" />
        <span className="mobile-art-core"><i>KFS</i></span>
      </div>

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

          <a className="btn-book" href={CONTACTS.telegramHref} target="_blank" rel="noreferrer">
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
        <div className="clients-copy">
          <span className="clients-kicker">Опыт студии</span>
          <p className="clients-label">Частные интерьеры, ритейл и HoReCa (гостиницы, рестораны и кафе)</p>
        </div>
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

function ZoomableImage({ className = '', onOpen, ...props }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onOpen()
    }
  }

  return (
    <img
      {...props}
      className={`${className} zoomable-image`.trim()}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
    />
  )
}

function ImageLightbox({ gallery, onClose }) {
  const [activeImage, setActiveImage] = useState(gallery.index ?? 0)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const closeButton = useRef(null)
  const gesture = useRef(null)
  const dragged = useRef(false)
  const images = gallery.images
  const isGallery = images.length > 1
  const minScale = 1
  const maxScale = 5

  const applyScale = (nextScale) => {
    const normalized = Math.min(maxScale, Math.max(minScale, nextScale))
    setScale(normalized)
    if (normalized === minScale) setPosition({ x: 0, y: 0 })
  }

  const zoomBy = (amount) => applyScale(scale + amount)
  const resetView = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const showImage = (nextIndex) => {
    setActiveImage((nextIndex + images.length) % images.length)
  }

  useEffect(() => {
    resetView()
  }, [activeImage])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && isGallery) {
        setActiveImage((current) => (current - 1 + images.length) % images.length)
      }
      if (event.key === 'ArrowRight' && isGallery) {
        setActiveImage((current) => (current + 1) % images.length)
      }
      if (event.key === '+' || event.key === '=') {
        event.preventDefault()
        setScale((current) => Math.min(maxScale, current + 0.5))
      }
      if (event.key === '-') {
        event.preventDefault()
        setScale((current) => {
          const next = Math.max(minScale, current - 0.5)
          if (next === minScale) setPosition({ x: 0, y: 0 })
          return next
        })
      }
      if (event.key === '0') {
        event.preventDefault()
        setScale(1)
        setPosition({ x: 0, y: 0 })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [images.length, isGallery, onClose])

  const getTouchDistance = (touches) => {
    const first = touches[0]
    const second = touches[1]
    return Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY)
  }

  const handleTouchStart = (event) => {
    dragged.current = false
    if (event.touches.length === 2) {
      gesture.current = {
        mode: 'pinch',
        distance: getTouchDistance(event.touches),
        scale,
      }
      return
    }

    const touch = event.touches[0]
    if (!touch) return
    gesture.current = {
      mode: scale > 1 ? 'pan' : 'swipe',
      x: touch.clientX,
      y: touch.clientY,
      originX: position.x,
      originY: position.y,
    }
  }

  const handleTouchMove = (event) => {
    if (!gesture.current) return

    if (gesture.current.mode === 'pinch' && event.touches.length === 2) {
      event.preventDefault()
      const ratio = getTouchDistance(event.touches) / gesture.current.distance
      applyScale(gesture.current.scale * ratio)
      dragged.current = true
      return
    }

    if (gesture.current.mode === 'pan' && event.touches.length === 1) {
      event.preventDefault()
      const touch = event.touches[0]
      setPosition({
        x: gesture.current.originX + touch.clientX - gesture.current.x,
        y: gesture.current.originY + touch.clientY - gesture.current.y,
      })
      dragged.current = true
    }
  }

  const handleTouchEnd = (event) => {
    if (!gesture.current) return

    if (event.touches.length === 1 && gesture.current.mode === 'pinch') {
      const touch = event.touches[0]
      gesture.current = {
        mode: scale > 1 ? 'pan' : 'swipe',
        x: touch.clientX,
        y: touch.clientY,
        originX: position.x,
        originY: position.y,
      }
      return
    }

    if (event.touches.length > 0) return
    const currentGesture = gesture.current
    gesture.current = null
    if (currentGesture.mode !== 'swipe') return

    const touch = event.changedTouches[0]
    const end = touch ? { x: touch.clientX, y: touch.clientY } : { x: currentGesture.x, y: currentGesture.y }
    const distanceX = end.x - currentGesture.x
    const distanceY = end.y - currentGesture.y

    if (distanceY < -72 && Math.abs(distanceY) > Math.abs(distanceX) * 1.15) {
      onClose()
      return
    }

    if (!isGallery || Math.abs(distanceX) < 48 || Math.abs(distanceX) < Math.abs(distanceY)) return
    distanceX > 0 ? showImage(activeImage - 1) : showImage(activeImage + 1)
  }

  const handleWheel = (event) => {
    event.preventDefault()
    zoomBy(event.deltaY < 0 ? 0.35 : -0.35)
  }

  const handleMouseDown = (event) => {
    if (scale <= 1 || event.button !== 0) return
    dragged.current = false
    gesture.current = {
      mode: 'pan',
      x: event.clientX,
      y: event.clientY,
      originX: position.x,
      originY: position.y,
    }
  }

  const handleMouseMove = (event) => {
    if (gesture.current?.mode !== 'pan' || scale <= 1) return
    setPosition({
      x: gesture.current.originX + event.clientX - gesture.current.x,
      y: gesture.current.originY + event.clientY - gesture.current.y,
    })
    dragged.current = true
  }

  const handleMouseUp = () => {
    gesture.current = null
  }

  const handleStageClick = (event) => {
    if (event.target === event.currentTarget && !dragged.current) onClose()
    dragged.current = false
  }

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Полноэкранный просмотр: ${gallery.label}`}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <button ref={closeButton} className="lightbox-close" type="button" onClick={onClose} aria-label="Закрыть изображение">
        <X size={24} strokeWidth={1.7} />
      </button>

      {isGallery && (
        <button className="lightbox-control lightbox-control-prev" type="button" onClick={() => showImage(activeImage - 1)} aria-label="Предыдущее изображение">
          <ChevronLeft size={30} strokeWidth={1.6} />
        </button>
      )}

      <div className="lightbox-zoom-tools" aria-label="Масштаб изображения">
        <button type="button" onClick={() => zoomBy(-0.5)} disabled={scale <= minScale} aria-label="Уменьшить изображение">
          <Minus size={20} strokeWidth={1.8} />
        </button>
        <output aria-live="polite">{Math.round(scale * 100)}%</output>
        <button type="button" onClick={() => zoomBy(0.5)} disabled={scale >= maxScale} aria-label="Увеличить изображение">
          <Plus size={20} strokeWidth={1.8} />
        </button>
        <button type="button" onClick={resetView} disabled={scale === 1 && position.x === 0 && position.y === 0} aria-label="Сбросить масштаб">
          <RotateCcw size={18} strokeWidth={1.8} />
        </button>
      </div>

      <figure className="lightbox-figure">
        <div
          className={`lightbox-image-stage${scale > 1 ? ' is-zoomed' : ''}`}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={handleStageClick}
        >
          <img
            src={asset(images[activeImage])}
            alt={`${gallery.label}${isGallery ? ` — фотография ${activeImage + 1} из ${images.length}` : ''}`}
            draggable="false"
            onDoubleClick={() => scale > 1 ? resetView() : applyScale(2.5)}
            style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})` }}
          />
        </div>
        <figcaption onClick={onClose}>
          <span>{gallery.label}</span>
          <span>{isGallery ? `${activeImage + 1} / ${images.length} · ` : ''}Колесо, двойной клик или жест двумя пальцами</span>
        </figcaption>
      </figure>

      {isGallery && (
        <button className="lightbox-control lightbox-control-next" type="button" onClick={() => showImage(activeImage + 1)} aria-label="Следующее изображение">
          <ChevronRight size={30} strokeWidth={1.6} />
        </button>
      )}
    </div>
  )
}

function ProjectTile({ project, index, onOpenImage }) {
  const images = project.images?.length ? project.images : [project.image]
  const isCarousel = images.length > 1
  const projectLabel = `${project.title}, ${project.location}`
  const [activeImage, setActiveImage] = useState(0)
  const [error, setError] = useState(false)
  const touchStartX = useRef(null)
  const suppressOpenUntil = useRef(0)

  const showImage = (nextIndex) => {
    setError(false)
    setActiveImage((nextIndex + images.length) % images.length)
  }

  const showPrevious = () => showImage(activeImage - 1)
  const showNext = () => showImage(activeImage + 1)

  const handleKeyDown = (event) => {
    if (!isCarousel) return
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevious()
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }
  }

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current
    const distance = endX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(distance) < 42) return
    suppressOpenUntil.current = Date.now() + 450
    distance > 0 ? showPrevious() : showNext()
  }

  const openActiveImage = () => {
    if (Date.now() < suppressOpenUntil.current) return
    onOpenImage({ images, index: activeImage, label: projectLabel })
  }

  return (
    <article className={`tile tile-${(index % 4) + 1}${isCarousel ? ' has-carousel' : ''}`}>
      <div
        className="tile-media"
        role={isCarousel ? 'region' : undefined}
        aria-roledescription={isCarousel ? 'карусель' : undefined}
        aria-label={isCarousel ? `${projectLabel}, ${images.length} фотографии` : undefined}
        tabIndex={isCarousel ? 0 : undefined}
        onKeyDown={handleKeyDown}
        onTouchStart={isCarousel ? handleTouchStart : undefined}
        onTouchEnd={isCarousel ? handleTouchEnd : undefined}
      >
        {!error ? (
          <ZoomableImage
            key={images[activeImage]}
            className={isCarousel ? 'carousel-image' : undefined}
            src={asset(images[activeImage])}
            alt={isCarousel ? `${projectLabel} — фотография ${activeImage + 1} из ${images.length}` : projectLabel}
            loading="lazy"
            onError={() => setError(true)}
            onOpen={openActiveImage}
          />
        ) : (
          <div className="tile-placeholder">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{project.title}</p>
          </div>
        )}
        <span className="tile-index">{String(index + 1).padStart(2, '0')}</span>
        {isCarousel ? (
          <>
            <button
              className="carousel-control carousel-control-prev"
              type="button"
              aria-label="Предыдущая фотография"
              onClick={showPrevious}
            >
              <ChevronLeft size={20} strokeWidth={1.8} />
            </button>
            <button
              className="carousel-control carousel-control-next"
              type="button"
              aria-label="Следующая фотография"
              onClick={showNext}
            >
              <ChevronRight size={20} strokeWidth={1.8} />
            </button>
            <div className="carousel-dots" aria-label="Выбор фотографии">
              {images.map((image, imageIndex) => (
                <button
                  className={`carousel-dot${activeImage === imageIndex ? ' is-active' : ''}`}
                  key={image}
                  type="button"
                  aria-label={`Показать фотографию ${imageIndex + 1}`}
                  aria-current={activeImage === imageIndex ? 'true' : undefined}
                  onClick={() => showImage(imageIndex)}
                />
              ))}
            </div>
            <span className="sr-only" aria-live="polite">
              Фотография {activeImage + 1} из {images.length}
            </span>
          </>
        ) : (
          <span className="tile-arrow"><ArrowUpRight size={18} strokeWidth={1.8} /></span>
        )}
      </div>
      <div className="tile-caption">
        <h3>{project.title}</h3>
        <span><MapPin size={13} strokeWidth={1.8} /> {project.location}</span>
      </div>
    </article>
  )
}

function Portfolio({ onOpenImage }) {
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
        {filtered.map((project, index) => (
          <ProjectTile key={project.images?.[0] ?? project.image} project={project} index={index} onOpenImage={onOpenImage} />
        ))}
      </div>
    </section>
  )
}

function Services({ onOpenImage }) {
  const [activeService, setActiveService] = useState(0)
  const selected = SERVICES[activeService]

  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-intro">
          <span className="eyebrow light">Возможности</span>
          <h2 className="section-title light-title">Мастерская <span className="serif italic">без&nbsp;границ</span></h2>
          <p>Выберите направление — пространство справа покажет характер работы, материалы и масштаб.</p>
        </div>

        <div className="services-stage">
          <div className="service-visual">
            <ZoomableImage
              key={selected.n}
              src={asset(selected.image)}
              alt={selected.title}
              onOpen={() => onOpenImage({ images: [selected.image], index: 0, label: selected.title })}
            />
            <div className="service-visual-shade" />
            <span className="service-visual-number">{selected.n}</span>
            <div className="service-visual-caption" key={`${selected.n}-caption`}>
              <span>Khmelevsky studio</span>
              <p>{selected.note}</p>
            </div>
            <span className="service-visual-orbit" aria-hidden="true" />
          </div>

          <div className="service-list" role="list">
            {SERVICES.map((service, index) => (
              <button
                className={`service-option ${activeService === index ? 'is-active' : ''}`}
                key={service.n}
                type="button"
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
                aria-pressed={activeService === index}
              >
                <span className="service-n">{service.n}</span>
                <span className="service-option-copy">
                  <strong>{service.title}</strong>
                  <span className="service-option-text">{service.text}</span>
                </span>
                <ArrowUpRight className="service-arrow" size={20} strokeWidth={1.6} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Production() {
  const placeholders = [
    ['01', 'Цех и оборудование'],
    ['02', 'Материалы и отделка'],
    ['03', 'Сборка и контроль качества'],
  ]

  return (
    <section className="section production" id="production">
      <div className="production-head">
        <div>
          <span className="eyebrow">Наше производство</span>
          <h2 className="section-title">От идеи до готового <span className="serif italic">интерьера</span></h2>
        </div>
        <p>Собственное производство позволяет контролировать точность, материалы и качество исполнения на каждом этапе.</p>
      </div>

      <div className="production-projects" aria-label="Будущая галерея производства">
        {placeholders.map(([number, title]) => (
          <div className="production-placeholder" key={number}>
            <span>{number}</span>
            <Factory size={28} strokeWidth={1.35} />
            <div>
              <strong>{title}</strong>
              <small>Фото скоро появится</small>
            </div>
          </div>
        ))}
      </div>

      <div className="production-location">
        <div className="production-address">
          <span className="production-address-icon"><MapPin size={22} strokeWidth={1.7} /></span>
          <div>
            <span className="eyebrow">Адрес производства</span>
            <p>{PRODUCTION_ADDRESS}</p>
            <a href={PRODUCTION_MAP_LINK} target="_blank" rel="noreferrer">
              Построить маршрут <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="production-map">
          <iframe
            src={PRODUCTION_MAP_URL}
            title="Производство Khmelevsky Furniture Studio на карте"
            loading="lazy"
            allowFullScreen
          />
          <span className="production-map-label"><MapPin size={15} /> Генеральское</span>
        </div>
      </div>
    </section>
  )
}

function About({ onOpenImage }) {
  return (
    <section className="section about" id="about">
      <div className="about-heading">
        <span className="eyebrow">О студии</span>
        <h2 className="section-title">Не заполняем пространство. <span className="serif italic">Создаём его</span></h2>
      </div>

      <div className="about-collage">
        <div className="about-image-main">
          <ZoomableImage
            src={asset('images/about/about-architecture-laundry.webp')}
            alt="Индивидуальная мебель в постирочной"
            loading="lazy"
            onOpen={() => onOpenImage({ images: ['images/about/about-architecture-laundry.webp'], index: 0, label: 'Индивидуальная мебель в постирочной' })}
          />
        </div>
        <div className="about-image-float">
          <ZoomableImage
            src={asset('images/about/about-architecture-hallway.webp')}
            alt="Встроенная мебель в интерьере прихожей"
            loading="lazy"
            onOpen={() => onOpenImage({ images: ['images/about/about-architecture-hallway.webp'], index: 0, label: 'Встроенная мебель в интерьере прихожей' })}
          />
        </div>
        <span className="about-stamp"><b>2003</b><small>год основания</small></span>
        <span className="about-orbit" aria-hidden="true"><i>форма</i><i>материал</i><i>ритм</i></span>
      </div>

      <div className="about-manifesto">
        <p className="about-lead">Мебель должна ощущаться так, будто всегда была частью архитектуры</p>
        <p className="about-text">Поэтому проектировщики, производство и монтажная команда работают как единая система. Мы не адаптируем готовые модули — начинаем с человека, его привычек и конкретного пространства.</p>
        <div className="about-facts">
          <span><b>20+</b><small>лет опыта</small></span>
          <span><b>2500+</b><small>реализованных проектов</small></span>
          <span><b>∞</b><small>вариантов исполнения</small></span>
        </div>
        <a className="text-link" href="#contacts">Обсудить идею <ArrowUpRight size={18} /></a>
      </div>
    </section>
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
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Portfolio onOpenImage={setLightbox} />
        <Services onOpenImage={setLightbox} />
        <Production />
        <About onOpenImage={setLightbox} />
        <Contact />
      </main>
      <Footer />
      {lightbox && <ImageLightbox gallery={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  )
}
