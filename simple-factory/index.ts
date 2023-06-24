import SimpleFactory from "./SimpleFactory";

const clientCode = (type: string) => {
  const product = SimpleFactory.createProduct(type);
  product.operation();
};

clientCode("A");
clientCode("B");
