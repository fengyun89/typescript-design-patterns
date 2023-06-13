import CSVParser from "./CSVParser";
import FileType from "./FileType";
import JSONParser from "./JSONParser";
import Parser from "./Parser";
import XMLParser from "./XMLParser";

class ParserFactory {
  public static createParser(type: FileType): Parser {
    switch (type) {
      case FileType.CSV:
        return new CSVParser();
      case FileType.XML:
        return new XMLParser();
      case FileType.JSON:
        return new JSONParser();
      default:
        throw new Error("Parser not found.");
    }
  }
}

export default ParserFactory;
