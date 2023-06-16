import Abstraction from "./Abstraction";

class RefinedAbstraction extends Abstraction {
  constructor(imp) {
    super(imp);
  }
  operation(): string {
    return this.implementor.operationImp();
  }
}

export default RefinedAbstraction;
