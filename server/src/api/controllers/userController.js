const {User} = require('../../models/userModel');

module.exports.getCurrentUser = async (req, res) => {
    const {_id} = req.user;
    const user = await User.findById(_id, {__v: 0, password: 0});
    res.json(user);
};

module.exports.getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById({_id: id}, {__v: 0, password: 0});
    res.json(user);
};

module.exports.getAllUsers = async (req, res) => {
    const {_id} = req.user;
    const users = await User.find({_id : {$ne: _id}}, {__v: 0, password: 0,email: 0,favorites: 0, likes: 0});
    res.json(users);
};

module.exports.followUser = async (req, res) => {
    const id = req.params.id;
    const {_id} = req.user;
    const user = await User.findById({_id});
    if(user.friends.includes(id)){
        return res.status(400).json('You already follow this film');
    }
    await User.findOneAndUpdate({_id},{$push: {friends: id}});
    res.json({message: 'Follow completed successfully'});
};

module.exports.unFollowUser = async (req, res) => {
    const id = req.params.id;
    const {_id} = req.user;
    const user = await User.findById({_id});
    if(!user.friends.includes(id)){
        return res.status(400).json('You cant\'t unfollow if you not follow this user');
    }
    await User.findOneAndUpdate({_id},{$pull: {friends: id}});
    res.json({message: 'Unfollow completed successfully'});
};
