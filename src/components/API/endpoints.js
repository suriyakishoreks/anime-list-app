import { DAYS } from '../constants/index';

export const endPoints = {
    anime: function (animeId, request = '') {
        return request ? `https://api.jikan.moe/v3/anime/${animeId}/${request}` 
                : `https://api.jikan.moe/v3/anime/${animeId}` ;
    },
    season: function (season, year) {
        return {
            id: `${season.title} ${year.title}`,
            url: `https://api.jikan.moe/v3/season/${year.id}/${season.id}`,
            path: "anime"
        }
    },
    schedule: function (queryDay) {
        return {
            id: `Anime on ${queryDay.title}`,
            url: `https://api.jikan.moe/v3/schedule/${queryDay.id}`,
            path: queryDay.id
        };
    },
    search: function (searchQuery, pageNo, orderBy, sort, genre, rating) {
        return {
            id: `Search Results`,
            url: `https://api.jikan.moe/v3/search/anime?q=${searchQuery}&page=${pageNo}&order_by=${orderBy}&sort=${sort}&genre=${genre}&rated=${rating}`,
            path: 'results'
        }
    },
    genre: function (genre) {
        return {
            id: genre.title,
            url: `https://api.jikan.moe/v3/genre/anime/${genre.id}`,
            path: "anime"
        }
    },
    airingToday: function () {
        const date = new Date();
        const today = DAYS[date.getDay()].id;
        return {
            id: "Airing Today",
            url: `https://api.jikan.moe/v3/schedule/${today}`,
            path: today
        };
    },
    topAiring: function () {
        return {
            id: "Top Airing", 
            url: "https://api.jikan.moe/v3/top/anime/1/airing",
            path: "top"
        }
    },
    upcoming: function () {
        return {
            id: "Upcoming Anime", 
            url: "https://api.jikan.moe/v3/season/later", 
            path: "anime"
        }
    }
}