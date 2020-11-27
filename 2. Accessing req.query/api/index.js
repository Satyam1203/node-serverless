module.exports = (req, res) => {
    let name = req.query.name;
    if(name === undefined) name = 'World';
    res.send(`Hello ${name}!`);
}