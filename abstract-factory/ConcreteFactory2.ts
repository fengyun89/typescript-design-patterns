import AbstractFactory from "./AbstractFactory";
import ConcreteProductA2 from "./ConcreteProductA2";
import ConcreteProductB2 from "./ConcreteProductB2";

class ConcreteFactory2 implements AbstractFactory {
  createProductA() {
    return new ConcreteProductA2();
  }
  createProductB() {
    return new ConcreteProductB2();
  }
}

export default ConcreteFactory2;
