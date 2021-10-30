// Redux Related Constants
export const UPDATE_GENREFILTER = "UPDATE_GENRE_FILTER";
export const UPDATE_RATINGFILTER = "UPDATE_RATING_FILTER";
export const UPDATE_SEARCHFILTER = "UPDATE_SEARCH_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const INITIALIZE_FILTER = "INITIALIZE_FILTER";
export const SET_WINDOW_VIEW = "SET_WINDOW_VIEW";
export const SET_MENU_STATUS = "SET_MENU_STATUS";

// View Constants
export const DESKTOP_VIEW = "DESKTOP_VIEW";
export const INTERMEDIATE_VIEW = "INTERMEDIATE_VIEW";
export const TABLET_VIEW = "TABLET_VIEW";
export const MOBILE_VIEW = "MOBILE_VIEW";

export function getViewType (width) {
    if (width > 1180.0)
        return DESKTOP_VIEW;
    else if (width > 740.0)
        return INTERMEDIATE_VIEW;
    else if (width > 460.0)
        return TABLET_VIEW;
    else
        return MOBILE_VIEW;
}

// App related Constants
export const SEASONS = {
    winter: { title: "Winter", id: "winter" },
    spring: { title: "Spring", id: "spring" },
    summer: { title: "Summer", id: "summer" },
    fall: { title: "Fall", id: "fall" },
}

export const DAYS = {
    0: { title: "Sunday", id: "sunday" },
    1: { title: "Monday", id: "monday" },
    2: { title: "Tuesday", id: "tuesday" },
    3: { title: "Wednesday", id: "wednesday" },
    4: { title: "Thursday", id: "thursday" },
    5: { title: "Friday", id: "friday" },
    6: { title: "Saturday", id: "saturday" },
}


export function getYearList() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const yearList = {};
    for (let itr = Number(currentYear); itr >= 1990; itr--) {
        yearList[itr] = { title: itr, id: itr };
    }
    return yearList;
}

export const RATING = {
    g: { title: "All Age", id: "g" },
    pg: { title: "Children", id: "pg" },
    pg13: { title: "Thirteen  +", id: "pg13" },
    r17: { title: "Seventeen +", id: "r17" },
    r: { title: "R +", id: "r" },
    // rx: { title: "RX", id: "rx" },
}

export const GENRE = {
    action: { title: "Action", id: 1 },
    adventure: { title: "Adventure", id: 2 },
    cars: { title: "Cars", id: 3 },
    comedy: { title: "Comedy", id: 4 },
    avanteGarde: { title: "Avante Garde", id: 5 },
    demons: { title: "Demons", id: 6 },
    mystery: { title: "Mystery", id: 7 },
    drama: { title: "Drama", id: 8 },
    ecchi: { title: "Ecchi", id: 9 },
    fantasy: { title: "Fantasy", id: 10 },
    game: { title: "Game", id: 11 },
    // hentai: { title: "Hentai", id: 12 },
    historical: { title: "Historical", id: 13 },
    horror: { title: "Horror", id: 14 },
    kids: { title: "Kids", id: 15 },
    martialArts: { title: "Martial Arts", id: 17 },
    mecha: { title: "Mecha", id: 18 },
    music: { title: "Music", id: 19 },
    parody: { title: "Parody", id: 20 },
    samurai: { title: "Samurai", id: 21 },
    romance: { title: "Romance", id: 22 },
    school: { title: "School", id: 23 },
    sciFi: { title: "Sci Fi", id: 24 },
    shoujo: { title: "Shoujo", id: 25 },
    // girlsLove: { title: "Girls Love", id: 26 },
    shonen: { title: "Shounen", id: 27 },
    // boysLove: { title: "Boys Love", id: 28 },
    space: { title: "Space", id: 29 },
    sports: { title: "Sports", id: 30 },
    superPower: { title: "Super Power", id: 31 },
    vampire: { title: "Vampire", id: 32 },
    harem: { title: "Harem", id: 35 },
    sliceOfLife: { title: "Slice Of Life", id: 36 },
    superNatural: { title: "Supernatural", id: 37 },
    military: { title: "Military", id: 38 },
    police: { title: "Police", id: 39 },
    psychological: { title: "Psychological", id: 40 },
    suspense: { title: "Suspense", id: 41 },
    seinen: { title: "Seinen", id: 42 },
    josei: { title: "Josei", id: 43 },
    awardWinning: { title: "Award Winning", id: 46 },
    gourmet: { title: "Gourmet", id: 47 },
    workLife: { title: "Work Life", id: 48 },
    // erotica: { title: "Erotica", id: 49 }
}

export const SEARCHOBJECT = {
    searchQuery: '',
    pageNo: '1',
    orderBy: 'members',
    sort: 'desc',
    genre: '',
    rating: ''
}