# Sports-Logos-Game

Approach:

First off, I wanted to do this how I thought a programmer would do it -- take care of the functionality first, make sure it works and then tackle the CSS. And I think that was a sound approach for me, because I could see myself going back and forth between the functionality and the css so often to the point where it'd slow me down. 

I also wanted to set my game up dynamically through jQuery, while creating as few elements in my HTML file as possible. Making two HTML files crossed my mind, but I chose to set it up similar to a homework assignment we did with the racers, and change the background and hide some elements from the landing page instead. 

Setup: 

My goal was to have a large array of objects, each having a logo image and a corrsesponding team name. The original plan was to have an input box for the user to type in his/her guesses. But I didn't factor in all the things that could go wrong there -- the user typing in lowercase or uppercase or typos -- and decided to turn it into a multiple choice game with three wrong answers and a correct one to go with the sports team logo that was displayed. 

I also wanted to randomize the array of logos, but then I realized that the array is already randomized, since I selected 20 random teams. Randomizing how the answers was more important anyways, otherwise the correct answer would be in the same position every time. 

Wireframes:

![](./logos/final-landing-page.png)
![](./logos/final-game-page.png)


Problems:

My biggest issue at the beginning with setting up my functions and figuring out which elements I should create with global scope. I thought I did a better job at pseudo coding this time around, which was a big help in structuring my code and making it clean. 

Keeping it dry was a whole other problem later on when I was making progress. It took some time condensing my code into cleaner functions that worked. 
