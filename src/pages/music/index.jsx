import Discography from "../../components/discography";

// Albums
import portrait from "../../assets/images/discography/LPs/Portrait-LP_600x600bb.jpeg";

// EPs
import lashingOut from "../../assets/images/discography/Singles_EPs/Lashing-Out-EP_600x600bb.jpeg";
import itinerary from "../../assets/images/discography/Singles_EPs/Itinerary-EP_600x600bb.jpeg";
import youshouldknow from "../../assets/images/discography/Singles_EPs/You-Should-Know-EP.jpeg";

// Singles
import iblfawn from "../../assets/images/discography/Singles_EPs/IveBeenLooking-Single_600x600bb.jpeg";
import karma from "../../assets/images/discography/Singles_EPs/Karma-Single_600x600bb.jpeg";
import stairwell from "../../assets/images/discography/Singles_EPs/Stairwell-Single_600x600bb.jpeg";
import talking from "../../assets/images/discography/Singles_EPs/Talking-Single_600x600bb.jpeg";

const Music = () => {
  return (
    <div className="flex flex-wrap justify-center text-white">
      <Discography>
        <Discography.Disc
          artwork={youshouldknow}
          title="You Should Know - EP"
          appleMusicLink={
            "https://music.apple.com/us/album/you-should-know-ep/1650078036"
          }
          spotifyLink={
            "https://open.spotify.com/album/3dcyqNJBbex17eICVzfi4S?si=5FXaa4i5Tz6JzCWZX1u6gg"
          }
          tidalLink={"https://tidal.com/browse/album/254309190"}
          youtubeLink={
            "https://www.youtube.com/playlist?list=OLAK5uy_k68rFLA0eSnvoyseygxYBBdH2nrWp9lu0"
          }
        />

        <Discography.Disc
          artwork={talking}
          title="Talking - Single"
          appleMusicLink={
            "https://music.apple.com/us/album/talking-single/1550695263"
          }
          spotifyLink={"https://open.spotify.com/album/1tFU6vCOBndpsHS4G0Bk6b"}
          tidalLink={"https://tidal.com/browse/album/171031166"}
          youtubeLink={
            "https://www.youtube.com/watch?v=3nYxfzVerys&ab_channel=Ryland-Topic"
          }
        />
        <Discography.Disc
          artwork={karma}
          title="Karma - Single"
          appleMusicLink={
            "https://music.apple.com/us/album/karma-single/1540025669"
          }
          spotifyLink={"https://open.spotify.com/album/7BFWk2MnsBydI9FVNtokgJ"}
          tidalLink={"https://tidal.com/browse/album/161942070"}
          youtubeLink={
            "https://www.youtube.com/watch?v=vddP2nWvJ30&ab_channel=Ryland-Topic"
          }
        />
        <Discography.Disc
          artwork={iblfawn}
          title={`I've Been Looking For A While Now - Single`}
          appleMusicLink={
            "https://music.apple.com/us/album/ive-been-looking-for-a-while-now-single/1537916310"
          }
          spotifyLink={
            "https://open.spotify.com/album/1xEbTebOcFQJpl5sEVJ6p8?si=JZlTs1BNT0iz0oxpI0CDrQ"
          }
          tidalLink={"https://tidal.com/browse/album/160222795"}
          youtubeLink={"https://www.youtube.com/watch?v=0En7Fc5NMmo"}
        />
        <Discography.Disc
          artwork={lashingOut}
          title="Lashing Out - EP"
          appleMusicLink={
            "https://music.apple.com/us/album/lashing-out-ep/1513245392"
          }
          spotifyLink={"https://open.spotify.com/album/3cV2NG0rtCRqjeQuB0jrPi"}
          tidalLink={"https://tidal.com/browse/album/141435524"}
          youtubeLink={
            "https://www.youtube.com/watch?v=iFaFUDRdQM8&list=OLAK5uy_lc2utY1UM_LNoogjtn98ubuCFW_xc2Cjo"
          }
        />
        <Discography.Disc
          artwork={stairwell}
          title="Stairwell - Single"
          appleMusicLink={
            "https://music.apple.com/us/album/stairwell-single/1482802988"
          }
          spotifyLink={"https://open.spotify.com/album/6dbexdk9Vzpr0kPYqp36QR"}
          tidalLink={"https://tidal.com/browse/album/119716422"}
          youtubeLink={"https://youtu.be/DB4k8_zpkJw"}
        />
        <Discography.Disc
          artwork={itinerary}
          title="Itinerary - EP"
          appleMusicLink={
            "https://music.apple.com/us/album/itinerary-ep/1473164315"
          }
          spotifyLink={
            "https://open.spotify.com/album/2I19mObRLLNKzm2HCHJf42?si=VnLqR5ZQQDqwfyyW__gDTA"
          }
          tidalLink={"https://tidal.com/browse/album/113394980"}
          youtubeLink={
            "https://www.youtube.com/watch?v=7YUkplOVhtM&list=OLAK5uy_nrGLK171l7gdvuUYFm5wBp3KdVRm1M33w"
          }
        />
        <Discography.Disc
          artwork={portrait}
          title={"Portrait"}
          album
          appleMusicLink={
            "https://music.apple.com/us/album/portrait/1556566677"
          }
          spotifyLink={"https://open.spotify.com/album/1YRrSespqvZu2iYa7WSM4X"}
          tidalLink={"https://tidal.com/browse/album/175851104"}
          youtubeLink={
            "https://www.youtube.com/watch?v=j9_KZDcwg6I&list=OLAK5uy_lP4KNWsjACvqILi5xZWnPrN4s7nxZZrH8&ab_channel=Ryland-Topic"
          }
        />
      </Discography>
    </div>
  );
};

export default Music;
