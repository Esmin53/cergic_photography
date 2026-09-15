"use client"

import { useEffect, useState, useTransition } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper'
import { getPricesData } from './admin/actions';

interface PriceItem {
  id: number;
  name: string;
  price: string;
}

const Prices = () => {
  const [prices, setPrices] = useState<PriceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadPrices = async () => {
    const res = await getPricesData();
    if (res?.error) {
      setError(res.error);
    } else if (res?.data) {
      setPrices(res.data);
    }
  };

  useEffect(() => {
    async function init() {
      setLoading(true);
      await loadPrices();
      setLoading(false);
    }
    init();
  }, []);



  return (
    <MaxWidthWrapper background_color={null}>
        <div className='flex-1 flex flex-col gap-4 sm:p-2 py-6 sm:py-2 pt-8 rounded' id='cijene'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl sm:text-3xl'>Cijene</h1>
                <div className='w-full sm:w-3/4 h-0.5 bg-text'/>
                <p>Svi paketi mogu biti prilagođeni prema vašim potrebama.</p>
            </div>
            <div className='w-full gap-4 items-start justify-center flex flex-col'>
                {prices.length ? prices.map((item) => <div className='w-full sm:w-3/4 flex items-center justify-between' key={item.id}>
                    <h1 className='text-lg sm:text-xl'>{item.name}</h1>
                    <div className="flex-1 mx-4 mt-2 max-h-0.5 border-b-2 border-dotted border-text" />
                    <p className='text-lg sm:text-xl'>{Number(item.price).toFixed(2)} KM</p>
                </div>) : <div />}
            </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default Prices