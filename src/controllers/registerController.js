import passport from "passport";

async function registerView(req, res) {
  res.render("register");
}

async function registerFailure(req, res) {
  res.render("registerFailure");
}

async function registerAuth(req, res) {
  passport.authenticate("register", {
    failureRedirect: "/register/registerFailure",
    successRedirect: "/mailConfirmation/register",
  })(req, res);
}

export { registerView, registerFailure, registerAuth};
