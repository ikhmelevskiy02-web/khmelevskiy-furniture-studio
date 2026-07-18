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
  { key: 'home', label: 'Дом и квартиры' },
  { key: 'retail', label: 'Магазины и торговое оборудование' },
  { key: 'commercial', label: 'Коммерческие пространства' },
]

export const projects = [
  {
    title: 'Дом «Царское село»',
    category: 'home',
    location: 'Царское село',
    images: [
      '/images/portfolio/house-tsarskoye-selo-bedroom.webp',
      '/images/portfolio/house-tsarskoye-selo-study.webp',
      '/images/portfolio/house-tsarskoye-selo-bathroom.webp',
    ],
  },
  {
    title: 'Кухня «Янтарный»',
    category: 'kitchens',
    location: 'Ростов-на-Дону',
    image: '/images/portfolio/kitchen-yantarny.jpg',
  },
  {
    title: 'Кухня, посёлок Янтарный',
    category: 'kitchens',
    location: 'Ростовская область',
    image: '/images/portfolio/kitchen-yantarny-village.jpg',
  },
  {
    title: 'Квартира «Алые Паруса»',
    category: 'home',
    location: 'Ростов-на-Дону',
    image: '/images/portfolio/apt-alye-parusa.jpg',
  },
  {
    title: 'Квартира на Крепостном',
    category: 'home',
    location: 'Ростов-на-Дону',
    image: '/images/portfolio/apt-krepostnoy.jpg',
  },
  {
    title: 'Дом «Щепкинский лес»',
    category: 'home',
    location: 'Ростовская область',
    image: '/images/portfolio/house-schepkino.jpg',
  },
  {
    title: 'Дом «Каяни»',
    category: 'home',
    location: 'Ростов-на-Дону',
    image: '/images/portfolio/house-kayani.jpg',
  },
  {
    title: 'Квартира на Сиверса',
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
    title: 'Ювелирный «Золотая Подкова»',
    category: 'retail',
    location: 'Ростов-на-Дону',
    image: '/images/portfolio/shop-zolotaya-podkova.jpg',
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
    image: '/images/portfolio/foodcourt-park.jpg',
  },
]
