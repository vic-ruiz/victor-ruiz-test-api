async function logoutSession (req, res) {
    const name = req.session.name;
    res.render("logout", { name });
    req.session.destroy((err) => {
    if (!err) { 
       console.log("Session destroyed");
     } else {
       res.send({ status: "Error" });
    }
  });  
}

export {logoutSession}