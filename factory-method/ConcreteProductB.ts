import Product from "./Product";

class ConcreteProductB implements Product {
  public operation() {
    console.log("ConcreteProductB.operation()");
  }
}

export default ConcreteProductB;
