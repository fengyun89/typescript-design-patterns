import ConcreteStrategyA from "./ConcreteStrategyA";
import ConcreteStrategyB from "./ConcreteStrategyB";
import Context from "./Context";

const strategyA = new ConcreteStrategyA();
const strategyB = new ConcreteStrategyB();

const context = new Context(strategyA);
context.doSomeBusinessLogic();

context.setStrategy(strategyB);
context.doSomeBusinessLogic();
