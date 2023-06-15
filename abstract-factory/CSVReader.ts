import Reader from "./Reader";

class CSVReader implements Reader {
  read() {
    console.log("Reading CSV...");
    return "CSV Message";
  }
}

export default CSVReader;
