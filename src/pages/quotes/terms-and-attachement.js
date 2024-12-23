import React, { useState} from 'react';


import { Form, Divider, Upload, Select } from 'antd';
import FileUploadIconCustom from '../../components/icon-components/file-upload-icon';
import OutlineButtton from '../../components/buttons/outline-btn';
import RegularButtton from '../../components/buttons/regular-btn';

const { Option } = Select;
const { Dragger } = Upload;


const TermsAndAttachement = ({toggleStepsFunc}) => {
    const [attachementFile, setattachementFile] = useState([]);
    const handleAttachementChange = ({ fileList: newFileList }) => setattachementFile(newFileList);

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 2000);

    };
    const toggleSteps = (data) => {
        toggleStepsFunc(data)
    }
    return (
        <div className="">

            <div className='w-full flex flex-wrap border border-custom-gray pt-[24px] pb-[24px] lg:pl-[32px] pl-[3px] lg:pr-[32px] pr-[3px] lg:h-[778px] h-auto mt-[2em] rounded-lg'>
                <div className='w-full'>
                    <div className='w-full flex'>
                        <div className='w-full lg:w-[50%]'>
                            <p className='satochi-bold lg:text-[20px] text-[12px]'>Terms and Attachments</p>
                            <p className='text-[#667185] satochi-regular'>Provide detailed information on payment and delivery terms</p>


                        </div>
                    </div>
                    <Form>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-5">

                            <div className='clear-input'>
                                <label className='satochi-medium text-[14px]'>Payment Terms</label>
                                <Select
                                    defaultValue={'Net20'}
                                    placeholder={'Net20'} className='text-[#667185] text-[10px] satochi-regular lg:col-span-2 h-[40px] w-full mt-1'>
                                    <Option value="Net20">Net20</Option>
                                </Select>
                            </div>
                            <div className='clear-input'>
                                <label className='satochi-medium text-[14px]'>Delivery Schedule</label>
                                <Select
                                    defaultValue={'Immediate Delivery'}
                                    placeholder={'Immediate Delivery'} className='text-[#667185] text-[10px] satochi-regular lg:col-span-2 h-[40px] w-full mt-1'>
                                    <Option value="ImmediateDelivery">Immediate Delivery</Option>
                                </Select>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-5">

                            <div className='clear-input'>
                                <label className='satochi-medium text-[14px]'>Shipping Method</label>
                                <Select
                                    defaultValue={'Courier Services'}
                                    placeholder={'Courier Services'} className='text-[#667185] text-[10px] satochi-regular lg:col-span-2 h-[40px] w-full mt-1'>
                                    <Option value="CourierServices">Net20</Option>
                                </Select>
                            </div>
                            <div className='clear-input'>
                                <label className='satochi-medium text-[14px]'>Leave Time</label>
                                <Select
                                    defaultValue={'10'}
                                    placeholder={'10'} className='text-[#667185] text-[10px] satochi-regular lg:col-span-2 h-[40px] w-full mt-1'>
                                    <Option value="10">10</Option>
                                </Select>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-6">

                          <div>
                                <label className='satochi-medium text-[14px]'>Attachement</label>
                                <p className='text-[#667185] satochi-regular mb-3'>Attach all necessary files or documents</p>

                                <Dragger
                                    customRequest={dummyRequest}
                                    onChange={handleAttachementChange}
                                    className='text-center flex h-[251px] bg-[#fff]'
                                >
                                    <div className='text-center w-full'>
                                        <p className='text-center justify-items-center'>
                                            <FileUploadIconCustom />
                                        </p>
                                   </div>
                                    <p className="ant-upload-text satochi-regular"><span className='text-[#175CFF] text-[14px]'>Click to upload</span> <span className='text-[#475367] text-[14px]'>or drag and drop</span></p>
                                    <p className="ant-upload-hint text-[#98A2B3] satochi-regular">
                                        SVG, PNG, JPG or GIF (max. 800x400px)
                                    </p>
                                    <p className='text-[#98A2B3] mt-4'>OR</p>
                                   <div className='mt-5'>
                                        <OutlineButtton text={"Browse files"} outlineColor={"#175CFF"} />
                                   </div>
                                </Dragger>
                          </div>
                      </div>
                        <div className='w-full'>
                            <Divider />
                        </div>
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
                                    <div id='respond' onClick={() => toggleSteps('3')}>
                                        <RegularButtton text={"Continue"} backgroundColor={"#175CFF"} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Form>

                </div>
            </div>
        </div>
    );
}

export default TermsAndAttachement;

