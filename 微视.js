auto.waitFor();
start();

function start() {
    while (true) {
        if (currentPackage() === "com.tencent.weishi") {

            for (let i = 0; i < 20; i++) {
                let waitTime = random(5, 20);

                if (id('ogc').exists()) {
                    id('ogc').click();
                }
                sleep(500);
                let wth1 = random(device.width / 2 + 200, device.width / 2 + 300);
                let wth2 = random(device.width / 2 + 200, device.width / 2 + 300);
                swipe(wth1, device.height / 2 + 600, wth2, device.height / 2 - 600, random(600, 1500));

                toastLog("等待" + waitTime + "秒，第" + (i + 1) + "次！");
                sleep(waitTime * 1000);
            }
            click(835, 135);
            sleep(15000);
            back();
            click(562, 1464);
            sleep(2000);

        } else {
            toastLog("请返回微视首页！");
            sleep(5000);
        }


    }
}