let menu = document.querySelector(".nav-menu")
let navItems = document.querySelectorAll('.nav-item');

let addNew = `<form action="" class="form">
				<label for="add-note">Add new</label>
				<textarea name="note" id="add-note" cols="30" rows="10"></textarea>
				<button type="submit" value="Add">ADD</button>
				</form>`
let myNotes = `<div class="notes">
		<div class="note">
			<p contenteditable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tenetur!</p>
		</div>
		<div class="note">
			<p contenteditable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
				tenetur!</p>
		</div>
		<div class="note">
			<p contenteditable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tenetur!</p>
		</div>
		<div class="note">
			<p contenteditable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tenetur!</p>
		</div>
			</div>`

let mainContainer = document.querySelector('.main-container').innerHTML = myNotes
let remove = (items) => {
	items.forEach(item => item.classList.remove("active"))
}

navItems.forEach(item => {
	item.addEventListener('click', function () {
		remove(navItems)
		item.classList.add('active')
	})

});


menu.addEventListener('click', (e) => {

	if (e.target.textContent === "My notes") {
		document.querySelector(".main-container").innerHTML = myNotes
	} else if (e.target.textContent === "Add new") {
		document.querySelector(".main-container").innerHTML = addNew
	} else {
		document.querySelector(".main-container").textContent = "Logged out successfully"
	}

})
