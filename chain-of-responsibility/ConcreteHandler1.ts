import AbstractHandler from "./AbstractHandler";

class ConcreteHandler1 extends AbstractHandler {
  handle(request) {
    if (request === "1") {
      return `ConcreteHandler1`;
    }
    return super.handle(request);
  }
}

export default ConcreteHandler1;
