import Creator from "./Creator";
import Product from "./Product";
import ConcreteProductB from "./ConcreteProductB";

class ConcreteCreatorB implements Creator {
  public factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

export default ConcreteCreatorB;
