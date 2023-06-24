import FlyweightFactory from "./FlyweightFactory";

const clientCode = (factory: FlyweightFactory, intrinsicState: string) => {
  const flyweight = factory.getFlyweight(intrinsicState);
  flyweight.operation(`${intrinsicState}'s Extrinsic State`);
};

const factory = new FlyweightFactory();
clientCode(factory, "A");
clientCode(factory, "B");
clientCode(factory, "A");
clientCode(factory, "C");

factory.listFlyweights();
