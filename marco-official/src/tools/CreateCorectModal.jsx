import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { ClearOutlined, ReportOutlined } from "@mui/icons-material";

export default function PasswordCreate() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const isValid = {
    length: password.length >= 8,
    number: /\d/.test(password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    letter: /[a-zA-Z]/.test(password),
  };

  return (
    <div className="max-w-md mx-auto mt-5 p-2 bg-white rounded-xl">
      <h2 className="text-xl font-semibold text-center text-teal-950 mb-4">Login in with Phone</h2>
      
      <div className="mb-4 relative">
       
      <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          Phone number
        </label>
        <div className="flex border border-red-500 rounded-sm">
          <div className="flex items-center px-1 bg-gray-100 border-r  border-gray-500">
            <img
              alt="Country flag"
              className="w-5 h-5 object-contain"
              height={20}
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/800px-Flag_of_Pakistan.svg.png"
              width={20}
            />
            <span className="ml-1 mr-3 text-gray-700">+92</span>
          </div>
          <input
            className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            id="phone"
            placeholder="Phone number"
            type="text"
          />
        </div>
        <p className="text-red-500 text-xs mt-1">Phone number is required.</p>
      
      </div>
      
      <div className="mb-4 relative">
      <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          Password
        </label>
         <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-teal-950 border focus:outline-none focus:ring-2 focus:ring-teal-950"
            placeholder="Confirm new password"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {confirmPassword && confirmPassword !== password && (
          <p className="text-teal-950 text-sm">Passwords do not match</p>
        )}
      </div>
      <a className="text-blue-500 text-sm" href="#">
          Forgot your password?
        </a>
      <button
        className="w-full py-2 mt-2 bg-blue-500 text-slate-400 rounded-sm disabled:bg-gray-200 mb-4"
        disabled={!(
          isValid.length &&
          isValid.number &&
          isValid.specialChar &&
          isValid.letter &&
          password === confirmPassword
        )}
      >
        Login
      </button>
      <div className="text-center">
        <a className="text-blue-500 text-sm" href="#">
          New to OLX? Create an account
        </a>
      </div>
    </div>
  );
}
