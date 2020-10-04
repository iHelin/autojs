while (!requestScreenCapture()) {
    log('请求截屏失败！');
    sleep(1000 * 30);
}

img = images.captureScreen();
log('截图已完成！')

var p = findImage(img, images.read('/storage/emulated/0/autojstmp/IMG_20201004_110807.jpg'), {
    // region: [0,100],
    threshold: 0.8
});
if (p) {
    p = JSON.parse(JSON.stringify(p))
    x = parseInt(p.x);
    y = parseInt(p.y);
    log(x, y);

    let nums = text('微信红包').find();
    if (!nums.empty()) {
        for (let i = 0; i < nums.size(); i++) {
            let rect = nums[i].bounds();
            log(rect.left, rect.top);
            if (rect.left > x && rect.top > y
                && rect.right <= nums[i].parent().bounds().right
                && rect.bottom <= nums[i].parent().bounds().bottom) {
                toastLog("找到啦！");
                click(rect.centerX(), rect.centerY());             
                break;
            } else {
                toastLog('没找到！');
            }
        }
    }




} else {
    toastLog("没找到");
}