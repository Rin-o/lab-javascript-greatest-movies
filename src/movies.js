// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((oneMovie) => {
        return oneMovie.director;
    });
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((aMovie) => aMovie.director==="Steven Spielberg" && aMovie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length===0){
        return 0;
    }
    const totalScore = moviesArray.reduce((accumulator, currentValue)=>{
        if(currentValue.score){
        return accumulator + currentValue.score;
        } 
        else {
        return accumulator;}
    }, 0);

        const avgScore = Number((totalScore/moviesArray.length).toFixed(2));
        return avgScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((aMovie) => aMovie.genre.includes("Drama"));
    if (dramaMovies.length===0){
        return 0;
    }
    const totalDramaScore = dramaMovies.reduce((accumulator, currentValue)=>{
        if(currentValue.score){
        return accumulator + currentValue.score;
        } 
        else {
        return accumulator;}
    }, 0);

        const avgScore = Number((totalDramaScore/dramaMovies.length).toFixed(2));
        return avgScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newSortedArray = moviesArray.toSorted((accumulator, current) => { 

        if(accumulator.year > current.year) {return 1;}
        else if (current.year > accumulator.year) {return -1;}
        else if (accumulator.year = current.year) {return accumulator.title.localeCompare(current.title) 
        }
        else {return 0;}
    }
    )
    return newSortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let dummmyArr = [];

    let sth = moviesArray.toSorted((element, secElem) => {
        return element.title.localeCompare(secElem.title);
    })

    sth.forEach((element) => {dummmyArr.push(element.title);});

    return dummmyArr.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
