import AbstractClass from "./AbstractClass";

class ConcreteClass extends AbstractClass {
  protected primitiveOperation1(): void {
    console.log("ConcreteClass: Implemented primitiveOperation1");
  }

  protected primitiveOperation2(): void {
    console.log("ConcreteClass: Implemented primitiveOperation2");
  }
}

export default ConcreteClass;
