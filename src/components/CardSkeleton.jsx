import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const CardSkeleton = ({ cards }) => {
    return (
        <>
            {
                Array(cards).fill(0).map((ress, i) => (
                    <div className="sidebarItems bg-slate-200 px-4 py-3 rounded-md flex flex-col w-full cursor-pointer mb-2" key={i}>
                        <div className="flex items-center gap-3">
                            <Skeleton circle width={30} height={30} />
                            <div className="w-full">
                                <Skeleton height={20} />
                                <Skeleton height={10} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default CardSkeleton;