import Originator from "./Originator";
import Caretaker from "./Caretaker";

const originator = new Originator("state1");
const caretaker = new Caretaker();

caretaker.addMemento(originator.save());
originator.doSomething("state2");
caretaker.addMemento(originator.save());
originator.doSomething("state3");
caretaker.addMemento(originator.save());

console.log("Current state:", originator.getState());
console.log("Restoring to previous state...");
originator.restore(caretaker.getMemento(1));
console.log("Current state:", originator.getState());
console.log("Restoring to previous state...");
originator.restore(caretaker.getMemento(0));
console.log("Current state:", originator.getState());
