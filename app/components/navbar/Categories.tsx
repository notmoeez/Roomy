"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  TbBeach,
  TbMountain,
  TbPool,
  TbFridge,
  TbMassage,
} from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
  GiWaterfall,
  GiMeal,
} from "react-icons/gi";
import {
  FaDumbbell,
  FaHotTub,
  FaParking,
  FaSkiing,
  FaWifi,
} from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import {
  MdOutlineVilla,
  MdOutlineFort,
  MdMicrowave,
  MdOutlinePersonalVideo,
} from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property has Beach access!",
  },
  {
    label: "AC",
    icon: BsSnow,
    description: "This property has AC!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is Modern!",
  },
  {
    label: "TV",
    icon: MdOutlinePersonalVideo,
    description: "This property has TV!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful Pool!",
  },
  {
    label: "Meals",
    icon: GiMeal,
    description: "This property has dinner and breakfast facilities!",
  },
  {
    label: "WiFi",
    icon: FaWifi,
    description: "This property has Wifi!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has Skiing Activies!",
  },
  {
    label: "Fridge",
    icon: TbFridge,
    description: "This property provides Fridges!",
  },
  {
    label: "Jaccuzi",
    icon: FaHotTub,
    description: "This property has a Jaccuzi!",
  },
  {
    label: "Gym",
    icon: FaDumbbell,
    description: "This property offers Gym Facilities!",
  },
  {
    label: "Spa",
    icon: TbMassage,
    description: "This property offers Spa facilities!",
  },
  {
    label: "Parking",
    icon: FaParking,
    description: "This property has parking facilities!",
  },
  {
    label: "Oven",
    icon: MdMicrowave,
    description: "This property provides an Oven!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is Brand New and Luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          text-black
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
