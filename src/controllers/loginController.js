import passport from "passport";

async function loginView(req,res){
    res.render("login");
}

async function loginViewFailure(req,res){
    res.render("loginFailure");
}

async function loginAuth(req,res){
    passport.authenticate("login", {
        failureRedirect: '/login/loginFailure',
        successRedirect: '/index',
      })(req, res);
}

export {loginView, loginViewFailure, loginAuth}