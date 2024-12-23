import React, { useState} from 'react';

import { CloseOutlined, SettingOutlined } from '@ant-design/icons';
import RegularButtton from '../../components/buttons/regular-btn';
import layoutMapper from '../../layouts/layoutMapper';
import Sidenav from '../../layouts/side-nav';
import { Table, Avatar, Form, Input, Divider, DatePicker, Select } from 'antd';
import tableimg from "../../assets/images/Leading-media.png"
import pkbadge from "../../assets/images/pk.png"
import PackIcon from '../../components/icon-components/pack-icon';
import DeleteIcon from '../../components/icon-components/delete-icon';
import OutlineButtton from '../../components/buttons/outline-btn';
import TermsAndAttachement from './terms-and-attachement';
import ReviewQuote from './review';
const { Option } = Select;
const { TextArea } = Input;
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
        quantity: "100",
        price: '$200.00',
        amount: '$2000.0',
        expdeliverydate: '2024-08-07'
    },
    {
        key: '2',
        name: 'Mechanical ventilator',
        subcaption: '#28373',
        variants: 'Nil',
        quantity: "45",
        price: '$350.00',
        amount: '$2000.0',
        expdeliverydate: '2024-08-07'
    },
    {
        key: '3',
        name: 'Patient Monitor',
        subcaption: '#28373',
        variants: 'Nil',
        quantity: "30",
        price: '$350.00',
        amount: '$2000.0',
        expdeliverydate: '2024-08-07'
    },
    {
        key: '3',
        name: 'Mechanical ventila...',
        subcaption: '#28373',
        variants: 'Nil',
        quantity: "30",
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
const onChange = (e) => {
    console.log('Change:', e.target.value);
};
const handleRespondAction = () => {

}
const QuoteRequest = () => {
    const [steps, setSteps] = useState('1')

    const toggleSteps = (data) => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth',
        });
        setSteps(data)
    }
    return (
        <div className="">
            <div className='w-full flex flex-wrap'>
                <div className='w-full lg:w-[50%]'>
                    <p className='text-[#667185] satochi-medium'><span className='text-[#175CFF]'>Quotes &nbsp;</span> / &nbsp; Quote Response</p>
                </div>
            </div>
            <div className='w-full flex flex-wrap border border-custom-gray pt-[24px] pb-[24px] lg:pl-[32px] pl-[3px] lg:pr-[32px] pr-[3px] lg:h-[92px] h-auto mt-[2em] rounded-lg'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-3'>
                    <div onClick={() => toggleSteps('1')}>
                        <p className='text-[#555E68] cursor-pointer lg:text-[15px] text-[12px] satochi-medium mb-4 flex  leading-[16px] mt-2 gap-[6px]'>
                            <Avatar
                                className="satochi-bold"
                                style={{ background: steps == '1' ? '#175CFF' : 'transparent', color: steps == '1' ? '#fff' : '#98A2B3', border: steps == '1' ? '0px' : '1px solid #98A2B3' }}
                            >
                                1
                            </Avatar>
                            &nbsp; <span className=''>
                                <span className='text-[#344054] text-[16px] satochi-bold'>Request Information</span>
                                <br />
                                <span className='text-[#344054] text-[12px] satochi-regular text-[#475367]'>Provide details about the RFQ</span>
                            </span>
                        </p>
                    </div>
                    <div onClick={() => toggleSteps('2')}>
                        <p className='text-[#555E68] cursor-pointer lg:text-[15px] text-[12px] satochi-medium mb-4 flex  leading-[16px] mt-2 gap-[6px]'>
                            <Avatar
                                className="satochi-bold"
                                style={{ background: steps == '2' ? '#175CFF' : 'transparent', color: steps == '2' ? '#fff' : '#98A2B3', border: steps == '2' ? '0px' : '1px solid #98A2B3' }}
                                
                            >
                                2
                            </Avatar>
                            &nbsp; <span className=''>
                                <span className='text-[#344054] text-[16px] satochi-medium'>Terms and Attachments</span>
                                <br />
                                <span className='text-[#344054] text-[12px] satochi-regular text-[#475367]'>Payment and delivery terms</span>
                            </span>
                        </p>
                    </div>

                    <div onClick={() => toggleSteps('3')}>
                        <p className='text-[#555E68] cursor-pointer lg:text-[15px] text-[12px] satochi-medium mb-4 flex  leading-[16px] mt-2 gap-[6px]'>
                            <Avatar
                                className="satochi-bold"
                                style={{ background: steps == '3' ? '#175CFF' : 'transparent', color: steps == '3' ? '#fff' : '#98A2B3', border: steps == '3' ? '0px' : '1px solid #98A2B3' }}
                            >
                                3
                            </Avatar>
                            &nbsp; <span className=''>
                                <span className='text-[#344054] text-[16px] satochi-medium'>Review</span>
                                <br />
                                <span className='text-[#344054] text-[12px] satochi-regular text-[#475367]'>Confirm all information provided</span>
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        {steps == '1' &&
                <div className='w-full flex flex-wrap border border-custom-gray pt-[24px] pb-[24px] lg:pl-[32px] pl-[3px] lg:pr-[32px] pr-[3px] lg:h-[986px] h-auto mt-[2em] rounded-lg'>
                    <div className='w-full'>
                        <div className='w-full flex'>
                            <div className='w-full lg:w-[50%]'>
                                <p className='satochi-bold lg:text-[20px] text-[12px]'>Request for Quote</p>
                                <p className='text-[#667185] satochi-regular'> Fill out these details to send the RFQ</p>


                            </div>
                        </div>
                        <Form>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-5">

                                <div className='clear-input'>
                                    <label className='satochi-medium text-[14px]'>RFQ No</label>
                                    <Input placeholder="RFQ-10234" className='h-[40px] bg-[#F0F2F5] mt-1' />
                                </div>
                                <div>
                                    <label className='satochi-medium text-[14px]'>Title</label>
                                    <Input placeholder="Request for Equipments" className='h-[40px] bg-[#F0F2F5] mt-1' />
                                </div>

                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-5">

                                <div>
                                    <label className='satochi-medium text-[14px]'>Department</label>
                                    <Input placeholder="Maternity" className='h-[40px] bg-[#F0F2F5] mt-1' />
                                </div>
                                <div className='block'>
                                    <label className='satochi-medium text-[14px]'>Expected delivery date</label>
                                    <DatePicker prefix placeholder="Request for Equipments" className='h-[40px] bg-[#F0F2F5] mt-1 w-full' />
                                    <p className='text-[12px] text-[#667185] mt-1'>Calculated based on lead time and issue date</p>
                                </div>

                            </div>
                            <div className='w-full'>
                                <Divider />
                            </div>
                            <div className='w-full'>
                                <p className='satochi-bold lg:text-[16px] text-[12px]'>Add Items</p>
                                <div className='w-full mt-1'>
                                    <div className='grid grid-cols-1 lg:grid-cols-7 bg-[#F7F9FC] p-[8px] w-full gap-[10px]'>
                                        <p className='text-[#667185] text-[12px] satochi-medium lg:col-span-2'>Items</p>
                                        <p className='text-[#667185] text-[12px] satochi-medium'>Variant</p>
                                        <p className='text-[#667185] text-[12px] satochi-medium'>Quantity</p>
                                        <p className='text-[#667185] text-[12px] satochi-medium'>Price</p>
                                        <p className='text-[#667185] text-[12px] satochi-medium'>Expected deliv...</p>
                                        <p className='text-[#667185] text-[12px] satochi-medium'>Amount</p>
                                    </div>
                                </div>
                                <div className='w-full mt-1'>
                                    {data && data.map((x, i) => {
                                        return (
                                            <div className='grid grid-cols-1 lg:grid-cols-7 p-[8px] w-full gap-[10px]'>
                                                <Select
                                                    defaultValue={x?.name}
                                                    placeholder={x.name} className='text-[#667185] text-[10px] satochi-regular lg:col-span-2 h-[36px]'>
                                                    <Option value="male">Oxygen Concentrator"</Option>
                                                    <Option value="female">Oxygen Concentrator 1</Option>
                                                    <Option value="other">Oxygen Concentrator 2</Option>
                                                </Select>
                                                <Select
                                                    defaultValue={x.variants}
                                                    placeholder={x.variants} className='text-[#667185] text-[10px] satochi-regular h-[36px]'>
                                                    <Option value="Blue">Blue</Option>
                                                    <Option value="Green">Green</Option>
                                                </Select>
                                                <div id='b-right' className='h-[36px]'>
                                                    <Input className='h-[36px] text-[#667185] text-[12px] satochi-medium' style={{ borderRight: "0px" }} addonAfter={<p className='bg-[#F7F9FC] text-[9px] p-[4px]'>Pack</p>} defaultValue={x.quantity} />
                                                </div>
                                                <div>
                                                    <Input defaultValue={x.price} className='text-[#667185] text-[12px] satochi-medium h-[36px]' prefix={<p className='text-[16px]'>$</p>} />
                                                </div>
                                                <div>
                                                    <DatePicker prefix placeholder="2024-12-22" className='h-[36px] text-[#667185] text-[12px] satochi-medium' />
                                                </div>
                                                <div className='flex justify-between'>
                                                    <p className='text-[#667185] text-[14px] satochi-bold'>$ {x.amount}</p>
                                                    <p className='text-[#667185] text-[14px] satochi-bold'><DeleteIcon /></p>
                                                </div>
                                            </div>

                                        )
                                    })}
                                    <Divider />
                                    <div className='grid grid-cols-1 lg:grid-cols-7 p-[8px] w-full gap-[10px]'>
                                        <p></p>
                                        <p></p>
                                        <p></p>
                                        <p></p>
                                        <p></p>
                                        <p className='text-[16px] satochi-regular'>Sub Total</p>
                                        <p className='text-[16px] satochi-regular'>$12000.00</p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 p-[8px] w-full gap-[10px]'>
                                    <div>
                                        <label className='satochi-medium text-[14px]'>Note</label>
                                        <TextArea
                                            className='satochi-medium'
                                            showCount
                                            maxLength={200}
                                            onChange={onChange}
                                            placeholder="Enter note here"
                                            style={{
                                                height: 120,
                                                resize: 'none',
                                            }}
                                        />
                                    </div>
                                </div>
                                <Divider />
                                <div className='grid grid-cols-1 lg:grid-cols-2 p-[8px] w-full gap-[10px]'>
                                    <div></div>
                                    <div className='w-full text-end'>
                                        <div className='flex gap-[12px] text-end justify-end'>
                                            <div id='respond' >
                                                <OutlineButtton text={"Cancel"} outlineColor={"#475367"} />
                                            </div>
                                            <div id='respond'>
                                                <OutlineButtton text={"Save as draft"} outlineColor={"#175CFF"} />
                                            </div>
                                            <div id='respond' onClick={() => toggleSteps('2')}>
                                                <RegularButtton  text={"Continue"} backgroundColor={"#175CFF"} />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Form>

                    </div>
                </div>
        }
            {steps == '2' && <TermsAndAttachement toggleStepsFunc={toggleSteps} />}
            {steps == '3' && <ReviewQuote toggleStepsFunc={toggleSteps} />}
        </div>
    );
}

export default layoutMapper(Sidenav)(QuoteRequest);

