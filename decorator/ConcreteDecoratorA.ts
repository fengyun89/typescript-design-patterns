import Decorator from "./Decorator";

class ConcreteDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA(${this.component.operation()})`;
  }
}

export default ConcreteDecoratorA;
