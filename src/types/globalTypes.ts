export interface IBook {
  _id: number | string;
  title: string;
  author: string;
  genre: string;
  price: number;
  publicationDate: string;
  customerReviews?: [];
  image: string;
}
