import { useState, useEffect } from 'react';
import './Hero.css';

const TITLE = 'PM Consulting Inc. Digital Marketing Agency';
const PHRASES = [
  'AI Voice',
  'AI Conversational',
  'AI Reviews',
  'Database Reactivations',
  'Smart Websites',
  'SEO campaigns',
  'CRM integrations',
  'AI Workshops',
  'AI Training',
  'lead generation',
];

const TYPING_MS = 80;
const DELETING_MS = 50;
const PAUSE_AFTER_TITLE_MS = 1200;
const PAUSE_AFTER_PHRASE_MS = 1800;
const PAUSE_BEFORE_NEXT_PHRASE_MS = 400;

export default function Hero() {
  const [titleVisibleLength, setTitleVisibleLength] = useState(0);
  const [titleComplete, setTitleComplete] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phraseText, setPhraseText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Phase 1: type out the title on load
  useEffect(() => {
    if (titleVisibleLength >= TITLE.length) {
      const t = setTimeout(() => setTitleComplete(true), PAUSE_AFTER_TITLE_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => setTitleVisibleLength((n) => n + 1),
      TYPING_MS
    );
    return () => clearTimeout(t);
  }, [titleVisibleLength, titleComplete]);

  // Phase 2: typewriter through phrases
  const phrase = PHRASES[phraseIndex];
  useEffect(() => {
    if (!titleComplete) return;

    if (!isDeleting) {
      if (phraseText.length < phrase.length) {
        const t = setTimeout(
          () => setPhraseText(phrase.slice(0, phraseText.length + 1)),
          TYPING_MS
        );
        return () => clearTimeout(t);
      }
      // Pause at end of phrase, then start deleting
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_PHRASE_MS);
      return () => clearTimeout(t);
    }

    if (phraseText.length > 0) {
      const t = setTimeout(
        () => setPhraseText(phrase.slice(0, phraseText.length - 1)),
        DELETING_MS
      );
      return () => clearTimeout(t);
    }

    // Done deleting: brief pause then next phrase
    const t = setTimeout(() => {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    }, PAUSE_BEFORE_NEXT_PHRASE_MS);
    return () => clearTimeout(t);
  }, [titleComplete, phrase, phraseText, isDeleting]);

  return (
    <section className="hero">
      <div className="hero-terminal">
        <div className="hero-line">
          <span className="hero-prompt">$ </span>
          <span className="hero-title">
            {TITLE.slice(0, titleVisibleLength)}
            {titleVisibleLength < TITLE.length && <span className="cursor" />}
          </span>
        </div>
        {titleComplete && (
          <div className="hero-line hero-phrase-line">
            <span className="hero-prompt">&gt; </span>
            <span className="hero-phrase">
              {phraseText}
              <span className="cursor" />
            </span>
          </div>
        )}
      </div>
      <div className="hero-contact">
        <div className="hero-contact-line" />
        <p className="hero-contact-text">
          <span className="hero-contact-brand">PM Consulting Inc.</span>
          <span className="hero-contact-sep">|</span>
          <span>Paul Meyers CEO</span>
          <span className="hero-contact-sep">|</span>
          <a href="tel:+17059966548" className="hero-contact-link">705-996-6548</a>
          <span className="hero-contact-sep">|</span>
          <a href="mailto:paul@pmconsulting.ca" className="hero-contact-link">paul@pmconsulting.ca</a>
        </p>
        <div className="hero-contact-line" />
      </div>
    </section>
  );
}
