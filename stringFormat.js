if(!String.prototype.format) {
    // 문자열.format(JSON 객체)
    // ex) "is Success: ${success}".format({success: "yes"});
    // ex) "${0}, ${1}".format('aaa', 'bbb');
    String.prototype.format = function () {
        function formatForObject(args){
            var formatted = this;
            var obj = args[0];
            for(var keyword of Object.getOwnPropertyNames(obj)) {
                formatted = formatted.replace("${"+ keyword + "}", obj[keyword]);
            }
        }
        function formatForArguments(args){
            var formatted = this;
            for( var arg in args ) {
                formatted = formatted.replace("{" + arg + "}", arguments[arg]);
            }
            return formatted;
        }

        if(typeof arguments[0] === "object") {
            return formatForObject(arguments);
        }
        else {
            return formatForArguments(arguments);
        }
    }
}