interface RatingFace {
  count: number;
  rate: number;
}

interface ProductFace {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: RatingFace;
  title: string;
}
interface ProductCapsuleFace {
  product: ProductFace;
}

interface ProductFaceCart {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  total: number;
}
