import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Error() {

  const { query } = useRouter();

  useEffect(()=>{
    if(query.error){
      toast.error(query.error)
    }
  },[query])

  return( 
    <ToastContainer/>
  )
}