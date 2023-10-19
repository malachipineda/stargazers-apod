//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://api.nasa.gov/planetary/apod?api_key=${YOUR_API_KEY}&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image') {
            document.querySelector('iframe').src = ''
            document.querySelector('img').src = data.hdurl
            document.querySelector('h3').innerText = data.explanation
        } else if (data.media_type === 'video') {
            document.querySelector('img').src = ''
            document.querySelector('iframe').src = data.url
            document.querySelector('h3').innerText = data.explanation
        } else {
            document.querySelector('img').src = ''
            document.querySelector('img').alt = 'Oops! There is no image for this date yet.'
            document.querySelector('h3').innerText = 'Oops! There is no image for this date yet.'
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}