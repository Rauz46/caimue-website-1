"use client";

import { useState, type FormEvent } from "react";

/** The footer's newsletter box (website copy v2, microcopy). Not wired to a list yet. */
export function Newsletter() {
  const [done, setDone] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };
  if (done) {
    return (
      <p className="ft__news-done" role="status">
        You are in. The next one comes at the start of the month.
      </p>
    );
  }
  return (
    <form className="ft__news" onSubmit={onSubmit}>
      <label htmlFor="ft-news-email" className="ft__text">
        One email a month. What we learned running seven brands. No spam, no selling.
      </label>
      <span className="ft__news-row">
        <input id="ft-news-email" type="email" name="email" placeholder="Your email" autoComplete="email" required />
        <button type="submit" aria-label="Send">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </span>
    </form>
  );
}
