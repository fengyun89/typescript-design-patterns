import CSVParser from "./CSVParser";
import CSVReader from "./CSVReader";
import Creator from "./Creator";

class CSVCreator implements Creator {
  createParser() {
    return new CSVParser();
  }
  createReader() {
    return new CSVReader();
  }
}

export default CSVCreator;
