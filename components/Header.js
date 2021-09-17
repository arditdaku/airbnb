import { useState } from 'react';
import Image from 'next/image';
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UsersIcon,
    UserCircleIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRangePicker } from 'react-date-range';

function Header() {
    const [searchInput, setSearchInput] = useState('');

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const handleSelect = (ranges) => {
        console.log(ranges);
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const resetInput = () => {
        setSearchInput('');
    };
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };
    return (
        <header
            className={
                'sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10 '
            }
        >
            {/* Left */}
            <div className={'relative flex items-center h-10 cursor-pointer'}>
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* Middle */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                    type="text"
                    className={
                        'flex-grow pl-5 bg-transparent outline-none text-sm' +
                        'text-gray-600 placeholder-gray-400'
                    }
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    placeholder={'Start your search'}
                />
                <SearchIcon
                    className={
                        'hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'
                    }
                />
            </div>
            {/* Right */}
            <div
                className={
                    'flex  items-center justify-end space-x-4 text-gray-400'
                }
            >
                <p className={'hidden md:inline cursor-pointer'}>
                    Become a host
                </p>
                <GlobeAltIcon className={'h-6 cursor-pointer'} />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className={'h-6 cursor-pointer'} />
                    <UserCircleIcon className={'h-6 cursor-pointer'} />
                </div>
            </div>
            {searchInput && (
                <div className={'flex flex-col col-span-3 mx-auto'}>
                    <DateRangePicker
                        onChange={handleSelect}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        ranges={[selectionRange]}
                    />
                    <div className={'flex items-center border-b mb-4'}>
                        <h2 className={'text-2xl flex-grow font-semibold'}>
                            Number of Guests
                        </h2>
                        <UsersIcon className={'h-5'} />
                        <input
                            value={noOfGuests}
                            type="number"
                            className={
                                'w-12 pl-2 text-lg outline-none text-red-400'
                            }
                            min={1}
                        />
                    </div>
                    <div className="flex">
                        <button
                            className="flex-grow tex-gray-500"
                            onClick={resetInput}
                        >
                            Cancel
                        </button>
                        <button
                            className="flex-grow text-red-400"
                            onClick={resetInput}
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
