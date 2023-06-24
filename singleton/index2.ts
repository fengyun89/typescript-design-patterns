import Singleton2 from "./Singleton2";

const instance1 = new Singleton2();
const instance2 = new Singleton2();

console.log("instance1 === instance2 " + (instance1 === instance2));
