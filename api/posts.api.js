const UUID = require('uuid');
const {getAll, getById, removeById, save, update} = require('../dal/posts.dao');
//create method createPost
const createPost = async ({name, description}) =>{
    const post ={
        id: UUID.v4(),
        name: name,
        description: description,
        postedDate: new Date()
    }    
    return await save(post);
}
const getPosts = async () =>{
    return await getAll();
}
const getPost = async (id) =>{
    return await getById(id);
}
const updatePost =async (id,{name,description})=>{
    const post ={
        name: name,
        description: description,
        postedDate: new Date()
    }
    return await update(id,post);
}
const deletePost = async (id) =>{
    return await removeById(id);
}
module.exports = {
    createPost, getPosts, getPost, updatePost, deletePost
};