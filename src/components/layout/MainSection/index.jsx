import React from 'react';

const MainSection = () => {
    return (
        <>

            <section className="section_box main_section">
                <div className="item_container">

                    <ul className="main_section_nav for-mob">
                        <li class="mob-menu-btn for-mob">მენიუ</li>
                        <li class="section_nav_item mob-search search" data-info="ძებნა">
                            <input id="search1" autocomplete="off" type="search" />
                        </li>
                    </ul>

                    <ul className="main_section_nav">

                        <li id="29" className="sort_li section_nav_item for_web active ">
                            <i className="check_icon"></i>
                            TOP
                        </li>
                        <li id="30" className="sort_li section_nav_item for_web  ">
                            <i className="check_icon"></i>
                            ფასდაკლება
                        </li>
                        <li id="31" className="sort_li section_nav_item for_web  ">
                            <i className="check_icon"></i>
                            ბონუსი
                        </li>
                        <li id="1" className="sort_li section_nav_item for_web  ">
                            <i className="check_icon"></i>
                            FREESPIN
                        </li>
                        <li data-id="GEL" className="section_nav_item switch_btn">
                            <span data-currency="POINTS" class="switch_item">ქულა</span>
                            <span class="switch_img"> </span>
                            <span data-currency="GEL" class="switch_item">ლარი</span>
                        </li>
                        <li id="select-box" class="custom-select section_nav_item for-mob">
                            {/* <select class="custom-section">
                                <option value="all" selected="">ყველა</option>
                                <option value="29">TOP</option>
                                <option value="30">ფასდაკლება</option>
                                <option value="31">ბონუსი</option>
                                <option value="1">FREESPIN</option>
                            </select> */}
                        </li>
                        <li className="section_nav_item search for_web">
                            <input id="search" autocomplete="off" placeholder="ძებნა" type="search"></input>
                        </li>
                        <li id="by-price" className="section_nav_item"></li>
                        <li id="market-info" className="section-nav-item">
                            <a href="javascript:window.top.location = '/'+window.top.getDevice()+'/ka/promotions?page=betmarket-rules'"> </a>
                        </li>
                    </ul>

                    <div className="offer_box">
                        <div className="offer_title for_web">
                            <h3>შეთავაზებები</h3>
                            <div id="bt-price-range" className="for_web"></div>
                        </div>
                        <div id="regular" className="card_box">
                            <div data-value="1 bonus" className="card_item" style={{ backgroundImage: "url(https://staticdata.lider-bet.com/images/market/12670.png)" }}>
                                <p class="sale-text" data-text="-10%">
                                    <span>29 ნოე. 23:59 </span>
                                </p>
                                <div>
                                    <p class="card-title1">Diamond Duke 10.00 GEL BONUS </p>
                                    <p class="card-desc">QUICKSPIN, Diamond Duke 10.00 GEL BONUS </p>
                                    <p class="card-price" data-text="Diamond Duke 10.00 GEL BONUS">
                                        <span>900 GEL </span>
                                        <span class="on" data-text="-10%">1000.00 GEL </span>
                                    </p>
                                    <div className="card-btns">
                                        <div className="buy">შეძენა</div>
                                        <div className="gift">აჩუქე<br /> მეგობარს</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </section></>)
        ;
}

export default MainSection;