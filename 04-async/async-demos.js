(function(){

	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		let result = x + y;
		console.log(`	[@Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering addSync`);
		let result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
	}

	window['addSyncClient'] = addSyncClient;

	function addAsync(x,y, callback){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			let result = x + y;
			console.log(`	[@Service] returning result`);
			callback(result);
		}, 4000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`);
		});
	}

	window['addAsyncClient'] = addAsyncClient;

	var addAsyncEvents = (function(){
		var _subscribers = [];

		function subscribe(callback){
			_subscribers.push(callback);
		}

		function process(x,y){
			console.log(`	[@Service] processing ${x} and ${y}`);
			setTimeout(function(){
				let result = x + y;
				console.log(`	[@Service] returning result`);
				_subscribers.forEach(callback => callback(result));
			}, 4000);
		}

		return { subscribe, process };
	})();

	window['addAsyncEvents'] = addAsyncEvents;

	function addAsyncPromise(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var p = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				let result = x + y;
				console.log(`	[@Service] returning result`);
				resolveFn(result);
			}, 4000);
		});
		return p;
	}

	//window['addAsyncPromise'] = addAsyncPromise;

	async function addAsyncPromiseClient(x,y){
		/*
		console.log(`[@Client] triggering addSync`);
		let result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
		*/

		/*
		console.log(`[@Client] triggering addSync`);
		addAsyncPromise(x,y)
			.then(function(result){
				console.log(`[@Client] result = ${result}`);		
			});
		*/

		console.log('things starting');
		console.log(`[@Client] triggering addSync`);
		let result = await addAsyncPromise(x,y);
		console.log(`[@Client] result = ${result}`);
		console.log('things completed');

		/*
		console.log('things starting');
		console.log(`[@Client] triggering addSync`);
		addAsyncPromise(x,y)
			.then(result => {
				console.log(`[@Client] result = ${result}`);		
			});
		console.log('things completed');
		*/
	}

	window['addAsyncPromiseClient']= addAsyncPromiseClient;

})();


/* Promise client code

var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	var p2 = new Promise(function(resolveFn, rejectFn){
		setTimeout(function(){
			var doubleResult = result * 2;
			resolveFn(doubleResult);
        }, 5000);
    });
	return p2;
});

var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	var p2 = new Promise(function(resolveFn, rejectFn){			
		var doubleResult = result * 2;
		resolveFn(doubleResult);
    });
	return p2;
});

var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	var doubleResult = result * 2;
	var p2 = Promise.resolve(doubleResult);
	return p2;
});

*/