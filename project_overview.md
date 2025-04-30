# Sax Coach
In this app the user uploads a music sheet (pdf or other file type, tbd), the app reads the music sheet. The user can have the app play back the music sheet or move on to the next componnent. 
In the next componnent the user tunes his saxophone (currently only alto 440 hz). Once the user is satisfied they can move on to the next componnent, back to the music sheet the user playes the saxophone. The app (possibly ml) listens to the user, compares it to the music sheet and gives real time feedback (llm). The user can have the app generate summerise of his playing. The user can choose the tempo and perhaps what he would like to focus on in the session. The user can also save his progress and Upload a new music sheet.

## Technical overview
Postegesql for DB- for user managment, saving data, music sheets, user's progress, recordings. 

Django backend- contains apps for the following:
user auth and managment
music sheet managment
tuner managment
recordings managment
ml and llm managment

Angular frontend:
componnent for user auth and managment
tuner componnent
practice room componnent
llm commponnent

docker_compose:
the DB, backend, frontend
