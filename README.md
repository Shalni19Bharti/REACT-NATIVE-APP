# REACT-NATIVE-APP

# PART - 1

# Login Screen

Email Field: Allows users to input their email.
Password Field: Accepts the user's password input.
Login Button: Triggers login functionality by sending credentials to the backend.
Forgot Password Link: (Optional) Redirects to a "Forgot Password" screen (future enhancement).

Functionality .....

Validate the email and password fields for correct input.
If credentials are valid, make a POST request to the backend /user/login endpoint.
On successful login, store the JWT securely.

# Registration Screen

Full Name Field: For entering the user's full name.
Email Field: For entering the user's email address.
Password Field: For entering a secure password.
Confirm Password Field: To confirm the entered password matches.
Registration Button: Sends the registration details to the backend /api/register endpoint.

Functionality .....

Email must follow proper format.
Password must meet minimum 8 length requirements.
All fields are required.
On successful registration, redirect to the login screen.

# Token Handling

JWT Authentication ... After successful login, the JWT token received from the backend will be stored.
Token Storage ... Use AsyncStorage or SecureStore to store the token securely.

# PART - 2 

# API Endpoints

POST : /user/login & /user/signup

Functionality:

Hash the password using bcrypt.
Save the user data in the MongoDB database..
If credentials are valid, return a JWT token signed with a secret key.

GET : /user/home

Purpose: Retrieve the user's details.

Functionality:

Fetch and return the user's details based on the token.


# PART - 3

 # Task Management (CRUD Operations) using React

1. Add a Task: Users can create a new task by providing a name and username and email.
2. View Tasks: Users can view a list of all their tasks.
3. Edit Tasks: Users can update the details of an existing task.
4. Delete Tasks: Users can delete tasks they no longer need.

