import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon,
    LightningBoltIcon
} from '@heroicons/react/outline';

import Image from 'next/image'; //lazy loading feature of next.js
import HeaderItem from './HeaderItem';

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-4 justify-between items-center h-auto" >
            <div className="flex flex-grow justify-evenly max-w-2xl mt-2">
                {/* Icon not icon because it is a component */}
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='COLLECTION' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            {/* <Image
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={150} height={100} /> */}
            <h1 className="text-3xl font-bold tracking-widest p-2 text-[#06202A] bg-gray-200 rounded-md cursor-pointer " >MojLo</h1>
        </header>
    )
}

export default Header
