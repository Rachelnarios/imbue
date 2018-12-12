# Google Analytics Research
An open source software to help you track user perfomance


# Overview
Adding analytics.js (Google Analytics) to Your Site...
The analytics.js library is a JavaScript library for measuring how users interact with your website.


# How ga works
The JavaScript tracking snippet defines a global ga function known as the "command queue". It's called the command queue because rather than executing the commands it receives immediately, it adds them to a queue that delays execution until the analytics.js library is fully loaded.

In JavaScript, functions are also objects, which means they can contain properties. The tracking snippet defines a q property on the ga function object as an empty array. Prior to the analytics.js library being loaded, calling the ga() function appends the list of arguments passed to the ga() function to the end of the q array.

For example, if you were to run the tracking snippet and then immediately log the contents of ga.q to the console, you'd see an array, two items in length, containing the two sets of arguments already passed to the ga() function


## Sample Implementation Model
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-129526365-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-129526365-1');
</script>



## Achivements
I have created an account that is successfully working and tracks active users
I have obtained a tracking id for my website
The tracking data has been inserted in layout
I will continue to learn more about the properties and the analytic tags I can create to make the website more trackable.

## [Link to Model Sample](https://developers.google.com/analytics/devguides/collection/analyticsjs/)
## [Link to Prove google analytics is working](documentation/g.png)


## [Link to Sample Implementation](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/Rachelnarios-final-project/blob/afe4ebfd13e0ab0aee3510251f9d6b4e61f6a5e7/views/layout.hbs#L7)
## Other

## Citations {Note all templates and images are royalty free}
1. Full page video : Code Pen: https://codepen.io/dudleystorey/pen/knqyK
2. Landing Page Outline: Code Pen: http://themes.alessioatzeni.com/html/brushed/
3. Google Analytics: https://developers.google.com/analytics/devguides/collection/analyticsjs/
4. Deploy with Heroku:https://devcenter.heroku.com/categories/data-management
5. Images Extracted from: https://unsplash.com/
6. Form CSS: https://www.w3schools.com/css/css_form.asp
