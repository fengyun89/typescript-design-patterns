import Strategy from "./Strategy";

class ConcreteStrategyB implements Strategy {
  public execute(a: number, b: number): number {
    console.log("`execute` method of ConcreteStrategy2 is being called");
    return a - b;
  }
}

export default ConcreteStrategyB;
