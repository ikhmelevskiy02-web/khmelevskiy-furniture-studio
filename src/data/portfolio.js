// Данные раздела «Работы».
//
// Каждый проект ссылается на изображение из /public/images/portfolio/.
// Для проекта с несколькими кадрами используйте поле images — карточка
// автоматически станет каруселью.
// Пока файла фото нет — на сайте показывается аккуратная заглушка
// с названием проекта. Как только вы положите файл с указанным именем
// в папку public/images/portfolio/, фотография появится автоматически.
//
// Категории (поле category): 'kitchens' | 'home' | 'retail' | 'commercial'

export const categories = [
  { key: 'all', label: 'Все работы' },
  { key: 'kitchens', label: 'Кухни' },
  { key: 'home', label: 'Частные дома и квартиры' },
  { key: 'retail', label: 'Магазины и торговое оборудование' },
  { key: 'commercial', label: 'Коммерческие пространства' },
]

export const projects = [
  {
    title: 'Квартира',
    category: 'home',
    location: 'Новороссийск',
    images: [
      '/images/portfolio/apt-novorossiysk-kitchen.webp',
      '/images/portfolio/apt-novorossiysk-bedroom-pink.webp',
      '/images/portfolio/apt-novorossiysk-dark-interior.webp',
      '/images/portfolio/apt-novorossiysk-study.webp',
      '/images/portfolio/apt-novorossiysk-bedroom-gray.webp',
    ],
  },
  {
    title: 'Частный дом',
    category: 'home',
    location: 'Ростов-на-Дону',
    images: [
      '/images/portfolio/private-house-rostov-living-room.webp',
      '/images/portfolio/private-house-rostov-windows.webp',
      '/images/portfolio/private-house-rostov-kitchen.webp',
      '/images/portfolio/private-house-rostov-hallway.webp',
      '/images/portfolio/private-house-rostov-study.webp',
    ],
  },
  {
    title: 'Частный дом',
    category: 'home',
    location: 'Санкт-Петербург, Царское Село',
    images: [
      '/images/portfolio/house-tsarskoye-selo-bedroom.webp',
      '/images/portfolio/house-tsarskoye-selo-study.webp',
      '/images/portfolio/house-tsarskoye-selo-bathroom.webp',
    ],
  },
  {
    title: 'Частный дом',
    category: 'kitchens',
    location: 'Ростовская область',
    image: '/images/portfolio/kitchen-yantarny.jpg',
  },
  {
    title: 'Магазин «Семикаракорская керамика»',
    category: 'retail',
    location: 'Москва, Арбат',
    images: [
      '/images/portfolio/shop-semikarakorskaya-ceramics-main.webp',
      '/images/portfolio/shop-semikarakorskaya-ceramics-counter.webp',
      '/images/portfolio/shop-semikarakorskaya-ceramics-display.webp',
    ],
  },
  {
    title: 'Квартира',
    category: 'home',
    location: 'Ростов-на-Дону',
    image: '/images/portfolio/apt-alye-parusa.jpg',
  },
  {
    title: 'Квартира',
    category: 'home',
    location: 'Ростов-на-Дону',
    images: [
      '/images/portfolio/apt-krepostnoy-kitchen.webp',
      '/images/portfolio/apt-krepostnoy-hallway.webp',
      '/images/portfolio/apt-krepostnoy-entry.webp',
      '/images/portfolio/apt-krepostnoy-bathroom.webp',
    ],
  },
  {
    title: 'Частный дом',
    category: 'home',
    location: 'Ростовская область',
    images: [
      '/images/portfolio/house-schepkino-kitchen-main.webp',
      '/images/portfolio/house-schepkino-kitchen-detail.webp',
      '/images/portfolio/house-schepkino-stairs-detail.webp',
      '/images/portfolio/house-schepkino-stairs-main.webp',
    ],
  },
  {
    title: 'Частный дом',
    category: 'home',
    location: 'Ростов-на-Дону',
    image: '/images/portfolio/house-kayani.jpg',
  },
  {
    title: 'Квартира',
    category: 'home',
    location: 'Ростов-на-Дону',
    image: '/images/portfolio/apt-siversa.jpg',
  },
  {
    title: 'Ювелирный магазин Mary Jewelry',
    category: 'retail',
    location: 'Ростов-на-Дону',
    images: [
      '/images/portfolio/shop-mary-jewelry-main.webp',
      '/images/portfolio/shop-mary-jewelry-showroom.webp',
      '/images/portfolio/shop-mary-jewelry-art-wall.webp',
      '/images/portfolio/shop-mary-jewelry-lounge.webp',
    ],
  },
  {
    title: 'Магазин Giorgio',
    category: 'retail',
    location: 'Ростов-на-Дону',
    image: '/images/portfolio/shop-giorgio.jpg',
  },
  {
    title: 'Магазин Picart',
    category: 'retail',
    location: 'Санкт-Петербург',
    image: '/images/portfolio/shop-picart-spb.jpg',
  },
  {
    title: 'Ювелирный магазин «Золотая подкова»',
    category: 'retail',
    location: 'Москва',
    images: [
      '/images/portfolio/shop-zolotaya-podkova-moscow-main.webp',
      '/images/portfolio/shop-zolotaya-podkova-moscow-aisle.webp',
      '/images/portfolio/shop-zolotaya-podkova-moscow-display.webp',
      '/images/portfolio/shop-zolotaya-podkova.jpg',
    ],
  },
  {
    title: 'Салон красоты «AVENUE 23»',
    category: 'commercial',
    location: 'Ростов-на-Дону',
    image: '/images/portfolio/salon-avenue23.jpg',
  },
  {
    title: 'Фуд-корт ТРЦ «Парк»',
    category: 'commercial',
    location: 'Ростов-на-Дону',
    images: [
      '/images/portfolio/foodcourt-park-main.webp',
      '/images/portfolio/foodcourt-park-seating.webp',
      '/images/portfolio/foodcourt-park-detail.webp',
    ],
  },
]
