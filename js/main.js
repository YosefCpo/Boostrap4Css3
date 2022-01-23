document.getElementById("start-now").addEventListener("click", (e) => {
	document.getElementsByClassName("main-box")[0].style.opacity = "0";
	setTimeout(() => {
		document.getElementsByClassName("main-box")[0].style.display = "none";
		document.getElementsByClassName("first-box")[0].style.display = "block";
		document.getElementsByClassName("first-box")[0].style.opacity = "1";
		document.getElementsByClassName("wrapper")[0].style.minHeight = "200vh";
		document.getElementsByClassName("wrapper-overlay")[0].style.minHeight =
			"200vh";
	}, 500);
});

document.getElementById("back").addEventListener("click", (e) => {
	document.getElementsByClassName("first-box")[0].style.opacity = "0";
	setTimeout(() => {
		document.getElementsByClassName("first-box")[0].style.display = "none";
		document.getElementsByClassName("main-box")[0].style.display = "block";
		document.getElementsByClassName("main-box")[0].style.opacity = "1";
		document.getElementsByClassName("wrapper")[0].style.minHeight = "110vh";
		document.getElementsByClassName("wrapper-overlay")[0].style.minHeight =
			"110vh";
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

document.getElementById("first-next").addEventListener("click", (e) => {
	document.getElementsByClassName("first-box")[0].style.opacity = "0";
	setTimeout(() => {
		document.getElementsByClassName("first-box")[0].style.display = "none";
		document.getElementsByClassName("second-box")[0].style.display = "block";
		document.getElementsByClassName("second-box")[0].style.opacity = "1";
		document.getElementsByClassName("wrapper")[0].style.minHeight = "110vh";
		document.getElementsByClassName("wrapper-overlay")[0].style.minHeight =
			"110vh";
	}, 500);
});

document.getElementById("second-back").addEventListener("click", (e) => {
	document.getElementsByClassName("second-box")[0].style.opacity = "0";
	setTimeout(() => {
		document.getElementsByClassName("second-box")[0].style.display = "none";
		document.getElementsByClassName("first-box")[0].style.display = "block";
		document.getElementsByClassName("first-box")[0].style.opacity = "1";
		document.getElementsByClassName("wrapper")[0].style.minHeight = "200vh";
		document.getElementsByClassName("wrapper-overlay")[0].style.minHeight =
			"200vh";
	}, 500);
});

let secondChecked = false;

document.querySelectorAll(".second-box .ques").forEach((ques) => {
	ques.addEventListener("click", (e) => {
		if (ques.children[2].checked) {
			ques.children[0].style.width = "100%";
			secondChecked = true;
			setTimeout(() => {
				document.getElementsByClassName("second-box")[0].style.opacity = "0";
				setTimeout(() => {
					document.getElementsByClassName("second-box")[0].style.display =
						"none";
					document.getElementsByClassName("third-box")[0].style.display =
						"block";
					document.getElementsByClassName("third-box")[0].style.opacity = "1";
					document.getElementsByClassName("wrapper")[0].style.minHeight =
						"110vh";
					document.getElementsByClassName(
						"wrapper-overlay"
					)[0].style.minHeight = "110vh";
				}, 500);
			}, 1000);
		}
		if (secondChecked === true) {
			document.querySelectorAll(".second-box .ques").forEach((ques) => {
				if (!ques.children[2].checked) {
					ques.style.transform = "translateX(200px)";
					ques.style.opacity = "0.1";
					setTimeout(() => {
						ques.style.opacity = "0";
					}, 1000);
				}
			});
		}
	});
});

let thirdCheck = false;

document.querySelectorAll(".third-box .ques").forEach((ques) => {
	ques.addEventListener("click", (e) => {
		if (ques.children[2].checked) {
			ques.children[0].style.width = "100%";
			thirdCheck = true;
		}
		if (thirdCheck === true) {
			document.querySelectorAll(".third-box .ques").forEach((ques) => {
				if (!ques.children[2].checked) {
					ques.style.transform = "translateX(200px)";
					ques.style.opacity = "0.1";
					setTimeout(() => {
						ques.style.opacity = "0";
					}, 1000);
				}
			});
		}
	});
});

document.getElementById("third-back").addEventListener("click", (e) => {
	document.getElementsByClassName("third-box")[0].style.opacity = "0";
	setTimeout(() => {
		document.getElementsByClassName("third-box")[0].style.display = "none";
		document.getElementsByClassName("second-box")[0].style.display = "block";
		document.getElementsByClassName("second-box")[0].style.opacity = "1";
		document.getElementsByClassName("wrapper")[0].style.minHeight = "200vh";
		document.getElementsByClassName("wrapper-overlay")[0].style.minHeight =
			"200vh";
	}, 500);
});
