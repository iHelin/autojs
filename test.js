toast("hello");

评论=desc("评论").findOne();
log(评论);
评论.click();
sleep(1000);
text("评论").findOne().click();
// 赞 = text("赞").findOne();
// 赞的父控件 = 赞.parent();
// 赞的父控件.click();