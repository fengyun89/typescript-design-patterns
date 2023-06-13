import FileType from "./FileType";
import ParserFactory from "./ParserFactory";

const csvData = "csv data";
const xmlData = "xml data";
const jsonData = "json data";

const parseData = (type: FileType, data: string) => {
  const parser = ParserFactory.createParser(type);
  return parser.parse(data);
};

parseData(FileType.CSV, csvData);
parseData(FileType.XML, xmlData);
parseData(FileType.JSON, jsonData);
