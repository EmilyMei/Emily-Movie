##Emily-Movie

在自学了angular的一些基础后，想自己做个东西来练练手，本人也比较喜欢看电影，看到豆瓣上有提供各种电影资讯的API,就想试试看

##使用方法
	1、fork网站后，打开首页在服务器上运行便可。
	2、如果豆瓣上把接口改了，有些模块可能拿不到数据，则需要更新一下API的url

##项目情况

- 前端使用angular，后台调用豆瓣的API，
- 样式使用less
- 使用ng-route进行页面的跳转，根据相对应的
- 个别的情况需要操作DOM，通知自定义指令完成DOM操作

##总结

- 由于这次主要是练习angular，所以没有写特别多比较酷炫的样式效果
- angular数据处理能力强大，特别是双向数据绑定更是让我们更方便的操作数据
- 在练习的过程中，也遇到了很多问题，刚开始获取数据后，页面上总是渲染不出来，后来才发现是没有使用$scope.$apply()，没有告知angular数据已经更新了，因此数据总是渲染不出来。
- 后来上网看了一些资料，了解了一下$scope.$apply()的作用，才知道angular底层实现双向数据绑定就是使用了脏查询

##脏查询

	1、不会脏检查所有的对象。当对象被绑定到html中后，这个对象才会添加为检查对象（watcher）
	2、不会脏检查所有的属性，同样当属性被绑定后，这个属性才会被列为检查的属性
	在angular程序初始化时，会将绑定的对象的属性添加为监听对象（watcher），一个对象绑定了N个属性，就会添加N个watcher。
- angular所系统的方法中都会触发比较事件，比如：controller初始化的时候，所有以ng-开头的事件爱你执行后，都会出发脏检查
- $apply仅仅只是进入angular context，然后通过$digest触发脏检查，必要的时候我们要手动的触发脏检查
- $apply如果不给参数的话，会检查该$scope里的所有监听的属性，所以最好给上参数