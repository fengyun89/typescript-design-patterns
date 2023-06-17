class Receiver {
  public action(payload: string): void {
    console.log("Receiver.action invoked with payload: " + payload + ".");
  }
}

export default Receiver;
