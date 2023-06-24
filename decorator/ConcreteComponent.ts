import Component from "./Component";

class ConcreteComponent implements Component {
  public operation(): string {
    return "ConcreteComponent operation";
  }
}

export default ConcreteComponent;
