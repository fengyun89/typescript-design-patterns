import Product from "./Product";

class Builder {
  private product: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public buildPart1(): void {
    this.product.part1 = "part1";
  }

  public buildPart2(): void {
    this.product.part2 = "part2";
  }

  public buildPart3(): void {
    this.product.part3 = "part3";
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

export default Builder;
