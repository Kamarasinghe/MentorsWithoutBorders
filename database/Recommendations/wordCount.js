/*
  Getting a users word count {
    - Track when a user logs in/logs out
    - When user logs out run the functions

    - Gather messages user has entered between login and logout
    - Grab the current wordCount object from user database
    - Split messages, delimited by spaces
    - Iterate through words
    - If current word is curse word 
      - Increment 'curse' key's value by 1
    - Else if current word is inside wordCount
      - Increment the count by 1
    - Else
      - Add the word to wordCount setting it equal to 1
    - Return wordCount object

    - Store the wordCount object back into user database
  }

  Getting match score {
    - Takes in first20 array and currentUser's wordCount
    
    - Iterate through first20 
      - If currentWord can be found in wordCount obj
        - Get absolute val of difference
        - Add difference to total score
      - Else 
        - Add 100 to total score
    
    - Return total score
  }

  Providing recommendation based on wordCount {
    - Takes in an array of users
    - Takes in the current users's wordCount

    - Turn current user's wordCount into an array of objects
    - Sort array from most used to least
    - Grab first 20 if length greater

    - Create a new array recommendedMentors
    - Iterate through each user
      - Pass first20 array and currentUser's wordCount
        to matchScore function
      - Push result to recommendedMentors
    
    - Return recommendedMentors
  }
*/

/*
  Getting a users word count {
    - Track when a user logs in/logs out
    - When user logs out run the functions

    - Gather messages user has entered between login and logout
    - Grab the current wordCount object from user database
    - Split messages, delimited by spaces
    - Iterate through words
    - If current word is curse word 
      - Increment 'curse' key's value by 1
    - Else if current word is inside wordCount
      - Increment the count by 1
    - Else
      - Add the word to wordCount setting it equal to 1
    - Return wordCount object

    - Store the wordCount object back into user database
  }
*/

let userWordCounts = (wordCounts, messages) => {
  let words = messages.split(' ');
  let cussWords = [];

  let userWordCount = words.reduce((wordCount, word) => {
    if (cussWords.indexOf(word) > -1) {
      wordCounts.cussCount++;
    } else if (wordCount[word]) {
      wordCount[word]++; 
    } else {
    	wordCounts[word] = 1
    }

    return wordCount;
  }, wordCounts);

  return userWordCount;
};
