

auto.waitFor();
var height = device.height;
var width = device.width;
// toast("\n设备宽" + width + "\n" + "设备高" + height + "\n" + "手机型号" + device.model + "\n安卓版本" + device.release) 
// setScreenMetrics(width, height); 
// toast("设备高" + height); 
autoplay();
function autoplay() {
    if (textEndsWith("去签到").exists()) {
        textEndsWith("去签到").findOne().click();
        sleep(1600);
        toast("签到成功");
    }
    sleep(2000);
    toast("完成[签到]检测");


    while (textEndsWith("去逛逛").exists()) {
        //要支持的动作 
        toast("存在去逛逛");

        textEndsWith("去逛逛").findOne().click();
        sleep(5000);
        swipe(width / 2, height - 300, width / 2, 100, 1000);
        //aitForActivity  sleep(2500); 
        swipe(width / 2, height - 300, width / 2, 100, 1000);
        sleep(5000);
        swipe(width / 2, height - 300, width / 2, 100, 1000);
        sleep(5000);
        swipe(width / 2, height - 300, width / 2, 100, 1000);
        sleep(5000);
        swipe(width / 2, height - 300, width / 2, 100, 1000);
        sleep(5000);
        back();
    }

    sleep(2000);

    while (textEndsWith("去浏览").exists()) {
        //要支持的动作 
        toast("存在去浏览");
        textEndsWith("去浏览").findOne().click();
        sleep(5000);
        if (currentActivity() !== 'com.taobao.taolive.room.TaoLiveVideoActivity') {
            swipe(width / 2, height - 300, width / 2, 100, 1000);
        }
        sleep(5000);

        if (currentActivity() !== 'com.taobao.taolive.room.TaoLiveVideoActivity') {
            swipe(width / 2, height - 300, width / 2, 100, 1000);
        }
        sleep(5000);
        if (currentActivity() !== 'com.taobao.taolive.room.TaoLiveVideoActivity') {
            swipe(width / 2, height - 300, width / 2, 100, 1000);
        }
        sleep(5000);
        if (currentActivity() !== 'com.taobao.taolive.room.TaoLiveVideoActivity') {
            swipe(width / 2, height - 300, width / 2, 100, 1000);
        }
        sleep(5000);
        if (currentActivity() !== 'com.taobao.taolive.room.TaoLiveVideoActivity') {
            swipe(width / 2, height - 300, width / 2, 100, 1000);
        }
        sleep(5000);
        back();
    }

    sleep(2000);


    while (textEndsWith("去完成").exists()) {
        //要支持的动作 
        toast("存在去完成");
        textEndsWith("去完成").findOne().click();
        sleep(5000);
        swipe(width / 2, height - 300, width / 2, 100, 1000);
        //aitForActivity  sleep(2500); 
        swipe(width / 2, height - 300, width / 2, 100, 1000);
        sleep(5000);
        swipe(width / 2, height - 300, width / 2, 100, 1000);
        sleep(5000);
        swipe(width / 2, height - 300, width / 2, 100, 1000);
        sleep(5000);
        swipe(width / 2, height - 300, width / 2, 100, 1000);
        sleep(5000);
        back();
    }

    sleep(2000);

    while (textEndsWith("去领取").exists()) {
        //要支持的动作 
        toast("存在去领取");
        textEndsWith("去领取").findOne().click();
        sleep(2500);
    }

    leep(2000);
    toast("结束")
}