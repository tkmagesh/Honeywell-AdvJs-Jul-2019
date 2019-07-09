var spinner =  (function(){
	var counter = 0;


	function up(){
		return ++counter;
	}

	function down(){
		return --counter;
	}

	return {
		up : up,
		down : down
	}
})();
