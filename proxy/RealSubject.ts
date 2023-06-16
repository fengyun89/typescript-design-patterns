import Subject from "./Subject";

class RealSubject implements Subject {
  public request(): void {
    console.log("RealSubject: Handling request.");
  }
}

export default RealSubject;
