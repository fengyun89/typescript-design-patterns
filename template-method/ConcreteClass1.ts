import AbstractClass from "./AbstractClass";

class ConcreteClass1 extends AbstractClass {
  protected primitiveOperation1(): void {
    console.log("ConcreteClass1: Implemented primitiveOperation1");
  }

  protected primitiveOperation2(): void {
    console.log("ConcreteClass1: Implemented primitiveOperation2");
  }
}

export default ConcreteClass1;
