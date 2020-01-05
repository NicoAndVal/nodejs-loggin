const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/',(req,res,next) =>{
    res.render('index')
})

router.get('/signup',(req,res,next) =>{
    res.render('signup')

})
router.post('/signup',passport.authenticate('local-signup',{
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}))
router.get('/signin',(req,res,next) =>{
    res.render('signin')
})
router.post('/signin', passport.authenticate('local-signin',{
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback:true 
}))

router.get('/logout',(req,res,next) =>{
    req.logOut()
    res.redirect('/')
})

router.use((req,res,next) =>{
    isAuthenticate(req,res,next)
    next()
})

router.get('/profile', isAuthenticate, (req,res,next) =>{
    res.render('profile')
})

function isAuthenticate(req,res,next){
    if(req.isAuthenticated()){
        next()
    }

    res.redirect('/')
}

module.exports = router