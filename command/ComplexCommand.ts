import Command from "./Command";
import Receiver from "./Receiver";

class ComplexCommand implements Command {
  private receiver: Receiver;

  private payload: string;

  constructor(reciever: Receiver, payload: string) {
    this.receiver = reciever;
    this.payload = payload;
  }

  public execute(): void {
    console.log(
      "ComplexCommand: Complex stuff should be done by a receiver object."
    );
    this.receiver.action(this.payload);
  }
}

export default ComplexCommand;
