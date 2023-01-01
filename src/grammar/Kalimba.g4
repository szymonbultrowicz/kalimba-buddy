grammar Kalimba;

OCTAVE: '*'+;
ID: [a-zA-Z];
GROUP_START: '(';
GROUP_END: ')';

WS: [ \t\n\r\f]+ -> skip ;

program
    : line EOF
    ;

line
    : expr+
    ;
    
note
    : ID
    | ID OCTAVE?
    ;

expr
    : note
    | group
    ;

group
    : GROUP_START expr+ GROUP_END
    ;