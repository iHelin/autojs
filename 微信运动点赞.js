
auto.waitFor();

start();

function start() {
    while (true) {
        if (text('排行榜').exists()) {
            toastLog('当前在排行榜页面');

            var object = id('bo_').find();
            if (!object.empty()) {

                object.forEach(function(currentValue, index) {
                    if (currentValue) {
                        var like = currentValue.parent().parent();

                        if (like.click()) {
                            log('执行点赞成功！');
                            sleep(random(1000, 3000));
                        } else {
                            toastLog('执行点赞失败！');
                        }

                    }

                    if (text('赞我的朋友').exists()) {
                        back();
                        sleep(random(1000, 3000));
                    }
                    if (textEndsWith('的主页').exists()) {
                        back();
                        sleep(random(1000, 3000));
                    }
                })
            } else {
                toastLog('没找到')
            }

        } else {
            toastLog('不在排行榜页面');
        }

        if (text('邀请朋友').exists()) {
            toastLog('已到达底部，准备结束脚本！')
            break;
        }

        if (text('排行榜').exists()) {
            var rect = id('br').findOne().bounds();
            var y2 = rect.bottom;
            swipe(device.width / 2 + random(-100, 100), device.height - 10, device.width / 2 + random(-100, 100), y2, random(1000, 2000));
        }

    }
}