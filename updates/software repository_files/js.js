	function fnToggleDirList() {
		if(document.getElementById('dirlist').style.display == "none") {
			document.getElementById('dirlist').style.display = "inline";
			document.getElementById('togglelabel').innerHTML = "Hide Directory Contents.";
		}
		else {
			document.getElementById('dirlist').style.display = "none";
			document.getElementById('togglelabel').innerHTML = "Show Directory Contents."
		}
	}
