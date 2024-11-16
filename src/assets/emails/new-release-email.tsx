import React from "react";
import {
  Container,
  Section,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

export default function NewReleaseEmail({ firstName }: { firstName: string }) {
  const isProd = import.meta.env.PROD;
  if (!firstName) firstName = "you";

  return (
    <Html lang="en">
      <Tailwind>
        <Container className="flex flex-row text-white bg-black rounded-md p-10">
          <Preview>New Ryland. Out Now. ⚾️</Preview>
          <Heading>Hey {firstName},</Heading>
          <Text>
            In case you haven't heard. 'Stuck at Home' is out now. Wherever you
            stream. Save and listen right here. 👇🏻
          </Text>
          <Section className="flex justify-center">
            <Link href="https://distrokid.com/hyperfollow/ryland/stuck-at-home">
              <Img
                src={`${
                  isProd
                    ? "cid:stuck-at-home"
                    : "../../../../public/static/stuck-at-home.jpg"
                }`}
                alt="ryland-stuck-at-home"
                width="300"
                height="300"
              />
              <Text className="flex text-white justify-center text-2xl underline underline-offset-2">
                'Stuck at Home' - Single
              </Text>
            </Link>
          </Section>

          {/* TODO: put song links here. */}
          {/* <div className="flex flex-row gap-x-10 py-4 justify-center">
            <Link href="https://open.spotify.com/album/7LlEmiHjes4On4MVj4sTnv">
              <Img
                src={`${
                  isProd
                    ? "cid:spotify"
                    : "../../../../public/static/spotify.png"
                }`}
                alt="spotify-ryland"
                width="40"
                height="40"
                style={{ fillOpacity: "100", fill: "orange" }}
              />
            </Link>
            <Link href="https://music.apple.com/us/album/stuck-at-home-single/1773289537">
              <Img
                src={`${
                  isProd
                    ? "cid:apple-music"
                    : "../../../../public/static/apple-music.png"
                }`}
                alt="apple-music-ryland"
                width="40"
                height="40"
              />
            </Link>
            <Link href="https://instagram.com/weareryland">
              <Img
                src={`${
                  isProd
                    ? "cid:instagram"
                    : "../../../../public/static/instagram.png"
                }`}
                alt="instagram-ryland"
                width="40"
                height="40"
              />
            </Link>
            <Link href="mailto:weareryland@gmail.com">
              <Img
                src={`${
                  isProd ? "cid:gmail" : "../../../../public/static/gmail.png"
                }`}
                alt="gmail-ryland"
                width="40"
                height="40"
              />
            </Link>
          </div> */}
          <Text>With the utmost love,</Text>
          <Text className="font-bold italic">Ryland</Text>
          <Hr />
          <div className="flex flex-row gap-x-10 py-4" id="contact-links">
            <Link href="https://open.spotify.com/artist/3Ekf9P1XRqjP3MBwl6iFVT?si=FFIpHWiOSdiy5jAlhFPCWg">
              <Img
                src={`${
                  isProd
                    ? "cid:spotify"
                    : "../../../../public/static/spotify.png"
                }`}
                alt="spotify-ryland"
                width="40"
                height="40"
              />
            </Link>
            <Link href="https://music.apple.com/us/artist/ryland/1472845950">
              <Img
                src={`${
                  isProd
                    ? "cid:apple-music"
                    : "../../../../public/static/apple-music.png"
                }`}
                alt="apple-music-ryland"
                width="40"
                height="40"
              />
            </Link>
            <Link href="https://instagram.com/weareryland">
              <Img
                src={`${
                  isProd
                    ? "cid:instagram"
                    : "../../../../public/static/instagram.png"
                }`}
                alt="instagram-ryland"
                width="40"
                height="40"
              />
            </Link>
            <Link href="mailto:weareryland@gmail.com">
              <Img
                src={`${
                  isProd ? "cid:gmail" : "../../../../public/static/gmail.png"
                }`}
                alt="gmail-ryland"
                width="40"
                height="40"
              />
            </Link>
          </div>
          <Text>
            <i>
              Any questions? Reach out at{" "}
              <Link href="mailto:weareryland@gmail.com">
                <u>weareryland@gmail.com</u>
              </Link>
            </i>
          </Text>
        </Container>
      </Tailwind>
    </Html>
  );
}
