import Memento from "./Memento";

class Caretaker {
  private mementos: Memento[] = [];

  public addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  public getMemento(index: number): Memento {
    return this.mementos[index];
  }
}

export default Caretaker;
