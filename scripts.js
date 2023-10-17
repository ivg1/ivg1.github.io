let c = 0;
let t = 0;

let current_image = undefined;
let images_array = ['note_images/science_p1.jpg','note_images/science_p2.jpg','note_images/science_p3.jpg','note_images/science_p4.jpg','note_images/science_p5.jpg','note_images/science_p6.jpg','note_images/science_p7.jpg','note_images/science_p8.jpg','note_images/science_p9.jpg','note_images/science_p10.jpg'];
let images_array_count = 0;

document.onkeydown = function (e) {
	if(e.keyCode == 123) {
		return false;
	}
}

function hide_image(){
	const page = document.querySelector(".page_holder");
	const image_holder = document.querySelector(".show_note_holder");
	
	page.classList.add("page_holder_show_height");
	image_holder.classList.remove("show_note_holder_vis");
}

setTimeout(showPage, 3000);
function showPage(){
	const page = document.querySelector(".page_holder");
	const load_screen = document.querySelector(".onload_screen");
	
	load_screen.remove();
	page.classList.add("page_holder_show_height");
}



function secret_show(){
	const secret_key = document.querySelector(".secret");
	const activated_button = document.querySelector(".button_a");
	if (c===0){
		secret_key.innerHTML = "secret";
		secret_key.addEventListener('click', the_greater);
		activated_button.style.transform = "rotateZ(24deg)";
		activated_button.style.backgroundColor = "darkorange";
		setTimeout(function(){
			alert("a 'secret' has shown itself as a key to the greater");
		}, 100);
		c++;
	}
}

function the_greater(){
	const secret_holder = document.querySelector(".secrets_holder");
	if (t===0){
		secret_holder.classList.add("secrets_holder_height");
		t++;
	}
}

function check_password(){
	const passwors = document.querySelector("#password").value;
	const notes = document.querySelector(".notes");
	if (passwors === "finale"){
		notes.style.visibility = "visible";
		notes.style.opacity = "1";
	} else{
		notes.style.visibility = "hidden";
		notes.style.opacity = "0";
	}
}

/*
function view_image(element){
	const page = document.querySelector(".page_holder");
	const image_holder = document.querySelector(".show_note_holder");
	const image_clicked_on = document.querySelector(".show_note_holder > .show_note_image > .image_clicked_on");
	const image_title = document.querySelector(".show_note_holder > .show_note_header > .image_name");
	let current_image = element;
	let image_src = current_image.src;
	images_array_count = element.page;
	
	page.classList.remove("page_holder_show_height");
	image_holder.classList.add("show_note_holder_vis");
	
	image_title.innerHTML = image_src;
	image_clicked_on.setAttribute("src", image_src);
}
*/
function view_image(element){
	let current_image = element;
	let image_src = current_image.src;
	const page = document.querySelector(".page_holder");
	const image_holder = document.querySelector(".show_note_holder");
	const image_clicked_on = document.querySelector(".show_note_holder > .show_note_image > .image_clicked_on");
	const image_title = document.querySelector(".show_note_holder > .show_note_header > .image_name");
	
	page.classList.remove("page_holder_show_height");
	image_holder.classList.add("show_note_holder_vis");
	images_array_count = element.getAttribute("page");
	images_array_count = parseInt(images_array_count);
	
	image_title.innerHTML = element.src;
	image_clicked_on.src = element.src;
}
function show_image(){
	const image_clicked_on = document.querySelector(".show_note_holder > .show_note_image > .image_clicked_on");
	const image_title = document.querySelector(".show_note_holder > .show_note_header > .image_name");
	
	image_clicked_on.setAttribute("src", images_array[images_array_count]);
	image_title.innerHTML = images_array[images_array_count];
}
function previous_image(){
	images_array_count-=1;
	if (images_array_count < 0){
		images_array_count = 9;
	}
	
	show_image();
}
function next_image(){
	images_array_count++;
	if (images_array_count > 9){
		images_array_count = 0;
	}
	
	show_image();
}
