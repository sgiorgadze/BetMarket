import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSideBarList } from "../../../data/SideBarList"
import { getFillteredSlots, getSideBarId, getHeaderId, filterSidebarMenuAction } from "../../../core/store/dataSlice"
import { filterSidebarMenu } from "../../../utils/common"

import "./sidebar.scss"

import { slotsDataSelector, sideBarIdSelector, slotsFilterSelector, headerIdSelector } from "../../../core/store/selectors"
import { useEffect } from 'react';



const Sidebar = () => {
    const dispatch = useDispatch()
    const [selectedItem, setSelectedItem] = useState("")
    const [checkedCount, setCheckedCount] = useState(0)
    const [sideBarMenu, setSideBarMenu] = useState([])

    const slotsId = useSelector(sideBarIdSelector)
    const filteredSlots = useSelector(slotsFilterSelector)
    const data = useSelector(slotsDataSelector)




    useEffect(() => {
        setSideBarMenu(getSideBarList());
    }, [])


    //const filteredSlots = useSelector(slotsFilterSelector)


    const handleMenuItem = (item) => {
        if (item.id === 0) {
            dispatch(filterSidebarMenuAction(filterSidebarMenu([0])));
            return dispatch(getFillteredSlots(data))
        }
        if (selectedItem.id === item.id && selectedItem) {
            setSelectedItem("");
            dispatch(filterSidebarMenuAction(filterSidebarMenu([0])));
            dispatch(getFillteredSlots(data))


        } else {
            setSelectedItem(item);
            let data = [...sideBarMenu];
            data.map(item => item.subCategoty.map(subItem => subItem.isChecked = true))
            setSideBarMenu(data);
            handleSubItemFilterData(item)


        }
        setCheckedCount(0);

    }

    const handleSubItemFilterData = (item) => {
        const postArr = []

        if (item.subCategoty.length > 0) {
            item.subCategoty.map(s => {
                if (s.isChecked) {
                    postArr.push(s.id)
                }
            })
        } else {
            postArr.push(item.id)
        }
        dispatch(filterSidebarMenuAction(filterSidebarMenu(postArr)));
        filterDataById(postArr)
    }

    const filterDataById = (arrId) => {
        const newFilteredData = [];
        for (let i of arrId) {
            data.map(slot => slot.tags.map(s => {
                if (s.tag_id === i) {
                    newFilteredData.push(slot)
                }
            }))

        }
        dispatch(getFillteredSlots(newFilteredData))
    }



    const checkSubMenuItem = (id, subItem) => {
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
                                        //handlefilterData(item)
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