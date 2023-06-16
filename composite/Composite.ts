import Component from "./Component";

class Composite implements Component {
  private children: Component[] = [];

  operation() {
    console.log("Composite operation.");
    this.children.forEach((child) => {
      child.operation();
    });
  }

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    this.children = this.children.filter((child) => {
      return child !== component;
    });
  }
}

export default Composite;
