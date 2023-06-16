import ConcreteImplementorA from "./ConcreteImplementorA";
import ConcreteImplementorB from "./ConcreteImplementorB";
import RefinedAbstraction from "./RefinedAbstraction";
import Abstraction from "./Abstraction";

const clientCode = (abstraction: Abstraction) => {
  console.log(abstraction.operation());
};

const concreteImplementorA = new ConcreteImplementorA();
const concreteImplementorB = new ConcreteImplementorB();

const refinedAbstractionA = new RefinedAbstraction(concreteImplementorA);
const refinedAbstractionB = new RefinedAbstraction(concreteImplementorB);

clientCode(refinedAbstractionA);
clientCode(refinedAbstractionB);
