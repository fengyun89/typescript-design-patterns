class Singleton2 {
  private static instance: Singleton2;

  constructor() {
    if (!Singleton2.instance) {
      Singleton2.instance = this;
    }
    return Singleton2.instance;
  }
}

export default Singleton2;
