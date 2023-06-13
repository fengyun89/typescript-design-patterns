import CSVParser from "./CSVParser";
import Creator from "./Creator";

class CSVCreator extends Creator {
  create() {
    console.log("Creating CSV parser");
    return new CSVParser();
  }
}

export default CSVCreator;
