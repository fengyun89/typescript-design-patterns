class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      this.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

export default Singleton;
