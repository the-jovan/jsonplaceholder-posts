Day 1
#1 - Initializes app using create-react-app with typescript template
#2 - Cleaned initial setup and installed required dependencies
#3 - Set up folder structure and routes
#4 - Add models and components (User, Comment)
#5 - Add service for api calls
#6 - Connect apis with related components (will need update and at least context as sending 10 reqs per post is not viable option)

Day 2
#1 - Add context that will store data
#2 - temporary solution: connect Posts with endpoints related to all posts/comments/users, store their responses and use them to display posts and related users/comments,
and also pass data via navigate to individual post, thus reducing all api calls to just 3 (ofc, additional logic will need to be added to fetch individual post, if its
url is visited directly)
#3 Bug >> Comments are not rendering always, they tend to show when app is rendered first time, but on page refresh they do not...
