```mermaid
---
title: 单例模式
---
classDiagram
    Singleton <-- Singleton
    class Singleton {
        -Singleton instance$
        -Singleton()
        +getInstance()$ Singleton
    }
```
