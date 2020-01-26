const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

let io;
const connections = [];

exports.setupWebSocket = (server) => {
    io = socketio(server);
    io.on('connection', socket => {
        const { latitude, longitude, techs} = socket.handshake.query;

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
                techs: parseStringAsArray(techs),
            }
        });
    });
};

exports.findConnections = (coordinates, techs) => {
    // console.log(connections);
    // if(connections.length = 0){
    //     console.log('Nenhuma conexão encontrada');
    // }
    
    return connections.filter(connection => {
        
        if(connection){
            
            if (connection.techs) {
                const retorno = (calculateDistance(coordinates, connection.coordinates) < 10000)
                        && connection.techs.some(item => techs.includes(item));
                
                return retorno;
            }   
            else
            {
                    return [];
            }
        }
        else
        {
            return "Nenhuma conexão encontrada!";
        }
    })
}

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
    })
}