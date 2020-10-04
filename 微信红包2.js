auto.waitFor();
start();

let redPackageId = 'al7';
let chatListId = 'b4r';
let chatroomId = 'hv_';
let chatListActivity = 'android.widget.LinearLayout';
let chatroomActivity = 'com.tencent.mm.ui.LauncherUI';
let openRedPackageActivit = 'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI';
let patt = /^.*[:|：]*[微信红包].+$/;


function start() {

    toastLog("开始监听红包中……");

    threads.start(function () {//在子进程中运行监听事件
        events.observeNotification();
        events.onNotification(function (notification) {
            if (notification.getPackageName() === 'com.tencent.mm' && patt.test(notification.getText())) {
                notification.click();
                grab();
            }
        });
    });

    threads.start(function () {
        while (true) {
            if (currentActivity() === chatListActivity) {
                if (id(chatListId).findOne(200) != null) {
                    toastLog('聊天列表。')
                    textContains("[微信红包]").findOne().parent().parent().parent().parent().click();
                    grab();
                }
            }
            if (currentActivity() === chatroomActivity) {
                if (id(chatroomId).findOne(200) != null) {
                    toastLog('聊天页面。')
                    grab();
                }
            }
            sleep(3000);
        }
    })
}

//抢红包函数
function grab() {
    waitForActivity(chatroomActivity, 50);
    log('进入聊天页1。')
    var redPackages = id(redPackageId).find();
    if (redPackages.size() > 0) {
        redPackages[redPackages.size() - 1].click();
        waitForActivity(openRedPackageActivit, 50);
        desc("开").findOne().click();
        sleep(3000);
        home();
    } else {
        toastLog("手慢了，或者红包id修改了，请联系开发者！");
    }
}