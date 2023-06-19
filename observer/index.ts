import ConcreteSubject from "./ConcreteSubject";
import ConcreteObserver from "./ConcreteObserver";

const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

subject.attach(observer1);
subject.attach(observer2);

subject.someBusinessLogic();
