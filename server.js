

//SERVER



//on crée une app avec la librairie Express (sur laquelle on va specifier des données de routage)

var app = require("express")();

//Création d'un server http
var http = require('http').Server(app);

//utilisation de web socket, en utilisant le serveur 
var io = require('socket.io')(http);


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

http.listen(3000, function(){
    console.log("Server running on 3000");
})









io.on('connection', function(socket){

    //once the user is logged in , we create an event listener ('disconnect')
    console.log('a user is connected');

    
     socket.on('disconnect', function(){

        console.log('a user is disconnected');
     })

     
    socket.on('question asked', function(selectedFamily){

        socket.emit('question asked', selectedFamily);

        console.log('question asked' + selectedFamily);

   })

})





