import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom';
import png2 from './images/2.png'
import png3 from './images/1.png'
import png4 from './images/4.png'
import png5 from './images/3.png'
import png6 from './images/5.png'
import png7 from './images/7.png'
import png8 from "./images/8.png";

import office2 from "./images/office_2.jpg";
function StaticPage() {
    return (
        <div>
        <div><NavLink to="/">Back</NavLink></div>
            <div className="flex-box">
                <div className="header">Landkit.</div>
                
                    <div className="grey">Landings</div>
                    <div className="grey">Pages</div>
                    <div className="grey">Account</div>
                    <div className="grey">Documentaion</div>
               
                <button className="btn-1">Buy now</button>
            </div>


            <div className="flex-box top">
                <div>
                    <h2>Welcome to <i className="blue">Landkit.</i></h2>
                    <h2 class="lessmargin">Develop anything</h2>
                    <p className="grey">Build a beautiful, morden website with flexbile Bootstrap components build from scratch</p>
                    <div>
                        <button className="btn-2">View all pages -></button>
                        <button className="btn-3" style={{marginLeft:"10px"}}>Documentaion</button>
                    </div>
                </div>
                <img className="img-1" src="https://cdn.theatlantic.com/thumbor/ApjKEB47YbmSsDJRLpnEMRNBN94=/0x1500:4656x4121/720x405/media/img/mt/2020/05/LON72718/original.jpg" alt="image1"></img>
            </div>

            <div className="flex">
                <div>
                    <img src={png2} alt="img"/>
                    <h4>Build for developers</h4>
                    <p className="grey">Landkit is build to make life easier.Variables, build tooling, documentation, and reusable components</p>
                </div>
                <div>
                    <img src={png3} alt="img"></img>
                    <h4>Designed to be modern</h4>
                    <p className="grey">Designed with the latest design trends in mind. Lankit deels modern, minimal, and beautiful.</p>
                </div>
                <div>
                    <img src={png4} alt="img"></img>
                    <h4>Documentation for everything</h4>
                    <p className="grey">We'we written extensive documentation for compnents and tools, so you never have to reverse engineer anything.</p>
                </div>
            </div>
                <div className="flex">
                    <div>
                        <img class="small-img" src={png5} alt="img"/>
                    <span style={{marginLeft:"4px"}} className="big">airbnb</span>
                    </div>
                    
                    <div className="big">coinbase</div>
                    <div className="cursive big">dribble</div>
                    <div className="big">Instagram</div>
                    <div className="big">Netflix</div>
                    <div className="big">Pinterest</div>
                </div>

                <div style={{backgroundColor:"lightgray"}} className="flexbox">
                    <div className="card">
                        <div><img src={office2} alt="img"></img></div>
                        <div><input type="text" placeholder="Name" /></div>
                        <div><input type="text" placeholder="Email" /></div>
                        <div><input type="password" placeholder="Password" /></div>
                        <button className="greenbtn">Download a sample</button>
                    </div>

                    <div class="size">
                        <h4>The most useful resource</h4>
                        <h4 className="green">ever created for dev |</h4>
                        <div className="wrap">
                            Using Ladkit to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and [re-designed layouts will make your life easier.]
                        </div>

                        <div style={{display:"flex"}}>
                            <div className="topmargin">
                            <img className="small-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWz_5_QsbenbgaeO645yp3Hdq_z5_FY7B-g&usqp=CAU" alt="img" />
                            <span className="green">Lifetime updates</span>
                            <div>
                                <img className="small-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWz_5_QsbenbgaeO645yp3Hdq_z5_FY7B-g&usqp=CAU" alt="img" />
                            <span className="green">Tech supports</span>
                            </div>
                            
                            </div>

                        <div className="topmargin left ">
                            <img className="small-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWz_5_QsbenbgaeO645yp3Hdq_z5_FY7B-g&usqp=CAU" alt="img" />
                            <span className="green">Tons of asserts</span>

                            <div>
                                 <img className="small-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWz_5_QsbenbgaeO645yp3Hdq_z5_FY7B-g&usqp=CAU" alt="img" />
                            <span className="green">Integration ready</span>
                            </div>
                           
                        </div>
                        </div>
                        
                    </div>
                </div>
            
        <div className="flex">
            <div >
                <h3>We have lots of experience.</h3>
                <h3 className="blue">building Bootstrap themes.</h3>

                <p className="grey">We've built well over dozen Bootstrap themes and sold tens of thousand of copies</p>

                <div>
                    <img scr={png6} alt="img"></img>
                    <span>
                        <h5>Bootstrap users since the beginning</h5>
                        <p>We've been developing with Bootstrap since it was publicly relased in 2011.</p>

                    </span>
            
                    <img src={png4} alt="img"></img>
                    <span>
                        <h5>Deep understanding of Bootstrap</h5>
                        <p>We.ve watched Bootstrap grow up ove the years and understand it better than almost anyone.</p>
                    </span>
                </div>
            </div>
            <div><img className="smallimg" src={png7}></img></div>
            
        </div>
        <div className="center">
            <h3>Our customers are our biggest fans.</h3>
            <p>We dont't like to brag,but we dont't mind letting our customers do it for us.</p>
            <p>Here are a few nice things folks have said about our themes over the years</p>
        </div>
        <div className="cards-design">

        </div>

        <div>
            <div className="flex">
            
            <div >
                <h3>Stay focused on your business.</h3>
                <h3 className="blue">Let us handle the design.</h3>
                <p>You have a business to run. Stop worring about scross-browse bugs, degigning new pages, keeping your components up to data. Let us do that for you.</p>
                <div className="flexspace">
                    <div>
                        <div>100%</div>
                        <p className="grey">Saticfaction</p>
                    </div>
                    <div>
                        <div>24/7</div>
                        <p className="grey">Support</p>
                    </div>
                    <div>
                        <div>100k+</div>
                        <p className="grey">Sales</p>
                    </div>
                </div>
            </div>
            <img src={png8} alt="img"/>
        </div>
            
            <h4>Fair, simple pricing for all.</h4>
            <p>All types of business need access to deveopment resources, so we give you option to decide how much you nedd to use.</p>

            <span> Annual <img src="" alt="img"></img> Monthly</span>
        </div>


                        
                   
</div>
            
        
    )
}

export default StaticPage
