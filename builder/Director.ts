import Builder from "./Builder";

class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.buildPart1();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.buildPart1();
    this.builder.buildPart2();
    this.builder.buildPart3();
  }
}

export default Director;
