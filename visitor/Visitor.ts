import ConcreteElementA from "./ConcreteElementA";
import ConcreteElementB from "./ConcreteElementB";

interface Visitor {
  visitConcreteElementA(element: ConcreteElementA): void;
  visitConcreteElementB(element: ConcreteElementB): void;
}

export default Visitor;
