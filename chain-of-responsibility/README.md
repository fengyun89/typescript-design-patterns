```mermaid
---
title: 责任链模式
---
classDiagram
    class Handler {
        <<interface>>
        +setNext(Handler handler) Handler
        +handle(string request)
    }
    class AbstractHandler {
        <<abstract>>
        #Handler nextHandler
        +setNext(Handler handler) Handler
        +handle(string request)
    }
    class MonkeyHandler {
        +handle(string request)
    }
    class SquirrelHandler {
        +handle(string request)
    }
    class DogHandler {
        +handle(string request)
    }
    Handler <.. Handler
    Handler <|.. AbstractHandler
    Handler <-- AbstractHandler
    AbstractHandler <|-- MonkeyHandler
    AbstractHandler <|-- SquirrelHandler
    AbstractHandler <|-- DogHandler
```