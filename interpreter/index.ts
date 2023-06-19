import Context from "./Context";
import TerminalExpression from "./TerminalExpression";
import AddExpression from "./AddExpression";
import SubtractExpression from "./SubtractExpression";

const context = new Context();
context.setVariable("x", 5);
context.setVariable("y", 7);
context.setVariable("z", 10);

const x = new TerminalExpression("x");
const y = new TerminalExpression("y");
const z = new TerminalExpression("z");

const add = new AddExpression(x, y);
const subtract = new SubtractExpression(add, z);
const result = subtract.interpret(context);
console.log(result);
