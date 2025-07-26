'use client'

import Image from 'next/image'
import React from 'react'

interface CharacterCardProps {
  name: string
  show: string
  image: string
  description: string
  clips?: string[]
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  show,
  image,
  //description,
  clips = []
}) => {
  return (
    <div className="bg-white/80 rounded-xl shadow-lg w-80 p-5  border mx-auto">
      <div className="flex flex-col items-center">
        <Image
          src={image}
          alt={name}
          width={800}
          height={800}
          className="w-30 h-30 object-cover mb-4 "
          priority={false}
        />
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm">{show}</p>
        {/* <p className="text-gray-700 mt-2 text-center">{description}</p> */}
        
        {clips.length > 0 && (
          <div className="mt-4">
            {/* <h3 className="text-sm font-semibold text-gray-800">Clips</h3> */}
            <div className="flex space-x-2 mt-2">
              {clips.map((clip, index) => (
                <Image
                  key={index}
                  src={clip}
                  alt={`${name} clip ${index + 1}`}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover rounded"
                  priority={false}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CharacterCard