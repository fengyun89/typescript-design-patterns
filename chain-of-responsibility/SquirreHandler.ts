import AbstractHandler from "./AbstractHandler";

class SquirreHandler extends AbstractHandler {
  handle(request) {
    if (request === "Nut") {
      return `Squirrel: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

export default SquirreHandler;
