import Visitor from "./Visitor";

interface Element {
  accept(visitor: Visitor): void;
}

export default Element;
