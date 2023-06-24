class Product {
  public partA: string;
  public partB: string;
  public partC: string;

  public toString(): string {
    return `Product with parts: ${this.partA}, ${this.partB}, ${this.partC}`;
  }
}

export default Product;
