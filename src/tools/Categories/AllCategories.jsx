import React from 'react'
import { Link } from 'react-router-dom';

export default function AllCategories() {
  const categories = [
    { title: "Mobiles", img: "https://static.vecteezy.com/system/resources/previews/004/813/540/non_2x/smartphone-design-in-flat-design-style-cell-phone-symbol-illustration-free-vector.jpg" },
    { title: "Vehicles", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9-3t7xtjOjzhToMTC_jK4KzmjpzLSSc05A&s" },
    { title: "Property For Sale", img: "https://img.pikbest.com/photo/20250103/plastic-house-model-on-pink-background-real-estate-concept_11335024.jpg!sw800" },
    { title: "Property For Rent", img: "https://storage.googleapis.com/a1aa/image/TNj3hJ0ok-uyeckoQzyDUKLNJkfrm5M46vRHj51nr04.jpg" },
    { title: "Electronics & Home Appliances", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRwjGMmyiKKHA-h-P2tv2OllZvPfMJUj5bw&s" },
    { title: "Bikes", img: "https://img.pikbest.com/wp/202405/blue-and-light-background-3d-rendering-of-an-isolated-classic-custom-motorbike-on-a_9857969.jpg!sw800" },
    { title: "Business, Industrial & Agriculture", img: "https://storage.googleapis.com/a1aa/image/K8E859p0001qfou06P_D_zHCBVLqud7anZvbb_CoBtw.jpg" },
    { title: "Services", img: "https://storage.googleapis.com/a1aa/image/JjHtiGiZucDv9Nw-ehVmB8e4je0dpYkT1lOiQX2b1nQ.jpg" },
    { title: "Jobs", img: "https://www.shutterstock.com/image-vector/office-bag-clipart-vector-business-260nw-1704341857.jpg" },
    { title: "Animals", img: "https://storage.googleapis.com/a1aa/image/6snDPzZSyURRxN-YGFSX-zIL6jzoSw2ylCQtarKArkg.jpg" },
    { title: "Furniture & Home Decor", img: "https://storage.googleapis.com/a1aa/image/-3hgYOuoBJOD8jAebKx1f7DJdZxz_8QVw-aO7s5RQEM.jpg" },
    { title: "Fashion & Beauty", img: "https://storage.googleapis.com/a1aa/image/qnmn0NqyvyHbOWW4qYpIailYftyknhQUKSGzLboyzu0.jpg" },
    { title: "Books, Sports & Hobbies", img: "https://storage.googleapis.com/a1aa/image/Vh0cPOKujownKQxrv-UGZzVSdHm5xSJrK_2L8YPiG2o.jpg" },
    { title: "Kids", img: "https://storage.googleapis.com/a1aa/image/uYuEc1XbOaM9kyIR3UEji1R_Zxj-8yL_1PwMOPw3N7s.jpg" }
  ];
  return (
    <div className="container mx-auto py-5">
    <h1 className="text-2xl font-bold mb-4 text-teal-950 mx-auto">All categories</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
    {categories.map((item)=>(
       <Link to={'/get-cat'}>
         <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full flex items-center ">
          <img
            alt="Mobile icon"
            className="w-20 h-20 rounded-full object-cover"
            height={50}
            src={item.img}
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">{item.title}</p>
      </div>
       </Link>
    ))}  
    </div>
  </div>
  )
}
