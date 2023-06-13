import FileType from "./FileType";
import CreatorFactory from "./CreatorFactory";

const csvData = "csv data";
const xmlData = "xml data";
const jsonData = "json data";

const parseData = (type: FileType, data: string) => {
  const creator = CreatorFactory.getCreator(type);
  return creator.create().parse(data);
};

parseData(FileType.CSV, csvData);
parseData(FileType.XML, xmlData);
parseData(FileType.JSON, jsonData);
