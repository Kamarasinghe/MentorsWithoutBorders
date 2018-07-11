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
  .then((res) => {
    let currentUser = res.data.currentUser;
    let age = currentUser.age || null;
    let allMentors = res.data.allMentors;
    let userCategories = res.data.userCategories;

    // Get only the mentors that mentor in topics the 
    // current user is interested in
    let filteredByTopic = scoreByTopic(userCategories, allMentors);
    // Score the mentors based on if they are within a certain
    // age range of the current user
    if (age) {
      scoreByAge(currentUser, filteredByTopic);
    }
    // Score the mentors based on if they are active within
    // the same avg time as current user
    avgActiveTime(currentUser, filteredByTopic);
    // Score the mentors based on if they have around the 
    // same avg convo time as the current user
    avgConvoTime(currentUser, filteredByTopic);

    console.log('This is filtered by topic', filteredByTopic)
  });
};

module.exports = {
  recommendationSystem
};