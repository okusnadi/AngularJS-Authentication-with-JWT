AngularJS-Authentication-with-JWT
=================================

To use, you must install :
+ Grunt
+ Bower


Install Instructions
=====================

+ npm install (in /)
+ bower install (in /public)
+ launch nodemon server.js


Import / Export DB
=====================

+ mongoexport -d webApp -c users -o mongoUser.json
+ mongoimport -d webApp -c users mongoUser.json

User DB
=======

+ username:martin / password: Pmartin