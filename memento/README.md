```mermaid
---
title: 备忘录模式
---
classDiagram
    class Memento {
        -string state
        +constructor(state: string)
        +getState() string
    }
    class Originator {
        -string state
        +constructor(state: string)
        +getState() string
        +save() Memento
        +restore(memento: Memento)
    }
    class Caretaker {
        -Memento[] mementos
        +addMemento(memento: Memento)
        +getMemento(index: number) Memento
    }
    Memento <.. Originator 
    Memento <-- Caretaker 
```