import Expression from "./Expression";
import Context from "./Context";

class TerminalExpression implements Expression {
  private variable: string;

  constructor(variable: string) {
    this.variable = variable;
  }

  public interpret(context: Context): number {
    return context.getVariable(this.variable);
  }
}

export default TerminalExpression;
