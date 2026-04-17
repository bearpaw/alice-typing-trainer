export type LessonDrill = {
  id: string;
  drill: string;
};

export const LESSONS: LessonDrill[] = [
  {
    id: 'home-left',
    drill:
      'asdf fdsa asdf fdsa asdf fdsa add dad fad sad ads dads fads add sad sad dad fad fad as as',
  },
  {
    id: 'home-right',
    drill:
      'jjj kkk lll ;;; jk jk kl kl l; l; kj kj lk lk ;l ;l jkl; jkl; ;lkj ;lkj jkkl lkk; jl;k kj;l',
  },
  {
    id: 'home-full',
    drill:
      'dad had a flag; a sad lad dash; half a glass; a glad lass; ask a gala; all fads fall; shall flash a flag; has all lads had a salad',
  },
  {
    id: 'top-row',
    drill:
      'the quiet wipe route typewriter poetry quiet outer wiper writer trouper power otter type',
  },
  {
    id: 'bottom-alice',
    drill:
      'bbb nnn bbb nnn bnbnbn banana number bunch nimble bamboo nabs banjo nudge bobcat nothing',
  },
  {
    id: 'split-sensitive',
    drill:
      'the tough yet gentle hunt brought night bought eighth tight thigh bygone youth byte hymn',
  },
  {
    id: 'bigrams',
    drill:
      'the and ing ion tion ment that with this from have they were been their which would there',
  },
  {
    id: 'sentences',
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
