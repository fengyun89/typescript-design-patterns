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

## 设计模式分类

关于对象创建的模式，称之为创建型模式

- ✅保证一个类只有一个实例 [单例模式](./singleton/)
- ✅对象的创建和使用分离 [简单工厂模式](./simple-factory/)、[工厂方法模式](./factory-method/)、[抽象工厂模式](./abstract-factory/)
- ✅克隆已有对象 [原型模式](./prototype/)
- ✅分步骤创建对象 [生成器模式](./builder/)

关于组合类和对象的模式，称之为结构型模式

- 让接口不兼容的对象合作 [适配器模式](./adapter/)
- 分离抽象与实现 [桥接模式](./bridge/)
- 将对象组合成树形结构 [组合模式](./composite/)
- 动态增强对象功能 [装饰器模式](./decorator/)
- 为复杂系统提供一个简单的接口 [外观模式](./facade/)
- 共享对象 [享元模式](./flyweight/)
- 代理对象的访问 [代理模式](./proxy/)

关于对象间的高效沟通和职责委派的模式，称之为行为型模式

- 在超类中定义算法的框架，子类实现或重写算法的特定步骤 [模板方法模式](./template-method/)
- 定义一种语言的语法，并定义一个解释器来解释该语法 [解释器模式](./interpreter/)
- 通过中介者对象进行间接沟通，减少组件之间的依赖关系 [中介者模式](./mediator/)
- 将请求沿着处理链传递，直到有一个处理器能够处理请求为止 [责任链模式](./chain-of-responsibility/)
- 允许一个对象将其状态的改变通知其他对象 [观察者模式](./observer/)
- 将请求封装成对象 [命令模式](./command/)
- 遍历聚合对象 [迭代器模式](./iterator/)
- 在不暴露对象实现细节的情况下保存和恢复对象之前的状态 [备忘录模式](./memento/)
- 对象的内部状态变化时改变其行为 [状态模式](./state/)
- 将一组行为转换为对象，并使其在原始上下文对象内部能够相互替换 [策略模式](./strategy/)
- 在不修改已有代码的情况下向已有类层次结构中增加新的行为 [访问者模式](./visitor/)
