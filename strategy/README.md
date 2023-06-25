```mermaid
---
title: 策略模式
---
classDiagram
    class Strategy {
        <<interface>>
        +execute()*
    }
    class ConcreteStrategyA {
        +execute()
    }
    class ConcreteStrategyB {
        +execute()
    }
    class Context {
        -Strategy strategy
        +setStrategy(Strategy strategy)
        +doSomeBusinessLogic()
    }
    Strategy <|.. ConcreteStrategyA
    Strategy <|.. ConcreteStrategyB 
    Strategy <-- Context
```