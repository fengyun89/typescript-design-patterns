import Facade from "./Facade";

const clientCode = (facade: Facade) => {
  console.log(facade.operation());
};

const facade = new Facade();
clientCode(facade);
