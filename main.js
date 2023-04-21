const germanTranslations = { 
    hello: 'hallo',
    goodMorning: 'guten morgen',
    goodbye: 'auf wiedersehen',
    cat : 'katze',
    dog: 'hund',
    mouse: 'maus',
    toEat: 'essen',
    toDrink: 'trinken',
    toSleep: 'schlafen'
}

//callback function (because it's being passed into speak function as an argument)
//this function strictly translates the word
const translateToGerman = (word) => {
  const germanWord = germanTranslations[word];
  
  return germanWord;
}

// higher order function
const speak = (words, translator) => {
  for (i=0; i < words.length; i++) {
    let translatedWord = translator(words[i]);
    
    if (translatedWord) {
      console.log(`Translated "${words[i]}" into "${translatedWord}"`)
    }
    else {
      console.log (`Could not find translation for "${words[i]}"`)
    }
  }
}

//array
let wordsToSpeak = ['hello', 'goodbye', 'mouse', 'flower'];

//invocation
speak(wordsToSpeak, translateToGerman)