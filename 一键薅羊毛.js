auto.waitFor();


// let durationTime = 1;//分钟
//suabaoPkgName=com.jm.video
//kuaishouPkgName=com.kuaishou.nebula
//douyinPkgName=com.ss.android.ugc.aweme.lite
//huoshanPkgName=com.ss.android.ugc.livelite
//douyinHuoshanPkgName=com.ss.android.ugc.live
//weishiPkgName=com.tencent.weishi

start();


function start() {
    while (true) {
        app("刷宝短视频", 30, 'com.jm.video');
        sleep(1000 * 30);
        app("快手极速版", 30, 'com.kuaishou.nebula');
        sleep(1000 * 30);
        app("抖音极速版", 30, 'com.ss.android.ugc.aweme.lite');
        sleep(1000 * 30);
        app("火山极速版", 20, 'com.ss.android.ugc.livelite');
        sleep(1000 * 30);
        app("抖音火山版", 20, 'com.ss.android.ugc.live');
        sleep(1000 * 30);
        // app("微视", 20, 'com.tencent.weishi');
        // sleep(1000 * 30);
    }
}

function app(appName, durationTime, packageName) {
    if (launchApp(appName)) {
        waitForPackage(packageName)
        toastLog('打开' + appName + '成功。');
        sleep(1000 * 10);
        toastLog('开始薅' + appName + durationTime + '分钟羊毛。');

        let startTime = Date.now();
        let endTime = startTime + 1000 * 60 * durationTime;
        while (endTime >= startTime) {
            let waitTime = random(5, 25);
            swipe(device.width / 2, device.height - 200, device.width / 2, device.height / 2 - 500, random(300, 1000));
            toastLog(appName + "：等待" + waitTime + "秒。");
            sleep(waitTime * 1000);
            startTime = Date.now();
        }
        toastLog('结束薅' + appName + '羊毛。');

        // home();
        back();
        sleep(200);
        back();
        if (currentPackage() === packageName) {
            home();
        }
    } else {
        toastLog('打开' + appName + '失败。');
    }
}
