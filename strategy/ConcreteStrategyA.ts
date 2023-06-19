import Strategy from "./Strategy";

class ConcreteStrategyA implements Strategy {
  public execute(a: number, b: number): number {
    console.log("`execute` method of ConcreteStrategy1 is being called");
    return a + b;
  }
}

export default ConcreteStrategyA;
