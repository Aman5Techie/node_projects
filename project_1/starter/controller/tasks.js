const gettaks = (req,res)=>{
    res.send("Get task")
    // res.json(req.body)
}
const createtasks = (req,res)=>{
    // res.send("Post task")
    res.json(req.body)
}
const getsingletaks = (req,res)=>{
    // res.send("Get single task")
    res.json({id : req.params.id})
}
const updatetaks = (req,res)=>{
    res.send("Update task")
}
const deletetaks = (req,res)=>{
    res.send("Delete task")
}


module.exports = {gettaks,createtasks,getsingletaks,updatetaks,deletetaks}