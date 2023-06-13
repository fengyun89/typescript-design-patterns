import Creator from "./Creator";
import JSONParser from "./JSONParser";

class JSONCreator extends Creator {
  create() {
    console.log("Creating JSON parser");
    return new JSONParser();
  }
}

export default JSONCreator;
