import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "This is about page title",
  description: "This is about page description",
};

export default function About() {
  return (
    <>
      <h1>Where does it come from?</h1>
      <p>I am from Junagardh</p>
      <p>I am from Junagardh, Girnar, Porbandar</p>
    </>
  );
}
