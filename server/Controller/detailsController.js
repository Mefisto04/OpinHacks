const messageModel = require("../model/patientModel");

module.exports.addDetail = async (req, res, next) => {
    try {
        const {detail} = req.body;
        const data = await patientModel.create({
            detail: { text: detail },

        });
        if(data) return res.json({msg: "Message added successfully"});
        return res.json({msg: " Failed to add Message to the DB"})

    } catch (ex) {
        next(ex);
    }
};

module.exports.getAllMessage = async (req, res, next) => {
    try {
        const { from, to } = req.body;
        const messages = await messageModel.find({
            users: {
                $all: [ from, to ],
            }
        })
        .sort({ updatedAt: 1 });

        const projectedMessages = messages.map((msg) => {
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text,
            };
        });

        res.json(projectedMessages);

    } catch (ex) {
        next(ex);
    }
};