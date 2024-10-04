import { Bogo, Collection, Hero } from "@/components/home";
import { act_of_rejection } from "@/utils/fonts";

export default function Home() {
  return (
    <div className={`${act_of_rejection.className}`}>
      <Hero />
      <Bogo />
      <Collection />
    </div>
  );
}
