import ConcreteBuilder from "./ConcreteBuilder";
import Builder from "./Builder";

class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.buildPartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.buildPartA();
    this.builder.buildPartB();
    this.builder.buildPartC();
  }
}

export default Director;
