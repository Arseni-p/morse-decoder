const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let str = '';
  
  for (let j = 0; j < expr.length; j +=10) {
    let point = '';
    let znak = '';
    let letter = '';
    
    let arrStr = expr.slice(j, (j+10) ).split('');

    for (let i = 0; i < arrStr.length; i+=2) {
      if (arrStr[i] == 1 && arrStr[i + 1] == 0) {
        znak = '.';
      }
        
      if (arrStr[i] == 1 && arrStr[i + 1] == 1) {
        znak = '-';
      }
        
      if (arrStr[i] == '*') {
        letter = ' ';
      }
        
      point +=znak;
    }
  
    for (key in MORSE_TABLE) {
      if (point == key) {
        letter = MORSE_TABLE[key];
      } 
    }

    str +=letter;
    
  }
  
  return str;
}

module.exports = {
    decode
}