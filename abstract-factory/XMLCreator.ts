import Creator from "./Creator";
import Parser from "./Parser";
import Reader from "./Reader";
import XMLReader from "./XMLReader";
import XMLParser from "./XMLParser";

class XMLCreator implements Creator {
  public createParser(): Parser {
    return new XMLParser();
  }

  public createReader(): Reader {
    return new XMLReader();
  }
}

export default XMLCreator;
