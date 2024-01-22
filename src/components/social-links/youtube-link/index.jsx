const YoutubeLink = () => {
  return (
    <a
      className="transition-all duration-100 p-3 md:hover:-translate-y-2"
      href="https://www.youtube.com/@weareryland"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        height="75px"
        width="75px"
        className="transition-all duration-75 h-16 w-auto fill-white hover:scale-110 hover:fill-[#FF0000]"
        alt="youtube-alt"
        viewBox="0 0 49 49"
      >
        <path
          d="M39.256,6.5H9.744C4.371,6.5,0,10.885,0,16.274v16.451c0,5.39,4.371,9.774,9.744,9.774h29.512
			c5.373,0,9.744-4.385,9.744-9.774V16.274C49,10.885,44.629,6.5,39.256,6.5z M47,32.726c0,4.287-3.474,7.774-7.744,7.774H9.744
			C5.474,40.5,2,37.012,2,32.726V16.274C2,11.988,5.474,8.5,9.744,8.5h29.512c4.27,0,7.744,3.488,7.744,7.774V32.726z"
        />
        <path
          d="M33.36,24.138l-13.855-8.115c-0.308-0.18-0.691-0.183-1.002-0.005S18,16.527,18,16.886v16.229
			c0,0.358,0.192,0.69,0.502,0.868c0.154,0.088,0.326,0.132,0.498,0.132c0.175,0,0.349-0.046,0.505-0.137l13.855-8.113
			c0.306-0.179,0.495-0.508,0.495-0.863S33.667,24.317,33.36,24.138z M20,31.37V18.63l10.876,6.371L20,31.37z"
        />
      </svg>
    </a>
  );
};

export default YoutubeLink;
