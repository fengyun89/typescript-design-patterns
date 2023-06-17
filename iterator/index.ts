import MyCollection from "./MyCollection";

const myCollection = new MyCollection();
myCollection.addItem("Item A");
myCollection.addItem("Item B");
myCollection.addItem("Item C");

const iterator = myCollection.getIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}
