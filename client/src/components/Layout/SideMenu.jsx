import React from 'react';
import {Menu} from "antd";
import {sideMenuItems} from "../../utils/sideMenuItems";
import {useLocation} from "react-router";

const SideMenu = () => {

    const location = useLocation();

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            items={sideMenuItems}
        />
    );
};

export default SideMenu;