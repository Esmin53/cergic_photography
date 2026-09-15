"use client"
import { useEffect, useState, useTransition } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper'
import { createPriceAction, deletePriceAction, getPricesData } from './actions';
import { FaCheck, FaTrash, FaSpinner } from 'react-icons/fa';

interface PriceItem {
  id: number;
  name: string;
  price: string;
}

const Prices = () => {
  const [prices, setPrices] = useState<PriceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const res = await createPriceAction(formData);
      if (res?.error) {
        setError(res.error);
      } else {
        form.reset();
        await loadPrices();
      }
    });
  };

  const handleDelete = (id: number) => {
    startTransition(async () => {
      const res = await deletePriceAction(id);
      if (res?.error) {
        setError(res.error);
      } else {
        await loadPrices(); 
      }
    });
  };

  return (
    <MaxWidthWrapper background_color={null}>
      <div className='w-full py-2 flex flex-col gap-2'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>Uredi cijene</h1>
        
        {error && <p className='text-red-500 text-sm'>{error}</p>}

        <div className='w-full flex flex-col gap-2 flex-1'>
          <form className='w-full flex gap-2 items-end' onSubmit={handleSubmit}>
            <div className='flex gap-2 flex-1 flex-col sm:flex-row'>
              <div className='flex flex-col flex-1'>
                <label htmlFor='name'>Naziv</label>
                <input 
                  name='name' 
                  required
                  className='h-12 bg-foreground rounded shadow px-2' 
                  placeholder='Naziv'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor='price'>Cijena</label>
                <input 
                  name='price' 
                  type='number' 
                  required
                  className='h-12 bg-foreground rounded shadow px-2' 
                  placeholder='Cijena'
                />
              </div>
            </div>
            <button 
              disabled={isPending}
              className='w-12 h-12 bg-button rounded shadow flex items-center justify-center hover:bg-button/80 cursor-pointer disabled:opacity-50' 
              type='submit'
            >
              {isPending ? <FaSpinner className='animate-spin text-xl' /> : <FaCheck className='text-2xl' />}
            </button>
          </form>

          {loading ? (
            <p className='text-gray-500 py-4'>Učitavanje cijena...</p>
          ) : prices.length > 0 ? (
            prices.map((item) => (
              <div className='w-full h-12 gap-2 flex items-center justify-between' key={item.id}>
                <div className='flex-1 flex items-center justify-between px-2 rounded bg-foreground shadow h-full'>
                  <p>{item.name}</p>
                  <p>{item.price} KM</p>
                </div>
                <button 
                  disabled={isPending}
                  onClick={() => handleDelete(item.id)}
                  className='w-12 h-12 bg-red-500 text-white rounded shadow flex items-center justify-center hover:bg-red-600 cursor-pointer disabled:opacity-50'
                >
                  <FaTrash className='text-lg' /> 
                </button>
              </div>
            ))
          ) : (
            <p className='text-gray-400 py-2'>Nema unesenih cijena.</p>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Prices;