import AbstractClass from "./AbstractClass";

class ConcreteClass2 extends AbstractClass {
  protected primitiveOperation1(): void {
    console.log("ConcreteClass2: Implemented primitiveOperation1");
  }

  protected primitiveOperation2(): void {
    console.log("ConcreteClass2: Implemented primitiveOperation2");
  }
}

export default ConcreteClass2;
