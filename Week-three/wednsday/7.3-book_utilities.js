const book1 = {
  name: "foundation",
  author: "Isaac Asimov",
  year: 1951,
};
const book2 = {
  name: "Second foundation",
  author: "Isaac Asimov",
  year: 1953,
};
const bookUtils = {};

bookUtils.getFirstPublished = function (book1, book2) {
  return book1.year <= book2.year ? book1 : book2;
};

bookUtils.setNewEdition = function (book, edition) {
  book.latestEdition = edition;
};

bookUtils.setLanguage = function (book, language) {
  book.language = language;
};

bookUtils.setTranslation = function (book, language, translator) {
  book.translation = {
    translator: translator,
    language: language,
  };
};

bookUtils.setPublisher = function (book, pubName, pubLocation) {
  book.publisher = {
    name: pubName,
    location: pubLocation,
  };
};

bookUtils.isSamePublisher = function (book1, book2) {
  return (
    book1.publisher.name === book2.publisher.name &&
    book1.publisher.location === book2.publisher.location
  );
};
