interface ComicPriceFace {
  type: string,
  price: number
}

interface ComicThumbnailFace {
  path: string,
  extension: string,
}

interface ComicFace {
  id: number,
  title: string,
  quantity: number,
  total: number,
  description?: string,
  thumbnail: ThumbnailFace
  prices: Array<PricesFace>
}

interface ComicCapsuleFace {
  product: ComicFace
}