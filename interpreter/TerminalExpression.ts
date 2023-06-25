import Expression from "./Expression";
import Context from "./Context";

class TerminalExpression implements Expression {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public interpret(context: Context): number {
    return context.getVariable(this.name);
  }
}

export default TerminalExpression;
