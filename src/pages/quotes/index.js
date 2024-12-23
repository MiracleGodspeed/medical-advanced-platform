import React, {} from 'react';

import { CloseOutlined } from '@ant-design/icons';
import RegularButtton from '../../components/buttons/regular-btn';
import layoutMapper from '../../layouts/layoutMapper';
import Sidenav from '../../layouts/side-nav';
import { Table, Avatar } from 'antd';
import tableimg from "../../assets/images/Leading-media.png"
import Badge from "../../assets/images/Badge.png"
import BuildingIcon from '../../components/icon-components/building-icon';



const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => (
            <div className="flex items-center gap-2">
                <img className="w-[40px] h-[40px]" src={tableimg} alt="table" />
                <div>
                    <a className="satochi-medium">
                        {text}
                        <br />
                        <span className="satochi-regular text-gray-500">#28373</span>
                    </a>
                </div>
            </div>
        ),
    },
    {
        title: 'Variants',
        dataIndex: 'variants',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
    },
    {
        title: 'Expected Delivery Date',
        dataIndex: 'expdeliverydate',
    },
];

const data = [
    {
        key: '1',
        name: 'Oxygen concentrator',
        subcaption: '#28373',
        variants: 'Blue',
        quantity: "100 pieces",
        price:'$200.00',
        amount:'$2000.0',
        expdeliverydate:'2024-08-07'
    },
    {
        key: '2',
        name: 'Mechanical ventilator',
        subcaption: '#28373',
        variants: 'Nil',
        quantity: "45kg",
        price: '$350.00',
        amount: '$2000.0',
        expdeliverydate: '2024-08-07'
    },
    {
        key: '3',
        name: 'Patient Monitor',
        subcaption: '#28373',
        variants: 'Nil',
        quantity: "30 Units",
        price: '$350.00',
        amount: '$2000.0',
        expdeliverydate: '2024-08-07'
    },
    {
        key: '3',
        name: 'Mechanical ventila...',
        subcaption: '#28373',
        variants: 'Nil',
        quantity: "30 Units",
        price: '$350.00',
        amount: '$2000.0',
        expdeliverydate: '2024-08-07'
    }

];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

const handleRespondAction = () => {

}
const Quotes = () => {
    return (
        <div className="">
            <div className='w-full flex flex-wrap'>
                <div className='w-full lg:w-[50%]'>
                    <p className='satochi-bold text-[24px]'>Quote details</p>
                    <p className='text-[#667185] satochi-regular'>Created on Wed, 12th June 2022, 08:00am</p>
                </div>
                <div className='w-full lg:w-[50%] sm:mt-[20px] text-end'>
                    <div className='flex gap-[12px] text-end justify-end'>
                       <div id='respond'>
                            <RegularButtton navigateRoute={'/quote-request'} text={"Respond"} backgroundColor={"#175CFF"} />
                       </div>
                        <div id='reject'>
                            <RegularButtton text={"Reject"} backgroundColor={"#D42620"} iconPosition={"before"} icon={<CloseOutlined />} />
                       </div>
                   </div>
                    
                </div>
            </div>

            <div className='w-full flex flex-wrap border border-custom-gray pt-[24px] pb-[24px] lg:pl-[32px] pl-[3px] lg:pr-[32px] pr-[3px] lg:h-[292px] h-auto mt-[2em] rounded-lg'>
           <div className='w-full'>
                    <div className='w-full flex'>
                        <div className='w-full lg:w-[50%]'>
                            <p className='satochi-bold lg:text-[20px] text-[12px]'>Quote details</p>

                        </div>
                        <div className='w-full lg:w-[50%] text-end'>
                            <div className='flex gap-[12px] text-end justify-end'>
                                <p className='text-[#667185] satochi-regular lg:text-[14px] text-[12px]'>Expected delivery date : 2024-12-02</p>
                            </div>

                        </div>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full mt-3">
                        <div class="p-4 lg:col-span-8 grid grid-cols-1 lg:grid-cols-12">
                            <div className='col-span-5'>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4'>Title</p>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4'>RFQ No.</p>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4'>Requestor</p>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4'>Status</p>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4'>Department</p>
                            </div>
                            <div className='col-span-6'>
                                <p className='text-[#344054] lg:text-[15px] text-[12px] satochi-medium mb-4'>Request for Equipments</p>
                                <p className='text-[#344054] lg:text-[15px] text-[12px] satochi-medium mb-4'>#01234</p>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4'>
                                    <Avatar
                                        className="mx-auto satochi-bold"
                                        style={{
                                            backgroundColor: "#FFECE5",
                                            color: "#0F1928",
                                        }}
                                    >
                                       JD
                                    </Avatar>
                                    &nbsp; <span className='text-[#344054]'>Jane Doe</span> <span className='text-[#98A2B3]'>&nbsp; ·  &nbsp;Head Nurse, Paediatrics</span>
                                    </p>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4'><img alt='' className='w-[63px]' src={Badge}/></p>
                                <p className='text-[#344054] lg:text-[15px] text-[12px] satochi-medium mb-4'>Maternity</p>
                            </div>
                        </div>
                        <div class="mt-3 lg:col-span-4">
                            <div className='border border-custom-gray w-full h-auto  lg:h-[97px] p-[16px] rounded-lg'>
                                <span className='flex text-[#475367] satochi-regular gap-[8px] text-[12px]'><BuildingIcon/> Client</span>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4 flex  leading-[16px] mt-2'>
                                    <Avatar
                                        className="satochi-bold"
                                        style={{
                                            backgroundColor: "#FFECE5",
                                            color: "#0F1928",
                                        }}
                                    >
                                        W
                                    </Avatar>
                                    &nbsp; <span className=''>
                                        <span className='text-[#344054] text-[14px]'>Westend Hospital</span>
                                        <br/>
                                        <span className='text-[#344054] text-[12px] satochi-regular text-[#475367]'>Clear street</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
           </div>
            </div>

            <div className='w-full flex flex-wrap border border-custom-gray pt-[24px] pb-[24px] lg:pl-[32px] pl-[3px] lg:pr-[32px] pr-[3px] lg:h-[430px] h-auto mt-[2em] rounded-lg'>
                <div className='w-full'>
                    <Table
                    style={{overflow:"scroll"}}
                        rowSelection={{
                            type: 'checkbox',
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                    />
                </div>
            </div>
           
        </div>
    );
}

export default layoutMapper(Sidenav)(Quotes);

