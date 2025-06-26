"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

const Homepage = () => {
    const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (files: File[]) => {
        setFiles(files);
        setshow(true);
        console.log(files);
    };
    const [show,setshow] = useState<boolean>(false);
    return (
        <div>
            <div className='text-2xl p-5 px-4 md:text-2xl lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-2xl leading-relaxed lg:leading-snug text-center mx-auto'>
                Detect blood cancer early, accurately, and effortlessly with our AI-powered detection system <br />
                built to support modern laboratories and ensure better patient care.
            </div>
            <div className="w-screen max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">

                <div className="p-5 flex justify-center items-center">
                    {show? <div className="w-full">
                        <FileUpload onChange={handleFileUpload} />
                        <div className="w-full flex justify-center items-center">
                        <button className="flex justify-center items-center p-2 rounded-md w-fit text-black  font-semibold shadow-2xl shadow-green-600 hover:scale-105 transition-transform  hover:shadow-lg cursor-pointer duration-300 ease-in-out bg-cyan-400">Identify</button>
                        </div>
                    </div>:<div>
                        <FileUpload onChange={handleFileUpload} />
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Homepage