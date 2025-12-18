# Learn-Markdown-Game
---
An interactive, level-based game tutorial to go from the absolute basics to master of the markdown language.

Markdown is a 

When I started learning markdown in college, I noticed there were plenty of videos I'd watch on YouTube but nothing stuck with me until I started writing my own. I've always belived that its much better to learn by doing rather than by watching, so I created this site.

This website uses react-markdown, which uses the Github flavor of markdown. 


**To run locally:**
```
git clone https://github.com/jonnyjackson26/learn-markdown-game.git
npm i
npm run dev
```

**To deploy:**
```
npm run build
firebase deploy
```



### TODO:
 - make panels resizable
 - right now the only event sent to my analytics is "level_completed", but I wish it was an event for each level.
 - make certificate
 - make gifs (https://online-video-cutter.com/crop-video), (https://ezgif.com/video-to-gif) 
 - have a challenges page where you edit plain text to make it look like a styled md doc
 - fix some of the later levels messages
 - for the live editor have it show download button and horizontal/veritcal toggle button
 - add "type" in levels and some are checkpoints and then at those checkpoints in the progress bar, put a star
 - ai hints/gifs from bottom bar
 - make navbar stick to top
 - maybe underline the page youre on too?
 - level 13's message is hard bc i cant display the backticks (its the code block level)
 - im using react-markdown to dynmically display markdown. when someone puts a link and then clicks on it, it opens in this current tab. how to make it so all links open in a new tab?
 - remove 'dist' (gitignore) and probably .firebase
 - seo



This website is hosted on firebase hosting under the domain *learn-markdown-game.com*

This project uses Firebase Analytics to track user interactions. The .env file is not neccessary, and only is used to send basic analytic data to my Firebase Analytics. This data helps improve the tutorial experience by showing How far users typically get in the tutorial, Which levels might be too difficult, How long users spend on each level, Overall completion rates.

I use emailjs to report bugs.

All level data is stored in `src/assets/level_info.jsx`. If you want to add/change levels, you'll just need to edit this file. 



apparently i track this: but should update it:
- **Tutorial completion** - Records when users complete the entire tutorial
- **Dropout analysis** - Helps identify which levels users struggle with or abandon
i should track how long users spend on each level

