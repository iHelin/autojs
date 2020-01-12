auto.waitFor();

toast('开始机器学习~支持腾讯新闻极速版v1.6.20版本');

var tab = "科技";

var assemblyId = {
    newList: "b4", //列表页新闻标题id
    redPacket: "auk", //红包id
    commentNum: "m9", //新闻页最下方评论总数id
    sofa: "k9", //抢沙发id
    commentTime: "m3", //每一条评论下的时间id
    isHomePage: "arb", //视频新闻页有而首页没有的组件id,目前为右下角
}

start()

function start() {
    toast("打开腾讯新闻APP！");
    sleep(1000);
    openAPP();

    text("首页").findOne().click();
    sleep(2000);

    text("推荐").findOne().click();
    text("推荐").findOne().click();
    sleep(2000);

    console.log(text(tab).findOne().bounds());
    // click(text(tab).findOne().bounds().centerX(), text(tab).findOne().bounds().centerY());
    
    text(tab).findOne().click();
    text(tab).findOne().click();
    sleep(2000);

    readNews();
}

//读新闻
function readNews() {
    var newsSelectors = id("b4").find();
    toastLog("列表数量" + newsSelectors.size());

    click(newsSelectors[newsSelectors.size()-1].bounds().centerX(), newsSelectors[newsSelectors.size()-1].bounds().centerY());

    toast("开始阅读新闻。");
    sleep(2000);

    if (isNewsPage()) {
        if (id(assemblyId.redPacket).exists()) {
            sleep(1000);
            do {
                swipe(device.width / 2 + 100, device.height / 2 + 200, device.width / 2 + 100, device.height / 2 - 200, random(400, 500));
                sleep(random(2000, 3000));
            } while (!text("查看更多评论").exists());

        } else {
            toastLog("没有红包。");
            sleep(1000);
        }
        back();
        text(tab).findOne().click();
        readNews();
    } else {
        log("不是新闻页，重新开始。");
        back();
        sleep(3000);
        text(tab).findOne().click();
        readNews();
    }

}


//启动程序
function openAPP() {
    if (!app.launchApp("腾讯新闻极速版")) {
        exit();
    }
    // app.launch("com.tencent.news.lite");
}

//是否是新闻页
function isNewsPage() {
    return currentActivity() === "com.tencent.news.ui.NewsDetailActivity";
}

//是否是主页
function isHomePage() {
    //判断有无评论组件,防止把视频新闻页面误判为首页
    return currentActivity() === "com.tencent.news.activity.SplashActivity" && id(assemblyId.isHomePage).findOne(200) == null;
}