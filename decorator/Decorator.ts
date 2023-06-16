import Component from "./Component";

abstract class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  abstract operation(): string;
}

export default Decorator;
