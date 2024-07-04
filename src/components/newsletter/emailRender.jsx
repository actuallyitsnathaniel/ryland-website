import React from "react";
import { Container, Heading, Hr, Preview, Text } from "@react-email/components";
import { SocialLinks } from "../social-links";

export default function EmailRender({ firstName }) {
  return (
    <Container className="flex flex-col text-white bg-black rounded-md p-10">
      <Preview>Thanks so much for signing up! Now you're IN.</Preview>
      <Heading>Hey {firstName},</Heading>
      <Text>
        Thanks so much for signing up! Now you're IN. You'll be the first to
        hear about anything new with us. No need to think about this further,
        we'll give a shout we're ready. 🫡
      </Text>
      <Text>With the utmost love,</Text>
      <Text className="font-bold italic">Ryland</Text>
      <Hr className="pt-5" />
      <SocialLinks />
    </Container>
  );
}
