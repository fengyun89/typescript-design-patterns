import Parser from "./Parser";

class JSONParser implements Parser {
  parse() {
    console.log("Parsing JSON...");
    return "JSON Message";
  }
}

export default JSONParser;
