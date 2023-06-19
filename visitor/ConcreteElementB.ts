import Element from "./Element";
import Visitor from "./Visitor";

class ConcreteElementB implements Element {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteElementB(this);
  }

  public operationB(): string {
    return "ConcreteElementB";
  }
}

export default ConcreteElementB;
