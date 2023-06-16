import Component from "./Component";
import ConcreteComponent from "./ConcreteComponent";
import ConcreteDecoratorA from "./ConcreteDecoratorA";
import ConcreateDecoratorB from "./ConcreateDecoratorB";

const clientCode = (component: Component): void => {
  console.log(component.operation());
};

const simple = new ConcreteComponent();
clientCode(simple);

const decoratorA = new ConcreteDecoratorA(simple);
clientCode(decoratorA);

const decoratorB = new ConcreateDecoratorB(decoratorA);
clientCode(decoratorB);
