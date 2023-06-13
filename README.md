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

- 如何？

解决对象行为方面的一些问题的模式，称之为行为型模式

- 如何？
