// štýly
import './AppBooks.scss'

// komponenty
import Books from "./Books";
import Aside from "../../Aside";


const AppBooks = () => {
  const books = [
    {
      id: 1,
      image:
        "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp",
      title: "Harry Potter a Kámen mudrců",
    },
    {
      id: 2,
      image:
        "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp",
      title: "Harry Potter a Tajemná komnata",
    },
    {
      id: 3,
      image:
        "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-vezen-z-azkabanu-9788000063393.jpg.webp",
      title: "Harry Potter a Vězeň z Azkabanu",
    },
  ];

  return (
    <div className="app-books">
      <Aside />
      <div className="all-books">
        <header>
          <h1>Projekt Books</h1>
        </header>
        <main>
          <Books image={books[0].image} title={books[0].title} />
          <Books image={books[1].image} title={books[1].title} />
          <Books image={books[2].image} title={books[2].title} />
        </main>
        <footer>
          Vytvorené podľa kurzu od Davida Šeteka na{" "}
          <a href="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx">
            youtube
          </a>{" "}
          lekcie 8.-17. - prerobené do TypeScript
        </footer>
      </div>
    </div>
  );
};

export default AppBooks;
