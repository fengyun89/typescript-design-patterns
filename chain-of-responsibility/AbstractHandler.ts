import Handler from "./Handler";

abstract class AbstractHandler implements Handler {
  protected nextHandler: AbstractHandler;

  public setNext(handler: AbstractHandler): AbstractHandler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

export default AbstractHandler;
