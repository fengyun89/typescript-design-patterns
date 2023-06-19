import State from "./State";

class ConcreteStateB extends State {
  public handle(): void {
    console.log("`handle` method of ConcreteStateB is being called!");
  }
}

export default ConcreteStateB;
