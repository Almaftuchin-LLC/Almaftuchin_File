function generate() {
    var linkDL = document.getElementById("download"),
        btn = document.getElementById("btn"),
        direklink = document.getElementById("download").href,
        waktu = 10;
    var teks_waktu = document.createElement("span");
    linkDL.parentNode.replaceChild(teks_waktu, linkDL);
    var id;
    id = setInterval(function () {
        waktu--;
        if (waktu < 0) {
            teks_waktu.parentNode.replaceChild(linkDL, teks_waktu);
            clearInterval(id);
            window.location.replace(direklink);
            linkDL.style.display = "inline";
			
        } else {
            teks_waktu.innerHTML = " " + "Start download within " + "" + waktu.toString() + " Sec";
            btn.style.display = "none";
        }
    }, 1000);
}


function generate64() {
    var linkDL = document.getElementById("download64"),
        btn = document.getElementById("btn64"),
        direklink = document.getElementById("download64").href,
        waktu = 100;
    var teks_waktu = document.createElement("span");
    linkDL.parentNode.replaceChild(teks_waktu, linkDL);
    var id;
    id = setInterval(function () {
        waktu--;
        if (waktu < 0) {
            teks_waktu.parentNode.replaceChild(linkDL, teks_waktu);
            clearInterval(id);
            window.location.replace(direklink);
            linkDL.style.display = "inline";
			
        } else {
            teks_waktu.innerHTML = " " + "Downloading within " + "" + waktu.toString() + " Secs";
            btn.style.display = "none";
        }
    }, 1000);
}

//<![CDATA[
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");loadCSS("https://fonts.googleapis.com/css?family=Poppins:400,700");
//]]>
