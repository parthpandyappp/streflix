import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
    description:
      "All the videos avilable on the playform",
  },
  {
    _id: uuid(),
    categoryName: "Art",
    description:
      "All the videos related to Art",
  },
  {
    _id: uuid(),
    categoryName: "Animated Series",
    description:
      "All the videos related to Animated Series",
  },
  {
    _id: uuid(),
    categoryName: "Movies",
    description:
      "All the videos related to Movies",
  },
  {
    _id: uuid(),
    categoryName: "Indie Music",
    description:
      "All the videos related to Indie Music",
  },
  {
    _id: uuid(),
    categoryName: "Current Affairs",
    description:
      "All the videos related to Current Affairs",
  },
];
