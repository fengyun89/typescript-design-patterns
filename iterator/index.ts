import ConcreteAggregate from "./ConcreteAggregate";

const aggregate = new ConcreteAggregate<string>();
aggregate.addItem("Item A");
aggregate.addItem("Item B");
aggregate.addItem("Item C");

const iterator = aggregate.getIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}
