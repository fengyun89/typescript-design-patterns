class Context {
  private variables = new Map<string, number>();

  public setVariable(name: string, value: number): void {
    this.variables.set(name, value);
  }

  public getVariable(name: string): number {
    return this.variables.get(name);
  }
}

export default Context;
