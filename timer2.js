const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  } else if (key === 'b') {
    console.log('beep');
  } else if (['1','2','3','4','5','6','7','8','9'].includes(key)) {
    console.log(`Setting timer for ${key} seconds...`);
    
    setTimeout(() => {console.log('beep')}, key * 1000);
  } else {
    console.log('Please enter a valid key (b or 1-9). Ctrl + C to exit.')
  }
});
