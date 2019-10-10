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
  let str = expr;
  let char;
  let result = '';
  let step = 10;

  while(str.length >= step) {
    char = str.slice(0, 10); 

    char.replace(/10|11|\*|0|/g, () => {
      if (char.match(/10/)) { char = char.replace(/10/g, '.'); }
      if (char.match(/11/)) { char = char.replace(/11/g, '-'); }
      if (char.match(/\*/)) { char = char.replace(/\*{10}/, ' '); }
      if (char.match(/0/)) { char = char.replace(/0/g, '');}  
    });

    if (MORSE_TABLE[char]) {
      result += MORSE_TABLE[char];
    } else {
      result += ' ';
    }     
    
    str = str.slice(10);   
  }
 
  return result;    
}

module.exports = {
    decode
}
