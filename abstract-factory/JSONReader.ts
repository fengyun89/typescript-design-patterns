import Reader from "./Reader";

class JSONReader implements Reader {
  read() {
    console.log("Reading JSON...");
    return "JSON Message";
  }
}

export default JSONReader;
