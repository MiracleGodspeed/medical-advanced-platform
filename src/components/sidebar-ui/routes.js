import { notification } from "antd";
import CalenderIcon from "../icon-components/calender-icon";
import CommunicationIcon from "../icon-components/communication-icon";
import ContractIcon from "../icon-components/contract-icon";
import DashboardIcon from "../icon-components/dashboard-icon";
import FinanceIcon from "../icon-components/finance-icon";
import InventoryIcon from "../icon-components/inventory-icon";
import ProcurementIcon from "../icon-components/procurement-icon";

export const routes = [
    { path: '/', title: "Dashboard", icon: DashboardIcon(), key: "0", children:[] },
    { path: '#', title: "Inventory", icon: InventoryIcon(), key: "1", children: [] },
    { path: '#', title: "Procurement", icon: ProcurementIcon(), key: "2", children: 
        [
            {
                title:"Quotes", 
                path:"/quotes",
                key: "21"
            },
            {
                title: "Orders",
                path: "/",
                key: "22"
            }
        ] 
    },
    {
        path: '#', title: "Finance", icon: FinanceIcon(), key: "3", children:
            [
                {
                    title: "-",
                    path: "#",
                    key: "31"
                },
            ]
    },
    { path: '#', title: "Communication", icon: CommunicationIcon(), key: "4", children: [], notificationCount:10 },
    { path: '#', title: "Calendar", icon: CalenderIcon(), key: "5", children: [], notificationCount: 10 },
    { path: '#', title: "Contract", icon: ContractIcon(), key: "6", children: [] },

    
]
