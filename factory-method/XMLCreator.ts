import Creator from "./Creator";
import XMLParser from "./XMLParser";

class XMLCreator extends Creator {
  create() {
    console.log("Creating XML parser");
    return new XMLParser();
  }
}

export default XMLCreator;
