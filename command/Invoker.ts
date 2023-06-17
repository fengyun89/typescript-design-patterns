import Command from "./Command";

class Invoker {
  private onStart: Command;
  private onFinish: Command;

  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  public run(): void {
    if (this.onStart) {
      this.onStart.execute();
    }
    console.log("Invoker: ...doing something really important...");
    if (this.onFinish) {
      this.onFinish.execute();
    }
  }
}

export default Invoker;
