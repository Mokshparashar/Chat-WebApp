import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';
const SearchInput = () => {
  const [search , setSearch] =useState("");
  const {setSearchConversation} = useConversation();
  const {conversation} = useGetConversation();

 const handleSubmit = (e) =>{
  e.preventDefault();
  if(!search) return;
  if(search.length < 3){
    return toast.error("Please enter at least 3 characters")
  }
  const conversation = conversation.find((c) => c.fullName.ToLowercase().includes(search.toLowerCase()));
  if(!conversation){
    setSelectedConversation(conversation)
    setSearch('');
  }else toast.error("No Such User found!")
 }
  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
    <input type="text" placeholder='Search' className='input input-bordered rounded-full' />
    <button type='submit' className='btn btn-circle bg-sky-500 text-white'><FaSearch className='w-6 h-6 outline-none'/></button>
    </form>
  )
}

export default SearchInput;