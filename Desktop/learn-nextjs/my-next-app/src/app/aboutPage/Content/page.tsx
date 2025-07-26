import Image from 'next/image';
import Link from 'next/link';
import j from '../img/j.jpg';
import j1 from '../img/j1.jpg';
import j2 from '../img/j2.jpg';
import j3 from '../img/j3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faEnvelope, faStore } from '@fortawesome/free-solid-svg-icons';
import { faMagento } from '@fortawesome/free-brands-svg-icons';
// import vt5 from '../img/vt5.jpg';
// import h1 from '../img/h1.jpg';
// Tạo dữ liệu mẫu với ID duy nhất
const girlsData = [
  {
    id: 'danyancat',
    name: 'DanyanCat',
    title:'Agent',
    image: j,
    icon:<FontAwesomeIcon icon={faMagento} />,
    followerCount: '1.2M'
  },
  {
    id: 'makoshake',
    name: 'Makoshake',
     title:'About',
     icon:<FontAwesomeIcon icon={faCircleInfo} />,
    image: j1,
    followerCount: '850K'
  },
  {
    id: 'emily-lynne', 
    name: 'Emily Lynne',
     title:'Store',
     icon:<FontAwesomeIcon icon={faStore} />,
    image: j2,
    followerCount: '750K'
  },
  {
    id: 'foxy2', 
    name: 'foxy2',
     title:'News',
     icon:<FontAwesomeIcon icon={faEnvelope} />,
    image: j3,
    followerCount: '700K'
  },
  // {
  //   id: 'foxy3', 
  //   name: 'foxy3',
  //   image: vt5,
  //   followerCount: '650K'
  // },
  //  {
  //   id: 'hazelmoore', 
  //   name: 'hazelmoore',
  //   image: h1,
  //   followerCount: '650K'
  // },
  //hazelmoore
];

export default function ContentPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Doffy&apos;s Garden</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {girlsData.map((girl) => (
          <Link 
            key={girl.id}
            href={`/aboutPage/Content/${girl.id}`} 
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <Image
              src={girl.image}
              alt={girl.name}
              width={300}
              height={400}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              priority={girl.id === 'danyancat'} 
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/10 to-transparent ">
              <h3 className="text-sky-700 text-lg font-serif border border-blue-600 w-20 bg-slate-300 text-center rounded-lg hover:text-blue-600">{girl.title}{girl.icon}</h3>
              {/* <p className="text-sm text-blue-300">{girl.icon} Follow</p> */}
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
}