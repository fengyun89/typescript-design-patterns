import AbstractFactory from "./AbstractFactory";
import ConcreteFactory1 from "./ConcreteFactory1";
import ConcreteFactory2 from "./ConcreteFactory2";

const clientCode = (creator: AbstractFactory) => {
  const productA = creator.createProductA();
  const productB = creator.createProductB();

  productA.operationA();
  productB.operationB();
};

clientCode(new ConcreteFactory1());
clientCode(new ConcreteFactory2());
