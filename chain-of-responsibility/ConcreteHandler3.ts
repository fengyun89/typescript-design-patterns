import AbstractHandler from "./AbstractHandler";

class ConcreteHandler3 extends AbstractHandler {
  handle(request) {
    if (request === "3") {
      return `ConcreteHandler3`;
    }
    return super.handle(request);
  }
}

export default ConcreteHandler3;
