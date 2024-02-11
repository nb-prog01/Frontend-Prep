const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://nirajbhadoria007:Mongo007@cluster0.0quk0vz.mongodb.net/todos"); //should not be put here as not secure should be in .env

const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}