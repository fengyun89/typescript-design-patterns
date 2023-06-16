import subject from "./Subject";
import RealSubject from "./RealSubject";
import Proxy from "./Proxy";

const clientCode = (subject: subject) => {
  subject.request();
};

const realSubject = new RealSubject();
clientCode(realSubject);

const proxy = new Proxy(realSubject);
clientCode(proxy);
