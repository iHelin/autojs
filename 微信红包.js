

start();

function start() {
    toastLog("监听红包中");

    threads.start(function () {//在子进程中运行监听事件
        events.observeNotification();
        events.onNotification(function (notification) {
            if (notification.getPackageName() === 'com.tencent.mm' && notification.getText().indexOf("[微信红包]") > -1) {
                notification.click();

                grab();

            }

        });
    });


    threads.start(function () {
        // console.show();
        while (true) {
            if (currentActivity() === "com.tencent.mm.ui.LauncherUI" && id("dk_").findOne(200) !== null) {
                if (textContains("[微信红包]").find().size() > 0) {
                    textContains("[微信红包]").findOne().parent().parent().parent().parent().click();
                    grab();
                }
            }
            // textContains("[微信红包]").findOne().parent().parent().parent().parent().click();

            // toast(111);
            sleep(1000);
        }

    });

    // threads.start(function () {
    //     // console.show();
    //     while (currentActivity() === "com.tencent.mm.ui.LauncherUI" && id("l1").findOne(200) !== null) {
    //         textContains("[微信红包]").find().forEach(child => {
    //             child.parent().parent().parent().parent().click();
    //             grab();
    //         });
    //         sleep(1000);
    //     }

    // });

}

function grab() {
    waitForPackage("com.tencent.mm", 10);
    waitForActivity("com.tencent.mm.ui.LauncherUI");

    var hb = id("atb").find();
    if (hb.size() > 0) {
        hb[hb.size() - 1].click();
        waitForActivity("com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI", 10);
        desc("开").findOne().click();
    } else {
        toast("手慢了");
    }
}


