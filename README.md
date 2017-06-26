# node-firebase-rest-api-example
A simple example using node rest api to create users in firebase authentication.

## How to install?

1) Clone the project.
2) Execute the command <b>npm install</b> inside project folder.

## How to use or test?

1) Set your service account key and database url on file firebase.admin.ts.
2) To start the project you have to execute the command <b>npm run start</b>, for default is running on port 8090.
3) The example only have one method, "createUser", accessing for "http:<your_host>/api/user", it is a post method using for create a user on firebase authentication using the sign-in method email/password.
