const typewriter = function (sentence) {
  for (let i = 0; i < sentence.length; i++) {

    setTimeout(() => process.stdout.write(sentence[i]), i * 50)

  }
  //console.log();
  setTimeout(() => console.log(), (sentence.length - 1) * 50)
}

const sentence1 = "hello there from lighthouse labs";
typewriter(sentence1);
