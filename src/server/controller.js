module.exports = {
    getUsername: (req, res) => {
        var fullName = req.user.username
        var firstName = fullName.split(' ')[0]
        res.status(200).send(firstName)
    }
}