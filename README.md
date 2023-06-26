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

-[x] 保证一个类只有一个实例 [单例模式](./singleton/)
-[x] 对象的创建和使用分离 [简单工厂模式](./simple-factory/)、[工厂方法模式](./factory-method/)、[抽象工厂模式](./abstract-factory/)
-[x] 克隆已有对象 [原型模式](./prototype/)
-[x] 分步骤创建对象 [生成器模式](./builder/)

关于组合类和对象的模式，称之为结构型模式

-[x] 让不兼容的对象合作 [适配器模式](./adapter/)
-[x] 抽象与实现分离 [桥接模式](./bridge/)
-[x] 组合成树形结构 [组合模式](./composite/)
-[x] 动态增强功能 [装饰器模式](./decorator/)
-[x] 提供简单接口 [外观模式](./facade/)
-[x] 共享对象 [享元模式](./flyweight/)
-[x] 代理对象的访问 [代理模式](./proxy/)

关于对象间的高效沟通和职责委派的模式，称之为行为型模式

-[x] 超类定义算法框架，子类实现或重写特定步骤 [模板方法模式](./template-method/)
-[x] 定义语言的文法表示和解释器 [解释器模式](./interpreter/)
-[x] 通过中介对象进行间接沟通 [中介者模式](./mediator/)
-[x] 依次处理请求 [责任链模式](./chain-of-responsibility/)
-[x] 状态变更时通知观察者 [观察者模式](./observer/)
-[x] 将操作封装成对象 [命令模式](./command/)
-[x] 遍历聚合对象 [迭代器模式](./iterator/)
-[x] 保存和恢复对象的状态 [备忘录模式](./memento/)
-[x] 状态变化时改变其行为 [状态模式](./state/)
-[x] 将行为封装为对象 [策略模式](./strategy/)
-[x] 向已有类层次结构中增加新的行为 [访问者模式](./visitor/)
