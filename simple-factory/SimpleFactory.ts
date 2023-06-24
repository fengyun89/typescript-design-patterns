import Product from "./Product";
import ConcreteProductA from "./ConcreteProductA";
import ConcreteProductB from "./ConcreteProductB";

class SimpleFactory {
  public static createProduct(type: string): Product {
    switch (type) {
      case "A":
        return new ConcreteProductA();
      case "B":
        return new ConcreteProductB();
      default:
        throw new Error("Unknown product type.");
    }
  }
}

export default SimpleFactory;
