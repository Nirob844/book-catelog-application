export interface IBook {
  _id: number;
  title: string;
  author: string;
  genre: string;
  price: number;
  publicationDate: string;
  reviews: Review[];
  image: string;
}

interface Review {
  rating: number;
  comment: string;
}
