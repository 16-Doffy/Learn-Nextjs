import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
//import Image from 'next/image';
import Link from 'next/link';
//import mm from '../img/momo.jpg';
export default function NavbarPage() {
  return (
    <div className="mt-10">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="px-10 py-5 hover:bg-white  rounded-md  flex items-center gap-1 -mt-10 text-xl font-extrabold">
            Collection Doffy&apos;s
            <p className="animate-bounce text-red-500">
              <svg
                width="30"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor" />
              </svg>
            </p>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="min-w-[190px] bg-slate-300 text-sm text-center rounded-md  shadow-lg">
          <DropdownMenu.Item className="px-1 py-1 text-lg rounded hover:bg-gray-100 cursor-pointer outline-none">
            <Link href="/bannerGun">
              Favourate <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="px-2 py-1 text-lg rounded hover:bg-gray-100 cursor-pointer outline-none">
            Free
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px my-1 " />

          <DropdownMenu.Item className="px-2 py-1 text-lg rounded hover:bg-gray-100 cursor-pointer outline-none">
            Archive
          </DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="px-2 py-1 text-lg rounded hover:bg-gray-100 cursor-pointer outline-none">
              Donate
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent className="min-w-[220px] bg-white rounded-md p-1 shadow-lg ml-1">
                <DropdownMenu.Item className="px-2 py-1 text-lg rounded hover:bg-gray-100 cursor-pointer outline-none">
                  Momo
                </DropdownMenu.Item>
                <DropdownMenu.Item className="px-2 py-1 text-lg rounded hover:bg-gray-100 cursor-pointer outline-none">
                  Discount code…
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="h-px my-1 bg-gray-200" />
                <DropdownMenu.Item className="px-2 py-1 text-lg rounded hover:bg-gray-100 cursor-pointer outline-none">
                  Advanced options…
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="h-px my-1 " />

          <DropdownMenu.Item className="px-2 py-1 text-lg rounded hover:bg-gray-100 cursor-pointer outline-none">
            Share
          </DropdownMenu.Item>
          <DropdownMenu.Item className="px-2 py-1 text-lg rounded hover:bg-gray-100 cursor-pointer outline-none">
            Add to favorites
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px my-1 " />

          <DropdownMenu.Item className="px-2 py-1 text-lg rounded hover:bg-red-100 cursor-pointer text-red-600 outline-none flex flex-col">
            Special device{' '}
            <div className="float-right text-gray-500">
              <p>&quot;need to payment before go inside&quot;</p>
              <p>⌘ ⌫</p>
            </div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <div>
        {/* <p><Image src={mm} alt={''} width={800} height={800} className='w-60 h-75 rounded-4xl hover:scale-155 hover:-px-50 mt-2'></Image></p> */}
      </div>
    </div>
  );
}
