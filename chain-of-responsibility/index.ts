import MonkeyHandler from "./MonkeyHandler";
import SquirreHandler from "./SquirreHandler";
import DogHandler from "./DogHandler";

const food = "Nut";

const monkeyHandler = new MonkeyHandler();
const squirreHandler = new SquirreHandler();
const dogHandler = new DogHandler();

monkeyHandler.setNext(squirreHandler).setNext(dogHandler);

console.log(`Chain: ${monkeyHandler.handle(food)}`);
