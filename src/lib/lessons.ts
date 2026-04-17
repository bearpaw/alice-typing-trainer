export type Lesson = {
  id: string;
  title: string;
  desc: string;
  drill: string;
};

export const LESSONS: Lesson[] = [
  {
    id: 'home-left',
    title: '1. Left home row',
    desc: 'Anchor index on F. Tap a s d f.',
    drill:
      'asdf fdsa asdf fdsa asdf fdsa add dad fad sad ads dads fads add sad sad dad fad fad as as',
  },
  {
    id: 'home-right',
    title: '2. Right home row',
    desc: 'Anchor index on J. Tap j k l ; — letter drills only (these keys alone don\'t form words).',
    drill:
      'jjj kkk lll ;;; jk jk kl kl l; l; kj kj lk lk ;l ;l jkl; jkl; ;lkj ;lkj jkkl lkk; jl;k kj;l',
  },
  {
    id: 'home-full',
    title: '3. Full home row',
    desc: 'Alternate hands across a s d f g h j k l ; — every letter sits on the home row.',
    drill:
      'dad had a flag; a sad lad dash; half a glass; a glad lass; ask a gala; all fads fall; shall flash a flag; has all lads had a salad',
  },
  {
    id: 'top-row',
    title: '4. Top row',
    desc: 'Stretch up: q w e r t y u i o p.',
    drill:
      'the quiet wipe route typewriter poetry quiet outer wiper writer trouper power otter type',
  },
  {
    id: 'bottom-alice',
    title: '5. Bottom row (Alice focus)',
    desc: 'B lives on your LEFT index. N lives on your RIGHT index. Retrain!',
    drill:
      'bbb nnn bbb nnn bnbnbn banana number bunch nimble bamboo nabs banjo nudge bobcat nothing',
  },
  {
    id: 'split-sensitive',
    title: '6. Split-sensitive drill',
    desc: 'T/Y, G/H, B/N — the keys where Alice muscle memory fails.',
    drill:
      'the tough yet gentle hunt brought night bought eighth tight thigh bygone youth byte hymn',
  },
  {
    id: 'bigrams',
    title: '7. Common bigrams/trigrams',
    desc: 'Words built from the most common letter pairs.',
    drill:
      'the and ing ion tion ment that with this from have they were been their which would there',
  },
  {
    id: 'sentences',
    title: '8. Mixed sentences',
    desc: 'Short phrases mixing every zone.',
    drill:
      'The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. Bright vixens jump, dozy fowl quack.',
  },
];

export const TEST_QUOTES: string[] = [
  'The only way to learn a new programming language is by writing programs in it.',
  'Simplicity is prerequisite for reliability.',
  'Programs must be written for people to read, and only incidentally for machines to execute.',
  'The best way to predict the future is to invent it.',
  'Any sufficiently advanced technology is indistinguishable from magic.',
  'Premature optimization is the root of all evil.',
  'There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.',
  'The computer was born to solve problems that did not exist before.',
  'Computers are useless. They can only give you answers.',
  'First, solve the problem. Then, write the code.',
  'Good code is its own best documentation.',
  'The function of good software is to make the complex appear to be simple.',
  'Walking on water and developing software from a specification are easy if both are frozen.',
  'It is not enough for code to work.',
  'The most important property of a program is whether it accomplishes the intention of its user.',
];

export function pickRandomQuote(): string {
  return TEST_QUOTES[Math.floor(Math.random() * TEST_QUOTES.length)];
}
