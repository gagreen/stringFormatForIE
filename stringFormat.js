if(!String.prototype.format) {
	// 문자열.format(JSON 객체)
	// ex) "is Success: ${success}".format({success: "yes"});
	// ex) "${0}, ${1}".format('aaa', 'bbb');
	String.prototype.format = function () {
		function formatForObject(str, args){
			var formatted = str;
			var obj = args[0];
			for(var keyword of Object.getOwnPropertyNames(obj)) {
				formatted = formatted.replace("${"+ keyword + "}", obj[keyword]);
			}
		}
		function formatForArguments(str, args){
			var formatted = str;
			for( var arg in args ) {
				formatted = formatted.replace("{" + arg + "}", arguments[arg]);
			}
			return formatted;
		}

		if(typeof arguments[0] === "object") {
			return formatForObject(this, arguments);
		}
		else {
			return formatForArguments(this, arguments);
		}
	}
}
