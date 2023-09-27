let c = 0;
let t = 0;

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
		secret_holder.style.height = "500px";
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