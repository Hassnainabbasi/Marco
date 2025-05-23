import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { ArrowForwardIos } from '@mui/icons-material'
import FooterTwo from '../components/footer/FooterTwo'

export function GetMobileRecentData() {
  const categories = [
    {
      title: 'Mobile Phones',
      items: [
        {
          id: 1,
          price: 'Rs 113,000',
          name: 'Samsung Galaxy S22 Plus Approved',
          location: 'Johar Town, Lahore',
          time: '2 weeks ago',
          image:
            'https://storage.googleapis.com/a1aa/image/RLWGjhfOrrbuMtLu7hb10wdQQLqm7MWorax23WJNb-4.jpg',
        },
        {
          id: 2,
          price: 'Rs 145,000',
          name: 'Google pixel 8pro 12/256 PTA(7 pro PTA)',
          location: 'Samanabad, Lahore',
          time: '3 days ago',
          image:
            'https://storage.googleapis.com/a1aa/image/7pecTFe8s3ojIkvA7SoV2XtLkqVHYYGSyZDKB4F3SmI.jpg',
        },
        {
          id: 3,
          price: 'Rs 170,000',
          name: 'Vivo X100 Pro 16/512gb Black Colour',
          location: 'Cantt, Sialkot',
          time: '1 week ago',
          image:
            'https://storage.googleapis.com/a1aa/image/M1N39wg2FIklTfmbm81_0ZT2D1FMgKXsgKBoduzraH0.jpg',
        },
        {
          id: 4,
          price: 'Rs 124,000',
          name: 'Iphone 12 Brand New PTA Approved',
          location: 'Johar Town, Lahore',
          time: '2 weeks ago',
          image:
            'https://storage.googleapis.com/a1aa/image/RUgZfDPj7ka2xFm43Q15rdceMdJI7yiGZG_JTI4jpDU.jpg',
        },
        {
          id: 5,
          price: 'Rs 110,000',
          name: 'OnePlus 11R 12/256gb',
          location: 'Gulberg, Lahore',
          time: '5 days ago',
          image:
            'https://5.imimg.com/data5/SELLER/Default/2023/8/331220969/JP/KT/ZP/192898351/oneplus-11r-5g-galactic-silver-16gb-ram-256gb-storage.jpg',
        },
      ],
    },
    {
      title: 'Cars',
      items: [
        {
          id: 1,
          price: 'Rs 2,500,000',
          name: 'Toyota Corolla 2021',
          location: 'Johar Town, Lahore',
          time: '2 weeks ago',
          image: 'https://i.ytimg.com/vi/HQonXLszgNQ/maxresdefault.jpg',
        },
        {
          id: 2,
          price: 'Rs 3,200,000',
          name: 'Honda Civic 2020',
          location: 'Samanabad, Lahore',
          time: '3 days ago',
          image:
            'https://mma.prnewswire.com/media/963411/2020_Honda_Civic_Si_Coupe.jpg?p=facebook',
        },
        {
          id: 3,
          price: 'Rs 4,000,000',
          name: 'BMW 3 Series 2019',
          location: 'Cantt, Sialkot',
          time: '1 week ago',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6T-C9DrXLJIYQi3hwQleA5HH3XsVYBLhSWA&s',
        },
        {
          id: 4,
          price: 'Rs 5,500,000',
          name: 'Mercedes-Benz C-Class 2018',
          location: 'Johar Town, Lahore',
          time: '2 weeks ago',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAbyWP3nXGPmRJO2re2hpLUzDlsKCBhKvkw&s',
        },
        {
          id: 5,
          price: 'Rs 6,000,000',
          name: 'Audi A4 2022',
          location: 'DHA, Lahore',
          time: '1 day ago',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqin1vVp_pDoFjVYthr4CArs15d3TiRUbtw&s',
        },
      ],
    },
    {
      title: 'Bikes',
      items: [
        {
          id: 1,
          price: 'Rs 150,000',
          name: 'Yamaha YBR 125',
          location: 'Johar Town, Lahore',
          time: '2 weeks ago',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/Yamaha_YBR125_%28Fuel_Injection_-_EU_Spec%29.JPG',
        },
        {
          id: 2,
          price: 'Rs 180,000',
          name: 'Honda CB 150F',
          location: 'Samanabad, Lahore',
          time: '3 days ago',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXAv6qyf17Lakb67VaNM_xslySyyHYwLYeag&s',
        },
        {
          id: 3,
          price: 'Rs 200,000',
          name: 'Suzuki GS 150',
          location: 'Cantt, Sialkot',
          time: '1 week ago',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpNETHuODhXNHEj9p2KKjkD_4k0LwTEmbpw&s',
        },
        {
          id: 4,
          price: 'Rs 220,000',
          name: 'Kawasaki Ninja 250',
          location: 'Johar Town, Lahore',
          time: '2 weeks ago',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDCT-xoU2qoXbl7oY2qqnd1-3DWlpnF2eFA&s',
        },
        {
          id: 5,
          price: 'Rs 250,000',
          name: 'Harley Davidson Iron 883',
          location: 'Gulberg, Lahore',
          time: '5 days ago',
          image:
            'https://images.hindustantimes.com/auto/img/2020/03/22/1600x900/harleydavidson-iron-883-BS6_Price_HT_Auto_1584868259141_1584868259357.jpg',
        },
      ],
    },
    {
      title: 'Houses',
      items: [
        {
          id: 1,
          price: 'Rs 25,000,000',
          name: '5 Marla House in DHA',
          location: 'DHA, Lahore',
          time: '2 weeks ago',
          image:
            'https://www.reall.pk/files/08-2023/ad23950/test-2093100898_orig.jpg',
        },
        {
          id: 2,
          price: 'Rs 30,000,000',
          name: '10 Marla House in Bahria Town',
          location: 'Bahria Town, Lahore',
          time: '3 days ago',
          image: 'https://i.ytimg.com/vi/qrnEU9m9pPg/maxresdefault.jpg',
        },
        {
          id: 3,
          price: 'Rs 40,000,000',
          name: '1 Kanal House in Gulberg',
          location: 'Gulberg, Lahore',
          time: '1 week ago',
          image:
            'https://www.arcodesk.com/wp-content/uploads/2021/05/1-Kanal-Simple-Modern-House-Design-at-Gulberg-Green-Islamabad.jpg',
        },
        {
          id: 4,
          price: 'Rs 50,000,000',
          name: '2 Kanal House in Model Town',
          location: 'Model Town, Lahore',
          time: '2 weeks ago',
          image: 'https://i.ytimg.com/vi/iu5BTg4IgfM/maxresdefault.jpg',
        },
        {
          id: 5,
          price: 'Rs 60,000,000',
          name: '3 Kanal House in Phase 8 DHA',
          location: 'DHA, Lahore',
          time: '1 day ago',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qum60j2cPazO7zGUiW9V1-0nlVJMDI8KWw&s',
        },
      ],
    },
    {
      title: 'Video-Audios',
      items: [
        {
          id: 1,
          price: 'Rs 5,000',
          name: 'Sony WH-1000XM4',
          location: 'Johar Town, Lahore',
          time: '2 weeks ago',
          image:
            'https://xcessorieshub.com/wp-content/uploads/2021/03/sony_wh_1000xm4_negro_auriculares_inalambrico_01_l-1-1-1-1.webp',
        },
        {
          id: 2,
          price: 'Rs 10,000',
          name: 'Bose SoundLink Revolve+',
          location: 'Samanabad, Lahore',
          time: '3 days ago',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHivOVnFsxHBiFqUxs-hh3JsvUayWYSrt6nw&s',
        },
        {
          id: 3,
          price: 'Rs 15,000',
          name: 'JBL Flip 5',
          location: 'Cantt, Sialkot',
          time: '1 week ago',
          image:
            'https://appleman.pk/cdn/shop/products/JBL-Flip5-19.jpg?v=1667820615&width=2048',
        },
        {
          id: 4,
          price: 'Rs 20,000',
          name: 'Apple AirPods Pro',
          location: 'Johar Town, Lahore',
          time: '2 weeks ago',
          image:
            'https://appleman.pk/cdn/shop/products/JBL-Flip5-19.jpg?v=1667820615&width=2048',
        },
        {
          id: 5,
          price: 'Rs 25,000',
          name: 'Samsung Galaxy Buds Pro',
          location: 'Gulberg, Lahore',
          time: '5 days ago',
          image:
            'https://gadgetmania.pk/wp-content/uploads/2021/07/IMG-20230402-WA0007.jpg',
        },
      ],
    },
    {
      title: 'Tablets',
      items: [
        {
          id: 1,
          price: 'Rs 50,000',
          name: 'Apple iPad Pro 2021',
          location: 'Johar Town, Lahore',
          time: '2 weeks ago',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cUmUiDP7Qu1IFTjLr7UFbR4ULa6MJn8WDA&s',
        },
        {
          id: 2,
          price: 'Rs 40,000',
          name: 'Samsung Galaxy Tab S7',
          location: 'Samanabad, Lahore',
          time: '3 days ago',
          image: 'https://m.media-amazon.com/images/I/41NV1Y9XrEL._AC_.jpg',
        },
        {
          id: 3,
          price: 'Rs 30,000',
          name: 'Microsoft Surface Go 2',
          location: 'Cantt, Sialkot',
          time: '1 week ago',
          image:
            'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Go-2_Panel1_ImmersiveHero:VP2-859x540',
        },
        {
          id: 4,
          price: 'Rs 20,000',
          name: 'Lenovo Tab P11 Pro',
          location: 'Johar Town, Lahore',
          time: '2 weeks ago',
          image:
            'https://tabarena.pk/wp-content/uploads/2024/03/LENOVO-P11-PRO-2nd-gen-2.jpg',
        },
        {
          id: 5,
          price: 'Rs 60,000',
          name: 'Huawei MatePad Pro',
          location: 'Gulberg, Lahore',
          time: '5 days ago',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyya4HjsBREgnTflJdyy_S0DnXaQoDSl48w&s',
        },
      ],
    },
    {
      title: 'Jobs',
      items: [
        {
          id: 1,
          salary: 'Rs 100,000/month',
          name: 'Software Engineer',
          location: 'Johar Town, Lahore',
          time: '2 weeks ago',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1n2aFVoJSU4Y1qE_k4UeQV83tmV5jaFAnQ&s',
        },
        {
          id: 2,
          salary: 'Rs 80,000/month',
          name: 'Graphic Designer',
          location: 'Samanabad, Lahore',
          time: '3 days ago',
          image:
            'https://www.simplilearn.com/ice9/free_resources_article_thumb/Is_Graphic_Design_A_Good_Career.jpg',
        },
        {
          id: 3,
          salary: 'Rs 120,000/month',
          name: 'Project Manager',
          location: 'Cantt, Sialkot',
          time: '1 week ago',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgZb7GlLVLrHhSg_5yFl9hq4wocV9venqEw&s',
        },
        {
          id: 4,
          salary: 'Rs 90,000/month',
          name: 'Data Analyst',
          location: 'Johar Town, Lahore',
          time: '2 weeks ago',
          image:
            'https://assets.cioinsight.com/uploads/2022/06/Data-Analyst-1024x682.jpeg',
        },
        {
          id: 5,
          salary: 'Rs 70,000/month',
          name: 'Content Writer',
          location: 'Gulberg, Lahore',
          time: '5 days ago',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq8prTBdO5JrY4nk3bH9c77NC5Gl1sGIlaA&s',
        },
      ],
    },
  ]

  return (
    <div className="">
      <div className="flex justify-center mt-5 mb-10">
        <img
          src="https://tpc.googlesyndication.com/simgad/17786895429702338437"
          alt=""
        />
      </div>
      <div className="bs-container">
        {categories.map((category) => (
          <div key={category.title} className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-teal-950">
                {category.title}
              </h1>
              <a
                href="#"
                className="text-blue-500 hover:underline flex items-center font-semibold  text-sm font-sans"
              >
                See All
              </a>
            </div>
            <div className="flex overflow-x-auto gap-4 hide-scrollbar">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="w-52 min-h-[100px] bg-white border border-gray-300 rounded-lg shadow-md flex-shrink-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm sm:text-base font-bold text-teal-950">
                        {item.price}
                      </span>
                      <FontAwesomeIcon
                        icon={farHeart}
                        className="text-teal-950"
                      />
                    </div>
                    <h2 className="text-teal-950 text-sm sm:text-base font-semibold">
                      {item.name}
                    </h2>
                    <p className="text-teal-950 mt-1">{item.location}</p>
                    <p className="text-teal-950 text-sm">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='py-4'>
     <hr className='border border-gray-300'/>
       </div>
      <div className='flex text-teal-950 justify-between bs-container'>
        <h1>Categories</h1>
        <button><ArrowForwardIos style={{fontSize : "18", color : "black"}}/></button>
       </div>
       <div className='py-4'>
     <hr className='border border-gray-300'/>
       </div>
       <div className='flex text-teal-950 justify-between bs-container'>
        <h1>Popular Categories</h1>
        <button><ArrowForwardIos style={{fontSize : "18", color : "black"}}/></button>
       </div>
       <div className='py-4'>
     <hr className='border border-gray-300'/>
       </div>
       <div className='flex text-teal-950 justify-between bs-container'>
        <h1>Trending Searches</h1>
        <button><ArrowForwardIos style={{fontSize : "18", color : "black"}}/></button>
       </div>
       <div className='py-4'>
     <hr className='border border-gray-300'/>
       </div>
       <div className='flex text-teal-950 justify-between bs-container'>
        <h1>About Us</h1>
        <button><ArrowForwardIos style={{fontSize : "18", color : "black"}}/></button>
       </div>
       <div className='py-4'>
     <hr className='border border-gray-300'/>
       </div>
       <div className='flex text-teal-950 justify-between bs-container'>
        <h1>Follow Us</h1>
       <div className='space-x-4'>
       <i class="fa-brands fa-twitter"></i>
       <i class="fa-brands fa-facebook-f"></i>
       <i class="fa-regular fa-circle-play"></i>
       <i class="fa-brands fa-instagram"></i>
       </div>
       </div>
       <div className='py-4'>
     <hr className='border border-gray-300'/>
       </div>
       <div className="flex space-x-2 bs-container justify-center">
              <a href="#">
                <img width={70}
                className='object-cover'
                  src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
                  alt="Download on the App Store"
                />
              </a>
              <a href="#">
                <img
                width={70}
                  src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
                  alt="Get it on Google Play"
                />
              </a>
              <a href="#">
                <img
                width={70}
                  src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
                  alt="Explore it on AppGallery"
                />
              </a>
            </div>
            <div className='bg-teal-950 p-5 flex items-center  whitespace-nowrap mt-5'>
     <ul className='flex bs-container items-center flex-row-reverse gap-5'>
     <li className='text-white font-bold text-xs'>
          . © 2006-2025 OLX
        </li>
        <li className='text-white font-bold text-xs'>
        Free Classifieds in Pakistan
        </li>
     </ul>
    </div>
    </div>
  )
}
