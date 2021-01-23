$('.search').click(async function () {
    let query = document.querySelector('#movie').value
    let omdbaUrl = `https://www.omdbapi.com/?s=${query}&apikey=1d2b54e3`

    var img = $('<img src="" alt="Poster" class="poster">');
    img.prependTo('.movie-info');

    fetch(omdbaUrl)
        .then(res => res.json())
        .then(res => {
            console.log(res.Search[0])
            $('.poster').attr('src', res.Search[0].Poster)
            $('.title').text(res.Search[0].Title)
            $('.year').text(res.Search[0].Year)
        })
})