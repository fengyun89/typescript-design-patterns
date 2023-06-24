import ConcteteIterator from "./ConcteteIterator";
import Iterator from "./Iterator";

class Aggregate {
  private collection: string[] = [];

  public addItem(item: string): void {
    this.collection.push(item);
  }

  public getIterator(): Iterator {
    return new ConcteteIterator(this.collection);
  }
}

export default Aggregate;
