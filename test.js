toast("hello");

console.log(textContains("已\n读\n完").exists());

auto.waitFor();
var height = device.height;
var width = device.width;
autoplay();
function autoplay() {
    // if (textContains("签到").exists()) {
    //     textEndsWith("签到").findOne().click();
    //     sleep(1600);
    //     toast("签到成功")
    // }
    // sleep(2000);
    // toast("完成[签到]检测");
    while (true) {
        //要支持的动作
        toast("存在去浏览");
        click(60, 828);
        sleep(5000);

        if (!textContains("今日已达上限").exists()) {
            swipe(width / 2, height - 300, width / 2, 100, 1000);
            sleep(2500);
            swipe(width / 2, height - 300, width / 2, 100, 1000);
            sleep(5000);
            swipe(width / 2, height - 300, width / 2, 100, 1000);
            sleep(5000);
            swipe(width / 2, height - 300, width / 2, 100, 1000);
            sleep(5000);
        }

        back();
        sleep(2000);
    }
    toast("完成[去浏览]检测");
    sleep(2000);
    toast("结束");
}




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


