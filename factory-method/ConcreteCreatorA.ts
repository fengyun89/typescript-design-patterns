import Creator from "./Creator";
import Product from "./Product";
import ConcreteProductA from "./ConcreteProductA";

class ConcreteCreatorA implements Creator {
  public factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

export default ConcreteCreatorA;
