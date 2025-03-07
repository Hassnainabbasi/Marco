import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { useState } from 'react'

export default function MaleDropdown() {
  const [selected, setSelected] = useState('Five')
  const [isOpen, setIsOpen] = useState(false)

  const options = Array.from({ length: 2025 -1950 + 1 }, (v, i)=>2025 - i)


  return (
    <div className="relative">
      <button
        className="w-full flex justify-between items-center border border-black rounded-md px-4 py-2 text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        {isOpen ? 
        <ChevronUpIcon className="w-10 h-8 text-black" />
        : (
        <ChevronDownIcon className="w-10 h-8 text-black" />
    )    
    }
      </button>

      {isOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-96 overflow-y-auto z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-1 text-sm text-teal-950 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelected(option)
                setIsOpen(false)
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
