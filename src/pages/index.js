import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import MingZhuIcon from "../assets/mingzhu.svg";
import MZIcon from "../assets/mz.svg";
import EnvelopeIcon from "../assets/envelope.svg";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "f_logo_RGB-Grey_58.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(relativePath: { eq: "2021 Twitter logo - white.png" }) {
        childImageSharp {
          fixed(width: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedIn: file(relativePath: { eq: "LI-In-Bug.png" }) {
        childImageSharp {
          fixed(width: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ming: file(relativePath: { eq: "ming.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-6 bg-black text-white">
        <MingZhuIcon width={100} />

        <div className="flex items-center">
          <a href="https://www.facebook.com/sharer.php?u=https://mingzhu.me/welcome/">
            <Img
              style={{ display: "block" }}
              fixed={data.facebook.childImageSharp.fixed}
              alt="Facebook"
            />
          </a>

          <a className="ml-2" href="https://twitter.com/share?text=Welcome-to-the-blog&url=https://mingzhu.me/welcome/">
            <Img
              style={{ display: "block" }}
              fixed={data.twitter.childImageSharp.fixed}
              alt="Twitter"
            />
          </a>

          <a className="ml-2" href="https://twitter.com/share?text=Welcome-to-the-blog&url=https://mingzhu.me/welcome/">
            <Img
              style={{ display: "block" }}
              fixed={data.linkedIn.childImageSharp.fixed}
              alt="LinkedIn"
            />
          </a>

          <a className="ml-2" href="mailto:gmin.zhu@gmail.com">
            <EnvelopeIcon width="32" />
          </a>
        </div>
      </nav>

      <header className="px-6 mt-6 max-w-screen-md mx-auto">
        <Img fluid={data.ming.childImageSharp.fluid} alt="Ming" />
      </header>

      <main className="p-6 max-w-screen-md mx-auto">
        <h1 className="text-xl font-bold">Welcome to the blog</h1>
        <p className="mt-4">
          Geez Louise, another blog? What’s this one about then? Well, watch the
          video below, and observe.
        </p>
        <iframe
          className="mt-4"
          title="Welcome to the blog"
          src="https://www.youtube.com/embed/2coXNWIsMjE"
        ></iframe>
        <p className="mt-4">
          If you’re like me, you’re probably none the wiser after watching that
          video. Good! I think that captures the spirit of my blog quite well.
          It’s not so much about any one thing, as it is about having some fun.
          I’d like to think of this blog as a gezellige hang-out place you can
          visit, like how you’d visit an old friend after the corona-pandemic.
          Chilling, sharing stories, trading thoughts, coughing on each other,
          things like that.
        </p>
        <p className="mt-4">
          When I’m not posting nonsensical videos, you might catch me making
          some small documentaries or interviewing people I find interesting.
          For the most part though, just let this blog wash over you like a warm
          summer breeze. And sometimes a cold shower. It’s all part of the
          experience.
        </p>
        <p className="mt-4">
          Expect the blog to keep changing as I fill ‘er up with content. In
          fact, be suspicious if nothing changed at all when you check back in
          two weeks. By then, you should probably call the cops to check on my
          rotting corpse.
        </p>
        <p className="mt-4">
          If you have questions, suggestions, or just want to say hi, you can
          shoot a message using the contact form, or connect on social media.
          I’ll be with you before you know it. And if you’d like to stay updated
          on this blog, you can keep an eye on my Instagram, or even better,
          subscribe to my newsletter. It’s free. It’s vegan. It’s good for you.
        </p>
        <p className="mt-4">Speak to you soon.</p>
      </main>

      <footer className="flex justify-between items-center py-4 px-6 bg-black text-white">
        <MZIcon height={40} />

        <div>
          <a href="https://eepurl.com/htRTa1">
            Subscribe
          </a>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
