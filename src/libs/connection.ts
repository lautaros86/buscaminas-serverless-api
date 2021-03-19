const mongoose = require('mongoose');

const url = `mongodb+srv://user:1234@clusterbuscaminas.ib6hd.mongodb.net/buscaminas?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

export const db = () => mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err: Error) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
