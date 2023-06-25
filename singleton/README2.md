```mermaid
---
title: 单例模式
---
classDiagram
    class Singleton {
        -Singleton instance$
        -Singleton()
    }
    Singleton <.. Singleton
```