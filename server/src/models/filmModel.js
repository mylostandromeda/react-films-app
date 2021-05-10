const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    id: Number,
    url: String,
    name: String,
    type: String,
    language: String,
    genres: [String],
    status: String,
    runtime: Number,
    averageRuntime: Number,
    premiered: String,
    officialSite: String,
    schedule: {
        type: Object,
        time: String,
        days: [String]
    },
    rating: {
        type: Object,
        average: Number
    },
    weight: Number,
    network: {
        type: Object,
        id: Number,
        name: String,
        country: {
            type: Object,
            name: String,
            code: String,
            timezone: String
        }
    },
    webChannel: {
        type: Object,
        id: Number,
        name: String,
        country: {
            type: Object,
            name: String,
            code: String,
            timezone: String
        }
    },
    dvdCountry: {
        type: Object,
        name: String,
        code: String,
        timezone: String
    },
    externals: {
        type: Object,
        tvrage: Number,
        thetvdb: Number,
        imdb: String
    },
    image: {
        type: Object,
        medium: String,
        original: String
    },
    summary: String,
    updated: Number,
    _links: {
        type: Object,
        self: {
            type: Object,
            href: String
        },
        previousepisode: {
            type: Object,
            href: String
        }
    },
    likes: [String]
});

module.exports.Film = mongoose.model('Film', filmSchema);
