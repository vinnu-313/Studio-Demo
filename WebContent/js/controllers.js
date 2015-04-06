'use strict';

angular.module('studio.controller', []).controller('ViewerController',
		[ '$scope', function($scope) {

		}]).controller('EditorController', [ '$scope', function($scope) {
	$scope.aceLoaded = function(editor){
		editor.setValue('DEFINE NAMESPACE one.two DESCRIPTION "Vinayaka" \n\tBEGINS WITH / System name / ; \n\nDEFINE TABLE new_table NAMESPACE one.two \n\tICON nvpair_basic	\n\tCOLUMN col_one (one.ref) [s(128):nn] <label="Name"> AS "Name" \n\tCOLUMN col_two [i(128):n] <label="Pin Code"> AS "Pin Code";');
		editor.clearSelection();
	};
	$scope.aceChanged = function(e) {
		ErrorHandler().clearErrors();
		var antlr4 = require('antlr4/index');
		var chars = new antlr4.InputStream(e[1].getValue());
		var rlexer = require('./SPLLexer');
		var lexer  = new rlexer.SPLLexer(chars);
		var tokens  = new antlr4.CommonTokenStream(lexer);
		var rparser = require('./SPLParser');
		var parser = new rparser.SPLParser(tokens);
		parser.buildParseTrees = true;
		var tree = parser.splg();
		var rlistener = require('./SPLListener');
		var listener = new rlistener.SPLListener();
		antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
		ErrorHandler().applyErrors(e[1]);
	};
} ]).controller('HierarchyController', [ '$scope', function($scope) {

} ]);
