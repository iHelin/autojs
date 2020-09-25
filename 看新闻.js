
var forward = true;

while (true) {
    var i = 0
    for (i = 0; i < 10; i++) {
        if (forward) {
            toast("下滑");
            swipe(device.width / 2, device.height / 2 + 500, device.width / 2, device.height / 2 - 500, 500);
        } else {
            toast("上滑");
            swipe(device.width / 2, device.height / 2 - 500, device.width / 2, device.height / 2 + 500, 500);
        }
        toast("滑了" + (i + 1) + "次");

        if (random() > 0.2) {
            forward = true;
        } else {
            forward = false;
        }

        sleep(5000);
    }
    back();
    sleep(2000);
    swipe(device.width / 2, device.height / 2 + 500, device.width / 2, device.height / 2 - 500, 500);
    sleep(2000);
    click(500, 800);
    sleep(2000);
}