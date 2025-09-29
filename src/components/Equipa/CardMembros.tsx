import React from "react";

interface CardMembrosProps {
  title: string;
  description: string;
  bio?: string;
  imageUrl?: string;
}

const CardMembros: React.FC<CardMembrosProps> = ({ title, description, bio, imageUrl }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden">
      <div className="p-6 flex flex-col items-center">
        
        {imageUrl && (
          <div className="w-full max-w-xs h-48 mb-4 overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              src={imageUrl}
              alt={title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        <div className="text-center space-y-3">
          <h3 className="font-bold text-xl">{title}</h3>
          <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full border border-indigo-200">
            {description}
          </div>
          {bio && (
            <p className="text-gray-700 text-sm leading-relaxed mt-2">
              {bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardMembros;
