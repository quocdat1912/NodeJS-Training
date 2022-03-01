import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a first name'
    },
    author: {
        type: String,
        required: 'Enter a author'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});