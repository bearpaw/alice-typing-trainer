export const SUPPORTED_LOCALES = ['en', 'zh-CN', 'zh-TW', 'ja'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  ja: '日本語',
};

export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  'zh-CN': 'zh-CN',
  'zh-TW': 'zh-TW',
  ja: 'ja',
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export type Bullet = {
  title?: string;
  body: string;
};

export type SeoEntry = { title: string; description: string };

export type Messages = {
  nav: {
    brand: string;
    home: string;
    posture: string;
    lessons: string;
    test: string;
  };
  footer: string;
  theme: {
    auto: { aria: string; title: string };
    light: { aria: string; title: string };
    dark: { aria: string; title: string };
  };
  language: { label: string };
  seo: {
    home: SeoEntry;
    posture: SeoEntry;
    lessons: SeoEntry;
    test: SeoEntry;
    lesson: {
      titleSuffix: string;
      descSuffix: string;
    };
  };
  home: {
    hero: { title: string; desc: string };
    cards: {
      posture: { title: string; desc: string };
      lessons: { title: string; desc: string };
      test: { title: string; desc: string };
    };
    keyboardHeading: string;
    keyboardDesc: string;
  };
  posture: {
    title: string;
    intro: string;
    sections: {
      neutral: {
        heading: string;
        bullets: Bullet[];
        palmCallout: {
          title: string;
          items: string[];
        };
        selfCheck: {
          title: string;
          body: string;
        };
      };
      geometry: {
        heading: string;
        bullets: Bullet[];
      };
      breaks: {
        heading: string;
        bullets: Bullet[];
      };
      alice: {
        heading: string;
        bullets: Bullet[];
      };
      doctor: {
        heading: string;
        intro: string;
        symptoms: string[];
        outro: string;
      };
    };
    furtherReadingHeading: string;
    furtherReading: { label: string; body: string }[];
  };
  lessons: {
    indexTitle: string;
    indexIntro: string;
    cardLabel: string;
    backAll: string;
    notFound: string;
    complete: string;
    retry: string;
    backToLessons: string;
    stats: { wpm: string; accuracy: string; time: string };
    items: Record<string, { title: string; desc: string }>;
  };
  test: {
    title: string;
    intro: string;
    duration: string;
    newQuote: string;
    retrySame: string;
    timeLeft: string;
    wpm: string;
    accuracy: string;
    result: string;
    charsCorrect: string;
    newTest: string;
    historyHeading: string;
    clearHistory: string;
    clearConfirm: string;
    tableCols: { when: string; duration: string; wpm: string; accuracy: string };
  };
  diagrams: {
    extension: string;
    neutral: string;
    flexion: string;
    forearm: string;
    hand: string;
    rowStagger: string;
    aliceNeutral: string;
    floatGood: string;
    plantBad: string;
    pressure: string;
    gap: string;
    elbow: string;
    eyeLevel: string;
    feetFlat: string;
  };
  keyboard: {
    splitCalloutPrefix: string;
    splitCalloutBelongsTo: string;
    hand: { left: string; right: string };
    finger: { pinky: string; ring: string; middle: string; index: string; thumb: string };
  };
};
