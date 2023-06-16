import Implementor from "./Implementor";

class ConcreteImplementorA implements Implementor {
  public operationImp(): string {
    return "ConcreteImplementorA";
  }
}

export default ConcreteImplementorA;
