import Product from "./Product";

interface Builder {
  buildPartA(): void;
  buildPartB(): void;
  buildPartC(): void;
  getProduct(): Product;
}

export default Builder;
