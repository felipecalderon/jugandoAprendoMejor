exports.Inicio = (req, res, next) => {
    if (req.headers.cookie == null) {
        console.log('no hay token');
        return res.render('login/', { err: null });
    }else{
        console.log('hay token');
        return res.render('index', {usernameExiste: "si"});
    }
  }