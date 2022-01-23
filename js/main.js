document.getElementById("start-now").addEventListener("click", (e) => {
	document.getElementsByClassName("main-box")[0].style.opacity = "0";
	setTimeout(() => {
		document.getElementsByClassName("main-box")[0].style.display = "none";
		document.getElementsByClassName("first-box")[0].style.display = "block";
		document.getElementsByClassName("wrapper")[0].style.minHeight = "200vh";
		document.getElementsByClassName("wrapper-overlay")[0].style.minHeight =
			"200vh";
	}, 500);
});

let checked = false;

document.querySelectorAll(".first-box .ques").forEach((ques) => {
	ques.addEventListener("click", (e) => {
		if (ques.children[2].checked) {
			ques.children[0].style.width = "100%";
			checked = true;
		} else {
			ques.children[0].style.width = "0%";
		}
	});
});
