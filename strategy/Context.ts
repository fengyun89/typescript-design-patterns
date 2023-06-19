import Strategy from "./Strategy";

class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    const result = this.strategy.execute(1, 2);
    console.log(result);
  }
}

export default Context;
