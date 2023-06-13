import Parser from "./Parser";

abstract class Creator {
  public abstract create(): Parser;
}

export default Creator;
