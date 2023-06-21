import Expression from "./Expression";
import Context from "./Context";

class TerminalExpression implements Expression {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  public interpret(context: Context): number {
    return context.getVariable(this.value);
  }
}

export default TerminalExpression;
