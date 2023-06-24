import Prototype from "./Prototype";

class ConcretePrototype implements Prototype {
  public clone(): ConcretePrototype {
    return new ConcretePrototype();
  }
}

export default ConcretePrototype;
