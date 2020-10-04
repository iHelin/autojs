auto.waitFor();
start();

let redPackageId = 'al7';
let chatListId = 'b4r';
let chatroomId = 'hv_';
let chatListActivity = 'android.widget.LinearLayout';
let chatroomActivity = 'com.tencent.mm.ui.LauncherUI';
let openRedPackageActivit = 'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI';
let patt = /^.*[:|：]*[微信红包].+$/;
let redPackageTmpPath = '/storage/emulated/0/autojstmp/IMG_20201004_110807.jpg'

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
            // if (currentActivity() in [chatListActivity, chatroomActivity]) {
            if (id(chatListId).findOne(200) != null) {
                toastLog('聊天列表。')
                textContains("[微信红包]").findOne().parent().parent().parent().parent().click();
                grab();
            }
            // }
            // if (currentActivity() in [chatListActivity, chatroomActivity]) {
            if (id(chatroomId).findOne(200) != null) {
                toastLog('聊天页面。')
                grab();
            }
            sleep(3000);
        }
    });
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
        sleep(2000);
    } else {
        toastLog("手慢了。或者红包id修改了，请联系开发者！");
    }
}


function grab2() {
    // waitForActivity(chatroomActivity, 50);
    requestScreenCapture();
    while (id(chatroomId).findOne(200) != null) {
        log('进入聊天页2。')
        log('开始截屏。')
        img = images.captureScreen();
        log('截图已完成！')

        var p = findImage(img, images.read(redPackageTmpPath), {
            // region: [0,100],
            threshold: 0.8
        });
        if (p) {
            toastLog("找到红包啦！");

            p = JSON.parse(JSON.stringify(p))
            x = parseInt(p.x);
            y = parseInt(p.y);

            click(x + 318, y + 117);

            waitForActivity(openRedPackageActivit, 50);
            desc("开").findOne().click();
            sleep(3000);
            back();
        } else {
            log("没有匹配到截图。");
        }
        break;

    }
    log('找红包完成！')
}