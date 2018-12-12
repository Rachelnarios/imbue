(/ Bē /: A web based application to let you become more zen)

# / Bē /

## Overview
{ Become mindful of your surroundings. Learn how to focus even with background noise. Learn how to be more serene. }

This application will consist of four different sections. Logging, Learning, Practicing, and Guided Mediation.  LOG your thoughts and learn how to focus on your present-day challenges, thoughts, and behaviors. LEARN what is mindfulness and how you can apply it to your everyday life. MEDIATE, take 10 minutes off your day and follow a guided meditation.


## Data Model

The / Bē / application will store Diary Items, Blog Entries, Videos, MP3 Files, and User Identification

* users can input multiple diary entries (via mongoDB and post)
* users can learn more about wellness (via embedded external links or videos)
* users can meditate by listening to a guided meditation (via mp3 files)


Sign Up:

```javascript
{
  name: "Relaxer123",
  email: // an email
  comment: //a comment
}
```

Diary Entry:

```javascript
{
  user: // a reference to a User object
  name: "Suzan's week",
  diary: [

  ],
}
```




## Wireframes
/signup
![signup](documentation/sign.png)
/landing - landing page
![landing](documentation/land.png)
/meditate - page to practice meditation
![meditate](documentation/guided.png)
![learn](documentation/llearn.png)
/diary - page to log in Diary and view past entries
![signup](documentation/log.png)




## Annotations

1. Mocha Unit Test docs](https://codeburst.io/how-to-test-javascript-with-mocha-the-basics-80132324752e?gi=5afd35c56396)
2. Use Bootstrap Intro https://www.w3schools.com/bootstrap/bootstrap_get_started.asp
3. Google Analytics https://analytics.google.com/analytics/web/provision/?authuser=0#/provision
4. All Wireframes and logos were done with Adobe Illustrator

##Citations
1. Full page video : Code Pen: https://codepen.io/dudleystorey/pen/knqyK
