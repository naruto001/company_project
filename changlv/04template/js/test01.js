var oUl = document.getElementById("mt_list");
var aLi = oUl.getElementsByTagName("li");
var num;

for(var i=0; i<aLi.length; i++) {
    var oS = aLi[0].querySelector(".small");
    var oW = aLi[0].querySelector(".wrap");
    var oScr = aLi[0].querySelector(".screen_viewport");
    var oB = aLi[0].querySelector(".big");
    var oWidth = [];
    var oHeight = [];
    
    
    oS.onclick = function() {
      var num = oW.offsetWidth;

      if (num > 260) {
        oW.style.width = num - 50 + "px";
        oW.style.height = parseInt(oW.style.width) + 360 + "px";
        oScr.style.left = 16 + "px";
        oScr.style.top = 65 + "px";
        oScr.style.right = 16 + "px";
        oScr.style.bottom = 152 + "px";
        oWidth.push(num);
      } else {
        num = 260 + "px";
        oWidth.push(num);
      }
     
    };
    oB.onclick = function () {

        // if(num < 260) {
        //     oW.style.width = num + 50 + "px";
        //     oW.style.height = parseInt(oW.style.width) + 300 + "px";
        //     oScr.style.left = 19 + "px";
        //     oScr.style.top = 78 + "px";
        //     oScr.style.right = 19 + "px";
        //     oScr.style.bottom = 91 + "px";
        // }else {
        //     num = 310 + "px";
        // }
        if(oWidth[0] = 310 ) {
            oW.style.width = 310 + "px";
            oW.style.height = 630 + "px";
            oScr.style.left = 19 + "px";
            oScr.style.top = 78 + "px";
            oScr.style.right = 19 + "px";
            oScr.style.bottom = 64 + "px";
        }else {
            oW.style.width = 310 + "px";
            oScr.style.left = 19 + "px";
            oScr.style.top = 78 + "px";
            oScr.style.right = 19 + "px";
            oScr.style.bottom = 64 + "px";
        }
    }
}
