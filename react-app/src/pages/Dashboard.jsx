import BookCard from "../components/BookCard";

function Dashboard() {
  const books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Clean Code", author: "Robert C. Martin" },
    { id: 3, title: "The Pragmatic Programmer", author: "Andrew Hunt" },
  ];

  return (
    <>
      <h2>Books</h2>

      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </>
  );
}

export default Dashboard;