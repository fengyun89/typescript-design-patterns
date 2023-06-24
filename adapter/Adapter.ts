import Target from "./Target";
import Adaptee from "./Adaptee";

class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  public request() {
    console.log("Adapter:");
    this.adaptee.specificRequest();
  }
}

export default Adapter;
