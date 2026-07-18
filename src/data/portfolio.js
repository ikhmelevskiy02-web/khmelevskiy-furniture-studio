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
    location: 'Ростов-на-Дону',
    images: [
      '/images/portfolio/apt-rostov-modern-bedroom.webp',
      '/images/portfolio/apt-rostov-modern-vanity.webp',
      '/images/portfolio/apt-rostov-modern-wardrobe.webp',
      '/images/portfolio/apt-rostov-modern-blue-bedroom.webp',
      '/images/portfolio/apt-rostov-modern-dining.webp',
      '/images/portfolio/apt-rostov-modern-hallway.webp',
      '/images/portfolio/apt-rostov-modern-kitchen.webp',
    ],
  },
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
    title: 'Частный дом',
    category: 'home',
    location: 'Ростовская область',
    images: [
      '/images/portfolio/house-rostov-region-classic-kitchen-main.webp',
      '/images/portfolio/house-rostov-region-classic-kitchen-angle.webp',
      '/images/portfolio/house-rostov-region-classic-kitchen-detail.webp',
      '/images/portfolio/house-rostov-region-classic-stairs.webp',
      '/images/portfolio/house-rostov-region-classic-hallway-color.webp',
      '/images/portfolio/house-rostov-region-classic-hallway-blue.webp',
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
    images: [
      '/images/portfolio/shop-giorgio-main.webp',
      '/images/portfolio/shop-giorgio-display.webp',
      '/images/portfolio/shop-giorgio-counter.webp',
    ],
  },
  {
    title: 'Магазин Lavarice',
    category: 'retail',
    location: 'Санкт-Петербург',
    images: [
      '/images/portfolio/shop-lavarice-main.webp',
      '/images/portfolio/shop-lavarice-display.webp',
      '/images/portfolio/shop-lavarice-interior.webp',
    ],
  },
  {
    title: 'Магазин Picard',
    category: 'retail',
    location: 'Санкт-Петербург',
    images: [
      '/images/portfolio/shop-picard-main.webp',
      '/images/portfolio/shop-picard-display.webp',
      '/images/portfolio/shop-picard-wall.webp',
    ],
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
    title: 'Салон красоты «23-Авеню»',
    category: 'commercial',
    location: 'Ростов-на-Дону',
    images: [
      '/images/portfolio/salon-23-avenue-main.webp',
      '/images/portfolio/salon-23-avenue-wide.webp',
      '/images/portfolio/salon-23-avenue-manicure.webp',
    ],
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
