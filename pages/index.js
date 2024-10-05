import { Bogo, Collection, Footer, Hero, Quote } from "@/components/home";
import { act_of_rejection } from "@/utils/fonts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Valuetainment Store</title>
      </Head>

      <div className={`${act_of_rejection.className}`}>
        <Hero />
        <Bogo />
        <Collection />
        <Quote />
        <Footer />
      </div>
    </>
  );
}
