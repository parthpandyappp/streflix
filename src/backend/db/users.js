import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Parth",
    lastName: "Pandya",
    playlists: [{
      _id: "oC3gXr1s_aU",
      title: "Children",
      videos: [
        {
          _id: "574ffb06-b4c3-11ec-b909-0242ac120002",
          title: "हिंदी Oggy and the Cockroaches 🔧 KEYS & IDEAS 🔧 Hindi Cartoons for Kids",
          description:
            "Introducing Nature Tapes, a series of videos shot across some of the most beautiful locales in our country; where we record acoustically reimagined versions of our songs amidst nature. Here is When We Feel Young at Vagamon, Kerala.",
          imgPreview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hFV9wAZ-8kXqgmp6BfBRY0BlS0OM4iTImA&usqp=CAU",
          videoURL: "MUMCZZl9QCY",
          creator: "Oggy & the cockroaches",
          categoryName: "Animated Series",
        },
        {
          _id: "574ff75a-b4c3-11ec-b909-0242ac120002",
          title: "Cash Machine | Mr Bean | Cartoons for Kids | WildBrain Kids",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas at aperiam quasi! Dolorum aspernatur enim, provident non corporis similique eveniet ullam maiores maxime debitis incidunt consequuntur distinctio nostrum minus accusantium?",
          imgPreview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2788Wlja6YzJW2gdQMq6veqjHQBTXr53NRw&usqp=CAU",
          videoURL: "P2BYM7PYdBk",
          creator: "Mr. Bean",
          categoryName: "Animated Series",
        },

      ],
    },
    {
      _id: "oC3gXr1s_aZ",
      title: "Music",
      videos: [
        {
          _id: "574ff284-b4y3-11ec-b909-0242ac120002",
          title: "Hum Dekhenge - The Kashmir Files ",
          description:
            `Cast: Darshan Kumaar & Pallavi Joshi
            Production House: Zee Studios, IAmBuddha & Abhishek Agarwal Arts
            Producer: Zee Studios, Tej Narayan Agarwal, Abhishek Agarwal, Pallavi Joshi & Vivek Agnihotri
            Director: Vivek Agnihotri`,
          imgPreview: "https://i.ytimg.com/vi/C8QYVwX0M6g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4eoqfNtT-NUEAGo6DsnXs0iezkw",
          videoURL: "C8QYVwX0M6g",
          creator: "Zee Music",
          categoryName: "Indie Music",
        },
        {
          _id: "574feee0-b4c3-11ec-b909-0242ac120002",
          title: "When We Feel Young (Nature Tapes)",
          description:
            "Introducing Nature Tapes, a series of videos shot across some of the most beautiful locales in our country; where we record acoustically reimagined versions of our songs amidst nature. Here is When We Feel Young at Vagamon, Kerala.",
          imgPreview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOL33QbZobuRAANRIBiL5V6HYDrBbiKs8lQ&usqp=CAU",
          videoURL: "xJtp2W_z-ec",
          creator: "When Chai Met Toast",
          categoryName: "Indie Music",
        },
        {
          _id: "574ff274-b4z3-11ec-b909-0242ac120002",
          title: "Kehndi Hundi Si Chan Tak Raah Bana De (Official Song)",
          description:
            "Kehndi Hundi Si Chan Tak Raah Bana De (Official Song) AP Dhillon | Gurinder Gill I Shinda Kahlon I AP Dhillon New Song Ap dhillon approach Approach ap dhillon Ap dhillon kaali gaddi",
          imgPreview: "https://i.ytimg.com/vi/HIgpRtmqYKw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBgpTRwJDt80p7srOJiDl1LKPTjnw",
          videoURL: "aBOHZXjm4Qo",
          creator: "AP Dhillon",
          categoryName: "Indie Music",
        },

      ],
    },
    ],
    email: "gkool@neog.camp",
    password: "gkool",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
