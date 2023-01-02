// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,5,29,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,1,0,4,0,13,8,0,11,0,12,0,14,1,1,1,1,1,2,1,2,1,3,1,3,1,4,4,4,24,8,4,11,
4,12,4,25,1,4,1,4,0,0,5,1,1,3,2,5,3,7,4,9,5,1,0,3,3,0,42,42,176,176,194,
194,2,0,65,90,97,122,3,0,9,10,12,13,32,32,30,0,1,1,0,0,0,0,3,1,0,0,0,0,5,
1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,1,12,1,0,0,0,3,16,1,0,0,0,5,18,1,0,0,0,7,
20,1,0,0,0,9,23,1,0,0,0,11,13,7,0,0,0,12,11,1,0,0,0,13,14,1,0,0,0,14,12,
1,0,0,0,14,15,1,0,0,0,15,2,1,0,0,0,16,17,7,1,0,0,17,4,1,0,0,0,18,19,5,40,
0,0,19,6,1,0,0,0,20,21,5,41,0,0,21,8,1,0,0,0,22,24,7,2,0,0,23,22,1,0,0,0,
24,25,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,27,1,0,0,0,27,28,6,4,0,0,28,
10,1,0,0,0,3,0,14,25,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class KalimbaLexer extends antlr4.Lexer {

    static grammarFileName = "Kalimba.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, "'('", "')'" ];
	static symbolicNames = [ null, "OCTAVE", "ID", "GROUP_START", "GROUP_END", 
                          "WS" ];
	static ruleNames = [ "OCTAVE", "ID", "GROUP_START", "GROUP_END", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

KalimbaLexer.EOF = antlr4.Token.EOF;
KalimbaLexer.OCTAVE = 1;
KalimbaLexer.ID = 2;
KalimbaLexer.GROUP_START = 3;
KalimbaLexer.GROUP_END = 4;
KalimbaLexer.WS = 5;



