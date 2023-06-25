import Iterator from "./Iterator";

interface Aggregate<T> {
  getIterator(): Iterator<T>;
}

export default Aggregate;
