
start();

function start() {
    device.keepScreenOn();
    openAPP();
}

//启动程序
function openAPP() {
    app.launchApp("微信读书");
    
    waitForPackage("com.tencent.weread");
    backAndEnter();

    id("rw").findOne().click();
    sleep(1000);

    id("hp").findOne().parent().click();
    sleep(1000);

    read();
}

function read() {
    while (true) {
        swipe(600, 600, 300, 600, 300);
        var sleepNum = random(10000, 15000);
        toastLog("等待" + sleepNum);
        sleep(sleepNum);
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
    return currentActivity() === "com.tencent.weread.WeReadFragmentActivity" && id("rx").findOne(200) !== null;
}