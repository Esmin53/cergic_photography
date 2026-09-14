import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowsRotate } from 'react-icons/fa6';
import { upload } from '@vercel/blob/client';
import { FaSpinner } from 'react-icons/fa';

interface UpdateBannerImages {
  slot: number;
  category: string;
  imageUrl: string;
}

const UpdateImageForm = ({ slot, category, imageUrl }: UpdateBannerImages) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [newImage, setNewImage] = useState<string>(imageUrl);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);

  async function handleDirectUpload(file: File) {
    try {
      const newBlob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/admin/upload',
      });

      return newBlob.url;
    } catch (error) {
      console.error("Direct upload error: ", error);
      return null;
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    setFileToUpload(file);
  };

  const handleClear = () => {
    setPreview(null);
    setFileToUpload(null);
  };

  const handleUpload = async () => {
    if (!fileToUpload) return;
    setIsUploading(true);

    try {
      const fileUrl = await handleDirectUpload(fileToUpload);

      if (!fileUrl) {
        setIsUploading(false);
        return;
      }

      const response = await fetch('/api/admin/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          slot,
          fileUrl,
          title: "no-data",
          textColor: "no-data",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const updatedUrl = `${fileUrl}?v=${Date.now()}`;
        
        setNewImage(updatedUrl);
        setPreview(null);
        setFileToUpload(null);
      }
    } catch (error) {
      console.error("Database sync error: ", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className='flex-1 flex flex-col bg-background rounded gap-2 shadow'>
      <div className='w-full aspect-square relative'>
        <label className='w-full aspect-square bg-background rounded border border-text p-4 relative block cursor-pointer group overflow-hidden'>
          <Image 
            src={preview || newImage} 
            fill 
            alt='Slot preview' 
            className='object-cover rounded transition-transform group-hover:scale-105'
          />

          {!preview && (
            <FaArrowsRotate className='z-10 text-6xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white drop-shadow-md pointer-events-none transition-transform group-hover:rotate-180 duration-500' />
          )}

          <input 
            disabled={isUploading}
            type="file" 
            accept="image/*" 
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-20"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div 
        className={`w-full h-10 bg-[#CD1818] rounded text-text flex items-center justify-center ${!preview || isUploading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`} 
        onClick={handleClear}
      >
        Clear
      </div>

      <button 
        type='submit' 
        className={`w-full h-10 bg-[#0E8388] rounded text-text flex items-center justify-center ${!fileToUpload || isUploading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`} 
        disabled={!fileToUpload || isUploading} 
        onClick={(event) => {
          event.preventDefault();
          handleUpload();
        }}
      >
        {isUploading ? <FaSpinner className='animate-spin' /> : "Upload"}
      </button>
    </div>
  );
};

export default UpdateImageForm;