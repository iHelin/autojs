
var forward = true;

while (true) {

    if (forward) {
        toast("下滑");
        swipe(device.width / 2, device.height / 2 + 500, device.width / 2, device.height / 2 - 500, 500);
    } else {
        toast("上滑");
        swipe(device.width / 2, device.height / 2 - 500, device.width / 2, device.height / 2 + 500, 500);
    }

    if (random() > 0.2) {
        forward = true;
    } else {
        forward = false;
    }

    sleep(5000);
}