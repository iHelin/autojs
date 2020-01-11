//等待时间，单位：秒
var waitTime = 20;
var forward = true;

auto.waitFor();
start();

function start() {
    device.keepScreenOn();
    openAPP();
}

//启动程序
function openAPP() {
    if (app.launchApp("微信读书")) {
        waitForPackage("com.tencent.weread");
        backAndEnter();

        id("rw").findOne().click();
        sleep(1000);

        id("hp").findOne().parent().click();
        sleep(1000);

        read();
    } else {
        toastLog("请安装微信读书后再试！");
    }


}

function read() {
    while (true) {
        if (currentActivity() === "com.tencent.weread.ReaderFragmentActivity") {
            if (forward) {
                swipe(device.width / 2 + 200, device.height / 2, device.width / 2 - 200, device.height / 2, random(300, 1000));
            } else {
                swipe(device.width / 2 - 200, device.height / 2, device.width / 2 + 200, device.height / 2, random(300, 1000));
            }

            if (textContains("已\n读\n完").exists()) {
                //开始反向滑动
                toastLog("开始反向滑动");
                forward = false;
            }

            toastLog("等待" + waitTime + "秒");
            sleep(waitTime * 1000);
        } else {
            toastLog("请进入阅读页面！");
            sleep(5000);
        }
    }
}

//返回主页
function backAndEnter() {
    if (!isHomePage()) {
        back();
        sleep(1500);
        // if(currentActivity() === "com.miui.home.launcher.Launcher"){
        // openAPP();
        // break;
        // }
    }
}


//是否是主页
function isHomePage() {
    // currentPackage() === "com.tencent.weread"
    return id("rx").findOne(200) !== null;
}