abstract class AbstractClass {
  public templateMethod(): void {
    this.primitiveOperation1();
    this.primitiveOperation2();
  }

  protected abstract primitiveOperation1(): void;

  protected abstract primitiveOperation2(): void;
}

export default AbstractClass;
