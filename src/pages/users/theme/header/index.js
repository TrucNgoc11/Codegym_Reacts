import { memo, useState } from "react";
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube, AiOutlineUser, AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { Link } from "react-router-dom";
import { formatter } from "utils/formater";
import { ROUTERS } from "utils/router";


const Header = () => {
    const [isShowCategories, setShowCategories] = useState(true);
    const [menu] = useState([
        {
            name: "Trang chu",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cua hang",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "San pham",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Ao",
                    path: "",
                },
                {
                    name: "Quan",
                    path: "",
                },
                {
                    name: "Vay",
                    path: "",
                },


            ]
        },
        {
            name: "Bai viet",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Lien he",
            path: ROUTERS.USER.HOME,
        },

    ])
    return (
    <>
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header_top_left">
                        <ul>
                            <li><IoMailOutline /> hello@gmail.com</li>
                            <li>Miễn phí ship cho hoá đơn từ {formatter(200000)}</li>
                        </ul>
                    </div>
                    <div className="col-6 header_top_right">
                        <ul>
                            <li>
                                <Link to={""}>
                                <AiOutlineFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                <AiOutlineInstagram />
                                </Link>                      
                            </li>
                            <li>
                                <Link to={""}>
                                <AiOutlineYoutube />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                <TbWorldWww />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                <AiOutlineUser />
                                </Link>
                                <span>Đăng nhập</span>
                            </li>                               
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                    <div className="header_logo">
                        <h1>Pink SHOP</h1>
                    </div>
                </div>
                <div className="col-xl-6">
                    <nav className="header_menu">
                        <ul>
                            {menu?.map((menu, menuKey) => (
                                <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                    <Link to={menu?.path}>{menu?.name}</Link>
                                    {menu.child && (
                                            <ul className="header_menu_dropdown">
                                                {menu.child.map((childItem, childKey) => (
                                                        <li key={`${menuKey} - ${childKey}`}>
                                                            <Link to ={childItem.path}>{childItem.name}</Link>
                                                        </li>
                                                    ))}                                              
                                            </ul>
                                        )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="col-xl-3">
                    <div className="header_cart">
                        <div className="header_cart_price">
                            <span>{formatter(1001230)}</span>
                        </div>
                        <ul>
                            <li>
                                <Link to="#">
                                <AiOutlineShoppingCart /><span>5</span>
                                </Link>
                            </li>
                        </ul>


                    </div>
                </div>

            </div>
        
        </div>
        <div className="container">
            <div className="row hero_categories_container">
                <div className="col-lg-3 hero_categories">
                    <div className="hero_categories_all" onclick={() => setShowCategories(!isShowCategories)} >
                        <AiOutlineMenu />
                        Danh sách sản phẩm
                    </div>
            
                        <ul className={isShowCategories ? "" : "hidden"}>    
                        <li>
                        <Link to={"#"}>Ao phong</Link>
                        </li>
                        <li>
                        <Link to={"#"}>Quan short</Link>
                        </li>
                        <li>
                        <Link to={"#"}>Quan dai</Link>
                        </li>
                        <li>
                        <Link to={"#"}>Vay</Link>
                        </li>
                        <li>
                        <Link to={"#"}>Phu kien</Link>
                        </li>
                    </ul>
                    
                        
                               
                </div>
                <div className="col-lg-9">Phai</div>
            </div>

        </div>    
    </>     
    );   
};

export default memo(Header);