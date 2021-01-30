const title = 'Cat Energy'

const type = {
  slim: 'Slim',
  pro: 'Pro'
}

const size = {
  small: 500,
  big: 1000
}

const taste = {
  chicken: 'Курица',
  fish: 'Рыба',
  buckwheat: 'Гречка',
  rice: 'Рис'
}

const price = {
  proSmall: 700,
  proBig: 1000,
  slimSmall: 400,
  slimBig: 700,
  slimRice: 500
}

export const products = [
  {
    title: title,
    type: type.pro,
    size: size.small,
    taste: taste.chicken,
    price: price.proSmall,
    image: 'catalog_1'
  },
  {
    title: title,
    type: type.pro,
    size: size.big,
    taste: taste.chicken,
    price: price.proBig,
    image: 'catalog_2'
  },
  {
    title: title,
    type: type.pro,
    size: size.small,
    taste: taste.fish,
    price: price.proSmall,
    image: 'catalog_3'
  },
  {
    title: title,
    type: type.pro,
    size: size.big,
    taste: taste.fish,
    price: price.proBig,
    image: 'catalog_4'
  },
  {
    title: title,
    type: type.slim,
    size: size.small,
    taste: taste.buckwheat,
    price: price.slimSmall,
    image: 'catalog_5'
  },
  {
    title: title,
    type: type.slim,
    size: size.big,
    taste: taste.buckwheat,
    price: price.slimBig,
    image: 'catalog_6'
  },
  {
    title: title,
    type: type.slim,
    size: size.small,
    taste: taste.rice,
    price: price.slimRice,
    image: 'catalog_7'
  }
]

export const extraItems = [
  {
    title: 'Сахарозаменитель',
    name: '1 упаковка (100г)',
    price: 100
  },
  {
    title: 'Питьевая вода',
    name: '5 литров',
    price: 50
  },
  {
    title: 'Молоко',
    name: '1 литр',
    price: 100
  },
  {
    title: 'Витамины',
    name: '1 упаковка (30 г)',
    price: 300
  }
]
