let args = process.argv.sort((a, b) => a-b);

//console.log(Number(args[2]))

for (let i = 2 ; i < args.length; i++ ) {

  if (Number(args[i]) && args[i] >= 0) {
    setTimeout(() => {
      process.stdout.write('beep\n');
    }, args[i]*1000);
  }


};

