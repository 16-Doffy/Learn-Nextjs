import { faRebel } from '@fortawesome/free-brands-svg-icons'
import { faCoins, faHeadSideVirus, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Crosshair } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import re1 from '../../img/re1.jpg';
import re2 from '../../img/re2.jpg';
import re3 from '../../img/re3.jpg';
import re4 from '../../img/re4.jpg';
export default function BannerGun() {
  return (
    <>
    <div className="text-2xl flex flex-col-2 text-black font-bold  m-auto">
        <p className="text-black">
          <Crosshair />
        </p>
        Top Gun
      </div>
      <div className="flex flex-col-4  w-full">
        <div className="relative group overflow-hidden  rounded-lg mx-auto">
          <div className="-mb-20 p-2 relative  flex flex-col-3 m-2 rounded-lg text-white gap-3  text-2xl justify-center">
            <h3 className="text-blue-500 font-semibold text-xl">
              <FontAwesomeIcon icon={faRebel} /> Valdal
            </h3>
          </div>
          <Image
            src={re1}
            alt="{girl.name}"
            width={400}
            height={500}
            className="w-130 h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className=" absolute inset-0 flex flex-col justify-center-safe p-3  bg-gradient-to-t from-purple-800 via-red/800 to-transparent ">
            <div className="flex flex-col text-purple-400 font-sans mt-5 ">
              <span>
                {' '}
                <FontAwesomeIcon icon={faHeadSideVirus} className="text-pink-400 text-sm" /> 65%
              </span>
              <span className="text-pink-400">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
            <div className="flex flex-col-2 justify-between">
              <p className="  text-lg text-transparent bg-gradient-to-l from-purple-600 to-white bg-clip-text font-sans">
                HeroValdal
              </p>
              <p className=" text-lg  rounded-full  text-pink-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faCoins} />
                1000$
              </p>
            </div>
          </div>
        </div>
       {/* dao */}
       <div className="relative group overflow-hidden  rounded-lg mx-auto">
          <div className="-mb-20 p-2 relative  flex flex-col-3 m-2 rounded-lg text-white gap-3  text-2xl justify-center">
            <h3 className="text-blue-500 font-semibold text-xl">
              <FontAwesomeIcon icon={faRebel} /> Reaver Knife
            </h3>
          </div>
          <Image
            src={re2}
            alt="{girl.name}"
            width={400}
            height={500}
            className="w-130 h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className=" absolute inset-0 flex flex-col justify-center-safe p-3  bg-gradient-to-t from-purple-800 via-red/800 to-transparent ">
            <div className="flex flex-col text-purple-400 font-sans mt-5 ">
              <span>
                {' '}
                <FontAwesomeIcon icon={faHeadSideVirus} className="text-pink-400 text-sm" /> 15%
              </span>
              <span className="text-pink-400">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
            <div className="flex flex-col-2 justify-between">
              <p className="  text-lg text-transparent bg-gradient-to-l from-purple-600 to-white bg-clip-text font-sans">
                Knife
              </p>
              <p className=" text-lg  rounded-full  text-pink-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faCoins} />
                3500$
              </p>
            </div>
          </div>
        </div>
        {/* phantom */}
           <div className="relative group overflow-hidden  rounded-lg mx-auto">
          <div className="-mb-20 p-2 relative  flex flex-col-3 m-2 rounded-lg text-white gap-3  text-2xl justify-center">
            <h3 className="text-blue-500 font-semibold text-xl">
              <FontAwesomeIcon icon={faRebel} /> Phantom 
            </h3>
          </div>
          <Image
            src={re3}
            alt="{girl.name}"
            width={400}
            height={500}
            className="w-130 h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className=" absolute inset-0 flex flex-col justify-center-safe p-3  bg-gradient-to-t from-purple-800 via-red/800 to-transparent ">
            <div className="flex flex-col text-purple-400 font-sans mt-5 ">
              <span>
                {' '}
                <FontAwesomeIcon icon={faHeadSideVirus} className="text-pink-400 text-sm" /> 45%
              </span>
              <span className="text-pink-400">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
            <div className="flex flex-col-2 justify-between">
              <p className="  text-lg text-transparent bg-gradient-to-l from-purple-600 to-white bg-clip-text font-sans">
                Rifle
              </p>
              <p className=" text-lg  rounded-full  text-pink-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faCoins} />
                1200$
              </p>
            </div>
          </div>
        </div>
        {/*OP  */}
            <div className="relative group overflow-hidden  rounded-lg mx-auto">
          <div className="-mb-20 p-2 relative  flex flex-col-3 m-2 rounded-lg text-white gap-3  text-2xl justify-center">
            <h3 className="text-blue-500 font-semibold text-xl">
              <FontAwesomeIcon icon={faRebel} /> Operator 
            </h3>
          </div>
          <Image
            src={re4}
            alt="{girl.name}"
            width={400}
            height={500}
            className="w-130 h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className=" absolute inset-0 flex flex-col justify-center-safe p-3  bg-gradient-to-t from-purple-800 via-red/800 to-transparent ">
            <div className="flex flex-col text-purple-400 font-sans mt-5 ">
              <span>
                {' '}
                <FontAwesomeIcon icon={faHeadSideVirus} className="text-pink-400 text-sm" /> 55%
              </span>
              <span className="text-pink-400">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
            <div className="flex flex-col-2 justify-between">
              <p className="  text-lg text-transparent bg-gradient-to-l from-purple-600 to-white bg-clip-text font-sans">
                Sniper
              </p>
              <p className=" text-lg  rounded-full  text-pink-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faCoins} />
                4200$
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
