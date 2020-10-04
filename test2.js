auto.waitFor();


start();

let redPackageId='al7';
let patt = /^.*[:|：]*[微信红包].+$/;

function start() {

    toastLog("开始监听红包中……");

    threads.start(function () {//在子进程中运行监听事件
        events.observeNotification();
        events.onNotification(function (notification) {
            toastLog('收到通知')
            if (notification.getPackageName() === 'com.tencent.mm') {
                toastLog('微信通知')
                if (patt.test(notification.getText())) {
                    toastLog('红包通知');
                    notification.click();
                    grab();
                }
            }
        });
    });
}

//抢红包函数
function grab() {
    waitForActivity("com.tencent.mm.ui.LauncherUI", 50);
    log('进入聊天页。')
    var redPackages = id(redPackageId).find();
    if (redPackages.size() > 0) {
        redPackages[redPackages.size() - 1].click();
        waitForActivity("com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI", 10);
        desc("开").findOne().click();
    } else {
        toastLog("手慢了。或者红包id修改了，请联系开发者！");
    }
}
