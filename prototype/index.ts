import ConcretePrototype from "./ConcretePrototype";

const prototype = new ConcretePrototype();
const clonedPrototype = prototype.clone();

console.log("prototype === clonedPrototype", prototype === clonedPrototype);
