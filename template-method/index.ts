import ConcreteClass1 from "./ConcreteClass1";
import AbstractClass from "./AbstractClass";
import ConcreteClass2 from "./ConcreteClass2";

const clientCode = (abstractClass: AbstractClass) => {
  abstractClass.templateMethod();
};

const concreteClass1 = new ConcreteClass1();
clientCode(concreteClass1);

const concreteClass2 = new ConcreteClass2();
clientCode(concreteClass2);
