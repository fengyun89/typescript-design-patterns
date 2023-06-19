import Memento from "./Memento";

class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }

  public doSomething(state: string): void {
    this.state = state;
  }

  public save(): Memento {
    return new Memento(this.state);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
  }
}

export default Originator;
