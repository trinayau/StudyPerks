# StudyPerks - Hackathon Submission for EduHacks
Won Second Overall and Best Use of Google Cloud  
StudyPerks is a co-studying web platform that lets you exchange your time studied for perks.
 
Live: https://studyperks.tech  
 
 ## Inspiration
What kind of learner are you? Someone who takes notes in class, reviews the material every evening and hands homework in early, or someone who is cramming 2 hours before the final?

For the members of Team StudyPerks, we are definitely the latter, and there are reasons for that: 25% of students don't even get taught study skills! While we've both left school for a while now, we're still constantly learning new tech, and we want to help students around the world form better study habits and get rewarded for it.

Inspired by co-studying platforms such as StudyTogether, we have built a platform to help people replicate the pressures of the 'library environment' by studying with others online. We aim to reward consistent study habits with perks like coffee, boba and even paid-for internship CV reviews, reinforcing the brain's reward system and making habit formation even more powerful.

## What it does
Our platform allows our student users to do the following:
- Sign up for a StudyPerks account & login
- Access their StudyPerks profile and check how many hours they have studied & study streak
- Check how many points they have accumulated 
- Exchange points for coffee/boba vouchers
- Create and join a study room
- Start a Pomodoro timer in the study room
- Send messages in the study room to other users in the room
- Play a minigame during their break in the study room

## Using Google Cloud
We used Google Cloud Firestore for our NoSQL secure database and Google Cloud Firebase for authentication. It was our first time using the  Google Cloud platform. The documentation was very clear and easy to follow, and it simplified authentication a lot for me. In our previous project, one team member spent several hours implementing a user authentication system, so we were glad to find a simple solution that let us spend time on other more exciting features.

## Making learning fun
We wanted to make learning fun on StudyPerks, so Kei coded a simple but challenging minigame based on the classic Simon Game. Users only get access to it during the Pomodoro breaks, and the score gets posted to the chat for everyone to see for some friendly competition!

## Making StudyPerks Accessible to Everyone
To make fun and learning available to everyone, we tested our study pages and minigame with the Coblis Color Blindness Simulator to see how the game and website look to a colourblind person. 

We are aware that the Simon Game uses mainly colours which may prove difficult for some colourblind users, so we made a toggle option available to use numbers as well as colours.

In addition, we also used aria HTML attribute labels to make the website more accessible, following the ReactJS documentation on Accessibility: https://reactjs.org/docs/accessibility.html

## How we built it
React frontend, Google Cloud Firebase & Firestore for user authentication and chat, CockroachDB for a SQL DB solution for perks redemption, Node.js & socket.io.

## Challenges we ran into
Time- we had a lot of ambitious features we wanted to implement in a very short space of time, so getting organised and staying on task was super important. 
Learning Google Cloud Firebase & Firestore and CockroachDB was intimidating at first because of the steep learning curve, but the documentation was very helpful.

## Accomplishments that we're proud of
We tried many new things in this project, which was challenging but ultimately felt more rewarding than if we had stuck with the tried-and-true.
- Implementing the Pomodoro timer in React
- Adding Simon game to React and adding more accessibility options
- Learning and using Google Cloud Platform
- Tried CockroachDB CLI for the first time

## What we learned
First time using Google Cloud Firebase for authentication, realising how much easier it will make building projects faster. Also generally that trying new technology can make our future builds even faster and more reliable!

## What's next for StudyPerks
- Adding a non-login option for students who want to join a study session quickly without signing up
- Getting feedback from students and understanding how to improve our features
- Allowing users to add friends
- Adding guilds so users can study together in their institutions and reach the top of the leaderboard
