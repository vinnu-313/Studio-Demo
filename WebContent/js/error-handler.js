var splerrors = [];
var ErrorHandler = function() { 
	var errors = [];
	return {
		addError : function(r, c, t){
			splerrors.push({
				'row' : r-1,
				'column' : c,
				'text' : t,
				'type' : "error" 
			});
		},
		clearErrors : function(){
			splerrors.length = 0;
		},
		getErrors : function(){
			return splerrors;
		},
		applyErrors : function(editor){
			editor.getSession().setAnnotations(splerrors);
		}
	};
};
