auto.waitFor();
// console.log(textEndsWith("关注").findOne().bounds());

// console.log(textEndsWith("关注").findOne());

// console.log(textEndsWith("去逛逛").exists());

// textEndsWith("去逛逛").findOne().click();

// log(colors.isSimilar("#ff0000","#ff0f00"));



// img.recycle();

// var a = desc("评论").find();

// var b = a.find(clickable());

// b.forEach(item => {
//     log(item.text());
// });

// log(a);
// log(a.empty());

// 评论=desc("评论").findOne();
// log(评论);
// 评论.click();
// sleep(1000);
// text("评论").findOne().click();
// 赞 = text("赞").findOne();
// 赞的父控件 = 赞.parent();
// 赞的父控件.click();



// 随机生成数字
// let i = random(48,57);
// let i = random(65,90);
// let i = random(97, 122);
// toastLog(i);
// 随机生成字母
// let a = String.fromCharCode(i);
// toastLog(a);




// let startTime = Date.now();
//         let endTime = Date.now() + 1000 * 60 * 1;
// toastLog(startTime);

// toastLog(endTime);

// back();
// sleep(200);
// back();
// back();

// toastLog(currentPackage());
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