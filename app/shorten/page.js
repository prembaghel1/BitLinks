"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image';

const Shorten = () => {
    const [url, seturl] = useState("")
    const [ShortURL, setShortURL] = useState("")
    const [Generated, setGenerated] = useState("")

    function isValidURL(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    const generate = () => {
        const valurl = isValidURL(url)
        console.log(url)
        if (valurl == true && ShortURL.length > 3) {

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "url": url,
                "shorturl": ShortURL
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("http://localhost:3000/api/generate", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    seturl("")
                    setShortURL("")
                    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${ShortURL}`)
                    toast.success(result.message)
                    console.log(result)
                })
                .catch((error) => toast.warn(error.message));
        }else{
            toast.warn("Enter valid URL!")
        }
    }

    const copytext = (text) => {
        navigator.clipboard.writeText(text)
        toast.success('Copied to Clipboard')
    }

    return (
        <>

            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            // transition={Bounce}
            />

            <div className='mx-auto md:max-w-lg max-w-sm my-16 p-8 rounded-lg bg-purple-100 flex flex-col gap-4 shadow-md'>
                <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
                <div className='flex flex-col gap-2'>
                    <input className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white' type="text" placeholder='Enter your URL' name="" id="" value={url} onChange={(e) => seturl(e.target.value)} />
                    <input className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white' type="text" placeholder='Enter your preferred short URL text' name="" id="" value={ShortURL} onChange={(e) => setShortURL(e.target.value)} />
                    <button className='bg-purple-500 shadow-lg px-3 py-1 rounded-lg font-bold cursor-pointer text-white my-3' onClick={generate}>Generate</button>
                </div>

                {(Generated) && <>
                    <span className='font-bold text-lg'>Your Link</span>
                    <code className='flex gap-5'>
                        <Link target="_blank" href={Generated}>{Generated}</Link>
                        <Image className='cursor-pointer' src={"/copy.png"} width={20} height={1} alt='copy' onClick={() => copytext(Generated)} />
                    </code>
                </>
                }
            </div>
        </>
    )
}

export default Shorten
