// @flow
import { colors } from "@atlaskit/theme";
import type { Author, Quote, QuoteMap } from "./types";
import finnImg from "./static/media/finn-min.png";
import bmoImg from "./static/media/bmo-min.png";
import princessImg from "./static/media/princess-min.png";
import jakeImg from "./static/media/jake-min.png";

const jake: Author = {
  id: "1",
  name: "Jake",
  url: "http://adventuretime.wikia.com/wiki/Jake",
  avatarUrl: jakeImg,
  colors: {
    soft: colors.Y50,
    hard: colors.N400A,
  },
};

const BMO: Author = {
  id: "2",
  name: "BMO",
  url: "http://adventuretime.wikia.com/wiki/BMO",
  avatarUrl: bmoImg,
  colors: {
    soft: colors.G50,
    hard: colors.N400A,
  },
};

const finn: Author = {
  id: "3",
  name: "Finn",
  url: "http://adventuretime.wikia.com/wiki/Finn",
  avatarUrl: finnImg,
  colors: {
    soft: colors.B50,
    hard: colors.N400A,
  },
};

const princess: Author = {
  id: "4",
  name: "Princess bubblegum",
  url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
  avatarUrl: princessImg,
  colors: {
    soft: colors.P50,
    hard: colors.N400A,
  },
};

export const authors: Author[] = [jake, BMO, finn, princess];

export const quotes_list = [
  {
    id: "ql_1",
    title: "hello quote list1",
    quotes: [
      {
        id: "q_1",
        content: "quote 1",
        author: BMO,
      },
      {
        id: "q_2",
        content: "quote 2",
        author: jake,
      },
      {
        id: "q_3",
        content: "quote 3",
        author: jake,
      },
      {
        id: "q_4",
        content: "quote 4",
        author: finn,
      },
    ],
  },
  {
    id: "ql_2",
    title: "hello quote list2",
    quotes: [
      {
        id: "q_5",
        content: "quote 5",
        author: BMO,
      },
      {
        id: "q_6",
        content: "quote 6.",
        author: jake,
      },
      {
        id: "q_7",
        content: "quote 7",
        author: jake,
      },
    ],
  },
];

export const quotes: Quote[] = [
  {
    id: "1",
    content: "Sometimes life is scary and dark",
    author: BMO,
  },
  {
    id: "2",
    content:
      "Sucking at something is the first step towards being sorta good at something.",
    author: jake,
  },
  {
    id: "3",
    content: "You got to focus on what's real, man",
    author: jake,
  },
  {
    id: "4",
    content: "Is that where creativity comes from? From sad biz?",
    author: finn,
  },
];

// So we do not have any clashes with our hardcoded ones
let idCount: number = quotes.length + 1;

export const getQuotes = (count: number): Quote[] =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random: Quote = quotes[Math.floor(Math.random() * quotes.length)];

    const custom: Quote = {
      ...random,
      id: `G${idCount++}`,
    };

    return custom;
  });

export const getAuthors = (count: number): Author[] =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random: Author = authors[Math.floor(Math.random() * authors.length)];

    const custom: Author = {
      ...random,
      id: `author-${idCount++}`,
    };

    return custom;
  });

const getByAuthor = (author: Author, items: Quote[]): Quote[] =>
  items.filter((quote: Quote) => quote.author === author);

export const authorQuoteMap: QuoteMap = authors.reduce(
  (previous: QuoteMap, author: Author) => ({
    ...previous,
    [author.name]: getByAuthor(author, quotes),
  }),
  {}
);

export const generateQuoteMap = (quoteCount: number): QuoteMap =>
  authors.reduce(
    (previous: QuoteMap, author: Author) => ({
      ...previous,
      [author.name]: getQuotes(quoteCount / authors.length),
    }),
    {}
  );
