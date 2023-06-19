import Visitor from "./Visitor";
import ConcreteElementA from "./ConcreteElementA";
import ConcreteElementB from "./ConcreteElementB";

class ConcreteVisitor2 implements Visitor {
  public visitConcreteElementA(element: ConcreteElementA): string {
    return "ConcreteVisitor2: visitConcreteElementA. " + element.operationA();
  }

  public visitConcreteElementB(element: ConcreteElementB): string {
    return "ConcreteVisitor2: visitConcreteElementB. " + element.operationB();
  }
}

export default ConcreteVisitor2;
