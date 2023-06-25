import Aggregate from "./Aggregate";
import ConcreteIterator from "./ConcreteIterator";

class ConcreteAggregate<T> implements Aggregate<T> {
  private collection: T[] = [];

  public addItem(item: T): void {
    this.collection.push(item);
  }

  public getIterator() {
    return new ConcreteIterator<T>(this.collection);
  }
}

export default ConcreteAggregate;
