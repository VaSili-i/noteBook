const fs = require('fs')

class ScheduleController {
    async addSchedule(req, res) {
        let { } = req.body;
        let textSchedule = fs.readFileSync('./moduleText/scheduleText.json', 'utf-8');
        let parseSchedule = JSON.parse(textSchedule);
        parseSchedule.push();
        let newTextSchedule = JSON.stringify(parseSchedule);
        fs.writeFileSync(newTextSchedule);
    }
    async getSchedule(req, res) {
        let textSchedule = fs.readFileSync('./moduleText/scheduleText.json', 'utf-8');
        let parseSchedule = JSON.parse(textSchedule);
        return res.send(parseSchedule);
    }
}

module.exports = new ScheduleController()