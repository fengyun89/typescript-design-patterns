import Visitor from "./Visitor";
import ConcreteElementA from "./ConcreteElementA";
import ConcreteElementB from "./ConcreteElementB";

class ConcreteVisitor1 implements Visitor {
  public visitConcreteElementA(element: ConcreteElementA): string {
    return "ConcreteVisitor1: visitConcreteElementA. " + element.operationA();
  }

  public visitConcreteElementB(element: ConcreteElementB): string {
    return "ConcreteVisitor1: visitConcreteElementB. " + element.operationB();
  }
}

export default ConcreteVisitor1;
