import { faCoins, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowBigRightDash, Mails, Phone, Youtube } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import sd from '../../img/sd.jpg';
import tt from '../../img/tt.jpg';
import vt1 from '../../img/df.jpg';
import vt2 from '../../img/mfa.png';
import vt4 from '../../img/vt4.jpg';
const LeaderboardTable = () => {
  const players = [
    {
      id: 1,
      name: "Doffy",
      icons: [ vt1], // sd và tt là các imported images
      rank: "Radiant",
      stars: 2,
      rating: 9.4
    },
    {
      id: 2,
      name: "Player2",
      icons: [tt],
      rank: "Immortal",
      stars: 1,
      rating: 8.2
    },
       {
      id: 3,
      name: "Player3",
      icons: [vt4],
      rank: "Immortal",
      stars: 1,
      rating: 8.2
    },
       {
      id: 4,
      name: "Player4",
      icons: [vt2],
      rank: "Immortal",
      stars: 1,
      rating: 8.2
    },
  ];

  return (
    <div className="grid grid-cols-4  gap-1 text-black p-1 text-center mb-4">
      {/* Header */}
      <div className="p-2 font-bold bg-blue-100 w-10 m-auto rounded-full">No</div>
      <div className="p-1 font-bold bg-sky-200/30 w-20 m-auto rounded-full text-center">User</div>
      <div className="p-1 font-bold bg-purple-200/30 w-20 m-auto rounded-full text-center">Rank</div>
      <div className="p-1 font-bold bg-slate-200/30 w-20 m-auto rounded-full text-center">KDA</div>

      {/* Rows */}
      {players.map((player) => (
        <React.Fragment key={player.id}>
          <div className="p-2  ">{player.id}</div>
          <div className="p-2  flex items-center justify-center">
            {player.name}
            <div className="flex ml-1">
              {player.icons.map((icon, i) => (
                <Image 
                  key={i}
                  src={icon}
                  alt={`${player.name} icon ${i}`}
                  width={800}
                  height={800}
                  priority
                  className="w-8 h-8 ml-1 rounded-full border"
                />
              ))}
            </div>
          </div>
          <div className="p-2 ">
            {player.rank}
            {Array(player.stars).fill(null).map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className="ml-1 text-yellow-500" />
            ))}
          </div>
          <div className="p-2 ">
            {player.rating} <FontAwesomeIcon icon={faCoins} className="ml-1 text-yellow-600" />
          </div>
        
        </React.Fragment>
      ))}
    </div>
  );
};

const NewsletterSignup = () => (
  <div className="flex flex-col justify-center gap-2 ">
    <div className="text-xl font-semibold text-white">
      Sign up for our DOFFY GARDEN&apos;S
    </div>
    <div className="border flex items-center px-2 py-1 bg-gray-200 rounded-xl">
      <input 
        type="text" 
        placeholder="Enter your email..." 
        className="bg-transparent outline-none flex-1"
      />
      <button className="bg-gray-300 rounded-full p-1 hover:bg-gray-400 transition">
        <ArrowBigRightDash size={20} />
      </button>
    </div>
  </div>
);

const ContactInfo = () => (
  <div className="flex flex-col text-xl font-sans">
    <h2 className="text-2xl font-medium mb-2 text-gray-700 hover:text-sky-500 transition">
      Contact Us
    </h2>
    <div className="space-y-1">
      <p className="flex items-center gap-2">
        <Phone className="text-green-500" size={20} />
        <span>090909xxxx</span>
      </p>
      <p className="flex items-center gap-2">
        <Mails className="text-gray-600" size={20} />
        <span>abc123@gmail.com</span>
      </p>
      <p className="flex items-center gap-2">
        <Youtube className="text-red-500" size={20} />
        <span>youtube.com/s3xmylife</span>
      </p>
    </div>
  </div>
);

export default function FooterMidle() {
  return (
    <footer className="w-full">
      <LeaderboardTable />
      
      <div className="border-b-2 w-16 mx-auto my-4"></div>
      
      <div className="w-full bg-gradient-to-t from-blue-300 to-black/20 px-5 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-6">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-extrabold text-center text-pink-400">
                DOFFY <span className="text-4xl">GARDEN&apos;S</span>
              </h1>
              <Image 
                src={sd} 
                alt="Doffy Garden Logo" 
                width={80} 
                height={80} 
                className="rounded-full border-2 border-pink-400"
              />
            </div>
            
            <NewsletterSignup />
          </div>
          
          <div className="border-t border-amber-600 w-full my-4"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-medium text-gray-700 hover:text-white transition">
                What do you want to search?
              </h2>
              <div className="space-y-1">
                <p className="hover:text-pink-400 cursor-pointer transition">About Us</p>
                <p className="hover:text-pink-400 cursor-pointer transition">Top Search</p>
                <p className="hover:text-pink-400 cursor-pointer transition">News</p>
              </div>
            </div>
            
            <ContactInfo />
            
            <div className="md:col-span-2">
              {/* Placeholder for image gallery */}
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center opacity-35">
                <p className="text-black font-bold ">Image Gallery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}