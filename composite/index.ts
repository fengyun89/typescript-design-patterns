import Leaf from "./Leaf";
import Composite from "./Composite";

const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");
const leaf3 = new Leaf("Leaf 3");
const leaf4 = new Leaf("Leaf 4");

const composite1 = new Composite();
composite1.add(leaf1);
composite1.add(leaf2);

const composite2 = new Composite();
composite2.add(leaf3);
composite2.add(leaf4);

const rootComposite = new Composite();
rootComposite.add(composite1);
rootComposite.add(composite2);

rootComposite.operation();
