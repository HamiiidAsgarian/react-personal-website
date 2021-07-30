
import React, { Component } from 'react';
import "./Footer.css";
import "../../resources/icons/font-icons/css/fontello.css"


class Footer extends Component {
    linkTo = (web) => {
        window.open(web);
    }
    state = {
        scroll: 0,
    }
    render() {
        // window.onscroll = () => {
        //     if (document.documentElement.scrollTop > 1400)
        //         this.setState({ scroll: (document.documentElement.scrollTop-1400)*1 })
        //     console.log(document.documentElement.scrollTop)
        //     console.log(this.state.scroll)
        // }
        return (
            <section className="Foot">
                <section className="Footer" />

                <div className="Footer-real">
                    <div className="Footer-holder">
                        <div className="Footer-icons">
                            <i className="icon-facebook" onClick={(e) => this.linkTo("https://www.facebook.com/hamid.asgarian.96")} />
                            <i className="icon-linkedin-3" onClick={(e) => this.linkTo("https://www.linkedin.com/in/hamiiid-asgarian")} />
                            {/* <i className="icon-vimeo"></i> */}
                            <i className="icon-instagram-1" onClick={(e) => this.linkTo("https://www.instagram.com/hamiiid.webdeveloper/?hl=en")} />

                        </div>
                        <p className="footer-copywrite">© 2019 Hamiiid.Asgarian@gmail.com </p>

                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;
