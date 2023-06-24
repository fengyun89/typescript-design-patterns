```mermaid
---
title: 工厂方法模式
---
classDiagram
    class Product {
        <<interface>>
        +operation()
    }
    class ConcreteProductA {
        +operation()
    }
    class ConcreteProductB {
        +operation()
    }
    class Creator {
        <<interface>>
        +factoryMethod() Product
    }
    class ConcreteCreatorA {
        +factoryMethod() Product
    }
    class ConcreteCreatorB {
        +factoryMethod() Product
    }
    Product <|-- ConcreteProductA
    Product <|-- ConcreteProductB 
    Creator <|-- ConcreteCreatorA 
    Creator <|-- ConcreteCreatorB 
    Product <.. Creator 
    ConcreteProductA <.. ConcreteCreatorA 
    ConcreteProductB <.. ConcreteCreatorB 
```