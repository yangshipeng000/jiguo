function timer() {
    var future = new Date('2021/1/1 00:00:00')
    var now = new Date
    var times = (future - now) / 1000;
    var days = parseInt(times / 86400);
    var hours = parseInt((times / 3600) % 24);
    var minutes = parseInt((times / 60) % 60);
    var seconds = parseInt(times % 60);
    var datetime = '申请时间剩余：' + days + ' 天 '
    datetime += hours + ' 小时 '
    datetime += minutes + ' 分钟 '
    datetime += seconds + ' 秒 '
    document.getElementById("timeOut").innerHTML = datetime;
}

timer();
setInterval(timer, 1000);