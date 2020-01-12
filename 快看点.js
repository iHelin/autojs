//等待时间，单位：秒
var waitTime = 15;

auto.waitFor();
start();

function start() {
    openAPP();
}

//启动程序
function openAPP() {
    read();
}

function read() {
    while (true) {
        if (currentActivity() === "com.kuaishou.athena.MainActivity" && text("关注").exists()) {

            sleep(500);
            swipe(device.width / 2, device.height / 2 + 500, device.width / 2, device.height / 2 - 500, random(300, 1000));

            toastLog("等待" + waitTime + "秒");
            sleep(waitTime * 1000);
        }
    }
}