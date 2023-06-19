# Design patterns implemented in TypeScript

## How to run

clone the repo and install dependencies

```
git clone https://github.com/coding-freedom/typescript-design-patterns.git
cd typescript-design-patterns
pnpm i
```

then you can run ts files directly without compiling ts to js

```
pnpm tsx singleton
```

## 理解设计模式

设计模式是对特定问题的解决方案，它是一种解决问题的思路。

解决对象创建方面的一些问题的模式，称之为创建型模式

- 如何确保一个类只有一个实例？[单例模式](./singleton/)
- 如何不用指定具体类名也可以创建实例？[简单工厂模式](./simple-factory/)、[工厂方法模式](./factory-method/)、[抽象工厂模式](./abstract-factory/)
- 如何从现有的对象创建新的对象？[原型模式](./prototype/)
- 如何分步骤创建复杂对象？[建造者模式](./builder/)

解决对象结构方面的一些问题的模式，称之为结构型模式

- 如何使用不兼容的对象？[适配器模式](./adapter/)
- 如何抽象与实现分离？[桥接模式](./bridge/)
- 如何处理多层继承结构？[组合模式](./composite/)
- 如何增强对象功能？[装饰器模式](./decorator/)
- 如何隐藏对象的复杂性？[外观模式](./facade/)
- 如何缓存多个对象的相同数据？[享元模式](./flyweight/)
- 如何代理对象的访问？[代理模式](./proxy/)

解决对象行为方面的一些问题的模式，称之为行为型模式

- 如何让多个对象都有机会处理请求？[责任链模式](./chain-of-responsibility/)
- 如何将请求转换为对象？[命令模式](./command/)
- 如何遍历一个聚合对象？[迭代器模式](./iterator/)
- 如何减少对象间的耦合？[中介者模式](./mediator/)
- 如何保存和恢复对象的状态？[备忘录模式](./memento/)
- 如何将一个对象的状态改变通知给其他对象？[观察者模式](./observer/)
- 如何在对象内部状态变化时改变其行为？[状态模式](./state/)
- 如何让一组行为有不同的表现？[策略模式](./strategy/)
- 如何让子类实现特定步骤？[模板方法模式](./template-method/)
- 如何在不修改类层次结构的前提下增加新的行为？[访问者模式](./visitor/)
- 如何定义语言和语言的解释器？[解释器模式](./interpreter/)