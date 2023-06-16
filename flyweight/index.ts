import FlyweightFactory from "./FlyweightFactory";

const factory = new FlyweightFactory([
  ["Chevrolet", "Camaro2018", "pink"],
  ["Mercedes Benz", "C300", "black"],
  ["Mercedes Benz", "C500", "red"],
  ["BMW", "M5", "red"],
  ["BMW", "X6", "white"],
]);

factory.listFlyweights();

factory.getFlyweight(["BMW", "M5", "red"]).operation(["CL234IR", "James Doe"]);

factory.getFlyweight(["BMW", "X1", "red"]).operation(["CL234IR", "James Doe"]);

factory.listFlyweights();
