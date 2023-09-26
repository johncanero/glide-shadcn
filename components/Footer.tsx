import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { BsGooglePlay, BsApple } from 'react-icons/bs';

const Footer = () => {
  return (
    <div>
      <div className="pt-14 bg-neutral-900 lg:px-[200px]">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold lg:max-w-lg lg:text-6xl">Sign up and Scoot off today</p>
          </div>
          {/* GoogleStore and AppStore */}
          <div className="flex gap-10">
            {/* Google PlayStore */}
            <Button className="flex gap-4 px-6 py-8 bg-zinc-50 hover:bg-zinc-900 dark:text-black dark:hover:text-white hover:text-white rounded-xl">
              <div>
                <BsGooglePlay size={28} />
              </div>

              <div>
                <p className="text-xs text-left">Get it on</p>
                <p className="text-lg font-semibold text-left">GooglePlay</p>
              </div>
            </Button>

            {/* AppStore */}
            <Button className="flex gap-4 px-6 py-8 bg-zinc-50 hover:bg-zinc-900 dark:text-black dark:hover:text-white hover:text-white rounded-xl">
              <div>
                <BsApple size={28} />
              </div>

              <div>
                <p className="text-xs text-left">Get it on</p>
                <p className="text-lg font-semibold text-left">AppStore</p>
              </div>
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <Image
            src='/images/semi-circles.png'
            alt='semi-circles'
            width={1500}
            height={1500}
            className="mx-auto"
          />
        </div>
      </div>

      <footer className="my-4 text-sm text-center text-gray-500 md:block">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/johncanero/"
        >

          <span className="font-bold text-gray-900 dark:text-gray-100">
            John Cañero
          </span>
        </Link> &copy; {new Date().getFullYear()} All Rights Reserved
      </footer>
    </div>
  );
}

export default Footer;