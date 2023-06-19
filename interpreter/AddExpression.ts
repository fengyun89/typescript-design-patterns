import Expression from "./Expression";
import Context from "./Context";

class AddExpression implements Expression {
  private leftExpression: Expression;
  private rightExpression: Expression;

  constructor(leftExpression: Expression, rightExpression: Expression) {
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  }

  public interpret(context: Context): number {
    return (
      this.leftExpression.interpret(context) +
      this.rightExpression.interpret(context)
    );
  }
}

export default AddExpression;
