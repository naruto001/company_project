var oDiv = document.querySelector(".cylb_wrap");
var aSpn = oDiv.querySelectorAll(".spn");
var aUl = oDiv.querySelectorAll(".ul");

for(var i=0; i<aSpn.length; i++) {
	aSpn[i].index = i;
	aSpn[i].onclick = function () {
		for(var j=0; j<aSpn.length; j++) {
			aSpn[j].className = "";
			aUl[this.index].style.display = "none";
		}
		this.className = "cylb_active";
		aUl[this.index].style.display = "block";
	}
}

