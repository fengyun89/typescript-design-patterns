import Mediator from "./Mediator";

class BaseComponent {
  protected mediator: Mediator;

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

export default BaseComponent;
