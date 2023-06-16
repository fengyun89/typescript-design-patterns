import Implementor from "./Implementor";

abstract class Abstraction {
  protected implementor: Implementor;

  constructor(implementor: Implementor) {
    this.implementor = implementor;
  }

  public abstract operation(): string;
}

export default Abstraction;
