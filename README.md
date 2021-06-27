# Security Question Checker
Capstone Project
## Overview
I will be creating a website that will use the users social media accounts to scan for answers to security questions. This will be done using Facebook and Twitters developers API. Using their API's I can scan the users profile information and posts for information that can be used to answer security questions. I will being using a list of security questions to look for potential answers also I will being looking at the information set on the users dashboard that could answer some security questions, for example Facebook profiles have education history, relationships, and other personal information that can be set and scanned. Based on the information gathered a report will be returned to the user alerting them to potential exposure of security question answers. This report will also tell the user if they have settings that help protect them against this kind of attack.

Using certain words that are used to answer the top common security questions we can then look for those words in the users post, for instance if a security question asks "What is your pets name?", we can search for posts containing names of animals in the text. This system can be used for other questions also. Some questions do not require searching posts and only require looking at the users 'Profile Information', for instance a question that asks "What high school did you attend?" can be answered by looking at the Facebook profile education section.

Combining all of these systems I think I can make a website that people can used to check their security posture in regards to Security Question and Social Engineering. Providing a preventative platform allows for people to know if they are vulnerable before they are hacked. This type of platform is superior to other types that would only let you know if you have been hacked previously.

## Problem
Currently their is no platform for people to check their social medias for infromation that can be used by malicious actors to answer security question about them.

Modern day use of social media opens up vulnerabilities in security questions as a form of authentication. Personal Information posted by people online can be used to answer security questions for their accounts, thus granting access to the attacker. This attack technique can also be coupled with phishing and social engineering. There currently isn't a platform that gives users insight on their social media standing in regards to security questions.

## Research Question
Can a tool be created to let users know if their social media information can be used to answer security questions about them?

## Common Security Questions
```
  What Is your favorite book?
  What is the name of the road you grew up on?
  What is your mother’s maiden name?
  What was the name of your first/current/favorite pet?
  What was the first company that you worked for?
  Where did you meet your spouse?
  Where did you go to high school/college?
  What is your favorite food?
  What city were you born in?
  Where is your favorite place to vacation?
  What is your oldest sibling’s middle name?
  What was the first concert you attended?
  What was the make and model of your first car?
  In what city or town did your parents meet?
```

## Conclusion
[Insert Text]
## References
Pinchot, Jamie L., and Karen L. Paullet. "What’s inyour profile? Mapping Facebook profile data to personal security questions." Issues in InformationSystems 13.1 (2012): 284-293.

Rabkin, Ariel. "Personal knowledge questions for fallback authentication: Security questions in the era of Facebook."Proceedings of the 4th Symposiumon Usable Privacy and Security.2008.
