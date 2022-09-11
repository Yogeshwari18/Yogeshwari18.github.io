function generate(){
    var quotes = {
       "― Mary Astell" : '“If all men are born free, how is it that all women are born slaves?”',
       "― John Galsworthy" : '“Life calls the tune, we dance.”',
       "- Jim Rohn": '"Either you run the day, or the day runs you."',
       "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
       "- Frank Sinatra": '"The best revenge is massive success."',
       "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it."',
       "- Buddah": '"The mind is everything. What you think you become."',
       "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
       "- Woody Allen": '"Eighty percent of success is showing up."',
       "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',
       "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is."',
       "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
       "― Anne Morrow Lindbergh":'“Him that I love, I wish to be free -- even from me.”'
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)]
    //console.log(authors);

    var quote = quotes[author];
   
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
}