const postModel = require("../models/post.model");
const { post } = require("../router/post.route");

class PostService {
    async create(post){
        const newPost = await postModel.create(post)
        return newPost
    }

    async getAll(){
        const allPosts = await postModel.find()
        return allPosts
    }

    async delete(id){
        const post = await postModel.findByIdAndDelete(id)
        return post
    }
    async edit(post, id){
        if(!id){
            throw new Error('Id not found')
        }
        const updateData = await postModel.findByIdAndUpdate(id, post, {new: true})
        return updateData
    }

    async getOne(id){
        const post =await postModel.findById(id)
       return post
    }
}

module.exports= new PostService()