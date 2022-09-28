const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };