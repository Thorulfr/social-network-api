# Social Network API

A sample API for a social network in which users can make posts, react to and interact with posts, and create and manage friend lists. This serves as an exercise in creating a back-end structure using Express.js, MongoDB, and Mongoose.

In creating this application, I used the following user story and acceptance criteria:

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Built With

-   JavaScript
-   Node.js
-   MongoDB
-   Mongoose
-   Express
-   Luxon

## Website

<https://github.com/Thorulfr/social-network-api>

## Video Demonstration

[See this app in action.](https://youtu.be/MOfmfsOLSZk)

## Credits

All code by Benjamin Holt.
