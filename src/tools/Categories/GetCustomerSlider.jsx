import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faComments, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ArrowForwardIos, FavoriteBorder, LocationOn, ReportOutlined, Share } from '@mui/icons-material';
import Carousel from 'react-multi-carousel';

export default function GetCustomerSlider() {
    const categories = [
        {
          title: 'Mobile Phones',
          items: [
            {
              id: 1,
              price: "Rs 113,000",
              name: "Samsung Galaxy S22 Plus Approved",
              location: "Johar Town, Lahore",
              time: "2 weeks ago",
              image: "https://storage.googleapis.com/a1aa/image/RLWGjhfOrrbuMtLu7hb10wdQQLqm7MWorax23WJNb-4.jpg"
            },
            {
              id: 2,
              price: "Rs 145,000",
              name: "Google pixel 8pro 12/256 PTA(7 pro PTA)",
              location: "Samanabad, Lahore",
              time: "3 days ago",
              image: "https://storage.googleapis.com/a1aa/image/7pecTFe8s3ojIkvA7SoV2XtLkqVHYYGSyZDKB4F3SmI.jpg"
            },
            {
              id: 3,
              price: "Rs 170,000",
              name: "Vivo X100 Pro 16/512gb Black Colour",
              location: "Cantt, Sialkot",
              time: "1 week ago",
              image: "https://storage.googleapis.com/a1aa/image/M1N39wg2FIklTfmbm81_0ZT2D1FMgKXsgKBoduzraH0.jpg"
            }
          ]
        }
    ];

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Related ads</h2>
            <Carousel responsive={responsive} infinite autoPlay>
                {categories[0].items.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow p-4">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-semibold">{item.price}</span>
                                <FavoriteBorder className="text-teal-950" />
                            </div>
                            <h3 className="text-md font-medium mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-600">{item.location}</p>
                            <p className="text-sm text-gray-500">{item.time}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
