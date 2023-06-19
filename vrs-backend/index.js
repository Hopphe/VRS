const express=require('express')
const app=express()
const port = 3001

// const callback = (req, res) => {res.send('Hello1 World')}

app.get('/test', (req, res) => 
    res.send('Hello1 World')
)


app.post('/post',(req,res)=>{
    res.send('This is a post')

})

app.listen(port,()=> {
    console.log(`Example app listening on port ${port}`)
})