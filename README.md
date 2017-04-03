# Code Challenge - Week 5 (Mongo Databases and Full Stack Logic - Debug)

## Overview

This Code Challenge is different from the rest. This time, you will need to debug an existing code base. You will need your
complete knowledge of the past 4 weeks to successfully navigate the problems that are in the code.

Keep in mind, often debugging is stressful for a couple reasons:

* The problems are not obvious, especially when you did not write the code.

* The solutions are often simple. Have confidence in your solutions and move onto the next problem.

* Debugging code bases that are not yours takes time. Take your time to work through each of the steps.


In addition to making the changes to the code base to correct the code, update this README.md file to explain your solutions.
Meaning, in your own words, explain the problem and why your solution fixes the problem.


## TODO

### Base Mode
[X] - Mongo does not seem to be connecting correctly.
<!-- Corrected port number for Mongo -->

[X] - The models have a conflict.
<!-- First parameter of models were the same,
but model goes: ("model", schema, "collection")  -->

[X] - Index.html is not being properly served.
<!-- Added GET for initial page load -->

[ ] - Posting information does not seem to come up correctly on the req.body as intended.

[X] - The information from the database is not being appended to the DOM.
<!-- Added appendListings call -->


### Hard Mode
[X] - All the information being appended on the DOM is not lining up together in their respective row.
<!-- This was already done, apparently -->


### Pro Mode
[ ] - Not that you need to, but if you were to post this on Heroku, it would not work correctly.
