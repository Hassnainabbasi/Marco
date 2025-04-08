import { ArrowBack, KeyboardArrowLeft, MoreVert } from "@mui/icons-material";
import React, { useState } from "react";

const ChatMobile = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = {
    All: ["All", "Unread Chats", "Important"],
    Buying: ["All Orders", "Pending", "Delivered"],
    Selling: ["All Gigs", "Active", "Completed"],
  };

  return (
    <div className=" max-w-md mx-auto">
      <div className="flex items-center bg-gray-100 px-4 py-5 space-x-3 ">
        <button className="text-2xl font-semibold"><ArrowBack className="text-teal-950" style={{fontSize : "30px",}}/></button>
        <h2 className="text-base font-bold text-teal-950">Chats</h2>
      </div>

      <div className="px-4">
      <div className="flex justify-between border-b mb-4">
        {["All", "Buying", "Selling"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab
                ? "border-b-2 border-black text-teal-950 font-bold"
                : "text-teal-950 font-medium"
            }`}
            onClick={() => {
              setActiveTab(tab);
              setActiveFilter(filters[tab][0]);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mb-4">
        <p className="text-xs font-medium text-teal-950 mb-2">QUICK FILTERS</p>
        <div className="flex flex-wrap gap-2">
          {filters[activeTab].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1 rounded-full border ${
                activeFilter === filter
                  ? "bg-cyan-100 border-none text-teal-950 font-bold text-xs"
                  : "text-teal-950 border-teal-950  text-xs"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* <div className="mt-6">
      {activeFilter === "All" && 
      <div className=" mb-2">
        <div>
            <hr className="border-gray-200 border"/>
        </div>
        <div className='flex border-b'>
               <div className='flex gap-3 items-center mt-5 mb-5'>
               <div >
                     <img className='w-10 rounded-full' src="https://images.olx.com.pk/thumbnails/506204892-400x300.webp" alt=""/>
                 </div>
                 <div>
                 <h1 className='font-bold text-teal-950 text-sm'>SmartPhone Online Bazar</h1>
                 <h1 className='font-bold text-teal-950 text-sm sm:whitespace-nowrap line-clamp-1'>Vivo Y19 (8gb-256gb)PTA Approved</h1>
                 <h1 className='text-red-400 text-sm'>Ad deleted</h1>
                 </div>
               </div>
               <div className='flex flex-col justify-between py-3 items-end'>
                 <h1 className='text-gray-500 text-sm'>23/03/2025</h1>
                 <h1 className='text-gray-500 text-sm'><MoreVert/></h1>
               </div>
               </div>
      </div>
      }
      {activeFilter === "Buying" && <p>Showing all chats.</p>}
      {activeFilter === "Selling" && <p>Showing all chats.</p>}
          
      </div> */}
<div className="mt-6">
  {/* All Tab */}
  {activeTab === "All" && activeFilter === "All" && (
    <div className="mb-2">
      <div>
        <hr className="border-gray-200 border" />
      </div>
      <div className="flex border-b">
        <div className="flex gap-3 items-center mt-5 mb-5">
          <div>
            <img
              className="w-10 rounded-full"
              src="https://images.olx.com.pk/thumbnails/506204892-400x300.webp"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-bold text-teal-950 text-sm">
              SmartPhone Online Bazar
            </h1>
            <h1 className="font-bold text-teal-950 text-sm sm:whitespace-nowrap line-clamp-1">
              Vivo Y19 (8gb-256gb)PTA Approved
            </h1>
            <h1 className="text-red-400 text-sm">Ad deleted</h1>
          </div>
        </div>
        <div className="flex flex-col justify-between py-3 items-end">
          <h1 className="text-gray-500 text-sm">23/03/2025</h1>
          <h1 className="text-gray-500 text-sm">
            <MoreVert />
          </h1>
        </div>
      </div>
    </div>
  )}

  {/* Buying Tab */}
  {activeTab === "Buying" && (
    <div>
      <p>Buying tab content: {activeFilter}</p>
    </div>
  )}

  {/* Selling Tab */}
  {activeTab === "Selling" && (
    <div>
      <p>Selling tab content: {activeFilter}</p>
    </div>
  )}
</div>

      </div>
    </div>
  );
};

export default ChatMobile;
