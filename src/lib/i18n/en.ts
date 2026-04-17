import type { Messages } from './types';

const en: Messages = {
  nav: {
    brand: '⌨︎ Alice Typing Trainer',
    home: 'Home',
    posture: 'Posture',
    lessons: 'Lessons',
    test: 'Speed Test',
  },
  footer: 'For Alice-layout keyboards — local-only, no data leaves your browser.',
  theme: {
    auto: { aria: 'Switch to light mode', title: 'Theme: auto (follows time of day)' },
    light: { aria: 'Switch to dark mode', title: 'Theme: light' },
    dark: { aria: 'Switch to auto mode', title: 'Theme: dark' },
  },
  language: { label: 'Language' },
  seo: {
    home: {
      title: 'Alice Typing Trainer — Learn Alice Layout Keyboards',
      description:
        'Free browser-based typing trainer for Alice-layout keyboards. Guided lessons, ergonomic posture guide, and WPM test. Practice split-sensitive keys (B, T, G, Y, H, N) to build Alice muscle memory.',
    },
    posture: {
      title: 'Alice Keyboard Posture & Ergonomics — Prevent Wrist Pain',
      description:
        'Wrist-neutral typing posture, desk and chair setup, micro-break routines, and carpal tunnel prevention tips for Alice-layout keyboard users.',
    },
    lessons: {
      title: 'Alice Layout Typing Lessons — Practice Split-Sensitive Keys',
      description:
        'Eight progressive typing drills for Alice-layout keyboards, from home row to split-sensitive B, T, G, Y, H, N practice and full sentences.',
    },
    test: {
      title: 'Alice Layout Typing Speed Test — WPM & Accuracy',
      description:
        'Timed 30, 60, or 120 second WPM and accuracy typing test for Alice-layout keyboards. Track your progress locally in your browser — no signup, no data leaves your device.',
    },
    lesson: {
      titleSuffix: 'Alice Typing Trainer',
      descSuffix: 'Practice this Alice-layout drill in your browser.',
    },
  },
  home: {
    hero: {
      title: 'Learn to type on an Alice layout keyboard',
      desc: 'Alice-layout keyboards split the two halves and angle them inward so your wrists stay neutral. The tricky part is retraining the keys that now live on a different hand than on a row-staggered keyboard: **B, T, G** are always *left*, and **Y, H, N** are always *right*. This app helps you build that muscle memory.',
    },
    cards: {
      posture: {
        title: '🧘 Posture & ergonomics',
        desc: 'Wrist-neutral posture, desk setup, micro-breaks, and when to worry about carpal tunnel.',
      },
      lessons: {
        title: '📚 Guided lessons',
        desc: 'Eight progressive drills, starting with home row and working up to split-sensitive keys and full sentences.',
      },
      test: {
        title: '⏱ Speed test',
        desc: 'Timed WPM + accuracy test. Progress saved locally so you can watch yourself improve.',
      },
    },
    keyboardHeading: 'Your keyboard',
    keyboardDesc:
      'Finger-zone coloring. Keys with a **yellow** border are the split-sensitive ones.',
  },
  posture: {
    title: 'Alice keyboard posture & ergonomics',
    intro:
      "A split Alice keyboard only helps if the rest of your setup cooperates. Here's a practical checklist, ordered roughly from most to least impactful for wrist pain and carpal tunnel risk.",
    sections: {
      neutral: {
        heading: '1. Keep your wrists neutral',
        bullets: [
          {
            title: 'Straight, not bent up or down.',
            body: 'Your forearm and the back of your hand should form a roughly straight line. Sustained wrist extension raises pressure inside the carpal tunnel and is a major risk factor for median nerve irritation [Mayo Clinic](src:mayo).',
          },
          {
            title: 'Straight, not bent sideways.',
            body: "No ulnar deviation (pinky-ward bend). Alice layouts exist precisely because angling the halves inward lets your hands land without that sideways twist. A neutral, straight wrist is the posture ergonomics guidelines consistently recommend [OSHA](src:osha). Let the angle do its job — don't fight it by holding your elbows unnaturally close to your body.",
          },
          {
            title: 'Float — or rest the palm, not the wrist.',
            body: "During active typing, don't press the wrist crease against a hard desk edge or a hard wrist rest — it compresses the soft tissue over the carpal tunnel. A *soft* palm rest that supports the heel of your palm (like the built-in pads on the Logitech K860 and most ergo boards) is fine: your wrist stays neutral and the pressure lands on the meatier part of the hand. As with any rest, it's primarily for *between* bursts of typing [OSHA](src:osha).",
          },
        ],
        palmCallout: {
          title: 'What makes a good palm rest:',
          items: [
            'Soft and padded, not hard plastic or a sharp desk edge.',
            'Sits under the **heel of the palm**, not the wrist crease.',
            "Level with (or slightly below) the keys, so your wrist doesn't bend down to reach it.",
            'Built-in keyboard palm rests — Logitech K860, Kinesis Advantage, Moonlander, and most Alice cases with a foam pad — are designed to hit all three.',
          ],
        },
        selfCheck: {
          title: 'Quick self-check:',
          body: "press the back of your hand against a wall, elbow bent. Is your forearm parallel to the floor and your hand straight? That's typing posture. If you have to crank your wrist to make it happen, your desk or chair height is off.",
        },
      },
      geometry: {
        heading: '2. Dial in chair, desk, and monitor',
        bullets: [
          {
            title: 'Elbows at ~90°,',
            body: 'or slightly more open (100–110°). Adjust chair height first, keyboard height second [OSHA](src:osha).',
          },
          {
            title: 'Shoulders relaxed, not hiked.',
            body: "If the keyboard is too high you'll shrug all day and wake up with neck pain.",
          },
          {
            title: 'Monitor top at or just below eye level,',
            body: "roughly an arm's length away. Looking down at a laptop screen drags your head forward and feeds into shoulder/wrist tension [OSHA](src:osha).",
          },
          {
            title: 'Feet flat on the floor or a footrest.',
            body: '',
          },
        ],
      },
      breaks: {
        heading: '3. Take micro-breaks',
        bullets: [
          {
            title: 'Every ~25–30 minutes,',
            body: 'take 30 seconds off the keyboard. Short, frequent breaks are more effective than one long rest [OSHA](src:osha). Stand, shake out your hands, roll your shoulders.',
          },
          {
            title: '20-20-20 for eyes:',
            body: 'every 20 minutes, look at something 20 feet away for 20 seconds. It resets focus and breaks the hunched-forward posture that loads the wrists.',
          },
          {
            title: 'Wrist circles and prayer stretch:',
            body: 'clasp hands, press palms together, lower hands slowly until you feel a gentle stretch in the forearms. Hold 15–30 seconds [NHS](src:nhs).',
          },
        ],
      },
      alice: {
        heading: '4. Tips specific to the Alice layout',
        bullets: [
          {
            title: 'Let the angle work for you.',
            body: 'Your hands should rest so that forearms point along the column lines, not perpendicular to the desk edge.',
          },
          {
            title: 'Anchor on the home row bumps',
            body: "(F and J). It's very easy to drift on an Alice board because the halves are fixed but your hands float.",
          },
          {
            title: 'Retrain split-sensitive keys deliberately.',
            body: "B, T, G are *left*. Y, H, N are *right*. If you're coming from a row-staggered board, you probably cross-hand one of these — usually Y with the left index or B with the right. See [Lesson 5](lesson:bottom-alice) and [Lesson 6](lesson:split-sensitive).",
          },
          {
            title: 'Tenting helps too.',
            body: 'Most Alice boards are flat, but a slight forward tilt (front edge lower than back) or some foam under the center can reduce pronation strain.',
          },
        ],
      },
      doctor: {
        heading: '5. When to see a doctor',
        intro: "Don't tough it out. See a professional if you have [Mayo Clinic](src:mayo):",
        symptoms: [
          'Numbness or tingling in the thumb, index, middle, or half of the ring finger.',
          'Pain that wakes you up at night or lingers for days after typing.',
          'Weakness gripping things, or dropping objects.',
        ],
        outro:
          'Early intervention (splinting, posture changes, physical therapy) is much more effective than waiting — untreated carpal tunnel syndrome can progress to permanent nerve damage [Mayo Clinic](src:mayo).',
      },
    },
    furtherReadingHeading: 'Further reading',
    furtherReading: [
      {
        label: 'Mayo Clinic — Carpal Tunnel Syndrome',
        body: 'symptoms, causes, and treatment.',
      },
      {
        label: 'OSHA — Computer Workstations eTool',
        body: 'detailed ergonomic checklist.',
      },
      {
        label: 'NHS — Carpal Tunnel Syndrome',
        body: 'UK clinical overview, including stretches.',
      },
    ],
  },
  lessons: {
    indexTitle: 'Alice layout typing lessons',
    indexIntro:
      'Work through these in order. Lesson 5 and 6 are the most important for un-learning row-staggered habits on an Alice board.',
    cardLabel: 'Lesson',
    backAll: '← All lessons',
    notFound: 'Lesson not found',
    complete: 'Lesson complete',
    retry: 'Retry',
    backToLessons: 'Back to lessons',
    stats: { wpm: 'WPM', accuracy: 'Accuracy', time: 'Time' },
    items: {
      'home-left': {
        title: '1. Left home row',
        desc: 'Anchor index on F. Tap a s d f.',
      },
      'home-right': {
        title: '2. Right home row',
        desc: "Anchor index on J. Tap j k l ; — letter drills only (these keys alone don't form words).",
      },
      'home-full': {
        title: '3. Full home row',
        desc: 'Alternate hands across a s d f g h j k l ; — every letter sits on the home row.',
      },
      'top-row': {
        title: '4. Top row',
        desc: 'Stretch up: q w e r t y u i o p.',
      },
      'bottom-alice': {
        title: '5. Bottom row (Alice focus)',
        desc: 'B lives on your LEFT index. N lives on your RIGHT index. Retrain!',
      },
      'split-sensitive': {
        title: '6. Split-sensitive drill',
        desc: 'T/Y, G/H, B/N — the keys where Alice muscle memory fails.',
      },
      bigrams: {
        title: '7. Common bigrams/trigrams',
        desc: 'Words built from the most common letter pairs.',
      },
      sentences: {
        title: '8. Mixed sentences',
        desc: 'Short phrases mixing every zone.',
      },
    },
  },
  test: {
    title: 'Speed test',
    intro:
      "Timed WPM + accuracy. Results are saved in your browser's localStorage — nothing leaves this device.",
    duration: 'Duration:',
    newQuote: 'New quote',
    retrySame: 'Retry same',
    timeLeft: 'Time left',
    wpm: 'WPM',
    accuracy: 'Accuracy',
    result: 'Result',
    charsCorrect: 'chars typed correctly',
    newTest: 'New test',
    historyHeading: 'Your history',
    clearHistory: 'Clear history',
    clearConfirm: 'Clear all typing test history?',
    tableCols: { when: 'When', duration: 'Duration', wpm: 'WPM', accuracy: 'Accuracy' },
  },
  diagrams: {
    extension: 'Extension (bad)',
    neutral: 'Neutral (good)',
    flexion: 'Flexion (bad)',
    forearm: 'forearm',
    hand: 'hand',
    rowStagger: 'Row-staggered — ulnar deviation',
    aliceNeutral: 'Alice layout — neutral',
    floatGood: 'Float while typing',
    plantBad: 'Plant while typing',
    pressure: 'pressure',
    gap: 'gap',
    elbow: '~90° elbow',
    eyeLevel: 'eye level — monitor top at or just below',
    feetFlat: 'feet flat',
  },
  keyboard: {
    splitCalloutPrefix: 'Split-sensitive — on Alice,',
    splitCalloutBelongsTo: 'belongs to your',
    hand: { left: 'LEFT', right: 'RIGHT' },
    finger: {
      pinky: 'pinky',
      ring: 'ring',
      middle: 'middle',
      index: 'index',
      thumb: 'thumb',
    },
  },
};

export default en;
