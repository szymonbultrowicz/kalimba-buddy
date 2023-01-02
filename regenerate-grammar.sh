java -jar antlr-4.11.1-complete.jar -Dlanguage=JavaScript -visitor src/grammar/Kalimba.g4
sed -i '' -e 's/class/export class/g' -e 's/default export/default/g' src/grammar/KalimbaParser.js
