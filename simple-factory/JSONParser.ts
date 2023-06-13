import Parser from "./Parser";

class JSONParser extends Parser {
  parse(data) {
    console.log(`Parsing ${data}`);
  }
}

export default JSONParser;
