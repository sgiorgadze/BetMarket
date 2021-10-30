import React, { useState } from 'react';
import "./sidebar.scss"


const Sidebar = () => {
    const [active, setActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState("")
    const selectActivItem = (id) => {
        console.log(id);
    }
    return (
        <section className="section_box sidebar">
            <div className="user_box"></div>
            <ul className="menu">
                <li className="menu_item all active">
                    <div id="0" className="bind">ყველა
                    </div>

                </li>
                <li className={active && selectedItem === "2" ? "menu_item slot active" : "menu_item slot"}>
                    <div id="2" className="bind" onClick={() => { setSelectedItem("2"); setActive(!active) }}>სლოტები
                        <i class="sub-arrow"> </i></div>

                    <ul className="sub_menu">
                        <li id="3" className="bind sub_menu_item active">
                            <i class="check-icon"> </i>
                            EGT
                        </li>
                        <li id="11" className="sub_menu_item active">
                            <i class="check-icon"> </i>
                            QUICKSPIN
                        </li>
                        <li id="302" className="sub_menu_item active">
                            <i class="check-icon"> </i>
                            NOLIMIT CITY
                        </li>
                        <li id="525" className="sub_menu_item active">
                            <i class="check-icon"> </i>
                            HACKSAW
                        </li>
                    </ul>
                </li>
                <li className={active && selectedItem === "12" ? "menu_item sport active" : "menu_item sport "}>
                    <div id="12" className="bind" onClick={() => { setSelectedItem("12"); setActive(!active) }}>სპორტი
                        <i class="sub-arrow"> </i></div>
                    <ul className="sub_menu">
                        <li id="13" className="bind sub_menu_item active">
                            <i class="check-icon"> </i>
                            FREEBET
                        </li>

                    </ul>
                </li>
                <li className="menu_item spin">
                    <div id="14" className="bind">სპინ თამაშები
                        <i class="sub-arrow"> </i></div>
                    <ul className="sub_menu">
                        <li id="15" className="sub_menu_item active">
                            <i class="check-icon"> </i>
                            სპინ პოკერი
                        </li>
                        <li id="16" className="sub_menu_item active">
                            <i class="check-icon"> </i>
                            სპინ ჯოკერი
                        </li>
                        <li id="17" className="sub_menu_item active">
                            <i class="check-icon"> </i>
                            სპინ დომინო
                        </li>
                        <li id="18" className="sub_menu_item active">
                            <i class="check-icon"> </i>
                            სპინ ბურა
                        </li>
                    </ul>
                </li>
                <li className="menu_item volt ">
                    <div id="19" className="bind">ვოლტი
                    </div>
                </li>
            </ul >


        </section >
    );
}

export default Sidebar;