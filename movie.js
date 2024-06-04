document.addEventListener('DOMContentLoaded', function() {
    // Dummy data for demonstration
    const movies = [
        { title: 'DUNE PART 2', image:'m1.webp', description: '' },
        { title: 'OPERATION VALENTINE', image: 'movie12.webp', description: '' },
        { title: 'SNOW VALLEY', image: 'movie3.webp', description: '' },
        { title: 'TIG NOTARO', image: 'movie4.webp', description: '' },
        { title: 'GODZILLA KONG THE NEW EMPIRE', image: 'm4.webp', description: '' },
        { title: 'MY ACTING COACH NIGHTMARE', image: 'movie6.webp', description: '' },
        { title: 'SHIFTING GEARS', image: 'movie7.webp', description: '' },
        { title: 'FIGHTER', image: 'movie8.webp', description: '' },
        { title: 'RAMY YOUSSEF', image: 'movie9.webp', description: '' },
        { title: 'THE OLD ONES', image: 'movie10.webp', description: '' },
        { title: 'ORDINARY ANGELS', image: 'movie5.webp', description: '' },
        { title: 'OPERATION VALENTINE', image: 'movie12.webp', description: '' },
        { title: 'IMAGINARY', image: 'movie20.webp', description: '' },
        { title: 'ROAD HOUSE', image: 'movie14.webp', description: '' },
        { title: 'FREAKINK THE WILDEST PARTY NEVER TOLD', image: 'movie15.webp', description: '' },
        { title: 'CHIEN AND CHAT', image: 'movie16.webp', description: '' },
        { title: 'PREY', image: 'movie17.webp', description: '' },
        { title: 'AN EASTER BLOOM', image: 'movie18.webp', description: '' },
        // Add more movie entries here
    ];
  
    const movieList = document.getElementById('movieList');
  
    // Function to dynamically populate movie list
    function populateMovies() {
        movieList.innerHTML = '';
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie');
            movieItem.innerHTML = `
                <img src="images/${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
            `;
            movieList.appendChild(movieItem);
        });
    }
  
    populateMovies(); // Initial population of movies
  });