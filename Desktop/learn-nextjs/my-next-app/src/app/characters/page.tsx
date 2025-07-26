'use client'

import CharacterCard from "@/components/CharacterCard"
import b from "./image/bean.jpg"
import c from "./image/dex.jpg"
import d from "./image/grim1.png"
import e from "./image/jon.png"
const CharactersPage = () => {
  
  const characters = [
    {
      name: 'Grim',
      show: 'Adventures of Billy & Mandy',
      image: d,
      description: 'The Grim Reaper who becomes the reluctant friend of Billy and Mandy.',
      clips: [b, c],
    },
    {
      name: 'Johnny Bravo',
      show: 'Johnny Bravo',
      image: e,
      description: 'A muscular, dim-witted blonde who is obsessed with women.',
        clips: [b, c],
    },
    {
      name: 'Mr. Bean',
      show: 'Mr. Bean animated',
      image: b,
      description: 'A quirky, silent character known for his humorous antics.',
        clips: [b, c],
    },
    {
      name: 'Blossom',
      show: 'Powerpuff Girls',
      image: c,
      description: 'The leader of the Powerpuff Girls, known for her intelligence.',
       clips: [b, c],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Cartoon Network Characters</h1>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search characters..."
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Menu
            </button>
          </div>
        </div>

        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-2 w-350 h-auto">
          {characters.map((character, index) => (
            <CharacterCard key={index} {...character} />
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;