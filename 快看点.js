//等待时间，单位：秒
var waitTime = 20;

auto.waitFor();
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