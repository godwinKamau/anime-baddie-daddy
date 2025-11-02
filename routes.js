const Villian = require('./Villian.js')

module.exports = function(app,db) {
    app.get('/', async (req,res) => {
        let villians = await Villian.find()       //.sort({thumbUp: -1})
        console.log(villians)
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


}