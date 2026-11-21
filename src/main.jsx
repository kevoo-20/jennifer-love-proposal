
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import emailjs from "@emailjs/browser";
import "./styles.css";

// EMAILJS CONFIGURATION
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const YOUR_EMAIL = "kelvinopoku981@gmail.com";

function App() {
  const [opened, setOpened] = useState(false);
  const [answer, setAnswer] = useState("");
  const [showNote, setShowNote] = useState(false);
  const [sending, setSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState("");

  const start = () => {
    setOpened(true);

    setTimeout(() => {
      document.getElementById("letter")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 250);
  };

  const revealQuestion = () => {
    document.getElementById("question")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // HANDLE HER ANSWER AND SEND EMAIL
  const handleAnswer = async (choice) => {
    setAnswer(choice);
    setShowNote(false);
    setSending(true);
    setEmailStatus("");

    const message =
      choice === "yes"
        ? "❤️ Jennifer has responded to your love letter!\n\nHer answer: YES, I'D LOVE TO! 🥹❤️"
        : "🌹 Jennifer has responded to your love letter.\n\nHer answer: I'D LIKE A LITTLE MORE TIME.\n\nShe would like some time to think about it.";

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: YOUR_EMAIL,
          subject: "Jennifer has responded ❤️",
          message: message,
          answer: choice === "yes"
            ? "Yes, I'd love to ❤️"
            : "I'd like a little more time 🌹",
        },
        EMAILJS_PUBLIC_KEY
      );

      setEmailStatus("Your response notification has been sent! ❤️");
    } catch (error) {
      console.error("Email sending failed:", error);
      setEmailStatus(
        "Her response has been recorded on the website, but the email could not be sent."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* NAVIGATION */}
      <nav className="topbar">
        <a className="brand" href="#home">
          <span>J</span> &nbsp; A LITTLE SOMETHING
        </a>
        <span className="nav-note">MADE WITH INTENTION</span>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="eyebrow">
          <i /> A NOTE FROM MY HEART <i />
        </div>

        <p className="pretitle">
          For someone who makes ordinary moments feel special
        </p>

        <h1>
          Jennifer<span>,</span>
          <br />
          <em>this is for you.</em>
        </h1>

        <p className="hero-copy">
          Some feelings deserve more than a quick message.
          So I made you a little space, just to tell you
          what is in my heart.
        </p>

        <button className="gold-button" onClick={start}>
          Open your surprise <span>↗</span>
        </button>

        <div className="hero-bottom">
          <span>SCROLL A LITTLE</span>
          <span className="line" />
          <span>01 — 02</span>
        </div>

        <div className="hero-seal">
          WITH
          <br />
          <b>♡</b>
          <br />
          CARE
        </div>
      </section>

      {/* LOVE LETTER */}
      <section className="letter-section" id="letter">
        <div className="section-label">01 / A FEW WORDS</div>

        <div className="letter-card">
          <div className="letter-top">
            <span>PERSONAL & JUST FOR YOU</span>
            <span>♡</span>
          </div>

          {!opened ? (
            <button
              className="envelope"
              onClick={start}
              aria-label="Open the letter"
            >
              <span className="envelope-icon">✉</span>
              <span>Tap to open your letter</span>
              <small>WITH LOVE, JUST FOR YOU</small>
            </button>
          ) : (
            <div className="letter-content">
              <p className="script">Dear Jennifer,</p>

              <p>
                I've been thinking about how to put this into words, and I guess the simplest way is to be honest with you.
              </p>

              <p>
                There's something special about you that makes me want to know you more. I love your smile, your beauty, your eyes, and the little things that make you who you are. Honestly, I find you incredibly attractive, and I hope you never doubt how beautiful I think you are.
              </p>

              <p>
                Jennifer, I genuinely enjoy the moments we share, and I'd love to have more of them. More conversations, more laughter and more opportunities to discover the person behind that beautiful smile.
              </p>

              <p>
                I understand that getting to know each other takes time, and I'm happy to let things happen naturally. I don't want to rush you or put any pressure on what we're building. I simply want to enjoy the journey, understand you better and hopefully create something beautiful with you.
              </p>

              <p className="script signoff">
                With genuine affection,
              </p>

              <p className="signature">
                Someone who cares about you.
              </p>
            </div>
          )}

          <div className="letter-bottom">
            <span>TAKE YOUR TIME</span>
            <span>✦</span>
          </div>
        </div>
      </section>

      {/* WHAT I HOPE FOR */}

<section className="moments">
  <div className="section-label">
    02 / WHAT I LIKE ABOUT YOU
  </div>

  <h2>
    You're something special.
    <br />
    <em>And I hope you know that.</em>
  </h2>

  <div className="values">
    <article>
      <span>01</span>
      <h3>Your Smile</h3>
      <p>
        Honestly, it's one of my favourite things about you.
      </p>
    </article>

    <article>
      <span>02</span>
      <h3>Your Beauty</h3>
      <p>
        I could compliment you all day and still not say enough.
      </p>
    </article>

    <article>
      <span>03</span>
      <h3>Your Company</h3>
      <p>
        I simply enjoy having you around and getting to know you.
      </p>
    </article>
  </div>
</section>


      {/* THE PROPOSAL */}
      

      {/* FOOTER */}
      <footer>
        <div className="footer-mark">
          J<span>♡</span>
        </div>

        <p>Made with care, especially for Jennifer.</p>

        <small>
           JUST HONEST FEELINGS.
        </small>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
