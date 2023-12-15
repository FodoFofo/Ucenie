const btn = document.querySelector('button')
const list = document.querySelector('ol');
let items = [];


// eslint-disable-next-line no-undef
axios.get('https://jsonplaceholder.typicode.com/todos').then( response => {
	
	// SPUSTENIE WORKERA PO KLIKNUTÍ NA GOMBÍK
	const startWorker = (e) => {
		// let worker = new Worker('js/worker_v1.js');
		let worker = new Worker('js/worker_v2_with_map.js');
	
		worker.postMessage([
			'hi, bro',
			response.data
		]);
	
		worker.addEventListener('message', event => {
			list.innerHTML = event.data.join('');
		});
	}
	response.data.forEach(item => {
		let words = item.title.split(' ');
		items = items.concat( words );
	});

	// prepare for insertion
	items = items.map(name => `<li>${name}</li>`);

	list.innerHTML = items.join('');

	btn.addEventListener('click', startWorker )
	

});