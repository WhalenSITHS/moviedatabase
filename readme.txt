day 1
go over mongodb, what it is, why we need it security adn speed
create gitignore, package.json and early folder structure
npm i express, mongodb, mongoose
dev dependency nodemon

then folder structure with comments about why each folder is the way it is

then index.js


after you succcesfully post and get a movie then validate

npm i validator

add validation for required

continue with CRUD with patch and delete



*******logging in!
show them user router create the login route first with userLogin method WE create. Then Create that method in the model together. 
Also ensure you add the unique property to the user schema and DROP THE COLLECTION
If you do not drop the collection then unique will not work. 


***********JWT
Show JWT in router and method and send token back. Then fix the model and the method you made to add token to token array


*********Auth Middleware
headers in postman using token!
Authorization Bearer token

users/me request MUST MUST MUST be above the :id request for some reason
if in auth middleware the kids dont do "bearer " and instead do "bearer" then it will not work


*****postman setup
add environment vairable authtoken
edit api settings to have authtoken vairable
add javascript code on login to create global authtoken variable



****logout, have them attempt it on their own with pseudo code



*****Login auth changes
We return the user object but this time we remove the user password and tokens so they remain unexposed
**Explain toObject() and toJSON() 
Refer to the mongoose docs and CLICK THE LINKS!!! Show them the documentation 