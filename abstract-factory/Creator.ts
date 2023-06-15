import Parser from "./Parser";
import Reader from "./Reader";

interface Creator {
  createParser(): Parser;

  createReader(): Reader;
}

export default Creator;
