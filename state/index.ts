import ConcreteStateA from "./ConcreteStateA";
import ConcreteStateB from "./ConcreteStateB";
import Context from "./Context";

const stateA = new ConcreteStateA();
const stateB = new ConcreteStateB();

const context = new Context(stateA);
context.request();

context.transitionTo(stateB);
context.request();
