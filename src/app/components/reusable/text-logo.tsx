import { H1 } from "../ui/typography";

export function TextLogo() {
  return (
    <H1
      className="text-transparent bg-clip-text"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--primary), var(--secondary))",
      }}
    >
      Adventext
    </H1>
  );
}
