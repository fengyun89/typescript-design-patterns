import Parser from "./Parser";

class XMLParser implements Parser {
  parse(): string {
    console.log("Parsing XML...");
    return "XML Message";
  }
}

export default XMLParser;
