import Visitor from "./Visitor";
import Element from "./Element";

class ConcreteElementA implements Element {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteElementA(this);
  }

  public operationA(): string {
    return "ConcreteElementA";
  }
}

export default ConcreteElementA;
