import AbstractHandler from "./AbstractHandler";

class ConcreteHandler2 extends AbstractHandler {
  public handle(request: string): string {
    if (request === "2") {
      return `ConcreteHandler2`;
    }
    return super.handle(request);
  }
}

export default ConcreteHandler2;
