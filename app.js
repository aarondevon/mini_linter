let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const storyWords = story.split(' ');
const overusedWords = ['really', 'very', 'basically'];
const unnecessaryWords = ['extremely', 'literally', 'actually' ];

const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

let sentenceCount = 0;

function reduceOverUsedWords(arr, words) {
  const updateStory = [];
  counter = 0;
	arr.forEach(function(word){
    if (words.includes(word)) {
        counter = counter + 1;
        if (counter % 2 !== 0) {
          updateStory.push(word);
        } 

      } else {
          updateStory.push(word);
        }
  });
 
  return updateStory;
}

function countOverUsedWords(text) {
  let reallyCount = 0;
	let veryCount = 0;
	let basicallyCount = 0;
  text.forEach(function(word) {
    switch(word) {
      case 'really':
        reallyCount++;
        break;
      case 'very':
        veryCount++;
        break;
      case 'basically':
        basicallyCount++;
        break;
    } 
	});
  return [reallyCount, veryCount, basicallyCount];
}

let originalOverusedWords = countOverUsedWords(storyWords);


story.split('').forEach(function(punctuation) {
  if(punctuation === '.' || punctuation ==='!') {
    sentenceCount++;
  }
});

betterWords = reduceOverUsedWords(betterWords, overusedWords);

let updatedOverUsedWords = countOverUsedWords(betterWords);

console.log('In your original text you used:'); console.log(`${storyWords.length} words`);
console.log(`${sentenceCount} sentences`);
console.log(`really ${originalOverusedWords[0]} time(s), very ${originalOverusedWords[1]} time(s), and basically ${originalOverusedWords[2]} time(s)`);

console.log(`\nIn the updated text you have used: ${betterWords.length} words.`);
console.log(`${sentenceCount} sentences`);
console.log(`really ${updatedOverUsedWords[0]} time(s), very ${updatedOverUsedWords[1]} time(s), and basically ${updatedOverUsedWords[2]} time(s)`);

console.log('\n' + betterWords.join(' '));