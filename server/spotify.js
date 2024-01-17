const SpotifyWebApi = require('spotify-web-api-node')

const spotifyApi = new SpotifyWebApi({
  clientId: 'bc9f2382dd194c4493cc1496364ee420',
  clientSecret: 'd09db5c2d5074588b67f50c3e9d47f30',
})

// wrapper necessary to call spotifyApi methods with
// token initialized and set on spotifyApi object

// function useWrapped(func, ...params) {
//   spotifyApi.clientCredentialsGrant()
//     .then(data => {
//       const token = data.body['access_token']

//       spotifyApi.setAccessToken(token)
//       func(params)
//     }, err => console.err(err))
// }

function getGrantSetToken() {
  return spotifyApi.clientCredentialsGrant()
    .then(data => {
      const token = data.body['access_token']

      spotifyApi.setAccessToken(token)
      
    }, err => console.err(err))
}

const elvis = '43ZHCT0cAZBISjO8DG9PnE'

// TEST FUNCTIONS
// useWrapped(getArtistAlbums, elvis)
// useWrapped(getNewReleases)


function getArtistAlbums(str) {
  spotifyApi.getArtistAlbums(str)
    .then(({body}) => console.log(body))
}

function getNewReleases() {
  return getGrantSetToken().then(() => {
    // limit 10 items from US. "seed data" for home page
    const query = { limit : 10, offset: 0, country: 'US' }

    return spotifyApi.getNewReleases(query)
      .then(({ body }) => body)
  })
}

module.exports = {
  getNewReleases,
}