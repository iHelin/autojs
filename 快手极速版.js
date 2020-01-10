
var waitTime = 10000;
// var forward = true;

auto.waitFor();
start();

function start() {
    openAPP();
}

//启动程序
function openAPP() {
    // app.launchApp("微信读书");

    // waitForPackage("com.tencent.weread");

    read();
}

function read() {
    while (true) {
        if (currentActivity() === "com.yxcorp.gifshow.HomeActivity") {
            swipe(device.width / 2, device.height / 2 + 500, device.width / 2, device.height / 2 - 500, random(300, 1000));


            var sleepNum = random(waitTime - 1000, waitTime + 1000);
            toastLog("等待" + sleepNum + "毫秒");
            sleep(sleepNum);
            // } else {
            //     toastLog("请进入阅读页面！");
            //     sleep(5000);
        }
    }
}