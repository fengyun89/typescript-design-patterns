import Target from "./Target";
import Adaptee from "./Adaptee";
import Adapter from "./Adapter";

const clientCode = (target: Target) => {
  target.request();
};

const adaptee = new Adaptee();
clientCode(new Adapter(adaptee));
