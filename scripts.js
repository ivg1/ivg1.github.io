let c = 0;
let t = 0;
let menu_state = 'hidden';
let betaState = 0;

let current_image = undefined;
let images_array_science = ['note_images/science_p1.jpg','note_images/science_p2.jpg','note_images/science_p3.jpg','note_images/science_p4.jpg','note_images/science_p5.jpg','note_images/science_p6.jpg','note_images/science_p7.jpg','note_images/science_p8.jpg','note_images/science_p9.jpg','note_images/science_p10.jpg'];
let images_array_count = 0;

document.onkeydown = function (e) {
	const note_c = document.querySelector(".note_c");
	const note_d = document.querySelector(".note_d");
	const note_e = document.querySelector(".note_e");
	const note_f = document.querySelector(".note_f");
	const note_g = document.querySelector(".note_g");
	const note_a = document.querySelector(".note_a");
	const note_b = document.querySelector(".note_b");
	const note_2c = document.querySelector(".note_2c");
	if (betaState === 1){
		if(e.keyCode == 123) {
		return false;
		}
		switch (e.key){
			case "a":
				note_c.currentTime = 0;
				note_c.play()
				break;
			case "s":
				note_d.currentTime = 0;
				note_d.play()
				break;
			case "d":
				note_e.currentTime = 0;
				note_e.play()
				break;
			case "f":
				note_f.currentTime = 0;
				note_f.play()
				break;
			case "g":
				note_g.currentTime = 0;
				note_g.play()
				break;
			case "h":
				note_a.currentTime = 0;
				note_a.play()
				break;
			case "j":
				note_b.currentTime = 0;
				note_b.play()
				break;
			case "k":
				note_2c.currentTime = 0;
				note_2c.play()
				break;
		}
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
	if (passwors === "uno"){
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
	
	image_clicked_on.setAttribute("src", images_array_science[images_array_count]);
	image_title.innerHTML = images_array_science[images_array_count];
}
document.onkeydown = function(event) {
	switch (event.keyCode) {
		case 37:
			previous_image();
			break;
		case 39:
			next_image();
			break;
	}
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

function enableBetaFeature(e){
	alert('Beta features enabled. (keyboard becomes piano)');
	betaState = 1;
}
function showMenu(){
	const menu = document.querySelector(".menu_list");
	const menu_button = document.querySelector(".menu_button");

	if (menu_state === "hidden"){
		menu.style.visibility = "visible";
		menu_button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#c2c2c2}</style><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>';
		menu_state = "shown";
	} else{
		menu.style.visibility = "hidden";
		menu_button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#c2c2c2}</style><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>';
		menu_state = "hidden";
	}
}
function smaller_secret_show(){
	const s_activated_button = document.querySelector(".smaller_secrets");
	const activated_button = document.querySelector(".button_a");
	const secret_holder = document.querySelector(".secrets_holder");
	if (c===0){
		activated_button.style.transform = "rotateZ(24deg)";
		activated_button.style.backgroundColor = "darkorange";
		s_activated_button.style.color = "darkorange";
		setTimeout(function(){
			alert("a 'secret' has shown itself as a key to the greater");
		}, 100);
		secret_holder.classList.add("secrets_holder_height");
		c++;
	}
}
