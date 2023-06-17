import MyIterator from "./MyIterator";
import Iterator from "./Iterator";

class MyCollection {
  private collection: string[] = [];

  public addItem(item: string): void {
    this.collection.push(item);
  }

  public getIterator(): Iterator {
    return new MyIterator(this.collection);
  }
}

export default MyCollection;
