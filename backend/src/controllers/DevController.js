const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
    
    async index(request, response) {
        const devs = await Dev.find();
         
        return response.json(devs);
    },

    async store(request, response) {
        // console.log(request.body);
        
        const {github_username, techs, latitude, longitude } = request.body;
    
        let dev = await Dev.findOne({ github_username });
        
        if(!dev){

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
            
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
            // console.log(dev);
            // console.log(name, avatar_url, bio, github_username, techs);    
            // Filtrar conexões do servidor para encontrar as que estão a 10 km desse novo usuário e que solicitam alguma tecnologia desse dev
            // console.log('Procurar nas conexões');
            const sendSocketMessageTo = await findConnections(
                { latitude, longitude }, 
                techsArray, 
            )

            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }

        return response.json(dev);
    }
}