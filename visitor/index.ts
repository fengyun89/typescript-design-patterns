import ConcreteElementA from "./ConcreteElementA";
import ConcreteElementB from "./ConcreteElementB";
import ConcreteVisitor1 from "./ConcreteVisitor1";
import ConcreteVisitor2 from "./ConcreteVisitor2";

const elementA = new ConcreteElementA();
const elementB = new ConcreteElementB();

const visitor1 = new ConcreteVisitor1();
const visitor2 = new ConcreteVisitor2();

elementA.accept(visitor1);
console.log(visitor1.visitConcreteElementA(elementA));

elementB.accept(visitor1);
console.log(visitor1.visitConcreteElementB(elementB));

elementA.accept(visitor2);
console.log(visitor2.visitConcreteElementA(elementA));

elementB.accept(visitor2);
console.log(visitor2.visitConcreteElementB(elementB));
