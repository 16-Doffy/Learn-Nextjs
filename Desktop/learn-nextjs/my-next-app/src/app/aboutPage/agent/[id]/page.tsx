import Image from 'next/image';
import React from 'react';
import j from '../../img/j.jpg';
import rz from '../../img/rz.jpg';
import sg from '../../img/sage.jpg';
import Link from 'next/link';


//import qtVideo from '@/public/videos/qt.webm';
type Params = {
  params: {
    id: string;
  };
};

export default function AgentPage({ params }: Params) {
  const { id } = params;

  const agent = {
    '1': {
      name: 'Jett',
      role: 'Duelist',
      description: 'Jett là một đặc vụ nhanh nhẹn...',
      videoFile: '/videos/qt.webm',
      img: j,
      skills: ['Lưỡi dao tình ái', 'Vân nộ', 'Cuồng phong', 'Bão tym'],
      stats: {
        damage: 8,
        mobility: 10,
        utility: 6,
        difficulty: 7,
      },
      
    },
    '2': {
      name: 'Sage',
      role: 'Initiator',
      description: 'Sage có khả năng hồi phục...',
      videoFile: '/videos/qt2.mp4',
      img: sg,
      skills: ['Healling heart', 'Bức tường sắt đá', 'Qủa cầu s*x', 'Trái tim cô quạnh'],
      stats: {
        damage: 5,
        mobility: 3,
        utility: 10,
        difficulty: 4,
      },
    },
    '3': {
      name: 'Raze',
      role: 'Duelist',
      description: 'Raze chuyên về các loại vũ khí nổ...',
      videoFile: '/videos/qt3.mp4',
      img: rz,
      skills: ['Tên lửa nhân vân', 'Lựu đạn da đen', 'Gói kích d*c', 'Xe robot'],
      stats: {
        damage: 5,
        mobility: 3,
        utility: 10,
        difficulty: 4,
      },
    },
  }[id];

  if (!agent) return <div>Agent not found</div>;

  return (
    <div className=" w-full max-h-screen mt-2">
      <div className="p-20 text-white bg-gray-900 flex flex-col-2 ">
        <div>
          {/* <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-20">
  <source src={agent.videoFile} type="video/webm" />
</video> */}
          <Link href={agent.videoFile}>
            <Image
              src={agent.img}
              alt={''}
              width={800}
              height={800}
              priority
              className="w-100 h-90 rounded-xl"
            ></Image>
          </Link>
        </div>
        <div className="flex flex-col text-4xl ml-10">
          <h1 className="text-transparent bg-gradient-to-l from-pink-500 to-white bg-clip-text text-center">
            Welcome to Doffy&apos;s Garden
            <p>The agent of the my favourate </p>
          </h1>
          <h1 className="text-4xl font-bold flex flex-col-2 mx-auto text-transparent bg-gradient-to-l from-sky-500 to-white bg-clip-text">
            {agent.name}/ <p className="text-pink-400/70 text-2xl">{agent.role}</p>
          </h1>
          <p className="mt-4 text-lg mx-auto">{agent.description}</p>
          <div className="border-b-2 flex px-auto text-blue-500"></div>
          <div className=" text-xl">
            <h3 className="text-lg font-bold">Kỹ năng:</h3>
            <ul className="list-disc pl-5">
              {agent.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="border-b-2 flex px-auto text-blue-500"></div>
          {/* <div className='inline-block  mb-2 m-auto text-center text-2xl'>
            <h1 className='ml-32'>Trailer</h1>
            <video    className="absolute  w-100 h-50 object-cover rounded-2xl opacity-25">
              <source src={agent.videoFile} type="video/webm" />
            </video>
          </div> */}
        </div>
      </div>
    </div>
  );
}
