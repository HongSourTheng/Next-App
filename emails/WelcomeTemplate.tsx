import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ myName }: { myName: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body style={body}>
          <Container>
            <Text className="font-bold text-3xl">Hello {myName}</Text>
            <Link href="https://codewithmosh.com" className="text-2xl">
              www.codewithmosh.com
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
const body: CSSProperties = {
  background: "#fff",
};
export default WelcomeTemplate;
