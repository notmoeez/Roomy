"use client";
import { SafeListing, SafeUser } from "@/app/types";
import axios from "axios";
import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import KeywordSearch from "./KeywordSearch";
import { useState } from "react";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

interface Listing {
  data: SafeListing;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const [listings, setListings] = useState<Listing[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get(`/api/search?query=${query}`);
      setListings(response.data);
      console.log(listings);
    } catch (error) {
      console.error("Failed to fetch listings", error);
    }
  };
  return (
    <div className="fixed w-screen bg-gray-50 z-10 shadow-md">
      <div
        className="
          py-0 
          border-white
          border-b-[1px]
          shadow-sm
        "
      >
        <Container>
          <div
            className="
            bg-gray-50
            flex 
            border-white
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Logo />
            {/* <Search /> */}
            <KeywordSearch onSearch={handleSearch} />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
