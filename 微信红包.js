auto.waitFor();

start();

function start() {

    toastLog("开始监听红包中……");

    threads.start(function () {//在子进程中运行监听事件
        events.observeNotification();
        events.onNotification(function (notification) {
            if (notification.getPackageName() === 'com.tencent.mm' && notification.getText().indexOf("[微信红包]") > -1) {
                notification.click();
                grab();
            }
        });
    });

    threads.start(function () {
        while (true) {
            if (currentActivity() === "com.tencent.mm.ui.LauncherUI" && id("b4r").findOne(200) !== null) {
                if (textContains("[微信红包]").find().size() > 0) {
                    textContains("[微信红包]").findOne().parent().parent().parent().parent().click();
                    grab();
                }
            }
            sleep(3000);
        }
    });
}

//抢红包函数
function grab() {
    waitForActivity("com.tencent.mm.ui.LauncherUI", 50);
    log('进入聊天页。')
    var hb = id("al7").find();
    if (hb.size() > 0) {
        hb[hb.size() - 1].click();
        waitForActivity("com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI", 10);
        desc("开").findOne().click();
        sleep(3000);
        back();
        back();//暂时这么写
    } else {
        toastLog("手慢了。或者红包id修改了，请联系开发者！");
    }
}


