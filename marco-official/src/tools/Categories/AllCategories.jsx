import React from 'react'

export default function AllCategories() {
  return (
    <div className="container mx-auto py-5">
    <h1 className="text-2xl font-bold mb-4 text-teal-950">All categories</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-teal-200 flex items-center justify-center">
          <img
            alt="Mobile icon"
            className="w-20 h-18 rounded-full object-cover"
            height={50}
            src="https://static.vecteezy.com/system/resources/previews/004/813/540/non_2x/smartphone-design-in-flat-design-style-cell-phone-symbol-illustration-free-vector.jpg"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">Mobiles</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center">
          <img
            alt="Vehicle icon"
            className="w-20 h-18 rounded-full object-cover"
            height={50}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9-3t7xtjOjzhToMTC_jK4KzmjpzLSSc05A&s"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">Vehicles</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-pink-300 flex items-center justify-center">
          <img
            alt="Property for sale icon"
            className="w-20 h-18 rounded-full object-cover"
            height={50}
            src="https://img.pikbest.com/photo/20250103/plastic-house-model-on-pink-background-real-estate-concept_11335024.jpg!sw800"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">Property For Sale</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center">
          <img
            alt="Property for rent icon"
            className="w-10 h-10"
            height={50}
            src="https://storage.googleapis.com/a1aa/image/TNj3hJ0ok-uyeckoQzyDUKLNJkfrm5M46vRHj51nr04.jpg"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">Property For Rent</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-yellow-300 flex items-center justify-center">
          <img
            alt="Electronics and home appliances icon"
            className="w-20 h-18 rounded-full object-cover"
            height={50}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRwjGMmyiKKHA-h-P2tv2OllZvPfMJUj5bw&s"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">Electronics &amp; Home Appliances</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-blue-300 flex items-center justify-center">
          <img
            alt="Bike icon"
            className="w-20 h-18 rounded-full object-cover"
            height={50}
            src="https://img.pikbest.com/wp/202405/blue-and-light-background-3d-rendering-of-an-isolated-classic-custom-motorbike-on-a_9857969.jpg!sw800"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">Bikes</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center">
          <img
            alt="Business, industrial and agriculture icon"
            className="w-20 h-18 rounded-full object-cover"
            height={50}
            src="https://storage.googleapis.com/a1aa/image/K8E859p0001qfou06P_D_zHCBVLqud7anZvbb_CoBtw.jpg"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">
          Business, Industrial &amp; Agriculture
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center">
          <img
            alt="Service icon"
            className="w-20 h-18 rounded-full object-cover"
            height={50}
            src="https://storage.googleapis.com/a1aa/image/JjHtiGiZucDv9Nw-ehVmB8e4je0dpYkT1lOiQX2b1nQ.jpg"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">Services</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-blue-300 flex items-center justify-center">
          <img
            alt="Job icon"
            className="w-20 h-18 rounded-full object-cover"
            height={50}
            src="https://www.shutterstock.com/image-vector/office-bag-clipart-vector-business-260nw-1704341857.jpg"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">Jobs</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-yellow-300 flex items-center justify-center">
          <img
            alt="Animal icon"
            className="w-20 h-18 rounded-full object-cover"
            height={50}
            src="https://storage.googleapis.com/a1aa/image/6snDPzZSyURRxN-YGFSX-zIL6jzoSw2ylCQtarKArkg.jpg"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">Animals</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-amber-900 flex items-center justify-center">
          <img
            alt="Furniture and home decor icon"
            className="w-20 h-18 rounded-full object-cover"
            height={50}
            src="https://storage.googleapis.com/a1aa/image/-3hgYOuoBJOD8jAebKx1f7DJdZxz_8QVw-aO7s5RQEM.jpg"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">Furniture &amp; Home Decor</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center">
          <img
            alt="Fashion and beauty icon"
            className="w-20 h-18 rounded-full object-cover"
            height={50}
            src="https://storage.googleapis.com/a1aa/image/qnmn0NqyvyHbOWW4qYpIailYftyknhQUKSGzLboyzu0.jpg"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">Fashion &amp; Beauty</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-red-200 flex items-center justify-center">
          <img
            alt="Books, sports and hobbies icon"
            className="w-20 h-18 rounded-full object-cover"
            height={50}
            src="https://storage.googleapis.com/a1aa/image/Vh0cPOKujownKQxrv-UGZzVSdHm5xSJrK_2L8YPiG2o.jpg"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">Books, Sports &amp; Hobbies</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center">
          <img
            alt="Kids icon"
            className="w-20 h-18 rounded-full object-cover"
            height={50}
            src="https://storage.googleapis.com/a1aa/image/uYuEc1XbOaM9kyIR3UEji1R_Zxj-8yL_1PwMOPw3N7s.jpg"
            width={50}
          />
        </div>
        <p className="mt-2 text-center font-bold text-gray-900">Kids</p>
      </div>
    </div>
  </div>
  )
}
