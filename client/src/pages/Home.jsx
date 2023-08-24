import React from 'react';
import {sideMenuItems} from "../utils/sideMenuItems";

const Home = () => {
    return (
        <div>
            {
                sideMenuItems.map(el =>
                    <ul>
                        <li style={{margin: "20px", fontSize: "20px"}}>{el.label} - {el.description}</li>
                    </ul>
                )
            }
        </div>
    );
};

export default Home;