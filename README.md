# izabelamichta.pl

New Izabela Michta Page!

## Coś

Do projektu wykorzystałem projekt: https://www.youtube.com/watch?v=3HNyXCPDQ7Q

## Stock Technologiczny:

JavaScript, React, Sanity, SCSS

## Prerequisites:

Konto Boosted Free! 2 razy więcej API calls, requests and bandwidth.
https://www.sanity.io/javascriptmastery

## Instalacja

sanity docs - to open the documentation in a browser
sanity manage - to open the project settings in a browser
sanity help - to explore the CLI manual
sanity start - to start the sanity project

## Struktura projektu

|
|\_ backend_sanity

Backend prework.

### Sanity

Uruchomienie projektu w fazie rozwojowej http://localhost:3333/
npm run dev

#### Schemas

Folder w którym tworzymy zakładki w Content w Sanity. Dokument.

Aby utworzyć nowy element w Content nalezy utworzyć nowy plik js.

Dodać do niego potrzebne informacje w formie obiektu:

{
name: "testimonials",
title: "Testimonials",
type: "document",
fields: [
{
name: "name",
title: "Name",
type: "string",
},
{
name: "company",
title: "Company",
type: "string",
},
{
name: "imageurl",
title: "ImgURL",
type: "image",
options: {
hotspot: true,
},
},
{
name: "feedback",
title: "Feedback",
type: "string",
},
],
};

i zaimportować do pliku index.

#### React

ReactDOM.render(<App />, document.getElementById("root"));

Linijka kodu wstrzykuje cały wygląd naszej aplikacji do diva z indexem root w folderze public, w pliku index.html

rafce - skrót inicjalizujący strukturę pliku w App.js.
