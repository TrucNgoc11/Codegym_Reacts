import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="footer_about">
                        <h1 className="footer_about_logo">Pink SHOP</h1>
                        <ul>
                            <li>Dia chi: 100 Nam Ky Khoi Nghia</li>
                            <li>Phone: 0123-456-456</li>
                            <li>Email: hello@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="footer_widget">
                        <h6>Cua hang</h6>
                        <ul>
                            <li>
                                <Link to="">Lien he</Link>
                            </li>
                            <li>
                                <Link to="">Thong tin ve chung toi</Link>
                            </li>
                            <li>
                                <Link to="">San pham kinh doanh</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="">Thong tin tai khoan</Link>
                            </li>
                            <li>
                                <Link to="">Gio hang</Link>
                            </li>
                            <li>
                                <Link to="">Danh sach ua thich</Link>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <div className="footer_widget">
                        <h6>Khuyen mai & Uu dai</h6>
                        <p>Dang ki nhan thong tin tai day</p>
                        <form action="#">
                            <div className="input_group">
                                <input type="text" placeholder="Nhap email" />
                                <button type="submit" className="button_submit">Dang ky</button>
                            </div>
                            <div className="footer_widget_social">
                                <div>
                                <AiOutlineFacebook />
                                </div>
                                <div>
                                <AiOutlineInstagram />
                                </div>
                                <div>
                                <AiOutlineYoutube />
                                </div>

                            </div>

                        </form>

                    </div>
                    

                    
                </div>
            </div>
            
        </div>

    </footer>;
}

export default memo(Footer);
