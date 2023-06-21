# TypeScript设计模式

## 如何运行示例

克隆并安装依赖

```
git clone https://github.com/coding-freedom/typescript-design-patterns.git
cd typescript-design-patterns
pnpm i
```

借助 [tsx](https://github.com/esbuild-kit/tsx) 直接运行 ts 文件，无需编译为 js 文件，如运行单例模式示例

```
pnpm tsx singleton
```

## 什么是设计模式

面向对象编程中，会遇到一些常见的问题，比如在某某场景下如何创建对象、如何管理对象、对象之间如何通信等等，这些问题都有一些常见的简洁而优雅的解决方案，有人给这些解决方案起了名字，叫**某某设计模式**。

设计模式是一种解决问题的思路，不是具体的代码，同一模式在不同的编程语言中的实现方式也不尽相同。

## 模式和算法的区别

模式就像阵法，讲究排兵布阵，而算法就像单兵作战，上去就是一顿锤。

## 设计模式分类

解决在某某场景下如何创建对象的模式，称之为创建型模式

- 如何让一个类只能有一个实例？[单例模式](./singleton/)
- 如何不用指定具体类名也可以创建实例？[简单工厂模式](./simple-factory/)、[工厂方法模式](./factory-method/)、[抽象工厂模式](./abstract-factory/)
- 如何从现有的对象创建新的对象？[原型模式](./prototype/)
- 如何分步骤创建复杂对象？[建造者模式](./builder/)

解决在某某场景下如何管理对象的模式，称之为结构型模式

- 如何使用不兼容的对象？[适配器模式](./adapter/)
- 如何抽象与实现分离？[桥接模式](./bridge/)
- 如何处理多层继承结构？[组合模式](./composite/)
- 如何增强对象功能？[装饰器模式](./decorator/)
- 如何隐藏对象的复杂性？[外观模式](./facade/)
- 如何缓存多个对象的相同数据？[享元模式](./flyweight/)
- 如何代理对象的访问？[代理模式](./proxy/)

解决职责分配的模式，称之为行为型模式，分为类行为型模式和对象行为型模式

类行为型模式使用继承在类间分配行为

- [模板方法模式](./template-method/)
- [解释器模式](./interpreter/)

对象行为型模式使用对象间的组合在对象间分配行为

一组对等的对象相互协作完成一项功能

- [中介者模式](./mediator/)
- [责任链模式](./chain-of-responsibility/)
- 如何将一个对象的状态改变通知给其他对象？[观察者模式](./observer/)

其他的对象行为型模式将行为封装在一个对象中并将请求指派给它

- 如何将请求转换为对象？[命令模式](./command/)
- 如何遍历一个聚合对象？[迭代器模式](./iterator/)
- 如何保存和恢复对象的状态？[备忘录模式](./memento/)
- 如何在对象内部状态变化时改变其行为？[状态模式](./state/)
- 如何让一组行为有不同的表现？[策略模式](./strategy/)
- 如何在不修改类层次结构的前提下增加新的行为？[访问者模式](./visitor/)
