function prev_img() {
	var btn_img = document.getElementsByClassName("check-img");
	var i = btn_img.length;
	for (i = btn_img.length - 1; i > 0; i--) {
		if (btn_img[i].checked == true) {
			btn_img[i - 1].checked = true;
			break;
		}
	}
	if (btn_img[i].checked == true) btn_img[btn_img.length - 1].checked = true;
}

function next_img() {
	var btn_img = document.getElementsByClassName("check-img");
	var i;
	for (i = 0; i < btn_img.length - 1; i++) {
		if (btn_img[i].checked == true) {
			btn_img[i + 1].checked = true;
			break;
		}
	}
	if (btn_img[i].checked == true) btn_img[0].checked = true;
}
setInterval(next_img, 5000);

// JavaScript for part1
var startTime = new Date();

window.onload = function () {
	var part1 = document.getElementById("part1");
	var part3 = document.getElementById("part3");
	part1.addEventListener("mouseover", animate_content);
	part1.addEventListener("touchstart", animate_content);
	part3.addEventListener("mouseover", animate_content1);
	part3.addEventListener("touchstart", animate_content1);

	var mobileButton = document.getElementById("mobile-menu-button");
	mobileButton.addEventListener("click", showMenu);
}

function animate_content() {
	var startAnimationTime = new Date();
	startAnimationTime -= startTime;
	startAnimationTime /= 1000;
	for (let i = 0; i < part1.children[0].children.length; i++) {
		part1.children[0].children[i].style.animationDelay = startAnimationTime + "s";
	}
	part1.removeEventListener("mouseover", animate_content);
	part1.removeEventListener("touchstart", animate_content);
}

function animate_content1() { //Need optimize this code
	var startAnimationTime = new Date();
	startAnimationTime -= startTime;
	startAnimationTime /= 1000;
	for (let i = 0; i < part1.children[0].children.length; i++) {
		part3.children[0].children[i].style.animationDelay = startAnimationTime + "s";
	}
	part3.removeEventListener("mouseover", animate_content1);
	part3.removeEventListener("touchstart", animate_content1);
}
// Javascript for #part2
var i = 0;

function next_project() {
	var list = document.getElementById("list-project");
	var a, length = list.children.length;
	if (i == length - 3) {
		i = 0;
	} else i++;
	// get margin probly with viewport
	if (window.innerWidth < 769) {
		a = 50 * i;
	} else a = 33.33 * i;
	list.style.transition = "1s";
	list.style.marginLeft = '-' + a.toString() + '%';
}

function prev_project() {
	var list = document.getElementById("list-project");
	var a, length = list.children.length;
	if (i == 0) {
		i = length - 3;
	} else i--;
	var list = document.getElementById("list-project");
	list.style.transition = "1s";
	// get margin probly with viewport
	if (window.innerWidth < 769) {
		a = 50 * i;
	} else a = 33.33 * i;
	list.style.marginLeft = '-' + a.toString() + '%';
}
// JS for mobile menu
var check = 0;

function showMenu() {
	let mobileMenu = document.getElementById("mobile-menu");
	if (check == 0) {
		mobileMenu.style.height = "80vh";
		check = 1;
	} else {
		mobileMenu.style.height = "0vh";
		check = 0;
	}
}