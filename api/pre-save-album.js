// /api/save-album.js
import cookie from "cookie";

export default function spotifyAuthHandler(req, res) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = "https://werareryland.com/api/callback";

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=user-library-modify`;

  res.redirect(spotifyAuthUrl);
}

export default async function spotifyCallbackHandler(req, res) {
  const code = req.query.code;

  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "https://werareryland.com/api/callback",
    }),
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.access_token) {
    // Set the access token in a cookie
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("accessToken", tokenData.access_token, {
        httpOnly: true, // Makes the cookie inaccessible to JavaScript on the frontend (more secure)
        secure: process.env.NODE_ENV !== "development", // Ensures the cookie is only sent over HTTPS in production
        maxAge: 3600, // Set expiration for 1 hour (Spotify access token lifespan)
        path: "/",
      })
    );

    // Redirect to success page after storing the token
    res.redirect("/pre-save-success");
  } else {
    res.redirect("/pre-save-fail");
  }
}


export default async function spotifySaveAlbumHandler(req, res) {
  // Parse cookies from the request
  const { accessToken } = cookie.parse(req.headers.cookie || "");

  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized: No access token" });
  }

  const albumId = "7LlEmiHjes4On4MVj4sTnv"; // Album ID

  // Make API request to save the album
  const response = await fetch(`https://api.spotify.com/v1/me/albums`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ids: [albumId],
    }),
  });

  if (response.ok) {
    res.status(200).json({ message: "Album saved!" });
  } else {
    res.status(400).json({ message: "Failed to save album" });
  }
}

export default async function spotifyRefreshTokenHandler(req, res) {
  const { refreshToken } = cookie.parse(req.headers.cookie || "");

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token found" });
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const data = await response.json();

  if (data.access_token) {
    // Set the new access token in a cookie
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("accessToken", data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 3600,
        path: "/",
      })
    );

    res.status(200).json({ message: "Access token refreshed!" });
  } else {
    res.status(400).json({ message: "Failed to refresh access token" });
  }
}