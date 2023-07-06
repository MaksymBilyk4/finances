import React from 'react';
import {Menu} from "antd";
import {sideMenuItems} from "../../utils/sideMenuItems";

const SideMenu = () => {
    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={sideMenuItems}
        />
    );
};

export default SideMenu;