const Villian = require('./Villian.js')

module.exports = function(app,db) {
    app.get('/', async (req,res) => {
        let villians = await Villian.find()       //.sort({thumbUp: -1})
        // console.log(villians)
        res.render('index.ejs', {villians:villians})
        })
    

    app.post('/postdaddy', async (req,res) => {
        
        let villian = await Villian.create({
            name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
            description: req.body.description,
            url: req.body.url,
            score: 0
        })        
        res.redirect('/')
    })

    app.post('/thumbsUp', async (req,res) => {
        console.log(req.body)
        let villian = await Villian.findOneAndUpdate(
            {name:req.body.name},
            {$inc:{score:1}}
        )
        res.send({'redirect':'/'})
    })

    app.post('/thumbsDown', async (req,res) => {
        // console.log(req.body)
        let villian = await Villian.findOneAndUpdate(
            {name:req.body.name},
            {$inc:{score: -1}}
        )
        res.send({'redirect':'/'})
    })

    app.post('/deleteVillian', async(req,res) => {
        let villian = await Villian.findOneAndDelete({name:req.body.name})
        res.send({'redirect':'/'})
    })
}