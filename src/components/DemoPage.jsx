import React from 'react';
import './demoPage.css'


const DemoPage = () => {
    return (
        <>
        <div className="container">
            <div className="containerMain">
                <div className="main">
                    <div className="top1"></div>
                    <div className="bottom">
                        <h4>Impression</h4>     <br />
                        <h3>0</h3>
                    </div>
                </div>

                <div className="main">
                    <div className="top2"></div>
                    <div className="bottom">
                        <h4>Clicks</h4>     <br />
                        <h3>0</h3>
                    </div>
                </div>
                <div className="main">
                    <div className="top3"></div>
                    <div className="bottom">
                        <h4>CTR</h4>     <br />
                        <h3>0%</h3>
                    </div>
                </div>
                <div className="main">
                    <div className="top4"></div>
                    <div className="bottom">
                        <h4>Orders</h4>     <br />
                        <h3>0</h3>
                    </div>
                </div>
                <div className="main">
                    <div className="top5"></div>
                    <div className="bottom">
                        <h4>Conversions</h4>     <br />
                        <h3>0</h3>
                    </div>
                </div>
                <div className="main">
                    <div className="top5"></div>
                    <div className="bottom">
                        <h4>Items Sold</h4>
                        <br />
                        <h3>0</h3>
                    </div>
                </div>

                <div className="main">
                    <div className="top5"></div>
                    <div className="bottom">
                        <h4>GMV</h4>     <br />
                        <h3>CLPO</h3>
                    </div>
                </div>



            </div>
            <div className="lowerTextCont">
                <div>
                    {/* <div>
                        <p>Trend Chart of Each Metric</p>
                    </div> */}
                    <div>
                        <p>Trend Chart of Each Metric</p>
                    </div>
                </div>
                <div className='rightCont'>
                    <div className="impression"></div> <p>Impression</p>  
                    <div className="click"></div> <p>Click</p>
                    <div className="ctr"></div><p>CTR</p>
                    <div className="orders"></div> <p>Orders</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default DemoPage
