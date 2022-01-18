const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let signUser = ({ id, name, role }) => {
    let payload = {
        id,
        name,
        role,
    };
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '25h' })
}

class AuthController {
    async registration(req, res) {
        try {
            let textUsers = fs.readFileSync('./modelText/userText.json', 'utf-8');
            let parseUsers = JSON.parse(textUsers);
            let { name, password, role } = req.body;
            role = role ?? "USeR"
            let id = parseUsers[0]++;
            let checkUser = parseUsers.find(user => user.name === name);
            if (checkUser) {
                res.send('user is use');
            }
            let hashPassword = bcrypt.hashSync(password, 3);
            parseUsers.push({ id, name, password: hashPassword, role });
            let newTextUsers = JSON.stringify(parseUsers, null, 2);
            fs.writeFileSync('./modelText/userText.json', newTextUsers);
            let token = signUser({ id, name, password: hashPassword, role });
            res.send(token);
        } catch (e) {
            console.log(e)
        }
    }
    async login(req, res) {
        try {
            let textUsers = fs.readFileSync('./modelText/userText.json', 'utf-8');
            let parseUsers = JSON.parse(textUsers);
            let { name, password } = req.body;
            let user = parseUsers.find(user => user.name === name);
            if (!user) {
                return res.send('user is dont founf');
            }
            let checkUser = bcrypt.compareSync(password, user.password);
            if (!checkUser) {
                return res.send('password is wrong');
            }
            let token = signUser({ ...user })
            return res.send(token);
        } catch (e) {
            console.log(e)
        }
    }
    async check(req, res) {
        let user = req.user;
        let token = signUser({ ...user })
        return res.send(token)
    }
}


module.exports = new AuthController()