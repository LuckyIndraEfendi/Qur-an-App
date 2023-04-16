import React from 'react';
import axios from 'axios';
import { BsFillGridFill, BsGrid1X2 } from "react-icons/bs"
import { useState, useEffect } from 'react';
import { getQuranApi } from '../api/Api';
import { useNavigate } from 'react-router-dom';
import CardSkeleton from '../components/CardSkeleton'
const Content = () => {
    const navigate = useNavigate()
    const [quran, setQuran] = useState(null)
    const [grid, setGrid] = useState(true)
    useEffect(() => {
        async function getQuran() {
            try {
                const url = await getQuranApi()
                setQuran(url.data)

            } catch (err) {
                console.log(err.message)
            }
        }
        getQuran()
    }, [])

    return (
        <>
            <div id="content">
                <div className="container m-auto py-2 px-3 gap-3">
                    <div className="sidebar bg-white px-5 py-4 rounded-md mt-16">
                        <div className="gridMenu mb-5 flex justify-end gap-3 ">
                            <BsFillGridFill size={20} onClick={() => setGrid(false)} />
                            <BsGrid1X2 size={20} onClick={() => setGrid(true)} />
                        </div>
                        <div className={`sidebarContent grid ${grid ? "grid-cols-1" : "grid-cols-2"}  gap-3 ${grid ? "sm:grid-cols-1" : "sm:grid-cols-3"}`}>
                        
                            {quran ? quran.map((result, i) => (
                                <div className="sidebarItems bg-slate-200 px-4 py-3 rounded-md flex justify-between cursor-pointer" key={i} onClick={()=>navigate(`/detail/${result.number}`)}>
                                    <div className="title flex gap-3 items-center">
                                        <span className=' px-2 text-center rounded-full text-sm bg-green-500'>{result.number}</span>
                                        <div className="">
                                            <h1 className='font-medium text-md'>{result.name.transliteration.id}</h1>
                                            <p className='mt-1 text-[12px]'>{result.name.translation.id} ({result.numberOfVerses})</p>
                                        </div>
                                    </div>
                                    <div className={`${grid ? 'titleArab flex items-center' : "hidden"}`}>
                                        <p className='text-lg'>{result.name.short}</p>
                                    </div>
                                </div>
                            )) : <CardSkeleton cards={6}/> }
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Content;