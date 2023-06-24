import Product from "./Product";

interface Creator {
  factoryMethod(): Product;
}

export default Creator;
