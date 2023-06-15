import FileType from "./FileType";
import CSVCreator from "./CSVCreator";
import XMLCreator from "./XMLCreator";
import JSONCreator from "./JSONCreator";

class CreatorFactory {
  static getCreator(type) {
    switch (type) {
      case FileType.CSV:
        return new CSVCreator();
      case FileType.XML:
        return new XMLCreator();
      case FileType.JSON:
        return new JSONCreator();
      default:
        throw new Error("Parser creator not found.");
    }
  }
}

export default CreatorFactory;
