import ConcreteHandler2 from "./ConcreteHandler2";
import ConcreteHandler3 from "./ConcreteHandler3";
import ConcreteHandler1 from "./ConcreteHandler1";
import Handler from "./Handler";

const clientCode = (handler: Handler) => {
  console.log(`Chain: ${handler.handle(num)}`);
};

const num = "2";

const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
const handler3 = new ConcreteHandler3();

handler1.setNext(handler2).setNext(handler3);

clientCode(handler1);
