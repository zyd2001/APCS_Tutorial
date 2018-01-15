### __这一整个教程都是在《Barron's AP Computer Science A》的基础上编写的。__

**先做一下自我介绍，我是高三三班的张逸达，QQ `1171783852`，如果有问题可以在文章下评论或者直接qq找我。**

这个系列的文章主要是帮助大家梳理一下APCS整个的脉络，并且分享一下我曾经学习过程踩过的坑。文章中提到的基本上都是巴朗提到的考点。主要知识点我都会给出可运行的示例代码。所有的代码都在[examples](https://github.com/zyd2001/APCS_Tutorial/examples)上

大部分的关键词我都会给出*维基百科(英文)* 上的链接以供参考

这个系列的文章适合以下几种人
1. 上过APCS课复习的同学
2. 希望自学APCS的同学
3. 希望自学Java基础的同学

**请与巴朗参考阅读以防文章中有错漏的地方，并请通过评论或者qq告诉我出错的地方**

# 开发环境搭建

在学习编程的道路上一个非常大的阻碍就是开发环境的搭建，你可能需要下载各种各样曾经没听说过的软件，而且这些东西装起来经常会遇到各种问题，不过Java还是比较简单的，这里我分享一下我一般用的开发环境(比较适合学习或者小项目)

## Java Development Kit

俗称JDK，最主要的软件，不过安装并不复杂 [JDK下载](http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html)

安装时一路下一步就可以了(这是Windows的，Mac我并不熟悉)，如果Linux的话应该开发环境不是什么问题

## Visual Studio Code

这是我用的主力编辑器 [VSCode](https://code.visualstudio.com/) 也可以多加一些插件当成小型IDE用。
写Java一定要装这个插件：**Java Extension Pack** ![Java Extension Pack](https://i.loli.net/2018/01/15/5a5ca83c395a8.png)
这样的话会有基本的自动补全(对于学习绝对够用)，稍加配置还可以编译和运行。

### 用VSCode编译和调试Java代码

在刚打开VSCode的时候，是这种界面 ![](https://i.loli.net/2018/01/15/5a5cac4c2fccf.png)
(我因为装了主题，所以颜色可能不太一样，可以点那个颜色主题换)

首先需要新建一个空的工作文件夹，并且进入 ![](https://i.loli.net/2018/01/15/5a5caf21b2b35.png)

进入调试界面，点击这个开始按钮 ![](https://i.loli.net/2018/01/15/5a5cbf4a822cb.png
) 选择Java。可能卡一会过后会出现这个界面 ![](https://i.loli.net/2018/01/15/5a5cc042b12af.png)

    {
        // 使用 IntelliSense 了解相关属性。 
        // 悬停以查看现有属性的描述。
        // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "type": "java",
                "name": "Debug (Launch)",
                "request": "launch",
                "cwd": "${workspaceFolder}",
                "console": "internalConsole",
                "stopOnEntry": false,
                "mainClass": "Main",
                "args": ""
            }
        ]
    }
将这段代码替换掉launch.json里的内容。
mainClass 这一项可以改成你当前文件的Class名，接着创建一个Main.java文件重新点开始按钮，就可以调试了![](https://i.loli.net/2018/01/15/5a5cc4ef715bc.png)

## [JGrasp](http://spider.eng.auburn.edu/user-cgi/grasp/grasp.pl?;dl=download_jgrasp.html)

APCS的标配IDE，不过觉得这个最好只用来编译和调试，编辑功能实在太差，先在VSCode里面写完代码然后这里面调试也是一种选择。因为是IDE，编译，运行和调试都是一键的，这个基本上APCS或者是Pre都会讲，我也确实觉得这软件UI难看，所以不介绍。

## **第一次尝试写，可能并不是特别好，有问题请评论或者qq找我**

另外我现在还有一个网站的项目，有兴趣的可以联系我