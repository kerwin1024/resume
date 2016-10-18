
//轮播图片
//window.onload = function () {
//    var index = 1;
//    var timer;
//
//    function start1() {
//        document.getElementById("img" + index).style.cssText = "visibility:hidden; opacity:0;";
//        document.getElementById("imgB" + index).style.cssText = "visibility:hidden; opacity:0;";
//        if (index < 12) {
//            index++;
//        } else {
//            index = 1;
//        }
//        document.getElementById("img" + index).style.cssText = "visibility:visible; opacity:1;";
//        document.getElementById("imgB" + index).style.cssText = "visibility:visible; opacity:1;";
//        timer = setTimeout(start1, 3000);
//    }
//
//    start1();
//};

//



(function(){
    //宽度大于850时点击显示
    //导航按钮
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    var btns = [btn1,btn2,btn3,btn4,btn5];
    //内容区域id
    var aboutMe = document.getElementById("aboutMe");
    var personalInfo = document.getElementById("personalInfo");
    var myWork = document.getElementById("myWork");
    var myBlog = document.getElementById("myBlog");
    var contactMe = document.getElementById("contactMe");
    //if(aboutMe.style.height==""){
    //    btn1.onclick=aboutMe.style.height="560px";
    //    
    //}else if(aboutMe.style.height=="560px")
    //var conS2 ={"btn1":aboutMe,"btn2":personalInfo,"btn3":myWork,"btn4":myBlog,"btn5":contactMe};
    btn1.onclick=function(){
        aboutMe.style.height="560px";
        personalInfo.style.height="0px";
        myWork.style.height="0px";
        myBlog.style.height="0px";
        contactMe.style.height="0px";
    }
    btn2.onclick=function(){
        personalInfo.style.height="560px";
        aboutMe.style.height="0px";
        myWork.style.height="0px";
        myBlog.style.height="0px";
        contactMe.style.height="0px";
    }
    btn3.onclick=function(){
        myWork.style.height="auto";
        aboutMe.style.height="0px";
        personalInfo.style.height="0px";
        myBlog.style.height="0px";
        contactMe.style.height="0px";
    }
    btn4.onclick=function(){
        myBlog.style.height="560px";
        aboutMe.style.height="0px";
        personalInfo.style.height="0px";
        myWork.style.height="0px";
        contactMe.style.height="0px";
    }
    btn5.onclick=function(){
        contactMe.style.height="auto";
        aboutMe.style.height="0px";
        personalInfo.style.height="0px";
        myWork.style.height="0px";
        myBlog.style.height="0px";
    }
    //for(var i=0;i<btns.length;i++){
    //    btns[i].onclick=function(){
    //        var x = conS.some();
    //        if(x){
    //            conS2[this.getAttribute("id")].style.cssText = "height:560px;";
    //        }else{
    //            conS2[this.getAttribute("id")].style.cssText = "height:0px;";
    //        }
    //        //bth[i].style.height="560px";
    //        //if(i<5){
    //        //}
    //        //else if(i==5){
    //        //    conS2[this.getAttribute("id")].style.cssText = "height:0px;";
    //        //    i=1
    //        //}
    //        
    //    }
    //
    //}
//宽度小于850时点击收放
    var aboutMeH = document.getElementById("aboutMeH");
    var personalInfoH = document.getElementById("personalInfoH");
    var myWorkH = document.getElementById("myWorkH");
    var myBlogH = document.getElementById("myBlogH");
    var contactMeH = document.getElementById("contactMeH");
    var hS = [aboutMeH,personalInfoH,myWorkH,myBlogH,contactMeH];
    var conS ={"aboutMeH":aboutMe,"personalInfoH":personalInfo,"myWorkH":myWork,"myBlogH":myBlog,"contactMeH":contactMe};
    for(var i=0;i<hS.length;i++){
        //alert(this.nodeName);
        hS[i].onclick=function(){
            //if(conS[this.getAttribute("id")]){
            //    console.log(conS[this.getAttribute("id")]);
            //}
            //console.log(this);
            //for(var)
            if(conS[this.getAttribute("id")].style.height==""){
                //conS[this.getAttribute("id")].style.display="none";
                conS[this.getAttribute("id")].style.cssText = "height:0px;";
            }else if(conS[this.getAttribute("id")].style.height=="0px"){
                //conS[this.getAttribute("id")].style.display="block";
                conS[this.getAttribute("id")].removeAttribute("style");
            }else{
                //conS[this.getAttribute("id")].style.display="none";
                conS[this.getAttribute("id")].style.cssText = "height:0px;";
            }
        }

    }

})();
//窗口大于850时清除行内样式
window.onresize=function(){
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var aboutMe = document.getElementById("aboutMe");
    var personalInfo = document.getElementById("personalInfo");
    var myWork = document.getElementById("myWork");
    var myBlog = document.getElementById("myBlog");
    var contactMe = document.getElementById("contactMe");
    var hS = [aboutMe,personalInfo,myWork,myBlog,contactMe];
    //console.log(w);
    if (w>850){
        for(var i in hS){
            //console.log(hS[i]);
            hS[i].removeAttribute("style");
        }
    }
}



//轮播图片
window.onload = function () {
    var index = 1;
    var timer;

    function start1() {
        document.getElementById("img" + index).style.cssText = "visibility:hidden; opacity:0;";
        //document.getElementById("imgB" + index).style.cssText = "visibility:hidden; opacity:0;";
        if (index < 4) {
            index++;
        } else {
            index = 1;
        }
        document.getElementById("img" + index).style.cssText = "visibility:visible; opacity:1;";
        //document.getElementById("imgB" + index).style.cssText = "visibility:visible; opacity:1;";
        timer = setTimeout(start1, 3000);
    }

    start1();
};