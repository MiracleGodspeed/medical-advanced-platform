import layoutMapper from '../../layouts/layoutMapper';
import Sidenav from '../../layouts/side-nav';
import maplogo from "../../assets/images/map-logo.png"
import { PulseLoader } from 'react-spinners';
import { useEffect } from 'react';
import $ from 'jquery'


const Dashboard = () => {
    useEffect(() => {
       setTimeout(() => {
           $("#preloader").delay(450).fadeOut("slow");//simulating loader
       }, 3000);
    },[])
    return (
        <div className="">
            <div id="preloader" style={{ background: "fff" }}>
                <div id="status">
                    <img src={maplogo} className='w-[93px]'/>
                    <PulseLoader size="12px" color="#175CFF" className='ml-[20px] mt-2'/>
                </div>

            </div>
            <h2 className='satochi-bold text-[14px] lg:text-[20px]'>Dashboard</h2>
        </div>
    );
}

export default layoutMapper(Sidenav)(Dashboard);

