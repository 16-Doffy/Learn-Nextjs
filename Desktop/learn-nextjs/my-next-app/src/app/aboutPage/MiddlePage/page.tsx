'use client';
import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import kiem1 from '../img/kiem1.png';
import FooterMidle from './footerMidle/page';
import { useState } from 'react'; // Thêm useState

import HeaderAgent from './bannerAgent/page';
import BannerGun from './bannerGun/page';


export default function MiddlePage() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [modalType, setModalType] = useState<string | null>(null); // 'info' hoặc 'trailer'

  // Hàm mở modal

  // const openModal = (agent: Agent, type: string) => {
  //   if (type === 'info') {
  //     router.push(`/aboutPage/agent/${agent.id}`);
  //   } else if (type === 'trailer') {
  //     router.push(`/aboutPage/agent/${agent.id}/trailer`);
  //   }
  // };

  // Hàm đóng modal
  const closeModal = () => {
    setSelectedAgent(null);
    setModalType(null);
  };

  type Agent = {
    id: number;
    name: string;
    role: string;
    image: StaticImageData;
    description: string;
    trailerUrl: string;
  };

  return (
    <>
      <HeaderAgent></HeaderAgent>
      <BannerGun />

      {/* footer */}
      <div className="mt-5 text-2xl flex flex-col-2 text-black font-bold   p-2 gap-2">
        <Image
          src={kiem1}
          width={500}
          height={400}
          alt=""
          className="w-6 h-8 object-cover "
        ></Image>
        Battles
      </div>
      <div className="grid-cols grid gap-50 w-400 m-auto p-2 ">
        <FooterMidle />
      </div>
      {/* end-footer */}
    
      {/* Modal */}
      {selectedAgent && modalType && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center z-10"
              >
                &times;
              </button>

              {modalType === 'info' ? (
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-4 text-blue-400">{selectedAgent.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Image
                        src={selectedAgent.image}
                        alt={selectedAgent.name}
                        width={400}
                        height={500}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-4">
                        <span className="font-bold text-white">Vai trò:</span> {selectedAgent.role}
                      </p>
                      <p className="text-gray-300">
                        <span className="font-bold text-white">Mô tả:</span>{' '}
                        {selectedAgent.description}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-4 text-center text-red-400">
                    {selectedAgent.name} - Trailer
                  </h2>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-96"
                      src={selectedAgent.trailerUrl}
                      title={`${selectedAgent.name} trailer`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
