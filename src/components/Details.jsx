import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    useEffect(() => {
        async function getDetails() {
            try {
                const url = await axios.get(`https://api.quran.gading.dev/surah/${id}`);
                const data = await url.data;
                setDetails(data.data);
            } catch (err) {
                console.log(err.message);
            }
        }
        getDetails();
    }, []);
    return (
        <>
            <div className="details w-full absolute -z-10 top-24 px-5 right-0">
                <div className="detailsContent ">
                    <div className="detailsItems bg-white px-4 py-3 rounded-md flex gap-3 flex-col ">
                        {details ? details.verses.map((result, i) => (
                             <div className=" detailList" key={i}>
                             <span className="bg-green-400 text-center px-2 py-1 rounded-full">{result.number.inSurah}.</span>
                             <h1 className=" text-end text-2xl">{result.text.arab}</h1>
                             <div className="px-4 py-3 mt-6">
                                 <h1 className="font-bold text-lg">{result.text.transliteration.en}</h1>
                                 <p className="mt-1">{result.translation.id}</p>
                             </div>
                             </div> 
                        )) : "Loading..."}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;