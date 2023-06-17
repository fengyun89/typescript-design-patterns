import AbstractHandler from "./AbstractHandler";

class DogHandler extends AbstractHandler {
  handle(request) {
    if (request === "MeatBall") {
      return `Dog: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

export default DogHandler;
