import Parser from "./Parser";

class CSVParser implements Parser {
  parse() {
    console.log("Parsing CSV...");
    return "CSV Message";
  }
}

export default CSVParser;
