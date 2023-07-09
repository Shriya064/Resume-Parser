let input = document.querySelector('#file');
let dropzone = document.querySelector('.drop');
let nameBox = document.querySelector('.drop span');

input.addEventListener('dragover', function(){
	dropzone.classList.add('active');
});

input.addEventListener('dragleave', function(){
	dropzone.classList.remove('active');
});

input.addEventListener('change', function(){
	dropzone.classList.remove('active');
	
	//Take the file name and show it
	let fileName = input.value;
	let index = fileName.lastIndexOf('\\');
	fileName = fileName.substring(fileName.length, index + 1);
	nameBox.innerHTML = fileName;
	nameBox.style.opacity = '1';
});


//Create animation on clicking upload file button
let uploadBtn = document.querySelector('.uploadBtn');
let loadBar = document.querySelector('.loadBar');
let loadArrows = document.querySelector('.arrows');
let checkmark = document.querySelector('.checkmark');

uploadBtn.addEventListener('click', function(){
	if(nameBox.innerHTML !== '' && uploadBtn.innerHTML !== 'Done') {
		this.innerHTML = 'Uploading...'
		loadBar.classList.add('active');
		
		//Hide dropzone and show loading arrows
		dropzone.classList.add('hidden');
		loadArrows.classList.remove('hidden');
		loadArrows.classList.add('active');
		
		//After 3 seconds show checkmark
		setTimeout(function(){
   		loadArrows.classList.add('hidden');
			checkmark.classList.remove('hidden');
			uploadBtn.innerHTML = 'Done';
			uploadBtn.style.cursor = 'default';
    }, 3000);
	}	
});


