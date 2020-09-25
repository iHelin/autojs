//等待时间，单位：秒
auto.waitFor();
start();

function start() {
    while (true) {
        if (currentActivity() === "com.ss.android.ugc.live.main.MainActivity" && id('ss').exists()) {
            let waitTime = random(10, 20);
            sleep(500);

            let wth = random(device.width / 2 - 50, device.width / 2 + 50);
            swipe(wth, device.height / 2 + 500, wth, device.height / 2 - 500, random(300, 1000));

            toastLog("等待" + waitTime + "秒");
            sleep(waitTime * 1000);
        } else {
            toastLog("请返回火山极速版首页！");
            sleep(5000);
        }
    }
}