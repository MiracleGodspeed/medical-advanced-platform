import React, { useEffect, useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Input, Badge, Avatar } from "antd";
import { Link } from "react-router-dom";
import { enquireScreen } from "enquire-js";
import { routes } from "../components/sidebar-ui/routes";
import maplogo from "../assets/images/map-logo.png"
import bottomavatar from "../assets/images/bottom-av.png"
import ChevronLeftIcon from "../components/icon-components/chevron-left-icon";
import { SearchOutlined } from '@ant-design/icons';
import demoavatar from "../assets/images/demo-av.png"
import BellIcon from "../components/icon-components/bell-icon";
import ChatIcon from "../components/icon-components/chat-icon";
import ChevronDownIcon from "../components/icon-components/chevron-down-icon";
import SupportIcon from "../components/icon-components/support-icon";
import SettingsIcon from "../components/icon-components/settings-icon";
import LogoutIcon from "../components/icon-components/logout-icon";
const { Sider, Content } = Layout;

const Sidenav = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeKey, setactiveKey] = useState("0");
    const activeColor = "#E3EAFB";

    const [isMobile, setIsMobile] = useState(false);
 
    const {
        token: {borderRadiusLG },
    } = theme.useToken();

    useEffect(() => {
        enquireScreen((b) => {
            setIsMobile(b);
            b && setCollapsed(true);
        });
    }, []);



    const handleRedirects = (data) => {
        window.location.href = data;
    };

    return (
        <div>
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    style={{
                        minHeight: "100vh",
                        minWidth: "250px",
                        background: "#000",
                    }}
                    className="h-screen fixed"
                >
                    <div className="flex justify-center items-center mb-[25px] mt-[30px] gap-2 p-[15px]">
                        <div>
                            <img alt="" className="w-[90px]" src={maplogo} />
                        </div>
                        <p className="text-[#141460] text-[12px] satochi-bold hidden lg:block">Medical Advanced Platform</p>
                    </div>
                    <Menu
                        theme="none"
                        mode="inline"
                        selectedKeys={[activeKey]}
                        items={routes.map((x, i) => (
                            x?.children?.length > 0 ?
                                {
                                    key: x.key,
                                    icon: x.icon,
                                    style: {
                                        background: activeKey === x.key ? activeColor : "transparent",
                                    },
                                    label: <span className='satochi-regular'>
                                        {x.title}
                                        {x?.notificationCount > 0 &&
                                            <Badge color="#175CFF" count={x?.notificationCount}
                                            >
                                            </Badge>
                                        }
                                    </span> ,
                                    children: x?.children?.map((c) => (
                                        {
                                            key: c.key,
                                            label: (
                                                <Link
                                                    to={c?.path}
                                                    className="text-[#344054]"
                                                >
                                                    {c?.title}
                                                </Link>
                                            ),
                                        }
                                    )),
                                } :
                                {
                                    key: x.key,
                                    icon: x.icon,
                                    style: {
                                        background: activeKey === x.key ? activeColor : "transparent",
                                    },
                                    label: <span className='satochi-regular w-full flex justify-between'>
                                        {x.title}
                                        {x?.notificationCount > 0 &&
                                            <Badge color="#175CFF" count={x?.notificationCount} 
                                            className="mt-[12px]"
                                            >
                                            </Badge>
                                        }
                                    </span>,
                                    onClick: () => {
                                        handleRedirects(x.path);
                                        setactiveKey(x.key);
                                    },

                                }
                        ))}

                    />
                    <div className="absolute bottom-[3em] w-full pl-[24px] hidden lg:block">
                        <div className="flex gap-[12px] mb-5">
                            <SupportIcon/>
                            <Link to={"#"} className="satochi-regular">Support</Link>
                        </div>
                        <div className="flex gap-[12px] mb-6">
                            <SettingsIcon />
                            <Link to={"#"} className="satochi-regular">Settings</Link>
                        </div>
                        <div className="flex gap-[12px]">
                            <div className="flex gap-[12px] mb-5">
                                <img alt="" src={bottomavatar} className="w-[40px]"/>
                                <p className="satochi-bold text-[14px]">Mark Benson<br/>
                                    <span className="text-[#475367] satochi-regular ">markbenson@core...</span>
                                </p>
                            </div>
                            <div className="flex ml-[15px]">
                                <LogoutIcon />
                            </div>
                        </div>
                    </div>
                </Sider>
                <Layout>
                    <div
                        className="flex w-full h-[64px] pt-[13px] pr-[20px] pl-[20px] bg-[#fff]"
                    >
                        <div className="flex h-[50px] w-full">
                            <div className="flex align-items-center w-full">
                                <div
                                    className="block lg:hidden"

                                >
                                    <Button
                                    className="ml-[21em]"
                                        type="text"
                                        icon={
                                            collapsed ? (
                                                <MenuUnfoldOutlined />
                                            ) : (
                                                <MenuFoldOutlined />
                                            )
                                        }
                                        onClick={() => setCollapsed(!collapsed)}
                                        style={{
                                            fontSize: "14px",
                                            width: 64,
                                            height: 64,
                                        }}
                                    />
                                </div>
                                <div className="hidden lg:flex w-full lg:ml-[300px] ml-[80px]">
                                    <div className="flex gap-3 w-full lg:w-[42%]">
                                        <ChevronLeftIcon />
                                        <p className="text-[#667185] satochi-medium">Back</p>
                                    </div>
                                    <div className="flex w-full lg:w-[58%]">
                                        <div className="w-full lg:w-[68%] mr-[100px]">
                                            <Input
                                                prefix={<SearchOutlined />}
                                                className="h-[40px] w-full"
                                                placeholder="Search here..."
                                            />
                                        </div>
                                        <div className="w-full lg:w-[30%]">
                                            <div className="flex items-center w-full gap-[16px]">
                                                <BellIcon />
                                                <ChatIcon />
                                                <img alt="" className="w-[32px]" src={demoavatar} />
                                                <ChevronDownIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <Content
                        style={{
                            padding: isMobile ? 7 : 15,
                            minHeight: 280,
                            background: "#fff",
                            borderRadius: borderRadiusLG,
                        }}
                        className="lg:ml-[300px] ml-[80px] lg:mr-[30px] mr-[5px]"
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Sidenav;
