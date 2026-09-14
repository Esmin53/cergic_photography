import Image from 'next/image';
import React, { useState } from 'react'
import { FaArrowsRotate } from 'react-icons/fa6';
import { upload } from '@vercel/blob/client';
import { FaSpinner } from 'react-icons/fa';

interface UpdateBannerImages {
    slot: number
    category: string
    imageUrl: string
    titleProp: string
    colorProp: string
}

const UpdateImageForm = ({slot, category, imageUrl, titleProp, colorProp}: UpdateBannerImages) => {
    const [isUploading, setIsUploading] = useState<boolean >(false)
    const [preview, setPreview] = useState<string | null>(null);
    const [newImage, setNewImage] = useState<string | null>(null)
    const [fileToUpload, setFileToUpload] = useState<File | null>(null)
    const [title, setTitle] = useState<string>(titleProp)
    const [textColor, setTextColor] = useState<string>(colorProp)

    async function handleDirectUpload(file: File) {
        let uploadUrl: string | null = null
        try {
            const newBlob = await upload(file.name, file, {
            access: 'public',
            handleUploadUrl: '/api/admin/upload',
            });

            uploadUrl = newBlob.url
        } catch (error) {
            console.log("Error: ", error)
        } finally {
            setFileToUpload(null)
            setPreview(null)

            return uploadUrl
        } 
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    setFileToUpload(file)
  }

  const handleUpload = async () => {
    setIsUploading(true)
    
    if (title.length < 1) {
        setIsUploading(false)
        return
    }

    try {
        const fileUrl = fileToUpload && await handleDirectUpload(fileToUpload)

        if (!fileUrl) {
            return
        }

        const response = await fetch('/api/admin/update', {
        method: 'POST',
        body: JSON.stringify({
            category,
            slot,
            fileUrl,
            textColor,
            title
        })
        });

        const data = await response.json();
        setNewImage(fileUrl)
    } catch (error) {
        console.log(error)
        setIsUploading(false)
    } finally {
        setIsUploading(false)
    }
    }

        return (
                <div className='flex-1 flex flex-col gap-2'>
                <div>
                    <label htmlFor='naslov'>Naslov</label>
                    <input type='text' className='bg-background w-full border border-text rounded h-10 px-2' placeholder='Naslov' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className='flex w-full items-center justify-between h-10'>
                    <p>Boja teksta:</p>
                    <div className='flex gap-2 h-full'>
                        <div className={`h-full aspect-square rounded bg-[#e2e8f0] cursor-pointer shadow ${textColor == "#e2e8f0" ? "border-3 border-[#0E8388]" : ""}`} onClick={() => setTextColor("#e2e8f0")} />
                        <div className={`h-full aspect-square rounded bg-[#222831] cursor-pointer shadow ${textColor == "#222831" ? "border-3 border-[#0E8388]" : ""}`} onClick={() => setTextColor("#222831")}/>
                        
                    </div>
                </div>
                <div className='w-full aspect-square bg-background rounded border border-text p-4 relative'>
                    <label className='w-full aspect-square bg-background rounded border border-text p-4 relative block cursor-pointer group overflow-hidden'>
                        {!preview ? <Image 
                            src={newImage ? newImage : imageUrl} 
                            fill 
                            alt='Slot preview' 
                            className='object-cover rounded transition-transform group-hover:scale-105'
                        /> : <Image 
                            src={preview} 
                            fill 
                            alt='Slot preview' 
                            className='object-cover rounded transition-transform group-hover:scale-105'
                        /> }

    
                        {!preview ? <FaArrowsRotate className='z-10 text-6xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white drop-shadow-md pointer-events-none transition-transform group-hover:rotate-180 duration-500' /> :
                        <></>}

                        <input 
                            disabled={!preview ? false : true}
                            type="file" 
                            accept="image/*" 
                            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-20"
                            onChange={handleFileChange}
                        />
                    </label>
                    
                </div>
                <div className={`w-full h-10 bg-[#CD1818] rounded text-text flex items-center justify-center ${!preview ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={() => {
                    setPreview(null)
                    setFileToUpload(null)
                    }}>
                    Clear
                </div>
                <button type='submit' className={`w-full h-10 bg-[#0E8388] rounded text-text flex items-center justify-center ${!fileToUpload ? "cursor-not-allowed" : "cursor-pointer"}`} disabled={fileToUpload ? false : true} onClick={(event) => {
                    event.preventDefault()
                    fileToUpload && handleUpload()
                }} >
                    {
                        isUploading ?
                        <FaSpinner className='animate-spin'/>
                        :
                        "Upload"
                    }
                </button>
            </div>
  )
}

export default UpdateImageForm