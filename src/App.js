import React, { Fragment } from "react";
import "./global.css";
import "./react-page.css";
import "./styleguide.css";


function App(){
   return(
    <Fragment>
    <div className="App">
    <div className="ui container">
    <div className="ui grid">
    <input type="hidden" id="anPageName" name="page" value="react-page" />
    <div className="container-center-horizontal">
        <div class="react-page screen">
            <img className="launch-pub_logo" src={require("./img/launchpub-logo-1x-png@1x.png" )} alt="" />
            <div className="overlap-group5">
            <img className="a_logo" src={require("./img/a-logo-1@1x.png")} alt=""/>
            <div className="join-the-genesis-syndicate-today">Join the Genesis Syndicate Today!</div>
            <div className="membership-to-this-e montserrat-normal-white-30px">
                Membership to this exclusive club is extremely limited (2 Genesis Memberships per person)
            </div>
            <div className="item-01">
                <div className="preview">
                <div className="overlap-group-2">
                    <div className="unflipped-box-1 border-1px-dove-gray">
                    <div className="rectangle-172-1 border-5px-plum"></div>
                    </div>
                    <img className="image-3" src={require("./img/LaunchPub_NFT_Card.gif")} alt=""/>
                    <div className="likes">
                    <img className="icon-heart" src={require("./img/icon-metro-heart-1@1x.png")} alt="" />
                    <div className="number">54</div>
                    </div>
                    <div className="views">
                    <div className="icon-feather-eye"><img clasName="path-151" src={require("./img/path-151-1@1x.png")} alt=""/></div>
                    <div className="number-1">54</div>
                    </div>
                    <div className="text-1">10,000</div>
                    <div className="rotating-card-preview">*Rotating card preview</div>
                </div>
                <div className="item-title-here">Item Title Here</div>
                </div>
                <div className="flex-col">
                <div className="nft-title">
                    <div className="overlap-group3">
                    <div className="mint-nft">Mint NFT</div>
                    <div className="text-6">10,000</div>
                    </div>
                    <div className="nfts bodytext">NFTS</div>
                </div>
                <div className="balance">
                    <div className="balance-1 montserrat-bold-black-haze-35px">Balance</div>
                    <img className="line-1" src={require("./img/line-1-1@1x.png")} alt="" />
                </div>
                <div className="amount">
                    <div className="flex-row montserrat-bold-black-haze-35px">
                    <div className="amount-1">Amount</div>
                    <div className="group-273 montserrat-extra-bold-black-haze-40px">
                        <div className="text-2">-</div>
                        <div className="number-2">3</div>
                        <div className="text-3">+</div>
                    </div>
                    <div className="name">Max</div>
                    </div>
                    <img className="line-1-1" src={require("./img/line-1-1@1x.png")} alt="" />
                </div>
                <div className="total">
                    <div className="flex-row-1">
                    <div className="total-1 montserrat-bold-black-haze-35px">Total</div>
                    <div className="text-4">0.008</div>
                    <div className="overlap-group2">
                        <div className="place montserrat-bold-black-haze-35px">Eth</div>
                        <img className="icon-awesome-ethereum-1" src={require("./img/icon-awesome-ethereum-2@1x.png")} alt="" />
                    </div>
                    </div>
                    <img className="line-1-2" src={require("./img/line-1-1@1x.png")} alt="" />
                </div>
                <div className="cta">
                    <div className="overlap-group1">
                    <div className="overlap-group-3">
                        <div className="unflipped-box-2 border-1px-dove-gray">
                        <div className="rectangle-172-2 border-5px-plum"></div>
                        </div>
                        <div className="rectangle-280"></div>
                    </div>
                    <div className="place-1">PURCHASE</div>
                    </div>
                    <p className="make-sure-your-metam">Make sure your metamask wallet is connected.</p>
                </div>
                </div>
            </div>
            <div className="whitelist-options">
                <div className="option01">
                <div className="overlap-group">
                    <div className="overlap-group-1">
                    <div className="unflipped-box border-1px-dove-gray">
                        <div className="rectangle-172 border-5px-plum"></div>
                    </div>
                    <div className="first-250 montserrat-normal-white-30px">First 250</div>
                    <div className="address montserrat-bold-white-30px">1 ETH</div>
                    </div>
                    <img className="icon-awesome-ethereum" src={require("./img/icon-awesome-ethereum-4@1x.png")} alt="" />
                </div>
                </div>
                <div className="option02">
                <div className="overlap-group2-1">
                    <div className="overlap-group-4">
                    <div className="unflipped-box-3 border-1px-dove-gray">
                        <div className="rectangle-172-3 border-5px-plum"></div>
                    </div>
                    <div className="second-250 montserrat-normal-white-30px">Second 250</div>
                    <div className="x11-eth montserrat-bold-white-30px">1.1 ETH</div>
                    </div>
                    <img className="icon-awesome-ethereum-2" src={require("./img/icon-awesome-ethereum-4@1x.png" )} alt=""/>
                </div>
                </div>
                <div className="option03">
                <div className="overlap-group">
                    <div className="overlap-group-1">
                    <div className="unflipped-box border-1px-dove-gray">
                        <div className="rectangle-172 border-5px-plum"></div>
                    </div>
                    <div className="third-250 montserrat-normal-white-30px">Third 250</div>
                    <div className="x-eth montserrat-bold-white-30px">1.2 ETH</div>
                    </div>
                    <img className="icon-awesome-ethereum" src={require("./img/icon-awesome-ethereum-4@1x.png")} alt=""/>
                </div>
                </div>
                <div className="option04">
                <div className="overlap-group">
                    <div className="overlap-group-1">
                    <div className="unflipped-box border-1px-dove-gray">
                        <div className="rectangle-172 border-5px-plum"></div>
                    </div>
                    <div className="final-200 montserrat-normal-white-30px">Final 200</div>
                    <div className="x-eth montserrat-bold-white-30px">1.5 ETH</div>
                    </div>
                    <img className="icon-awesome-ethereum-3" src={require("./img/icon-awesome-ethereum-4@1x.png" )} alt=""/>
                </div>
                </div>
            </div>
            </div>
            <div className="footer montserrat-bold-mountain-mist-25px">
            <div className="copyright-2022-lau">Copyright © 2022 LAUNCHPUB | NFT Marketplace</div>
            <div className="privacy-policy">PRIVACY POLICY</div>
            <div className="terms-of-use">TERMS OF USE</div>
            <div className="disclaimer">DISCLAIMER</div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </Fragment>
   )
}

export default App;