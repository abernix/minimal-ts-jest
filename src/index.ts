import { stringIsExactlyBoop } from "./lib";
export default function (): string {
  if (stringIsExactlyBoop("boop")) {
    return "Yes, it booped";
  }

  return "No boops";
}

