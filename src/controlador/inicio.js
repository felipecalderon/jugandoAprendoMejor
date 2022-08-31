const inicio = (req, res) => {
  res.json({ msg: "holaa" });
};

const inicio2 = (req, res) => {
  res.render("./paginas/inicio");
};

module.exports = { inicio, inicio2 };
