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

Day 3
#1 - Refactor Post component (split it to User, PostInfo, Comment)
#2 - Updated fetching all posts and related data in Posts component
#3 - Fixed comments (and users) related bug
#4 - Added posts filtering logic and custom Input component
#5 - Connected Post to SinglePost with router navigate, which passes state
#6 - Added SinglePost data fetching logic in case of visiting post directly
#7 - Add error handling for invalid post url

- fully functional without a single scss line, so it's as ugly as it gets, but it works...

#8 - Added basic scss just to make it somewhat tolerable, still ugly though, but
I'll get to it if there's time... duty calls a lot these days :(

Day 4
#1 - Added "Hello from" hoc
#2 - Added toastr and some error handling
