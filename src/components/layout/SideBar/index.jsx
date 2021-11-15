import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSideBarList } from "../../../data/SideBarList"
import { getFillteredSlots } from "../../../core/store/dataSlice"


import "./sidebar.scss"

import { slotsDataSelector, slotsFilterSelector } from "../../../core/store/selectors"
import { useEffect } from 'react';



const Sidebar = () => {
    const dispatch = useDispatch()
    const [selectedItem, setSelectedItem] = useState("")
    const [checkedCount, setCheckedCount] = useState(0)
    const [sideBarMenu, setSideBarMenu] = useState([])


    useEffect(() => {
        setSideBarMenu(getSideBarList());
    }, [])


    const data = useSelector(slotsDataSelector)
    const filteredSlots = useSelector(slotsFilterSelector)


    const handleMenuItem = (item) => {
        if (selectedItem.id === item.id && selectedItem) {
            setSelectedItem("");
            handlefilterData(0)

        } else {
            setSelectedItem(item);
            let data = [...sideBarMenu];
            data.map(item => item.subCategoty.map(subItem => subItem.isChecked = true))
            setSideBarMenu(data);
            handlefilterData(item)

        }
        setCheckedCount(0);
    }


    const checkSubMenuItem = (id, subItem) => {
        //console.log(subItem);
        let newMenudata = [...sideBarMenu];
        newMenudata.map((item) => {
            if (item.id === id && checkedCount === 0) {
                item.subCategoty.map((sub) => {
                    if (sub !== subItem) {
                        sub.isChecked = false
                    }
                }
                )
                setCheckedCount(1)
            } else if (item.id === id) {
                item.subCategoty.map((sub) => {
                    if (sub === subItem) {
                        sub.isChecked = !sub.isChecked

                    }
                })
            }
        }
        )
        setSideBarMenu(newMenudata);

    }

    const handlefilterData = (item) => {
        let filterData = [];
        data.map(slot => slot.tags.map(sl => {
            if (sl.tag_id === item.id) {
                filterData.push(slot)
            }
        }))
        if (filterData.length > 0) {
            dispatch(getFillteredSlots(filterData))
        } else {
            dispatch(getFillteredSlots(data))

        }
    }


    const handleSubItemFilterData = (item) => {
        let subItemFilterData = [];
        item.subCategoty.map(item => {
            if (item.isChecked) {
                data.map(slot => slot.tags.map(sl => {
                    if (sl.tag_id === item.id)
                        subItemFilterData.push(slot)

                }))
            }
        })
        dispatch(getFillteredSlots(subItemFilterData))

    }


    return (
        <section className="section_box sidebar">
            <div className="user_box"></div>
            <ul className="menu">
                {sideBarMenu.map(item =>
                    <li key={item.id} className={item.id === selectedItem.id ? `menu_item ${item.className} active` : `menu_item ${item.className}`}>
                        <div id={item.id} className="bind" onClick={() => {
                            handleMenuItem(item);

                        }}>{item.title}
                            <i className="sub-arrow"> </i></div>

                        <ul className="sub_menu">
                            {item.subCategoty.map(subItem =>
                                <li key={subItem.id} id={subItem.id}
                                    onClick={() => {
                                        checkSubMenuItem(item.id, subItem);
                                        handleSubItemFilterData(item)
                                    }}
                                    className={subItem.isChecked ? "bind sub_menu_item active" : "bind sub_menu_item"}
                                >
                                    <i className="check-icon"> </i>
                                    {subItem.name}
                                </li>)}

                        </ul>
                    </li>)}
            </ul >


        </section >
    );
}

export default Sidebar;