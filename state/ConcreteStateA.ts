import State from "./State";

class ConcreteStateA extends State {
  public handle(): void {
    console.log("`handle` method of ConcreteStateA is being called!");
  }
}

export default ConcreteStateA;
