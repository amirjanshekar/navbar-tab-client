import {ShoeCategory} from "./ShoeCategory";

export interface Shoe {
  id:number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: ShoeCategory;
}
