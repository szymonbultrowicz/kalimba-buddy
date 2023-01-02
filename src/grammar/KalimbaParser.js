// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import KalimbaListener from './KalimbaListener.js';
import KalimbaVisitor from './KalimbaVisitor.js';

const serializedATN = [4,1,5,38,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,1,1,4,1,15,8,1,11,1,12,1,16,1,2,1,2,1,2,3,2,22,8,2,3,2,24,8,
2,1,3,1,3,3,3,28,8,3,1,4,1,4,4,4,32,8,4,11,4,12,4,33,1,4,1,4,1,4,0,0,5,0,
2,4,6,8,0,0,37,0,10,1,0,0,0,2,14,1,0,0,0,4,23,1,0,0,0,6,27,1,0,0,0,8,29,
1,0,0,0,10,11,3,2,1,0,11,12,5,0,0,1,12,1,1,0,0,0,13,15,3,6,3,0,14,13,1,0,
0,0,15,16,1,0,0,0,16,14,1,0,0,0,16,17,1,0,0,0,17,3,1,0,0,0,18,24,5,2,0,0,
19,21,5,2,0,0,20,22,5,1,0,0,21,20,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,
18,1,0,0,0,23,19,1,0,0,0,24,5,1,0,0,0,25,28,3,4,2,0,26,28,3,8,4,0,27,25,
1,0,0,0,27,26,1,0,0,0,28,7,1,0,0,0,29,31,5,3,0,0,30,32,3,6,3,0,31,30,1,0,
0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,35,1,0,0,0,35,36,5,4,0,
0,36,9,1,0,0,0,5,16,21,23,27,33];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class KalimbaParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, null, null, "'('", "')'" ];
    static symbolicNames = [ null, "OCTAVE", "ID", "GROUP_START", "GROUP_END", 
                             "WS" ];
    static ruleNames = [ "program", "line", "note", "expr", "group" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = KalimbaParser.ruleNames;
        this.literalNames = KalimbaParser.literalNames;
        this.symbolicNames = KalimbaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, KalimbaParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.line();
	        this.state = 11;
	        this.match(KalimbaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, KalimbaParser.RULE_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 13;
	            this.expr();
	            this.state = 16; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2 || _la===3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	note() {
	    let localctx = new NoteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, KalimbaParser.RULE_note);
	    var _la = 0; // Token type
	    try {
	        this.state = 23;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 18;
	            this.match(KalimbaParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 19;
	            this.match(KalimbaParser.ID);
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 20;
	                this.match(KalimbaParser.OCTAVE);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, KalimbaParser.RULE_expr);
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.note();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.group();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, KalimbaParser.RULE_group);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(KalimbaParser.GROUP_START);
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.expr();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2 || _la===3);
	        this.state = 35;
	        this.match(KalimbaParser.GROUP_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

KalimbaParser.EOF = antlr4.Token.EOF;
KalimbaParser.OCTAVE = 1;
KalimbaParser.ID = 2;
KalimbaParser.GROUP_START = 3;
KalimbaParser.GROUP_END = 4;
KalimbaParser.WS = 5;

KalimbaParser.RULE_program = 0;
KalimbaParser.RULE_line = 1;
KalimbaParser.RULE_note = 2;
KalimbaParser.RULE_expr = 3;
KalimbaParser.RULE_group = 4;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KalimbaParser.RULE_program;
    }

	line() {
	    return this.getTypedRuleContext(LineContext,0);
	};

	EOF() {
	    return this.getToken(KalimbaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KalimbaListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KalimbaListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof KalimbaVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KalimbaParser.RULE_line;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof KalimbaListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KalimbaListener ) {
	        listener.exitLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof KalimbaVisitor ) {
	        return visitor.visitLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NoteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KalimbaParser.RULE_note;
    }

	ID() {
	    return this.getToken(KalimbaParser.ID, 0);
	};

	OCTAVE() {
	    return this.getToken(KalimbaParser.OCTAVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KalimbaListener ) {
	        listener.enterNote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KalimbaListener ) {
	        listener.exitNote(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof KalimbaVisitor ) {
	        return visitor.visitNote(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KalimbaParser.RULE_expr;
    }

	note() {
	    return this.getTypedRuleContext(NoteContext,0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KalimbaListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KalimbaListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof KalimbaVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KalimbaParser.RULE_group;
    }

	GROUP_START() {
	    return this.getToken(KalimbaParser.GROUP_START, 0);
	};

	GROUP_END() {
	    return this.getToken(KalimbaParser.GROUP_END, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof KalimbaListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KalimbaListener ) {
	        listener.exitGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof KalimbaVisitor ) {
	        return visitor.visitGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




KalimbaParser.ProgramContext = ProgramContext; 
KalimbaParser.LineContext = LineContext; 
KalimbaParser.NoteContext = NoteContext; 
KalimbaParser.ExprContext = ExprContext; 
KalimbaParser.GroupContext = GroupContext; 
