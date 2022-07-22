
$('#delete-button').on('click', function() {
    $('img').remove()
})

$('#gif-search').on('submit', function(evt){
    evt.preventDefault()
    let searchTerm = $('#search-term').val()
    getGifs(searchTerm)
    $('#search-term').val('')
})

async function getGifs(q) {
    const api_key = 'GQCf6O7b4vdHClxYBhMr9AlzjJe2F3O8'
    const gifData = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q, api_key}})
    let gif = pickOne(gifData)
    
    // Create new img and append
    $('<img>').attr('src', `${gif.images.original.url}`).appendTo('#gifs')
}

function pickOne(gifData) {
    return gifData.data.data[Math.floor(Math.random() * 50)]
}

