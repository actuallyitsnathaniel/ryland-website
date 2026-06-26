// showcase.config.mjs — the ONLY file you edit to retarget a different site.
export default {
  base: "http://localhost:3000", // MATCH the dev server port (vite serves on 3000 here)
  showVideo: true,               // clear body bg so the -z-[1] background <video> shows
  waitBg: "#video",              // bg video src set post-mount: wait for a decoded frame
  beats: [
    { scrollPage: 5000 },                                            // homepage + bg video
    { clickNav: "Music", waitText: "Music" },                        // lazy route
    { openClose: "[role=\"button\"][aria-expanded]", back: false },  // open a disc -> streaming links
    { clickNav: "About us", waitText: "About" },
    { clickNav: "Shows", waitText: "Shows" },
    { clickNav: "I'm Gonna Be Fine", waitText: "Fine" },
    { clickNav: "Home", waitText: "" },
  ],
};
