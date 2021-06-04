# SemanticWeb
## Introduction
Project of the semantic web subject of the Master in Web Engineering at the University of Oviedo.
## Main goal
The objective will be the crossing of data from there with other data from a second source. The app will be set at FC Bayern.
### Wikidata
Info related to coaches, stadiums and chiefs of the club.
### Second source
All the titles won by the club.
## Result
Coaches & chiefs with all the titles won at the FC Bayern with them in the club.
Stadiums where FC Bayern played when they won the titles.

## Database
MariaDB from Xampp was used as database in this app. The script is in the _persistence/sql_ folder of the project. If you are running the app, you should change the file where the connection is set _persistence/connection.js_.


## Deploy
First of all, download the dependencies:
```
npm install
```
Run the server: 
```
node .\index.js
```
