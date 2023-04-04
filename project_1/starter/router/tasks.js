const express = require("express")
const {createtasks,getsingletaks,gettaks,deletetaks,updatetaks} = require('../controller/tasks')
const router = express.Router()

// router.route('/').get((req,res)=>{
//     res.send("get request")
// })
// Another way to write it 

router.route('/').get(gettaks).post(createtasks)
router.route('/:id').get(getsingletaks).patch(updatetaks).delete(deletetaks)


// router.route('')
module.exports = router