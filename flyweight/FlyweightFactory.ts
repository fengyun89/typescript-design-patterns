import Flyweight from "./Flyweight";
import ConcreteFlyweight from "./ConcreteFlyweight";

class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  public getFlyweight(key: string): Flyweight {
    if (!(key in this.flyweights)) {
      this.flyweights[key] = new ConcreteFlyweight(key);
    }
    return this.flyweights[key];
  }

  public listFlyweights(): void {
    const count = Object.keys(this.flyweights).length;
    console.log(`FlyweightFactory: I have ${count} flyweights:`);
    for (const key in this.flyweights) {
      console.log(key);
    }
  }
}

export default FlyweightFactory;
