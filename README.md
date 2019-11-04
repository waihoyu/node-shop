# node-shop

> 一个koa+node网上商城

> 项目的说明

    - 1、UI界面使用了有赞vant库。


    ## Build Setup

    ``` bash
    # install dependencies
    npm install

    # serve with hot reload at localhost:8080
    npm run dev

    # build for production with minification
    npm run build

    # build for production and view the bundle analyzer report
    npm run build --report
    ```

    For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

> 解决macOS catalina 安装mongodb无法启动 出现Read-only file system问题

    最近把macOS升级到catalina后，安装mongoDB时，没有办法在目录下创建/data/db，提示Read-only file system（仅只读文件系统）。
    解决办法： 在终端执行下面两条命令：

    sudo mount -uw /
    killall Finder
    sudo chown -R Mac /data/db 
    
    1
    2
    然后就可以执行啦

    mkdir -p /data/db
    1
    在启动mongodb前，还要对该文件夹赋予权限：

    sudo chown -R Mac /data/db   (XXX替换为当前登录的用户名)
    1
    这个只是临时开放系统文件权限的方法，Mac重启后如果还要对在根目录下创建文件，需要再次执行上面两条命令。

    https://www.reddit.com/r/MacOS/comments/caiue5/macos_catalina_readonly_file_system_with_sip/et94g0e/
    上面这个链接有个老外写了个启动时执行的脚本，感兴趣的可以去问他要。