
auto.waitFor();
// if (text('赞我的朋友').exists()) {
//     // back();
//     // sleep(random(1000, 3000));
//     toastLog('111');
// }else{
//     toastLog('222');
// }
// exit();

start();

function start() {
    while (true) {
        if (text('排行榜').exists()) {
            toastLog('当前在排行榜页面');

            let object = id('bo_').find();
            if (!object.empty()) {
                toastLog('点赞按钮不为空！');
                object.forEach(function (currentValue, index) {

                    if (currentValue) {
                        let like = currentValue.parent().parent();

                        if (like.click()) {
                            toastLog('执行点赞成功！');
                        } else {
                            toastLog('执行点赞失败！');
                        }
                        sleep(random(1000, 3000));
                    }

                    if (text('赞我的朋友').exists()) {
                        back();
                        sleep(random()*3000);
                        toastLog('111');
                        toastLog('index='+index)
                    }
                    if (textEndsWith('的主页')) {
                        back();
                        sleep(random(1000, 3000));
                        toastLog('222');
                    }
                })
            } else {
                toastLog('没找到')
            }


        } else {
            toastLog('不在排行榜页面');
        }

        if (text('邀请朋友')) {
            toastLog('已到达底部，准备结束脚本！')
            exit();
        }

        if (id('text1').text('排行榜').exists()) {
            let rect = id('br').findOne().bounds();
            let y2 = rect.bottom;
            swipe(device.width / 2 + random(-100, 100), device.height - 10, device.width + random(-100, 100), y2, random(100, 2000));
        }

    }
}