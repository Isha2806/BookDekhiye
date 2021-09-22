import { useState } from "react";
import "./styles.css";
import img from "./Images/recommended.png";
import gif from "./Images/giphy.gif";
import gif2 from "./Images/giphy2.gif";
const bookDB = {
  SelfHelp: [
    {
      name: "How To Win Friends and Inflence people",
      author: "Dale Carneige",
      goodreads:
        "This is one of the most timeless self help books ever written.  Carnegie believed that most successes come from an ability to communicate effectively versus brilliant insights. This book teaches these skills by showing you how to value people and help them feel appreciated rather than manipulated. "
    },
    {
      name: "Think and Grow Rich",
      author: "Napolean Hill",
      goodreads:
        "Hill was one of the first ever self help authors, and his books are incredibly relevant today. Think and Grow Rich condenses his laws of success and provides you with 13 principles of personal achievement."
    }
  ],
  Financial: [
    {
      name: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      goodreads:
        "Kiyosaki tackles the ‘financial literacy” that’s never addressed in schools.  He had two father figures growing up.  One who struggled paycheck to paycheck for a lifetime whom he called “poor dad” and the other who was a multimillionaire eighth grade dropout he lovingly calls “rich dad”.  The concept behind the book is that rich people have money work for them while the poor work for money.  This is a must read to change anyone’s negative belief system on money or to further your understanding on how money can work "
    }
  ],
  Entreprenure: [
    {
      name: "See You At The Top",
      author: "zig zaglar",
      goodreads:
        "As one of America’s most gifted speakers/authors in motivation, the late Zig Ziglar shares the secrets of climbing the stairway to personal success. He presents a proven program of self-development based upon the foundation of a winning self-image."
    }
  ]
};

export default function App() {
  const [selectedBook, setBook] = useState("SelfHelp");
  function bookClickHandler(book) {
    setBook(book);
  }
  return (
    <div className="App">
      <h1>Books For Leaders </h1>

      <h2 style={{ fontFamily: "cursive" }}>
        A Book recommendation system designed for the leader in you !
      </h2>

      <img src={gif} height="50%" width="50%" alt=" books" />

      <p style={{ fontFamily: "monospace" }}>
        {" "}
        If you want to be good at something. You have two options: 1. Read or 2.
        Teach . Eventually, they both meet at the same point.
      </p>
      <div>
        {Object.keys(bookDB).map((book) => (
          <button className="Btn" onClick={() => bookClickHandler(book)}>
            {book}
          </button>
        ))}
      </div>

      <hr />
      <div>
        <img src={img} height="20%" width="20%" alt=" books" />
      </div>
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "1" }}>
          {bookDB[selectedBook].map((book) => (
            <li className="book" key={book.name}>
              {" "}
              <div style={{ textAlign: "left" }}>
                <img src={gif2} height="10%" width="10%" alt=" books" />
              </div>
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "small" }}> {book.author} </div>
              <div style={{ fontSize: "smaller" }}> {book.goodreads} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}