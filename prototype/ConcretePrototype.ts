import Prototype from "./Prototype";

class ConcretePrototype implements Prototype {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public clone(): ConcretePrototype {
    return new ConcretePrototype(this.name);
  }
}

export default ConcretePrototype;
