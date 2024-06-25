
const postService = require('../service/post.service')

class PostController {
    async getAll(req,res){
        try{
            console.log(req.requireTime)
            const allPost = await postService.getAll()
            res.status(200).json(allPost)
             } catch(error){
                 res.status(500).json(error)
             }
    }

    async create(req, res){
        try{
                const post = await postService.create(req.body,req.files.picture)
                res.status(201).json(post);
                } catch(error){
                    res.status(500).json(error)
                }
            }
            async delete(req, res) {
                try {
                    const postId = req.params.id; // postning ID sini olish
                    const deletedPost = await postService.delete(postId); // postni o'chirish xizmatini chaqirish
                    res.status(200).json(deletedPost); // 200 HTTP status kod bilan post ma'lumotlarini JSON shaklida qaytarish
                } catch (error) {
                    res.status(500).json({ error: error.message }); // xato bo'lsa 500 HTTP status kod bilan xatoni JSON shaklida qaytarish
                }
            }
            

async edit(req,res){
    try{
        const {body , params}= req
    const post =await postService.edit(body, params.id)
    res.status(200).json(post)
    }catch (error){
        res.status(500).json(error)
    }
}
async getOne(req, res){
    try{
        const post = await postService.getOne(req.params.id)
        res.status(200).json(post)
    } catch (error){
        res.status(500).json(error)
    }
}
            
}

module.exports= new PostController()