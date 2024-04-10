# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Felix Arbucias**


## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[
- https://www.shecodes.io/athena/4023-what-does-cannot-read-properties-of-null-mean#:~:text=The%20error%20cannot%20read%20properties,elements%20that%20don't%20exist.
- https://stackoverflow.com/questions/52909830/typeerror-cannot-read-property-classlist-of-null
- https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
- https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
- 
]


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
[
In the process of developing the light and sound memory game, I encountered a significant challenge that tested both my problem-solving skills and attention to detail. The first hurdle arose when the Javascript file attempted to read a non-existent CSS class. Despite my initial efforts, I couldn't pinpoint the issue. Seeking assistance on platforms like Stack Overflow proved instrumental in resolving this challenge. I revisited the code and reviewed the CSS class, making the necessary adjustments to ensure its existence and compatibility with the Javascript functions. This experience not only sharpened my debugging skills but also highlighted the value of leveraging collaborative platforms for efficient problem resolution.
The second obstacle in the development process pertained to the game logic itself. I realized that the game was not accurately accounting for user guesses, leading to unusual behavior. Upon careful examination of the codebase, I identified a critical oversight; I had omitted the integration of the guess counter before the for loop responsible for processing user inputs. Recognizing this lapse, I promptly rectified the issue by incorporating the guessCounter functionality at the appropriate stage in the code. This experience underscored the importance of thorough code reviews and testing, ensuring that all elements of the game logic seamlessly function together. In overcoming these challenges, I not only enhanced the functionality of the memory game but also deepened my understanding of debugging and logic implementation in software development.
]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[
  After completing the basic version of the light and sound game, I began reflecting on various aspects of web development and how industry leaders (or front-end engineers) go about optimizing code efficiency and improving performance in projects such as this one. In addition, how does the lack of efficiency affect the web page or application? Obviously, it would make it slower, but to what extent? Are there industry best practices or trends that I should be mindful of when creating applications? What are some examples of 'optimal code' vs. 'unoptimal code'? I understand that there are three main languages—HTML, CSS, and JavaScript—responsible for the creation of web-like applications. Is the reason that engineers and industry leaders have not moved to one main language for web development due to a lack of ingenuity, or because past-made applications would simply get left behind?
]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
[
  To further elevate the gaming experience, I have envisioned a levels method for the game. For example, if the user were to surpass 5 stages of the pattern, the game would be elevated to level 2. Through increments of 5 and later 10, the levels would keep progressing. To complete this, I imagine I would implement a while loop to continue the code until the user omits an incorrect guess. Building on this idea, I would also implement a highscore counter that would save the highest score the user/game has witnessed. This could be achieved by comparing each score at the end of the game to the current high score of the game. If the current high score is greater than the score at the end of the game, that variable would remain unchanged. If it is the other case, however, the current score would become the new high score.
  Another simple addition to the existing interface could be a volume slider. By utilizing a volume slider, the volume can be adjusted according to each player's preference. 
]

## Video Walkthrough 

Add your screen recordings for specified implemented features here:
![losing screen recording](https://youtu.be/fjUNqEARFVQ)
![winning screen recording](https://youtu.be/2Qn9mPSAGE4)

## Interview Recording URL Link

[My 10-minute Interview Recording]([your-url-link-here](https://www.loom.com/share/f425b1af4f244ee8b1be53554c85d30b?sid=145bb8af-119a-4fd6-946e-568ab75c0f32)


## License

    Copyright [Felix Arbucias ]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.