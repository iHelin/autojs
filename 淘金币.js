auto.waitFor();

var height = device.height;
var width = device.width;

autoplay();

function autoplay() {
    sleep(2000);
    if (text("打卡").exists()) {
        text("打卡").findOne().click();
        sleep(2000);
        toast("打卡成功");
    }
    while (textEndsWith("去逛逛").exists()) {
        //要支持的动作
        toast("存在去逛逛");
        textEndsWith("去逛逛").findOne().click();
        sleep(5000);

        swipe(width / 2, height - 300, width / 2, 100, 1000);
        sleep(2500);
        swipe(width / 2, height - 300, width / 2, 100, 1000);
        sleep(5000);
        swipe(width / 2, height - 300, width / 2, 100, 1000);
        sleep(5000);
        swipe(width / 2, height - 300, width / 2, 100, 1000);
        sleep(5000);

        back();
        sleep(2000);
    }
    toast("完成[去逛逛]检测");
    sleep(2000);
    toast("结束");
}