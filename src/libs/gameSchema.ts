import * as mongoose from 'mongoose'

//Define a schema
const Schema = mongoose.Schema;
const GameSchecma = new Schema({
    boardMines: [],
    boardChecked: [],
    boardFlags: [],
    sizeX: Number,
    sizeY: Number,
    mines: Number,
    board: [],
    status: String,
    finished: Boolean
});

// Compile model from schema
export const GameModel = mongoose.model('Games', GameSchecma );
