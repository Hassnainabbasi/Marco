
import React from "react";

export default function GetCustomerAccountCategorise() {
  return (
    <div className="bs-container">
      <ul className="flex flex-wrap gap-1 mt-5 text-xs">
        {[
          "Home", "/", "Mobile", "/", "Mobile Phones", "/", "Mobile Phones in Punjab", 
          "/", "Mobile Phones in Multan", "/", "Mobile Phones in Kacheri Road", "/", "Google in Kacheri Road"
        ].map((item, index) => (
          <li
            key={index}
            className={`whitespace-nowrap text-teal-900 ${
              index < 8 ? "sm:order-none order-1" : "sm:order-none order-2"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
