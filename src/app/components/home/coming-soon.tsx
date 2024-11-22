import { TextLogo } from "../reusable/text-logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Typography } from "../ui/typography";

export function ComingSoon() {
  const date = new Date();
  const createdYear = 2024;
  const currentYear = date.getFullYear();

  return (
    <section className="h-screen flex__center">
      <div className="text-center spacing__y__md">
        <TextLogo />
        <Typography.H3>We&apos;re launching soon!</Typography.H3>
        <Typography.P className="max-w-md mx-auto font-playfair-display">
          Get ready for an immersive text-based adventure experience. Stay tuned
          as we build something epic.
        </Typography.P>
        <div className="flex flex-col gap__md mt-6 sm:flex-row">
          <Input type="email" placeholder="Enter your email for updates" />
          <Button className="flex-shrink-0">Notify Me</Button>
        </div>
        <div className="mt-10 text-sm">
          <Typography.P>
            ©{" "}
            {createdYear === currentYear
              ? createdYear
              : `${createdYear}-${currentYear}`}{" "}
            Adventext. All rights reserved.
          </Typography.P>
        </div>
      </div>
    </section>
  );
}
