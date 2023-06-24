import AbstractFactory from "./AbstractFactory";
import ConcreteProductA1 from "./ConcreteProductA1";
import ConcreteProductB1 from "./ConcreteProductB1";

class ConcreteFactory1 implements AbstractFactory {
  createProductA() {
    return new ConcreteProductA1();
  }
  createProductB() {
    return new ConcreteProductB1();
  }
}

export default ConcreteFactory1;
