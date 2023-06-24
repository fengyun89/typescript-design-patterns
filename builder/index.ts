import ConcreteBuilder from "./ConcreteBuilder";
import Director from "./Director";

const clientCode = (director: Director) => {
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log("Standard basic product:");
  director.buildMinimalViableProduct();
  console.log(builder.getProduct());

  console.log("Standard full featured product:");
  director.buildFullFeaturedProduct();
  console.log(builder.getProduct());
};

const director = new Director();
clientCode(director);
