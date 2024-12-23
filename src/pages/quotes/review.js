import React, { useState } from 'react';
import { Table, Avatar, Divider, Modal, Spin } from 'antd';
import tableimg from "../../assets/images/Leading-media.png"
import EditIcon from '../../components/icon-components/edit-icon';
import ChevronDownIcon from '../../components/icon-components/chevron-down-icon';
import DocumentIcon from '../../components/icon-components/document-icon';
import OutlineButtton from '../../components/buttons/outline-btn';
import { LoadingOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';


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
        price: '$200.00',
        amount: '$2000.0',
        expdeliverydate: '2024-08-07'
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
const ReviewQuote = ({ toggleStepsFunc }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setloading] = useState(false);
    const notify = () => toast.success("RFQ ID sent successfully!!");
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleSubmitQuoteRequest = () => {
        setIsModalOpen(false);
        setloading(true)
        setTimeout(() => {
            setloading(false)
            notify()
        }, 3000);
        setTimeout(() => {
            window.location.href = "/"
        }, 9000);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const toggleSteps = (data) => {
        toggleStepsFunc(data)
    }

    return (
        <div className="">
            <ToastContainer />
            {loading &&

                <div id="preloader" style={{ background: "fff" }}>
                    <div>
                        <div className='h-[150px] w-[170px] lg:h-[194px] lg:w-[329px] bg-[#fff] justify-items-center content-center' style={{ borderRadius: "20px" }}>
                            <Spin
                                indicator={
                                    <LoadingOutlined
                                        style={{
                                            fontSize: 38,
                                            fontWeight: '800px'
                                        }}
                                        spin
                                    />
                                }
                            />
                            <p className='satochi-medium text-[14px] mt-4'>Sending Quote...</p>
                        </div>

                    </div>

                </div>
            }

            <Modal okText='Continue' onOk={() => handleSubmitQuoteRequest()} className='satochi-medium' title={<p className='satochi-bold text-[20px]'>Confirmation</p>} open={isModalOpen} onCancel={handleCancel}>
                <p className='satochi-medium'>You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client “Westend Clear Hospital”. Are you sure you want to proceed?</p>
            </Modal>

            <div className='w-full flex flex-wrap border border-custom-gray pt-[24px] pb-[24px] lg:pl-[32px] pl-[3px] lg:pr-[32px] pr-[3px] lg:h-[292px] h-auto mt-[2em] rounded-lg'>
                <div className='w-full'>
                    <div className='w-full flex'>
                        <div className='w-full lg:w-[50%]'>
                            <p className='satochi-bold lg:text-[20px] text-[12px]'>Request Information</p>

                        </div>
                        <div className='w-full lg:w-[50%] text-end'>
                            <div className='flex gap-[12px] text-end justify-end'>
                                <p onClick={() => toggleSteps('1')} className='text-[#667185] cursor-pointer satochi-regular lg:text-[14px] text-[12px]'><EditIcon /></p>
                            </div>

                        </div>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full mt-3">
                        <div class="p-4 lg:col-span-8 grid grid-cols-1 lg:grid-cols-12">
                            <div className='col-span-7'>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4'>Title</p>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4'>RFQ No.</p>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4'>Requestor</p>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4'>Department</p>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4'>Expected delivery date</p>

                            </div>
                            <div className='col-span-5'>
                                <p className='text-[#344054] lg:text-[15px] text-[12px] satochi-medium mb-4'>Request for Equipments</p>
                                <p className='text-[#344054] lg:text-[15px] text-[12px] satochi-medium mb-4'>#01234</p>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-3'>
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

                                <p className='text-[#344054] lg:text-[15px] text-[12px] satochi-medium mb-2'>Maternity</p>
                                <p className='text-[#555E68] lg:text-[15px] text-[12px] satochi-medium mb-4'>2024-12-23</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='w-full flex flex-wrap border border-custom-gray pt-[24px] pb-[24px] lg:pl-[32px] pl-[3px] lg:pr-[32px] pr-[3px] lg:h-[455px] h-auto mt-[2em] rounded-lg mb-3'>
                <div className='w-full'>
                    <p className='satochi-bold lg:text-[16px] text-[12px]'>Items</p>

                    <Table
                        style={{ overflow: "scroll" }}
                        rowSelection={{
                            type: 'checkbox',
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                    />
                </div>
            </div>

            <div onClick={() => toggleSteps('2')} className='w-full cursor-pointer flex flex-wrap border border-custom-gray pt-[24px] pb-[24px] lg:pl-[32px] pl-[3px] lg:pr-[32px] pr-[3px] lg:h-[96px] h-auto mt-[2em] rounded-lg mb-5'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2'>
                    <div className='flex gap-3'>
                        <div>
                            <DocumentIcon />
                        </div>
                        <div>
                            <p className='satochi-bold lg:text-[16px] text-[12px]'>Terms and Attachments</p>
                            <p className='text-[#667185] satochi-regular'>Review payment and delivery terms</p>
                        </div>
                    </div>
                    <div className='justify-items-end pt-[10px]'>
                        <ChevronDownIcon />
                    </div>

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

                        <button onClick={showModal} type="button" class="flex-none  rounded-md bg-[#175CFF] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 lg:w-[200px] w-auto">Submit</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default ReviewQuote;

