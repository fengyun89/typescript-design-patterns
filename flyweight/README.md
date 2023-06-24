```mermaid
---
title: 享元模式
---
classDiagram
    class Flyweight {
        +operation(extrinsicState)*
    }
    class ConcreteFlyweight {
        -intrinsicState
        +operation(extrinsicState)
    }
    class FlyweightFactory {
        -Map flyweights
        +getFlyweight(key)
        +listFlyweights()
    }
    
    Flyweight <|.. ConcreteFlyweight
    Flyweight <--o FlyweightFactory
```