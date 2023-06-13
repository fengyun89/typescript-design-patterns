import CSVCreator from "./CSVCreator";
import Creator from "./Creator";
import FileType from "./FileType";
import JSONCreator from "./JSONCreator";
import XMLCreator from "./XMLCreator";

class CreatorFactory {
  public static getCreator(type: FileType): Creator {
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
