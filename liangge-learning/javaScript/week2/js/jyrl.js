window.onload = function() {
    var arr = [
        "快过年了，大家可以商量着去哪玩吧～",
        "2sdfasdkadsjf;lkgjfglkjsn;dfjk",
        "3月学雷锋",
        "乾西过生日",
        "劳动节放假",
        "我过生日，儿童节",
        "英英过生日",
        "进入项目组，天气好热啊，骑车计划夭折",
        "学习html,css",
        "学习JavaScript, HTML5+CSS3",
        "学习jsp, 框架",
        "数据库的连接，后台，做一个自己的网站"
    ];

    var oDiv = document.getElementById("tab");
    var aLi = oDiv.getElementsByTagName("li");
    var oTxt = oDiv.getElementsByTagName("div")[0];

    for(var i=0;i<aLi.length;i++) {			//循环所有li
        aLi[i].index = i;					//将所有li加上index
        aLi[i].onmouseover = function() {	//给每个li加上鼠标在上面的监听
            for(var i=0;i<aLi.length;i++) {
                aLi[i].className = "";		//将所有li的class变为空
            }
            this.className = "active";		//将当前li变为活动状态

            oTxt.innerHTML = "<h2>"+ (this.index+1) +"月活动</h2><p>"+arr[this.index]+"</p>";
        };
    }
};