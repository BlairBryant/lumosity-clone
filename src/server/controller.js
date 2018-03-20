module.exports = {
    getUsername: (req, res) => {
        var fullName = req.user.username
        var firstName = fullName.split(' ')[0]
        res.status(200).send(firstName)
    },

    postScore: (req, res) => {
        const {user_id} = req.user
        const {score} = req.body
        const db = req.app.get('db')
        let date = Date(Date.now())
        let today = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()

        db.postScore([user_id, score, year, month, today])
    }
}