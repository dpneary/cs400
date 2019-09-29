//Problem 2 (PS2.P2.js)
// Write a generator that is initialized with a sentence and that emits each word of the sentence in
// turn.
// Use the generator to print the words, one per line, of the string “All I know is something like a
// bird within her sang”.

function* oneWordAtATime(sentence) {
    const list = sentence.split(' ');
    for (count = 0; count < list.length; count++) {
        yield list[count];
    }
}

mySentence = oneWordAtATime('All I know is something like a bird within her sang');

while (true) {
    word = mySentence.next();
    if (word.done === true) {
        break;
    }
    console.log(word.value)
}