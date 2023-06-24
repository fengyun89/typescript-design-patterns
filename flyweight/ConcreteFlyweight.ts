import Flyweight from "./Flyweight";

class ConcreteFlyweight implements Flyweight {
  private intrinsicState: string;

  constructor(intrinsicState: string) {
    this.intrinsicState = intrinsicState;
  }

  public operation(extrinsicState: string): void {
    console.log(`ConcreteFlyweight: ${extrinsicState}`);
  }
}

export default ConcreteFlyweight;
