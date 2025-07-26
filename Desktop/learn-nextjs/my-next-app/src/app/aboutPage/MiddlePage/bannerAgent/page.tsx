'use client';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRebel } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import j from '../../img/j.jpg';
import sage from '@/app/aboutPage/img/sage.jpg';
import rz from '../../img/rz.jpg';
import { useRouter } from 'next/navigation';
//import vd from "../../../../../public/videos/qt.webm"
export default function HeaderAgent() {

  const router = useRouter();

  const agents = [
    {
      id: 1,
      name: 'Jett',
      role: 'Duelist',
      image: j,
      description: 'Jett là một đặc vụ nhanh nhẹn với khả năng cơ động cao...',
      trailerUrl: 'https://www.youtube.com/embed/qt.webm',
      nationality: '🇰🇷',
       videoFile: '/videos/qt.webm'
    },
    {
      id: 2,
      name: 'Sage',
      role: 'Initiator',
      image: sage,
      description: 'Sage có khả năng hồi phục và bảo vệ đồng đội...',
      trailerUrl: 'https://www.youtube.com/embed/sage-trailer',
      nationality: '🇨🇳',
        videoFile: '/videos/qt3.mp4'
    },
    {
      id: 3,
      name: 'Raze',
      role: 'Duelist',
      image: rz,
      description: 'Raze chuyên về các loại vũ khí nổ và gây sát thương diện rộng...',
      trailerUrl: 'https://www.youtube.com/embed/raze-trailer',
      nationality: '🇧🇷',
        videoFile: '/videos/qt2.mp4'
    },
    
  ];

  const handleInfoClick = (agentId: number) => {
    router.push(`/aboutPage/agent/${agentId}`);
  };

  const handleTrailerClick = (videoFile: string | URL | undefined) => {
    window.open(videoFile, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-xl flex items-center justify-center mb-8">
        <h1 className="text-transparent bg-gradient-to-l from-purple-600 to-black bg-clip-text text-4xl font-bold font-sans">
          Agents
        </h1>
        <Sparkles className="ml-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map((agent) => (
          <div key={agent.id} className="relative group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            {/* Role Badge */}
            <div
              className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-sm font-bold ${
                agent.name === 'Raze'
                  ? 'bg-gradient-to-l from-orange-500 to-black text-white'
                  : 'bg-gradient-to-r from-sky-800 to-blue-900 text-blue-200'
              }`}
            >
              {agent.role}
            </div>

            {/* Agent Image */}
            <div className="relative h-80 overflow-hidden">
              <Image
                src={agent.image}
                alt={agent.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4">
              <button
                onClick={() => handleInfoClick(agent.id)}
                className="px-6 py-3 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-700 transition-colors flex items-center"
              >
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                Thông tin
              </button>

              <button
                onClick={() => handleTrailerClick(agent.videoFile)}
                className={`px-6 py-3 rounded-lg text-white font-bold hover:bg-red-700 transition-colors flex items-center ${
                  agent.name === 'Raze' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-red-600'
                }`}
              >
                Xem Trailer
              </button>
            </div>

            {/* Agent Info */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <div className="flex justify-between items-end">
                <div>
                  <h3
                    className={`font-bold text-2xl ${
                      agent.name === 'Raze' ? 'text-orange-500' : 'text-blue-400'
                    }`}
                  >
                    <FontAwesomeIcon icon={faRebel} className="mr-2" />
                    {agent.name}
                  </h3>
                  <p className="text-white/80 text-xl">{agent.nationality}</p>
                </div>
                {/* <div className="text-sm bg-blue-400/20 text-white px-3 py-1 rounded-full hover:bg-red-400/30 transition-colors">
                  Date
                </div> */}
                    {/* <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-20">
  <source src={agent.videoFile} type="video/webm" />
</video> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}