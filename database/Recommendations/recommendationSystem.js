console.log('Do I make it here')
const axios = require('axios');
const { 
  topicScore, 
  scoreByTopic, 
  scoreByAge,
  avgActiveTime,
  avgConvoTime
} = require('./filterByCategories');

const recommendationSystem = () => {
  axios.get('/recommendation')
  .then((data) => {
    console.log('Do I get data back?')
    let currentUser = data.currentUser;
    let allMentors = data.allMentors;
    let userCategories = data.userCategories;

    // Get only the mentors that mentor in topics the 
    // current user is interested in
    let filteredByTopic = scoreByTopic(userCategories, allMentors);
    // Score the mentors based on if they are within a certain
    // age range of the current user
    scoreByAge(filteredByTopic);
    // Score the mentors based on if they are active within
    // the same avg time as current user
    avgActiveTime(filteredByTopic);
    // Score the mentors based on if they have around the 
    // same avg convo time as the current user
    avgConvoTime(filteredByTopic);

    console.log(filteredByTopic)
  });
};

module.exports = {
  recommendationSystem
};