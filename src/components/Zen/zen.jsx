import React, { Component } from 'react';
import "./zen.css";

import react from "../../resources/talentImages/react.png";
import redux from "../../resources/talentImages/redux.png";
import html from "../../resources/talentImages/html.png";
import css from "../../resources/talentImages/css.png";
import sass from "../../resources/talentImages/sass.png";
import json from "../../resources/talentImages/json.png";

// import band from "../../resources/sampleImages/band.jpg.";
import Footer from "../Footer/Footer";


class Zen extends Component {
    linkTo = (web) => {
        // window.location.href = web;
        window.open(web);
    }
    state = {
        rotate: 0,
        status: "night",
        pageX: "0",
        pageY: "0",
    }
    pageClichHandler = () => {
        this.state.status === "day" ? this.setState({ status: "night" }) : this.setState({ status: "day" })
        // this.setState({ status: e })
        // console.log(this.state.status)
    }

    // printMousePos=(event)=> {
    //     // this.setState({pageX:event.clientX,pageY:event.clientY})
    //     console.log(
    //         "clientX: " + event.clientX +
    //         " - clientY: " + event.clientY
    //         );
    // }

    render() {
        var back = this.state.status === "day" ? "backDay" : "backNight";
        var hands = this.state.status === "day" ? "45" : -"45";
        var arms = this.state.status === "day" ? "45" : -"-20";
        var fingers = this.state.status === "day" ? "95" : "0";
        var ballDown = this.state.status === "day" ? "" : "200px";

        const bodyDay = `
    #body{
        background-color: rgb(78, 51, 153);
    }
    .Footer-icons>i{
        color: #ffffff;
        border: 2px solid #ffffff;
    }
    .footer-copywrite{
        color: #ffffff;
    }
    `;
        const bodyNight = `
    #body{
        background-color: rgb(243, 243, 243);
    }
    .Footer-icons>i{
        color: #4D4D4D;
        border: 2px solid #4D4D4D;
    }
    .footer-copywrite{
        color: #4D4D4D;
    }
    `;
        var bodyValue = this.state.status === "day" ? bodyDay : bodyNight;
        // console.log(back + "  " + hands);
        // console.log(`rotate(${hands}deg)`);

        // document.addEventListener("click",(e)=>this.printMousePos(e));

        window.onscroll = () => {
            this.setState({ rotate: Math.floor(document.documentElement.scrollTop) })
            // console.log(this.state.rotate)
        }

        // var a = Math.floor(document.documentElement.scrollTop / 450 * 100 - 55);
        // var b = Math.floor(document.documentElement.scrollTop / 450 * 18 + 7);
        // var handRotate = Math.floor(document.documentElement.scrollTop / 450 * 18);
        // var ball = Math.floor(document.documentElement.scrollTop / 450 * 1700 - 1300);


        // var totalh = window.outerHeight;
        // var currentj = window.scrollY;
        // console.log(document.documentElement.scrollTop);
        // console.log(document.documentElement.scrollTop);

        return (
            <section className={"fullPage " + back} onClick={() => { this.pageClichHandler() }}>
                <style>
                    {
                        <style>{bodyValue}</style>
                    }
                </style>
                <section className="main">
                    <div className="whole">
                        <div className="body" >
                            <div className="neck"><div className="head">
                                <div className="brows"></div>
                                <div className="eyes"></div>
                                <div className="fam"></div>
                            </div></div>
                            <div className="R-arm" style={{ transform: `rotate(${hands}deg)` }}><div className="R-arm2" style={{ transform: `rotate(${arms}deg)` }}>
                                <div className="R-hand" style={{ transform: `rotate(${-fingers}deg)` }} ></div>
                            </div></div>
                            <div className="L-arm" style={{ transform: `rotate(${-hands}deg)` }}><div className="L-arm2" style={{ transform: `rotate(${-arms}deg)` }}>
                                <div className="L-hand" style={{ transform: `rotate(${fingers}deg)` }}></div></div></div>
                            <div className="legs"> <div className="feet"></div></div>
                        </div>

                        <div className="shadow" />
                        <div className="balls">
                            <div className="ball ball1" style={{ top: ballDown }} onClick={() => this.linkTo("http://band.hamiiid.ir/")}>
                                <div className="ball ball1 cover"></div>
                                <div className="talents t1">
                                    <img src={react} alt="" />
                                    <img src={redux} alt="" />
                                    {/* <img src={html} alt="" /> */}
                                </div>
                            </div>
                            <div className="ball ball2" style={{ top: ballDown }} onClick={() => this.linkTo("http://garage.hamiiid.ir/")}>
                                <div className="ball ball2 cover"></div>
                                <div className="talents t2">
                                    <img src={react} alt="" />
                                    <img src={redux} alt="" />
                                    <img src={json} alt="" />
                                </div>
                            </div>
                            <div className="ball ball3" style={{ top: ballDown }} onClick={() => this.linkTo("http://shop.hamiiid.ir/")}>
                                <div className="ball ball3 cover"></div>
                                <div className="talents t3">
                                    <img src={html} alt="" />
                                    <img src={css} alt="" />
                                    <img src={sass} alt="" />
                                </div>
                            </div>
                            {/* <div className="ball ball4"></div> */}
                            <div className="ball ball5" style={{ top: ballDown }} onClick={() => this.linkTo("http://artella.hamiiid.ir/")}>
                                <div className="ball ball5 cover"></div>
                                <div className="talents t4">
                                    <img src={html} alt="" />
                                    <img src={css} alt="" />
                                    <img src={sass} alt="" />
                                </div>
                            </div>
                            <div className="ball ball6" style={{ top: ballDown }} onClick={() => this.linkTo("http://animation.hamiiid.ir/")}>
                                <div className="ball ball6 cover"></div>
                                <div className="talents t5">
                                    <img src={html} alt="" />
                                    <img src={css} alt="" />
                                    {/* <img src={html} alt="" /> */}
                                </div>
                            </div>
                            {/* <div className="ball ball7" ></div> */}
                        </div>
                    </div>

                </section>
                <Footer />
                {/* <div className="touch" style={{top:this.state.pageY, left:this.state.pageX}}></div> */}
            </section>

        );



    }






}
export default Zen;