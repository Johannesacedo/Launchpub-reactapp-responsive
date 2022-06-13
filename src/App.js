import React, { Fragment } from "react";
import "./global.css";
import "./react-page.css";
import "./styleguide.css";


function App(){
   return(
    <Fragment>
        <section className="launchpub xl:pt-12 pt-8 xl:pb-20 pb-10 xl:px-0 px-5" id="launchpub">
            <div className="grid grid-cols-12 max-w-screen-xl mx-auto relative">
                <img className="a-bg-logo" src={require("./img/a-logo-1@1x.png")} alt=""/>
                <div className="col-span-12">
                    <img className="mx-auto xl:max-w-md max-w-xs" src={require("./img/launchpub-logo-1x-png@1x.png" )} alt="" />
                    <h1 className="font-bold text-center xl:text-5xl text-3xl font-montserrat xl:mt-10 mt-4 text-blue">Join the Genesis Syndicate Today!</h1>
                    <p className="text-center text-white xl:text-2xl text-lg font-montserrat xl:mt-6 mt-4">Membership to this exclusive club is extremely limited (2 Genesis Memberships per person)</p>
                </div>
                <div className="col-span-12 bg-blue-transparent p-5 xl:mt-9 mt-5">
                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-3 md:col-span-6 col-span-12 xl:mb-0 mb-3 p-3 mx-2 bg-gradient-to-r from-blue-violet to-violet rounded-lg border-4 border-solid border-violet-transparent">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 flex items-center">
                                    <p className="text-white xl:text-xl text-lg font-montserrat">First 250</p>
                                </div>
                                <div className="col-span-6 text-right items-center">
                                    <span className="font-bold text-white xl:text-xl text-lg font-montserrat inline-block mr-2">1 ETH</span> <img className="inline-block w-5 xl:-mt-3 -mt-2" src={require("./img/icon-awesome-ethereum-4@1x.png")} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-3 md:col-span-6 col-span-12 xl:mb-0 mb-3 p-3 mx-2 bg-gradient-to-r from-blue-violet to-violet rounded-lg border-4 border-solid border-violet-transparent">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 flex items-center">
                                    <p className="text-white xl:text-xl text-lg font-montserrat">Second 250</p>
                                </div>
                                <div className="col-span-6 text-right items-center">
                                    <span className="font-bold text-white xl:text-xl text-lg font-montserrat inline-block mr-2">1.1 ETH</span> <img className="inline-block w-5 xl:-mt-3 -mt-2" src={require("./img/icon-awesome-ethereum-4@1x.png")} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-3 md:col-span-6 col-span-12 md:mb-0 mb-3 p-3 mx-2 bg-gradient-to-r from-blue-violet to-violet rounded-lg border-4 border-solid border-violet-transparent">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 flex items-center">
                                    <p className="text-white xl:text-xl text-lg font-montserrat">Third 250</p>
                                </div>
                                <div className="col-span-6 text-right items-center">
                                    <span className="font-bold text-white xl:text-xl text-lg font-montserrat inline-block mr-2">1.2 ETH</span> <img className="inline-block w-5 xl:-mt-3 -mt-2" src={require("./img/icon-awesome-ethereum-4@1x.png")} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-3 md:col-span-6 col-span-12 xl:mb-0 p-3 mx-2 bg-gradient-to-r from-blue-violet to-violet rounded-lg border-4 border-solid border-violet-transparent">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 flex items-center">
                                    <p className="text-white xl:text-xl text-lg font-montserrat">Final 200</p>
                                </div>
                                <div className="col-span-6 text-right items-center">
                                    <span className="font-bold text-white xl:text-xl text-lg font-montserrat inline-block mr-2">1.5 ETH</span> <img className="inline-block w-5 xl:-mt-3 -mt-2" src={require("./img/icon-awesome-ethereum-4@1x.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 xl:mt-12 mt-8">
                    <div className="grid grid-cols-12 max-w-5xl mx-auto">
                        <div className="xl:col-span-6 col-span-12">
                            <div className="left-bg">
                                <div className="bg-second p-10">
                                    <img className="" src={require("./img/LaunchPub_NFT_Card.gif")} alt=""/>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-5 col-span-4">
                                            <p className="font-montserrat font-bold xl:text-3xl text-2xl text-pink">10,000</p>
                                        </div>
                                        <div className="col-span-4">
                                            <img className="inline-block w-8 -mt-3 mr-2" src={require("./img/icon-metro-heart-1@1x.png")} alt="" /> <span className="font-bold text-white xl:text-3xl text-2xl font-montserrat inline-block mr-2">54</span> 
                                        </div>
                                        <div className="lg:col-span-3 col-span-4">
                                        <img className="inline-block w-8 -mt-3 mr-2" src={require("./img/eye-icon.png")} alt="" /> <span className="font-bold text-white xl:text-3xl text-2xl font-montserrat inline-block mr-2">54</span> 
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            <p className="font-bold xl:text-4xl text-3xl text-center mt-5 font-montserrat text-white">Item Title Here</p>
                        </div>
                        <div className="xl:col-span-6 col-span-12 xl:pl-10 pl-0 xl:mt-0 mt-10">
                            <p className="font-bold xl:text-4xl text-3xl xl:text-left text-center font-montserrat text-white mb-3">Mint NFT</p>
                            <p className="font-montserrat font-bold text-3xl xl:text-left text-center text-pink">10,000 <span className="font-light text-xl text-white">NFTS</span></p> 
                            <p className="font-bold xl:text-2xl text-xl font-montserrat text-white mb-4 xl:mt-10 mt-5">Balance</p>
                            <img className="line-1" src={require("./img/line-1-1@1x.png")} alt="" />
                            <div className="grid grid-cols-12 xl:mt-7 mt-3 mb-4">
                                <div className="col-span-4">
                                    <p className="font-bold xl:text-2xl text-xl font-montserrat text-white">Amount</p>
                                </div>
                                <div className="col-span-4">
                                    <p className="font-bold xl:text-2xl text-xl text-center font-montserrat text-white">- <span className="mx-4">3</span> +</p>
                                </div>
                                <div className="col-span-4">
                                    <p className="font-bold xl:text-2xl text-xl text-right font-montserrat text-white">Max</p>
                                </div>
                            </div>
                            <img className="line-1" src={require("./img/line-1-1@1x.png")} alt="" />
                            <div className="grid grid-cols-12 xl:mt-7 mt-3 mb-4">
                                <div className="col-span-4">
                                    <p className="font-bold xl:text-2xl text-xl font-montserrat text-white">Total</p>
                                </div>
                                <div className="col-span-4">
                                    <p className="font-bold xl:text-2xl text-xl text-center font-montserrat text-white">0.008</p>
                                </div>
                                <div className="col-span-4 text-right">
                                    <img className="inline-block w-5 -mt-3 mr-2" src={require("./img/icon-awesome-ethereum-2@1x.png")} alt="" /> <span className="font-bold text-white xl:text-2xl text-xl font-montserrat inline-block">Eth</span> 
                                </div>
                            </div>
                            <img className="line-1" src={require("./img/line-1-1@1x.png")} alt="" />
                            <div className="p-6 mt-7 bg-gradient-to-r from-blue-violet to-violet rounded-lg border-4 border-solid border-violet-transparent">
                                <a href=""><button className="bg-blue w-full p-3 font-bold font-montserrat xl:text-4xl text-3xl text-center text-white">PURCHASE</button></a>
                            </div>
                            <p className="text-white font-montserrat text-center mt-5 text-xs">Make sure your metamask wallet is connected.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 text-center xl:mt-32 mt-16">
                    <p className="text-gray font-bold font-montserrat xl:text-xl text-lg xl:mb-8 mb-5">Copyright © 2022 LAUNCHPUB | NFT Marketplace</p>
                    <p className="text-gray font-bold font-montserrat xl:text-xl text-lg mb-3"><a href="#" className="">PRIVACY POLICY</a></p>
                    <p className="text-gray font-bold font-montserrat xl:text-xl text-lg mb-3"><a href="#">TERMS OF USE</a></p>
                    <p className="text-gray font-bold font-montserrat xl:text-xl text-lg"><a href="#">DISCLAIMER</a></p>
                </div>
            </div>
        </section>
    </Fragment>
   )
}

export default App;