const burger = document.querySelector('.head__burger');
const open = document.querySelector('.open');
const openClose = document.querySelector('.open__close');

burger.addEventListener('click', e=> {
	open.style.cssText = ` 
		display:block;
	`
});

openClose.addEventListener('click', e=> {
	open.style.cssText = ` 
		display:none;
	`
});
