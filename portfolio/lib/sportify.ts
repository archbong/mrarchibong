// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQBN2OP6EcEPLgDnFeVSxM5X5zl_5dJKbikLoinuxPgkQYKQ2PQx4WkfpKSj-bVKZsMHsStFcxcPkNYc91yLxTBE69q4_z1PVDUQ4IvpIAs66HLVQxJc8w1mPqzbGl6f46meKeklIuJlvxK-zE8pz-btRFQVwEhnPrLovJTixYJR-DDVXakkOPJty_IvfOmzR8-hsNqaq_ArmDKYDEGOC68lLfhb_dnes3bD6bwycEbf1kck8_IjfDmDzuLLEYHpH9CJePp6MG7_AyTFXlOuarvy';

async function fetchWebApi(endpoint: string, method: string) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    // body:JSON.stringify(body)
  });
  const data = await res.json()
  return data;
}

export default async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

// Recommend 5 songs based on your top 5 tracks
const topTracksIds = [
    '6GyFP1nfCDB8lbD2bG0Hq9','1s9i7W8zx7Nxx78MUIsvjV','6Qn5zhYkTa37e91HC1D7lb','2a7atkpTHUsQ9L3sOE86uZ','0AMEd8AKwssJybGGg7JhyK'
  ];
  
  async function getRecommendations(){
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-recommendations
    return (await fetchWebApi(
      `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET'
    )).tracks;
  }

// const recommendedTracks = await getRecommendations();
// console.log(
//   recommendedTracks.map(
//     ({name, artists}) =>
//       `${name} by ${artists.map(artist => artist.name).join(', ')}`
//   )
// );
  