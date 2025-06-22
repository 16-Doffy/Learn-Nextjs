import Image from 'next/image';
//import rz from '../../../../public/img/rz.jpg';
//import styles from '../../styles/aboutPage.module.css';
export default function NavbarPage() {
  return (
    <>
      <div className="Header ">
        <h1 className="flex">
          Thiên đường tung tăng
          <span>
            <Image
              src="https://ih1.redbubble.net/image.4968662423.5036/st,small,507x507-pad,600x600,f8f8f8.u4.jpg"
              width={80}
              height={20}
              alt={'doffy'}
            ></Image>
          </span>
        </h1>
        <div>----------</div>
        <div className="flex gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </span>

          <span>Home</span>
          <span>|Hot</span>
          <span>|Popular</span>
        </div>
        <div>----------</div>
        <div className="flex flex-col ">
          <span>Treding</span>
          <span>OnlyFan Video</span>
        </div>
        <div>----------</div>
      </div>
    </>
  );
}
