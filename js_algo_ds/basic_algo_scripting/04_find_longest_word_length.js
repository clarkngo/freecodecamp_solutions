function findLongestWord(str) {
  var array = str.split(" ");
  var longestWord = 0;
  for (var i = 0; i < array.length; i++){
      if (array[i].length > longestWord) {
        longestWord = array[i].length;
      }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
