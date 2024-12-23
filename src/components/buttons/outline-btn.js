import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import React,{useState} from "react";



const OutlineButtton = ({ outlineColor, text, icon, iconPosition, setSpin, clickFunc, navigateRoute }) => {
    const navigate = useNavigate();
    const [loading, setloading] = useState(false)


    const handleNavigation = () => {
        setloading(true)
       setTimeout(() => {
           setloading(false)
           navigate(navigateRoute);
       }, 1500);
    }
    const handleClick = () => {
        //click event
    }
    return (
        <button onClick={navigateRoute != null ? () => handleNavigation() : () => handleClick()} type="button" style={{
            border: `2px solid ${outlineColor}`, background: "transparent", color: outlineColor  }} class="flex-none rounded-md bg-indigo-500 px-3.5 py-1.8 text-[9px]  lg:text-sm text-white shadow-sm hover:bg-indigo-400 focus-visible:outline satochi-medium h-[36px]">
            {loading ? <LoadingOutlined spin={setSpin} />:
            <>
                {iconPosition === "before" && icon}
                &nbsp;
                {text}
                &nbsp;
                {iconPosition === "after" && icon}
            </>
            }
           
        </button>

    );
}

export default OutlineButtton;

