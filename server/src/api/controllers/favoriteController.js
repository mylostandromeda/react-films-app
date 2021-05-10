const {User} = require('../../models/userModel');
const {Film} = require('../../models/filmModel');

module.exports.getUserFavorites = async (req, res) => {
    const {limit, skip, id} = req.query;
    const user = await User.findById({_id: id});
    const favorites = await Film.find(
        {id: {$in: user.favorites}},
        {name: 1, image: 1, id: 1, likes: 1},
        {
            limit: parseInt(limit),
            skip: parseInt(skip)
        }
    );

    res.json(favorites);
};

module.exports.addFavorite = async (req, res) => {
    const id = req.params.id;
    const {_id} = req.user;
    const user = await User.findOne({_id});
    if(user.favorites.includes(id)){
        return res.status(400).json('You already added this film to favorites');
    }
    await User.findOneAndUpdate({_id},{$push: {favorites: parseInt(id)}});

    res.json({message: 'User favorite film added successfully'});
};

module.exports.removeFavorite = async (req, res) => {
    const id = req.params.id;
    const {_id} = req.user;
    const user = await User.findOne({_id});
    if(!user.favorites.includes(id)){
        return res.status(400).json('You can\'t remove film from favorites if you didn\'t add it');
    }
    await User.findOneAndUpdate({_id},{$pull: {favorites: parseInt(id)}});

    res.json({message: 'User favorite film removed successfully'});
};
