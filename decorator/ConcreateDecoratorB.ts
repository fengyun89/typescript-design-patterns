import Decorator from "./Decorator";

class ConcreateDecoratorB extends Decorator {
  operation(): string {
    return `ConcreateDecoratorB(${this.component.operation()})`;
  }
}

export default ConcreateDecoratorB;
