// 微信 跳一跳
//加快速度 i+=60，所以我的手机不卡了哈哈
//兼容7.0以下.因为我的是安卓6.0
//需要autojs 3.0 //root 分辨率1920 1080

var press_coefficient = device.height == 1920 ? 1.392 : 2.099; // 长按的时间系数，请自己根据实际情况调节

const under_game_score_y = 300 // 截图中刚好低于分数显示区域的 Y 坐标，300 是 1920x1080 的值，2K 屏、全面屏请根据实际情况修改
//按压位置为再来一局的位置
const press_x = device.width / 2;
const press_y = 1584 * (device.height / 1920.0);
const piece_body_width = 80 // 棋子的宽度，比截图中量到的稍微大一点比较安全，可能要调节
const piece_dist_from_top_to_base = 188; //棋子最顶部到棋子底部中点的距离


const piece_color = "#3d3752"; //棋子大致颜色
var w = device.width;
var h = device.height;
//使这些函数调用更方便
const red = colors.red;
const green = colors.green;
const blue = colors.blue;
const max = Math.max;
const abs = Math.abs;
var root_automator = true;
main();

function main() {
    // prepare();
    toast("请在5秒内打开游戏，并点击开始按钮");

    waitForPackage("com.tencent.mm");
    // sleep(5000);

    while (currentPackage() == "com.tencent.mm") {
        sleep(3000);
        //请求横屏截图
        toast(new Date());
        // requestScreenCapture(true);
        if(!requestScreenCapture()){
            toast("请求截图失败");
            exit();
        }else{
            toast(123456);
        }
        var im = captureScreen();
        console.log(im);


        img.recycle();
    }
}
// 获取棋子