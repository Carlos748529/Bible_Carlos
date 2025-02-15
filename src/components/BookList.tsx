import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookIcon } from "lucide-react"; // Usamos un ícono similar para representar la Biblia

interface BookListProps {
  books: { id: string; name: string }[];
  onSelect: (bookId: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-white p-4">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold text-center text-black mb-4">La Santa Biblia NTV</h1>
        <div className="bg-cover bg-center h-40 rounded-lg shadow-md mb-6" style={{ backgroundImage: 'url(/biblia.jpg)' }}></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {books.map((book) => (
            <Card
              key={book.id}
              className="cursor-pointer bg-green-100 border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              onClick={() => onSelect(book.id)}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <BookIcon className="h-10 w-10 text-black mb-2" />
                <h2 className="text-lg font-semibold text-black text-center">{book.name}</h2>
                <p className="text-sm text-gray-700">Capítulos</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList
