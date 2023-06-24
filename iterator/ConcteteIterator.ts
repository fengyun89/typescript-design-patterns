import Iterator from "./Iterator";

class ConcteteIterator implements Iterator {
  private index: number = 0;
  private collection: string[] = [];

  constructor(collection: string[]) {
    this.collection = collection;
  }

  public next(): string {
    const result = this.collection[this.index];
    this.index += 1;
    return result;
  }

  public hasNext(): boolean {
    return this.index < this.collection.length;
  }
}

export default ConcteteIterator;
