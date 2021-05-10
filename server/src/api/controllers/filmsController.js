const {Film} = require('../../models/filmModel');

module.exports.getFilms = async (req, res) => {
    const {limit, skip, name, sort, ...filter} = req.query;

    const sortValues = sort.split(' ');
    const sortObj = {
        [sortValues[0]]: sortValues[1] === 'ASC' ? 1 : -1,
        _id: 1
    }

    await Film.find(
        name ? {
                name: {'$regex': name, '$options': 'i'}, ...filter
            }
            : {...filter},
        {name: 1, image: 1, id: 1, likes: 1, rating: 1}
    )
        .sort(sortObj)
        .skip(parseInt(skip))
        .limit(parseInt(limit))
        .exec((err, films) => {
            res.json(films)
        });
};

module.exports.getFilmById = async (req, res) => {
    const id = req.params.id;
    const film = await Film.findOne({id});
    res.json(film);
};
