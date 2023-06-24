import ProductA from "./ProductA";

class ConcreteProductA1 implements ProductA {
  public operationA() {
    console.log("ConcreteProductA1.operationA()");
  }
}

export default ConcreteProductA1;
