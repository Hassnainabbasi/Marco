import { MoreVert } from '@mui/icons-material'
import { PhoneCall } from 'lucide-react'
import React from 'react'

export default function ChatPageCenter() {
  return (
    <div className='flex '>
     <div className='flex-1'>
        <div className='border h-screen flex flex-col'>
        <h1 className='text-lg font-bold text-teal-950 p-4 bg-neutral-200'>INBOX</h1>
        <div className='px-4'>
         <div className='mt-2'>
            <h1 className='text-teal-950 text-xs font-semibold'>QUICK FILTERS</h1>
           <div className='flex gap-4 mt-2 mb-2'>
           <button className='border bg-teal-100 font-semibold text-teal-950  rounded-2xl px-3 text-sm py-1'>All</button>
            <button className='border rounded-2xl px-3 border-teal-950 text-sm py-1'>Unread Chats</button>
            <button className='border rounded-2xl px-3 border-teal-950 text-sm py-1'>Important</button>
           </div>

         </div>
        </div>
        <div className=''>
            <hr />
        </div>
      <div className='flex px-5 border-b'>
      <div className='flex gap-3 items-center mt-5 mb-5'>
      <div >
            <img className='w-10 rounded-full' src="https://images.olx.com.pk/thumbnails/506204892-400x300.webp" alt=""/>
        </div>
        <div>
        <h1 className='font-bold text-teal-950 text-sm'>SmartPhone Online Bazar</h1>
        <h1 className='font-bold text-teal-950 text-sm sm:whitespace-nowrap'>Vivo Y19 (8gb-256gb)PTA Approved</h1>
        <h1 className='text-red-400 text-sm'>Ad deleted</h1>
        </div>
      </div>
      <div className='flex flex-col justify-between py-3 items-end'>
        <h1 className='text-gray-500 text-sm'>23/03/2025</h1>
        <h1 className='text-gray-500 text-sm'><MoreVert/></h1>
      </div>
      </div>
        </div>
     </div>
     <div className='flex-[2] border'>
    <div className='px-4 flex justify-between items-center'>
    <div className='flex gap-2 items-center mt-3 mb-2'>
      <div >
            <img className='w-10 rounded-full' src="https://images.olx.com.pk/thumbnails/506204892-400x300.webp" alt=""/>
        </div>
        <div>
        <h1 className='font-bold text-teal-950 text-sm'>SmartPhone Online Bazar</h1>
        <h1 className='text-teal-950 text-xs'>Last Active 2 hours ago</h1>
        </div>
      </div>
      <div className='flex items-center gap-8 '>
        <img src="https://www.olx.com.pk/assets/flag_noinline.e07faa862e569448684a7fa170f5ceda.svg" alt="" />
        <h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" data-aut-id="icon" viewBox="0 0 1024 1024" class="b934fb7a"><path d="M784.6 852.4a643 643 0 0 1-613-613l150-60L413.3 363l-71 35.5v26.4a257.2 257.2 0 0 0 256.9 257h26.4l11.9-23.7 23.7-47.4 183.3 91.8-60 149.9zm133.5-209L661.1 515l-57.4 19.2-30 60c-74.1-11-132.8-69.8-144-143.9l60.2-30L509 363 380.6 106l-54.2-20.6L112.2 171l-26.9 39.8c0 401.3 326.6 727.9 728 727.9l39.7-27 85.7-214.1-20.6-54.2z"></path></svg>
        </h1>
        <h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" data-aut-id="icon" viewBox="0 0 1024 1024" class="b934fb7a"><path d="M888.8 103.8l41.9 39.7V621l-41.9 39.7H386.4l-293.1 199v-716l41.9-39.8h753.6zM847 183.3H177l.2 523 184-125.2H847V183.3zM326.5 289.1c18 0 32.4 4.1 43 12.4s16.8 19 18.3 32.5h-31c-1.1-6.4-4.2-11.9-9.4-16.4s-12-6.8-21-6.8c-8 0-14.4 2-19.3 5.9s-7.3 9.5-7.3 16.8c0 5.7 1.7 10.4 5 14.2s7.6 6.7 12.7 8.8c5.2 2.2 12.1 4.7 21 7.5 11.2 3.4 20.4 6.7 27.5 10.2s13.2 8.4 18.1 14.9c5 6.5 7.4 15.1 7.4 25.8 0 8.2-2 16-6.2 23s-10.6 12.8-19.1 17c-8.6 4.4-19 6.5-31.4 6.5-12.1 0-23-2-32.5-6s-17.1-9.8-22.8-17.2a47 47 0 0 1-9.8-25.2h30.6c.9 7.3 4.2 13.6 10 18.8s13.5 7.9 23.2 7.9c8.7 0 15.4-2.2 20.2-6.7s7.2-10.2 7.2-17.2c0-6-1.8-11-5.3-15s-7.9-6.9-13-9c-5.3-2.3-12.4-4.9-21.4-7.7-11-3.4-20-6.7-27-10s-12.9-8.2-17.7-14.6a40.2 40.2 0 0 1-7.3-25 41.2 41.2 0 0 1 27.1-39.8 75.8 75.8 0 0 1 30.2-5.6zm388.6 0c18 0 32.4 4.1 43 12.4s16.8 19 18.3 32.5h-31c-1-6.4-4.2-11.9-9.3-16.4s-12.1-6.8-21-6.8c-8 0-14.5 2-19.4 5.9s-7.2 9.5-7.2 16.8c0 5.7 1.6 10.4 5 14.2s7.6 6.7 12.7 8.8c5 2.2 12 4.7 21 7.5 11.2 3.4 20.3 6.7 27.5 10.2s13.1 8.4 18 14.9c5 6.5 7.5 15.1 7.5 25.8 0 8.2-2.1 16-6.3 23s-10.6 12.8-19.1 17c-8.6 4.4-19 6.5-31.4 6.5-12 0-22.9-2-32.4-6s-17.2-9.8-22.9-17.2a47 47 0 0 1-9.8-25.2H689c.8 7.3 4.1 13.6 9.9 18.8s13.5 7.9 23.2 7.9c8.7 0 15.5-2.2 20.2-6.7s7.2-10.2 7.2-17.2c0-6-1.7-11-5.3-15s-7.8-6.9-13-9c-5.2-2.3-12.3-4.9-21.4-7.7-11-3.4-20-6.7-27-10s-12.8-8.2-17.7-14.6a40.2 40.2 0 0 1-7.3-25 41.2 41.2 0 0 1 27.1-39.8 75.8 75.8 0 0 1 30.2-5.6zm-247.7 4.8l57.8 132.4L582 294h34.6v165.8h-28.9V335.4l-50.5 124.3h-25l-50.8-124.3v124.3h-28.7V294h34.7z"></path></svg>
        </h1>
        <h1><MoreVert/></h1>
        <h1><svg width="25" height="25" fill-rule="evenodd" data-aut-id="icon" viewBox="0 0 1024 1024" class="b934fb7a"><path d="M878.3 85.3L512 451.6 145.7 85.3H85.3v60.4L451.7 512 85.3 878.3v60.4h60.4L512 572.3l366.3 366.4h60.4v-60.4L572.4 512l366.3-366.3V85.3z" class="rui-22SD7"></path></svg></h1>
      </div>
    </div>
      <div className=''>
            <hr />
        </div>
        <div className='flex gap-2 items-center mt-3 mb-3 px-4'>
      <div >
            <img className='w-10 h-11 rounded-sm' src="https://images.olx.com.pk/thumbnails/523943839-120x90.webp" alt=""/>
        </div>
        <div>
        <h1 className='font-bold text-teal-950 text-sm'>Vivo Y19 (8gb-256gb)PTA Approved</h1>
        <h1 className='text-teal-950 text-sm'>Rs 20,500</h1>
        </div>
      </div>
      <div className=''>
            <hr />
        </div>
     </div>
    </div>
  )
}
