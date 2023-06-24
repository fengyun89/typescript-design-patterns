import Product from "./Product";

class ConcreteProductA implements Product {
  public operation() {
    console.log("ConcreteProductA.operation()");
  }
}

export default ConcreteProductA;
