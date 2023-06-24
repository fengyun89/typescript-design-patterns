import Creator from "./Creator";
import ConcreteCreatorA from "./ConcreteCreatorA";
import ConcreteCreatorB from "./ConcreteCreatorB";

const clientCode = (creator: Creator) => {
  const product = creator.factoryMethod();
  product.operation();
};

clientCode(new ConcreteCreatorA());
clientCode(new ConcreteCreatorB());
