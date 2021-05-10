const {Film} = require('../../models/filmModel');

module.exports.getUserLikes = async (req, res) => {
    const {_id} = req.user;
    const {limit, skip} = req.query;
    const likes = await Film.find(
        {likes: _id},
        {name: 1, image: 1, id: 1, likes: 1},
        {
            limit: parseInt(limit),
            skip: parseInt(skip)
        }
    );

    res.json(likes);
};

module.exports.addLike = async (req, res) => {
    const id = req.params.id;
    const {_id} = req.user;
    const film = await Film.findOne({id: parseInt(id)});
    if(film.likes.includes(_id)){
        return res.status(400).json('You already liked this film');
    }
    await Film.findOneAndUpdate({id: parseInt(id)},{$push: {likes: _id}});

    res.json({message: 'User like added successfully'});
};

module.exports.removeLike = async (req, res) => {
    const id = req.params.id;
    const {_id} = req.user;
    const film = await Film.findOne({id: parseInt(id)});
    if(!film.likes.includes(_id)) {
        return res.status(400).json('You can\'t remove like if you didn\'t like it');
    }
    await Film.findOneAndUpdate({id: parseInt(id)},{$pull: {likes: _id}});

    res.json({message: 'User like removed successfully'});
};

