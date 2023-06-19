import Context from "./Context";

interface Expression {
  interpret(context: Context): number;
}

export default Expression;
