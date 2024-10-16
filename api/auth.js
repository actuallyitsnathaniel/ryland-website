// /api/auth.js
export default function handler(req, res) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = "https://werareryland.com/api/callback";

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=user-library-modify`;

  res.redirect(spotifyAuthUrl);
}
