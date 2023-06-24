import Product from "./Product";
import Builder from "./Builder";

class ConcreteBuilder implements Builder {
  private product: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public buildPartA(): void {
    this.product.partA = "partA";
  }

  public buildPartB(): void {
    this.product.partB = "partB";
  }

  public buildPartC(): void {
    this.product.partC = "partC";
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

export default ConcreteBuilder;
