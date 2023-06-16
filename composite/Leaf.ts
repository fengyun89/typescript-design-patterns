import Component from "./Component";

class Leaf implements Component {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public operation(): void {
    console.log(`Leaf ${this.name} operation.`);
  }
}

export default Leaf;
