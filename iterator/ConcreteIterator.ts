import Iterator from "./Iterator";

class ConcreteIterator<T> implements Iterator<T> {
  private index: number = 0;
  private collection: T[] = [];

  constructor(collection: T[]) {
    this.collection = collection;
  }

  public next(): T {
    const result = this.collection[this.index];
    this.index += 1;
    return result;
  }

  public hasNext(): boolean {
    return this.index < this.collection.length;
  }
}

export default ConcreteIterator;
