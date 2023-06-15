import JSONParser from "./JSONParser";
import JSONReader from "./JSONReader";
import Creator from "./Creator";

class JSONCreator implements Creator {
  createParser() {
    return new JSONParser();
  }

  createReader() {
    return new JSONReader();
  }
}

export default JSONCreator;
