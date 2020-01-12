auto.waitFor();

threads.start(function () {//在子进程中运行监听事件
    //抖音
    var waitTime = 20;

   
    start();

    function start() {
        while (true) {
            if (currentActivity() === "com.ss.android.ugc.aweme.main.MainActivity") {

                sleep(500);
                swipe(device.width / 2, device.height / 2 + 500, device.width / 2, device.height / 2 - 500, random(300, 1000));

                toastLog("等待" + waitTime + "秒");
                sleep(waitTime * 1000);
            }
        }
    }
});

threads.start(function () {//在子进程中运行监听事件
    //火山
    var waitTime = 25;

    start();

    function start() {
        while (true) {
            if (currentActivity() === "com.ss.android.ugc.live.detail.DetailActivity") {

                sleep(500);
                swipe(device.width / 2, device.height / 2 + 500, device.width / 2, device.height / 2 - 500, random(300, 1000));

                toastLog("等待" + waitTime + "秒");
                sleep(waitTime * 1000);
            }
        }
    }
});

threads.start(function () {//在子进程中运行监听事件
    //快手
    var waitTime = 20;

    start();

    function start() {
        while (true) {
            if (currentActivity() === "com.yxcorp.gifshow.HomeActivity") {

                sleep(500);
                swipe(device.width / 2, device.height / 2 + 500, device.width / 2, device.height / 2 - 700, random(300, 1000));

                toastLog("等待" + waitTime + "秒");
                sleep(waitTime * 1000);
            }
        }
    }
});

threads.start(function () {//在子进程中运行监听事件
    //快看点
    var waitTime = 20;

    start();

    function start() {
        while (true) {
            if (currentActivity() === "com.kuaishou.athena.MainActivity" && text("关注").exists()) {

                sleep(500);
                swipe(device.width / 2, device.height / 2 + 500, device.width / 2, device.height / 2 - 500, random(300, 1000));

                toastLog("等待" + waitTime + "秒");
                sleep(waitTime * 1000);
            }
        }
    }

});

threads.start(function () {//在子进程中运行监听事件
    //刷宝
    //等待时间，单位：秒
    var waitTime = 20;

    start();

    function start() {
        while (true) {
            if (currentActivity() === "com.jm.video.ui.main.MainActivity") {

                sleep(500);
                swipe(device.width / 2, device.height / 2 + 500, device.width / 2, device.height / 2 - 700, 600);

                toastLog("等待" + waitTime + "秒");
                sleep(waitTime * 1000);
            }
        }
    }
});

threads.start(function () {//在子进程中运行监听事件
    //

});