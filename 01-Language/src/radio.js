let radio = (function(){
	
	let all_radios = {};

	function radio(evtName){
		all_radios[evtName] = all_radios[evtName] || new Radio(evtName);
		return all_radios[evtName];
	}

	class Radio{

		_evtName = '';
		_subscriptions = [];

		constructor(evtName){
			this._evtName = evtName;
		}

		subscribe(...susbcriptionFns){
			susbcriptionFns
				.forEach(susbcriptionFn => this._subscriptions.push(susbcriptionFn));
			return this;
		}

		broadcast(...data){
			/*this._subscriptions.forEach(susbcriptionFn => susbcriptionFn(...data));*/
			var self = this;
			for(let index = 0, count = this._subscriptions.length; index < count; index++){
				setTimeout(function(){
					console.log(index);
					var susbcriptionFn = self._subscriptions[index];
					susbcriptionFn();
				});
			}
			return this;
		}

		unsubscribe(...susbcriptionFns){
			susbcriptionFns.forEach(susbcriptionFn => this._subscriptions = this._subscriptions.filter(fn => fn !== susbcriptionFn));
			return this;
		}

	}

	return radio;
})();