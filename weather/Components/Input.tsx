"use client";

//setLocation:React.Dispatch<React.SetStateAction<string>>;
import React from "react";
interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}
import { FcSearch } from "react-icons/fc";
const Input = ({ handleSearch, setLocation }: InputProps) => {
  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1 ">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent border-b-2 placeholder-white text-white"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="ml-[-25px] text-white">
        <FcSearch />
      </div>
    </form>
  );
};

export default Input;
