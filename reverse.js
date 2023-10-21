function reverseWords(sentence) {
  // Split the sentence into words
  let words = sentence.split(' ');

  // Reverse each word and store them in a new array
  let reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });

  // Join the reversed words into a sentence
  let reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}
