import Subject from "./Subject";

interface Observer {
  update(subject: Subject): void;
}

export default Observer;
