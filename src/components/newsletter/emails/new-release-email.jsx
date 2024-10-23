import React from "react";
import {
  Container,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import { render } from "@react-email/render";

export default function NewReleaseEmail({ firstName }) {
  firstName = "Nate";
  return render(
    <Html lang="en">
      <Tailwind>
        <Container className="flex flex-row text-white bg-black rounded-md p-10">
          <Preview>New Ryland. Out Now. ⚾️</Preview>
          <Heading>Hey {firstName},</Heading>
          <Text>
            No bullshit. New Ryland. Out now. Wherever you stream. Save and
            listen here.
          </Text>
          <Img
            src={`cid:stuck-at-home`}
            alt="ryland-stuck-at-home"
            width="40"
            height="40"
          />
          {/* TODO: put song links here. */}
          <div className="flex flex-row gap-x-10 py-4">
            {/* 
            // STUCK AT HOME
            [x] spotify
            [x] apple music
            [ ] tidal?
            [ ] youtube music?
            */}
            <Link href="https://open.spotify.com/album/7LlEmiHjes4On4MVj4sTnv">
              <Img
                src={`cid:spotify`}
                alt="spotify-ryland"
                width="40"
                height="40"
              />
            </Link>
            <Link href="https://music.apple.com/us/album/stuck-at-home-single/1773289537">
              <Img
                src={`cid:apple-music`}
                alt="apple-music-ryland"
                width="40"
                height="40"
              />
            </Link>
            <Link href="https://instagram.com/weareryland">
              <Img
                src={`cid:instagram`}
                alt="instagram-ryland"
                width="40"
                height="40"
              />
            </Link>
            <Link href="mailto:weareryland@gmail.com">
              <Img
                src={`cid:gmail`}
                alt="gmail-ryland"
                width="40"
                height="40"
              />
            </Link>
          </div>
          <Text>With the utmost love,</Text>
          <Text className="font-bold italic">Ryland</Text>
          <Hr />
          <div className="flex flex-row gap-x-10 py-4" id="contact-links">
            <Link href="https://open.spotify.com/artist/3Ekf9P1XRqjP3MBwl6iFVT?si=FFIpHWiOSdiy5jAlhFPCWg">
              <Img
                src={`cid:spotify`}
                alt="spotify-ryland"
                width="40"
                height="40"
              />
            </Link>
            <Link href="https://music.apple.com/us/artist/ryland/1472845950">
              <Img
                src={`cid:apple-music`}
                alt="apple-music-ryland"
                width="40"
                height="40"
              />
            </Link>
            <Link href="https://instagram.com/weareryland">
              <Img
                src={`cid:instagram`}
                alt="instagram-ryland"
                width="40"
                height="40"
              />
            </Link>
            <Link href="mailto:weareryland@gmail.com">
              <Img
                src={`cid:gmail`}
                alt="gmail-ryland"
                width="40"
                height="40"
              />
            </Link>
          </div>
        </Container>
      </Tailwind>
    </Html>,
    { pretty: true }
  );
}
