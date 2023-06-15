import ConcretePrototype from "./ConcretePrototype";

const prototype = new ConcretePrototype("Hello");
const clonedPrototype = prototype.clone();

console.log(clonedPrototype.name);
