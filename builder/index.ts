import Builder from "./Builder";
import Director from "./Director";

const builder = new Builder();
const director = new Director();

director.setBuilder(builder);

director.buildMinimalViableProduct();

console.log(builder.getProduct());

builder.reset();

director.buildFullFeaturedProduct();

console.log(builder.getProduct());
