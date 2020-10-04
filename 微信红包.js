auto.waitFor();

start();

let redPackageId = 'al7';
let chatListId = 'b4r'
let chatroomId = 'hv_'
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
            if (currentActivity() === "com.tencent.mm.ui.LauncherUI") {
                if (id(chatListId).exists() && textContains("[微信红包]").find().size() > 0) {
                    textContains("[微信红包]").findOne().parent().parent().parent().parent().click();
                    grab();
                } else if (id(chatroomId).exists()) {
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
    var redPackages = id(redPackageId).find();
    if (redPackages.size() > 0) {
        redPackages[redPackages.size() - 1].click();
        waitForActivity("com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI", 10);
        desc("开").findOne().click();
        sleep(2000);
    } else {
        toastLog("手慢了。或者红包id修改了，请联系开发者！");
    }
}


function grab2() {
    if (!requestScreenCapture()) {
        toastLog('请求截屏失败！');
        sleep(1000 * 30);
    }

    img = images.captureScreen();
    log('截图已完成！')

    var p = findImage(img, images.read('/storage/emulated/0/autojstmp/IMG_20201004_110807.jpg'), {
        // region: [0,100],
        threshold: 0.8
    });
    if (p) {
        p = JSON.parse(JSON.stringify(p))
        x = parseInt(p.x);
        y = parseInt(p.y);
        log(x, y);

        let nums = text('微信红包').find();
        if (!nums.empty()) {
            for (let i = 0; i < nums.size(); i++) {
                let rect = nums[i].bounds();
                log(rect.left, rect.top);
                if (rect.left > x && rect.top > y
                    && rect.right <= nums[i].parent().bounds().right
                    && rect.bottom <= nums[i].parent().bounds().bottom) {
                    toastLog("找到红包啦！");
                    click(rect.centerX(), rect.centerY());
                    break;
                } else {
                    toastLog('没找到！');
                }
            }
        }
    } else {
        toastLog("没找到");
    }
    sleep();
    back();
}