import AbstractClass from "./AbstractClass";

class ConcreteClass2 extends AbstractClass {
  protected requiredOperations1(): void {
    console.log("ConcreteClass2 says: Implemented Operation1");
  }
  protected requiredOperation2(): void {
    console.log("ConcreteClass2 says: Implemented Operation2");
  }
  protected hook1(): void {
    console.log("ConcreteClass2 says: Overridden Hook1");
  }
}

export default ConcreteClass2;
