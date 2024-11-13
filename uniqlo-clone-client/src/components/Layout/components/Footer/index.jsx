import { FacebookIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from "../../../SvgIcon";
import styles from './Footer.module.scss';

function Footer() {
    return (
        <>
            <div className={styles["footer-wrapper"]}>
                <div className="container">
                    <div className={styles["footer-utility"]}>
                        <div className={`${styles["footer-utility-item"]}`}>
                            <p>Về Uniqlo</p>
                            <a href="https://www.uniqlo.com/vn/vi/information">Thông tin</a>
                            <a href="https://map.uniqlo.com/vn/vi/">Danh sách cửa hàng</a>
                            <a href="https://www.fastretailing.com/employment/en/">Cơ Hội Nghề Nghiệp</a>
                        </div>

                        <div className={`${styles["footer-utility-item"]}`}>
                            <p>Trợ giúp</p>
                            <a href="https://faq-vn.uniqlo.com/pkb_Home_UQ_VN?l=vi">FAQ</a>
                            <a href="https://faq-vn.uniqlo.com/pkb_Home_UQ_VN?q=Ho%C3%A0n%20Tr%E1%BA%A3%2F%20%C4%90%E1%BB%95i%20H%C3%A0ng&l=vi&c=category_uq_sg_my%3AUQVN_C1_2">Chính sách trả hàng</a>
                            <a href="https://faq-vn.uniqlo.com/articles/vi/FAQ/Ch%C3%ADnh-s%C3%A1ch-b%E1%BA%A3o-m%E1%BA%ADt">Chính sách bảo mật</a>
                            <a href="https://faq-vn.uniqlo.com/articles/vi/FAQ/Kh%E1%BA%A3-n%C4%83ng-truy-c%E1%BA%ADp">Tiếp cận</a>
                        </div>

                        <div className={`${styles["footer-utility-item"]}`}>
                            <p>Tài khoản</p>
                            <a href="https://www.uniqlo.com/vn/vi/member/">Tư cách thành viên</a>
                            <a href="https://www.uniqlo.com/vn/vi/member/details">Hồ sơ</a>
                            <a href="https://www.uniqlo.com/vn/vi/member/coupon/wallet-store">Coupons</a>
                        </div>

                        <div className={`${styles["footer-utility-item"]}`}>
                            <p>Bản tin điện tử</p>
                            <p className={`${styles["e-news-content"]}`}>Đăng ký ngay và là người đầu tiên nắm được thông tin khi có mặt hàng mới, khuyến mãi, các sự kiện sắp diễn ra tại cửa hàng và nhiều thông tin hữu ích khác.</p>
                            <a href="https://www.uniqlo.com/vn/vi/member/e-news/subscription"><span>ĐĂNG KÝ NGAY</span></a>
                        </div>

                        <div className={`${styles["footer-utility-item"]}`}>
                            <p>Tài khoản xã hội UNIQLO</p>
                            <div className={`${styles["social-icon"]}`}>
                                <div className="social-icon-item">
                                    <a href="https://www.facebook.com/uniqlovnam"><FacebookIcon /></a>
                                </div>
                                <div className="social-icon-item">
                                    <a href="https://www.instagram.com/uniqlovnam/"><InstagramIcon /></a>
                                </div>
                                <div className="social-icon-item">
                                    <a href="https://www.tiktok.com/@uniqlovn"><TiktokIcon /></a>
                                </div>
                                <div className="social-icon-item">
                                    <a href="https://www.youtube.com/channel/UCTCaSotwb_3myUjZNriRYrg"><YoutubeIcon /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles["language-selection"]}>
                        <a href="https://www.uniqlo.com/vn/en/">English</a>
                        <span> | </span>
                        <a href="https://www.uniqlo.com/vn/vi/">Tiếng Việt</a>
                    </div>
                </div>

                <div className={styles["horizontal-line"]}>
                    <hr />
                </div>

                <div className="container">
                    <div className={styles["copyright"]}>
                        <div className="copyright-info">
                            <span className="copyright-info-text">Copyright © UNIQLO Co., Ltd. All rights reserved.</span>
                        </div>

                        <div className={styles["copyright-term-policy"]}>
                            <div className="term-of-use">
                                <a href="https://faq-vn.uniqlo.com/articles/en_US/FAQ/UQVN-TERMS-OF-USE"><span>Terms of use</span></a>
                            </div>

                            <div className="privacy-policy">
                                <a href="https://faq-vn.uniqlo.com/articles/en_US/FAQ/UQVN-Privacy-policy"><span>Privacy policy</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="company-info">
                        <p>Tên công ty: UNIQLO VIETNAM CO., LTD</p>
                        <p>Giấy chứng nhận đăng ký doanh nghiệp số: 0315304731, đăng ký lần đầu ngày 02/10/2018, đăng ký thay đổi lần thứ ba ngày 23/09/2019</p>
                        <p>Địa chỉ trụ sở doanh nghiệp: Tầng 26, Tòa nhà Trụ Sở Điều Hành Và Trung Tâm Thương Mại Viettel, 285 Cách Mạng Tháng Tám, Phường 12, Quận 10, Thành phố Hồ Chí Minh</p>
                        <p>Để được giải đáp thắc mắc, vui lòng truy cập trang FAQ/Trợ giúp</p>
                        <p>Giờ làm việc: 9:00 - 18:00 {"("}Thứ Hai - Chủ Nhật{")"}</p>
                        <a href="http://online.gov.vn/Home/WebDetails/74620?AspxAutoDetectCookieSupport=1"><img src="https://im.uniqlo.com/global-cms/spa/resfb28ee615b9469a533e195812bd0de44fr.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;