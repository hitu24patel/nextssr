import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "This is Contact page title",
  description: "This is Contact page description",
};

export default function Contact() {
  return (
    <>
      <h1>Where does it come from?</h1>
      <p>I am from Idar</p>
      <p>I am from Idar, Sabarkantha, Himmatnagar</p>
    </>
  );
}
