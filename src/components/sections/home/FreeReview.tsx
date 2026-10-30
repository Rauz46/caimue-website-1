"use client";

import { useState, type FormEvent } from "react";
import "./home-v3.css";

const ENDPOINT = "https://formspree.io/f/mreapgye";

type Status = "idle" | "sending" | "sent" | "error";

/** The free review: their website and socials go to the same inbox as the contact form. */
export function FreeReview() {
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), _subject: "Free video review request" }),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="ca-pad ca-g-deep ca-g-dark ca-screen ca-rev" id="review" aria-labelledby="ca-review">
      <div className="ca-wrap ca-rev__in">
        <div className="ca-rev__say">
          <h2 className="ca-h2 ca-h2--inv" id="ca-review">
            Send us your website
            <br />
            <span className="ca-ital">We send back a video</span>
          </h2>
          <p className="ca-p ca-p--inv">
            Share your website and your LinkedIn. Within 48 hours, you get a two-minute video on what is working, what is not,
            and what we would change first. No call, no deck, no pitch.
          </p>
        </div>
        <form className="ca-rev__form" onSubmit={submit}>
          <label className="ca-rev__field">
            <span>Your website</span>
            <input name="website" type="url" required autoComplete="url" />
          </label>
          <label className="ca-rev__field">
            <span>Your LinkedIn or Instagram</span>
            <input name="social" type="url" required />
          </label>
          <label className="ca-rev__field">
            <span>Your email</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label className="ca-rev__consent">
            <input name="consent" type="checkbox" value="yes" required />
            <span>I agree to Caimue contacting me about this review.</span>
          </label>
          <button type="submit" className="ca-btn ca-btn--pink ca-rev__send" disabled={status === "sending"}>
            Send it over
          </button>
          <p className="ca-rev__note" role="status">
            {status === "sent" && "Thank you. Your video is on its way within 48 hours."}
            {status === "error" && "That did not go through. Please try again."}
            {(status === "idle" || status === "sending") && "You hear from the person who would run your account."}
          </p>
        </form>
      </div>
    </section>
  );
}
