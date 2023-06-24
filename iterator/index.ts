import Aggregate from "./Aggregate";

const aggregate = new Aggregate();
aggregate.addItem("Item A");
aggregate.addItem("Item B");
aggregate.addItem("Item C");

const iterator = aggregate.getIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}
