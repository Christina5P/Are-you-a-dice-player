# Bet a dice

"Bet a dice" is a game for a quick bet.
If you like numbers, dicegame and bets, this is a simple game to play.

You choose if you want to bet 10, 20 or 100 euro by click on the bill.
The higher you bet, the more risk you take! 
After your bet, you choose numbers regarding your bet. If you bet 10 euro, you choose 3 numbers, for 50 euro you get 2 numbers and 100 euro you get 1 number.

After you have bet and clicked on numbers, you click to roll a dice.
The dice will show you the result and if you have the number in your choises, you win the bet. Otherwise you lose.

The game is build with colours and animation to get it lively and fun.

The idea is taken from the betwheel at the fairground.

![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/411fbb65-f652-473f-8f3b-c92b3181af7f)

## Contents

### Homepage

You start at homepage with instructions how to play and a playbutton to click. After click you go directed to the game.

![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/d6031e9c-6436-4c01-92c4-fa445202571c)

### Game
On the top you have a button "Back to the menu" if you want to read the instructions again.

You start to bet from 3 different values and you can easily see your bet, since the other values dissapear after your choice. <hr>
When you have bet, you can see how many numbers you will click on and when you click they change colours, so you can see your choice.
![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/103ccfa2-121e-4f69-a956-49d66725988f)
 
After, you click the dice to make it roll.
The dice will roll with the animations and generate a number to compare if it is the same number you have choosen.

![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/5231050f-8037-4746-971b-cad579e30e00)

If you win, you should feel like the jumping man with the green dice that pops up and you get a result with the value you win.
https://tvmspace-my.sharepoint.com/:v:/r/personal/christina_ahman_tv4_se/Documents/Desktop/win.mp4.mp4?csf=1&web=1&e=Xit8Ht

And it´s harder feeling to lose, but make it a new try with the pulling man.
https://tvmspace-my.sharepoint.com/:v:/r/personal/christina_ahman_tv4_se/Documents/Desktop/lose.mp4?csf=1&web=1&e=D9FITy

After your play you can easily click the "play again" button to restart the game.

If you click, you get to the top to choose new numbers and don´t have to scroll back.

you get instruction through the game and you are not able to choose more choices than you are allowed to.
You can still roll the dice without any choices, but nothing happens then more than a rolling dice. 

### Footer 
A copyright of the game creator.
![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/65a23b4a-ff31-48e9-965a-8643fa1fb635)

## Structure

I started to draw a skeleton in Balsamiq.
My first thought was to build a 2048 - game board with number to merge into higher values and scores, but after a while I realised this  wasn´t in this scoop and a little to complicated for PP2, so I restarted with this game and used the same idea for skeleton.

![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/f59cd826-ccc8-4d99-9020-a79b429dccd6)

![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/e96e5bbb-16db-4cc7-91fb-1c45cbcf4f28)

## Design
I choosed a colourful font to get a happy feeling and border-radius so the buttons are not so "stiff"
Background color for bigger screen is a grey background to lift the colourful text 
<hr>
![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/1cfc3e1d-b391-4a6e-bec8-cc670a4e3974)


When I tested the game on smaller screens as mobile and ipad, I saw the font won´t show the colours and it was too dark approach, so I changed the background colour and used the font Bungee instead of in max-width: 820px. <hr>
![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/06191f72-1bdc-460c-8fda-37c23dcef02c)

![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/4b505aa9-ada0-4c8c-ac46-74bea8b80cf6)


I  have some contrast alert in Wave, but it depends of the font style, since I tried a lot of different backgrounds and it´s still the same number of alerts.
I decided to keep the font anyway, because I dont think you get distrurbed of any contrastproblem.<hr>

![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/f8f5c177-7f44-40c7-83d6-3afea1209afc)

I have also create an own Head icon to use in head
![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/68263cd0-7c44-4f3a-851b-d2ef1c5609ae)

I made a handpointer when you click on numbers, dice and buttons.

## Future Features to Implement

Counter how many rolls you need to reach a specific value (/or for ex. 24 points).
A counter to add your bet (/or the dice number) for every times you win and count how many rolls you need to reach 24.

* Best score
On right hand side tha game will represent a best score list. 

## Media

- Website logo is picked from www.favicon.io and downloaded to my repository.
- Pictures of values is taken from /www.istockphoto.com
- The winner and loservideo is pictures taking from www.canva.com and edit by me to an animated 4 seconds video.
- https://favicon.io/ - For favicon to head


## Deployment
The site was created from Gitpod and is continuing push to GitHub.
Readme is written in Gitpod / Git Hub and I have pull and push between code space and repository.
 The codes I´ve been using is git pull / git add . / git commit -m"" / git push.

The site was deployed to GitHub pages. The way I manage that:

* Navigate to my repository
* From the setting tab (above the repository) click setting tab.
* Select Pages in the left-hand menu
* Section Build and deployment- source select Deploy from a branch
* Select main in first area and root in second area
* Save
* You find the public site under GitHub pages if you go to Deployments on right-hand menu 
![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/a6e68615-4286-49be-b59c-9ede37b40dec)

## Bugs 
 Through this project I have notised bugs that has been very instructive for me.
 The biggest issues I had was:
 
-The dots on the dice. It was hard to get them in possition and get them to stay inside the dice ;-)
 The resolution was to chenge the position od dots in css.

-To get the result if you won or lost by comparing the dice number with those number you have choosen.
 I got stock since a thought I had enough function for both above but I solved it to make one more function with InternalDiceroll.

- Every time I loaded the sight I got error, even if the function worked.
  It was confusing, but I had 2 html and JS script was calling from first page and didn´t got answer since that page didn´t have content JS was calling.

- The animation of dice was hard to get through, but the tutor lesson https://www.youtube.com/watch?v=XTF5jXDr2H8 helped me out of that one.

- My functions stopped working without a reason.
  I realised the idea to change name of the repository wasnt that good, since it got errors on links etc.
  I changed back to the first name and it start worked again.
  Pitty, I got 3 different github pages and 2 of them has error 404, since they are not current any more.
![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/5579bd95-2bfb-4f55-be24-c7ea9d620eff)


## Testing

I have done a lot of manual testing:
![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/316554a3-97b7-4b1b-804e-580e5a4a3847)


### HTML Validator
I have checked the HTML codes through https://validator.w3.org.

![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/a378c126-ad07-4861-a338-8e00ad37bad1)


### CSS Validator 
I have checked css code through https://jigsaw.w3.org/css-validator/#validate_by_input.

![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/9fe4711b-9699-4092-9474-ce2f4c5e05af)

### JS Hint
I have checked JS codes through https://jshint.com/
![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/57e0dbb5-2698-4a26-bd46-6540dd7aa42b)


### Lighthouse
![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/fc09d58b-adc3-461d-9966-7042233d9250)

### Wave
![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/a03cacab-a626-4570-b396-f0c1e513bbf2)

## Responsive testing

I have tested the responsitive in 2 different websites:
https://responsivedesignchecker.com :
![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/47451997-3085-423c-8a7c-b8bafbda3b45)

https://ui.dev/amiresponsive :
![image](https://github.com/Christina5P/are-you-a-dice-player/assets/160019695/e1acb5e6-a163-47ad-ae11-023d12263850)



## Acknowledgements

I have some imported people around me to helped me out with PP2

* Tutor Ernst from "Digitala lyftet", who has spent hours with me to explain and solved my problems.
* My student fellow Josefin Yoshida-Dahlqvist, who always hold my hand and try to help me out.
* CI Tutors
* Alumn Jonathan Zakrisson, who gave me some feedback and tried to help me resolve problem as getting randomnumber and errors.


## Source references

I have used sources to find information and for tutoring lessons through the project:

-https://balsamiq.com/ 
 Build the skeleton

-https://www.canva.com/
Pictures when you win or loose

- https://www.istockphoto.com/se/collaboration/boards/aErC0W69g0if3TpFdJwx6Q
Pictures of euro

- https://imagecolorpicker.com/color-code/ff7800 
 Choose colours

-https://betterprogramming.pub/creating-dice-in-flexbox-in-css-a02a5d85e516
Tutoring/inspiration to create dice with dots with css

-https://stackoverflow.com/questions/52540974/ show-dice-element-corresponding-to-random-number-generated-on-click
 Tutoring dots on dice

- https://www.youtube.com/watch?v=M3InbHr0WAc
Tutoring dots on dice

- https://codebeautify.org/jsvalidate#
 Tutoring dots on dice

-ChatGPT
To get codes explained in Swedish

-https://www.perplexity.ai/ 
Troubleshout/explanation of written codes

- https://chat.openai.com/
To get help with suggestion when I debug functions text.content

- https://dcode.domenade.com/tutorials/how-to-create-a-dice-roll-game-with-html-css-and-javascript
Tutoring dice and dots

- https://www.kiltedviking.net/se/www/javascript/dom1.html
 Repetition(tutoring) of DOM

- https://github.com/bradtraversy/btre_project/issues/9 
Troubleshot url-problems

- Tutoring lesson with Ernst, Digitala lyftet

- CI Tutor to help to me understand function "checkAnswer"

- https://www.youtube.com/watch?v=Fw3jE0tWn28 
 Tutoting change colour on buttons

 - https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
 To teach how to call back information


 - https://www.geeksforgeeks.org/javascript-nested-functions/
 - https://www.tutorialspoint.com/javascript/javascript_nested_functions.htm 
 To tech me about nested functions

 - https://codedamn.com/news/javascript/how-to-empty-an-array-in-javascript
 Tutoring how to clear arrays

- https://developer.mozilla.org/en-US/docs/Web/API/Element/remove 
Tutoring remove element

- https://stackoverflow.com/questions/3087975/how-to-change-the-cursor-into-a-hand-when-a-user-hovers-over-a-list-item
To get cursor properties

- https://www.w3schools.com/cssref/css3_pr_mediaquery.php
responsive check to css

-https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
Tutoring scroll up the window

- https://stackoverflow.com/questions/69427603/autoplay-on-video-is-not-working-after-refreshing-page
Investigate video autoplay

- https://www.youtube.com/watch?v=XTF5jXDr2H8
Tutoring and help me with codes for dice animation

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_loc_reload
-Tutor to reload the game

## Mentions
I have lot of different tutor references and spend a lot of time to create an animated dice with javascript instead of any picture of dice or number for an easy handling.
I build the game with a "step by step" functions with pop up information what to do next from Javascript.
After feedback I continued with new functions in the game.
I realised after I needed help from my alumn, my script had functions and loops which was build on top of the other and it was hard to understand, even if I had a lot of comments. Then I split the script in 2 and had one for dice and dots and another for the playfunctions.
I also went through my codes step by step to get better structure.
I decided to use Javascript for the most of content, since this belongs to this project.
It has been a "back and forth" project and run out of time in the end, so I concentrated on functions without errors and understand Javascript and since thmis is a quick game I looked more on styling for smaller devices.


