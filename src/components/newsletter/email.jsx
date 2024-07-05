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
import { baseUrl } from "../../util/util";

export default function EmailTemplate({ firstName }) {
  return render(
    <Html lang="en">
      <Tailwind>
        <Container className="flex flex-row text-white bg-black rounded-md p-10">
          <Preview>Thanks so much for signing up! Now you're IN.</Preview>
          <Heading>Hey {firstName},</Heading>
          <Text>
            Thanks so much for signing up! Now you're IN. You'll be the first to
            hear about anything new with us. No need to think about this
            further, we'll give a shout we're ready. 🫡
          </Text>
          <Text>With the utmost love,</Text>
          <Text className="font-bold italic">Ryland</Text>
          <Hr />
          <div className="flex flex-row gap-x-10 py-4">
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
