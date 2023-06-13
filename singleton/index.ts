import Singleton from "./Singleton";

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log("Same instance? " + (instance1 === instance2));
