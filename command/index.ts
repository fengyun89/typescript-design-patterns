import Invoker from "./Invoker";
import SimpleCommand from "./SimpleCommand";
import Receiver from "./Receiver";
import ComplexCommand from "./ComplexCommand";

const invoker = new Invoker();
const receiver = new Receiver();

invoker.setOnStart(new SimpleCommand("Say Hi!"));
invoker.setOnFinish(new ComplexCommand(receiver, "Say Bye!"));

invoker.run();
