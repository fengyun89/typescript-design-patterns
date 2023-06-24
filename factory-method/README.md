```mermaid
---
title: 工厂方法模式
---
classDiagram
    class Product {
        <<interface>>
        +operation()*
    }
    class ConcreteProductA {
        +operation()
    }
    class ConcreteProductB {
        +operation()
    }
    class Creator {
        <<interface>>
        +factoryMethod()* Product
    }
    class ConcreteCreatorA {
        +factoryMethod() Product
    }
    class ConcreteCreatorB {
        +factoryMethod() Product
    }
    Product <|-- ConcreteProductA
    Product <.. Creator
    Product <|-- ConcreteProductB
    ConcreteProductA <.. ConcreteCreatorA
    Creator <|-- ConcreteCreatorA
    Creator <|-- ConcreteCreatorB
    ConcreteProductB <.. ConcreteCreatorB
```