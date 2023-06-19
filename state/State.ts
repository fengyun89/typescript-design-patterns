import Context from "./Context";

abstract class State {
  protected context: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  public abstract handle(): void;
}

export default State;
