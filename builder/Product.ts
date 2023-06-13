class Product {
  public part1: string;
  public part2: string;
  public part3: string;

  public toString(): string {
    return `Product with parts: ${this.part1}, ${this.part2}, ${this.part3}`;
  }
}

export default Product;
