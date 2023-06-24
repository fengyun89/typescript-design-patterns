import Observer from "./Observer";
import ConcreteSubject from "./ConcreteSubject";

class ConcreteObserver implements Observer {
  public update(subject: ConcreteSubject): void {
    console.log(
      "ConcreteObserver: Reacted to the event. state: " + subject.state + "."
    );
  }
}

export default ConcreteObserver;
