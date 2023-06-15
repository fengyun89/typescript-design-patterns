import Reader from "./Reader";

class XMLReader implements Reader {
  read() {
    console.log("Reading XML...");
    return "XML Message";
  }
}

export default XMLReader;
