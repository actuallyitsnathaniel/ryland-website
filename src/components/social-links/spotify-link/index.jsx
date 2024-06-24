const SpotifyLink = () => {
  return (
    <a
      className="transition-all duration-100 p-2 md:hover:translate-y-2"
      href="https://open.spotify.com/artist/3Ekf9P1XRqjP3MBwl6iFVT?si=FFIpHWiOSdiy5jAlhFPCWg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        loading="lazy"
        height="30px"
        width="30px"
        viewBox="0 0 305 305"
        className="transition-all duration-75 h-8 rounded-full fill-white hover:scale-110 hover:fill-[#1DB954]"
        alt="spotify-alt"
      >
        <path
          d="M152.441,0C68.385,0,0,68.39,0,152.453C0,236.568,68.385,305,152.441,305
		C236.562,305,305,236.568,305,152.453C305,68.39,236.562,0,152.441,0z M75.08,208.47c17.674-5.38,35.795-8.108,53.857-8.108
		c30.676,0,60.96,7.774,87.592,22.49c1.584,0.863,3.024,3.717,3.67,7.27c0.646,3.552,0.389,7.205-0.648,9.105
		c-1.309,2.438-3.965,4.014-6.768,4.014c-1.389,0-2.61-0.312-3.831-0.972c-24.448-13.438-52.116-20.542-80.015-20.542
		c-16.855,0-33.402,2.495-49.167,7.409c-0.768,0.233-1.558,0.352-2.348,0.352c-3.452,0.001-6.448-2.198-7.453-5.461
		C68.612,219.566,71.419,209.667,75.08,208.47z M68.43,152.303c19.699-5.355,40.057-8.071,60.508-8.071
		c36.765,0,73.273,8.896,105.601,25.739c2.266,1.15,3.936,3.1,4.701,5.49c0.776,2.421,0.542,5.024-0.669,7.347
		c-2.885,5.646-6.257,9.44-8.393,9.44c-1.514,0-2.975-0.363-4.43-1.09c-30.019-15.632-62.59-23.558-96.811-23.558
		c-19.035,0-37.71,2.503-55.489,7.435c-0.827,0.224-1.676,0.337-2.521,0.337c-4.277,0.001-8.046-2.888-9.162-7.013
		C60.336,162.994,63.601,153.616,68.43,152.303z M66.727,115.606c-0.903,0.223-1.826,0.335-2.744,0.335
		c-5.169,0.001-9.648-3.492-10.892-8.487c-1.559-6.323,2.397-13.668,8.126-15.111c22.281-5.473,45.065-8.248,67.72-8.248
		c43.856,0,85.857,9.86,124.851,29.312c2.708,1.336,4.727,3.642,5.687,6.493c0.96,2.854,0.748,5.926-0.592,8.64
		c-1.826,3.655-5.772,7.59-10.121,7.59c-1.677,0-3.399-0.393-4.924-1.109c-35.819-17.921-74.477-27.008-114.9-27.008
		C108.164,108.014,87.234,110.568,66.727,115.606z"
        />
      </svg>
    </a>
  );
};

export default SpotifyLink;
