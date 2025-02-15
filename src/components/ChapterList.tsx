import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ChapterListProps {
  chapters: { id: string; reference: string; chaptersCount: number }[];
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters }) => {
  const navigate = useNavigate();

  const handleChapterClick = (chapterId: string) => {
    navigate(`/chapter/${chapterId}/content`);
  };
  const handleBackClick = () => {
    navigate("/Home");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-red-100 p-4 rounded-lg mb-4">
        <div className="flex items-center">
          <button 
            className="p-2 bg-gray-200 rounded-full mr-2"
            onClick={handleBackClick}>
            ⬅
          </button>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            Guía
          </h2>
        </div>
        <p className="text-gray-600 text-sm">Orden cronológico de lectura</p>
      </div>
      
      {/* Chapters List */}
      <div className="flex flex-col gap-3">
        {chapters.map((chapter) => (
          <Card
            key={chapter.id}
            className="flex justify-between items-center p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition duration-300"
            onClick={() => handleChapterClick(chapter.id)}
          >
            <CardContent className="text-gray-700 font-medium text-lg">
              {chapter.reference}
            </CardContent>
            <span className="text-gray-500 text-sm">
              {chapter.chaptersCount} Capítulos →
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChapterList;