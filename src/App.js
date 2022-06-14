import React, { useState, useEffect, Fragment } from "react";
import "./global.css";
import "./react-page.css";
import "./styleguide.css";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { BigNumber, ethers } from "ethers";
import LaunchPub from "./LaunchPub.json";

function App() {
    const [mintAmount, setMintAmount] = useState(1);
    const [currentAccount, setCurrentAccount] = useState("");
    const [remainingSupply, setRemainingSupply] = useState("");
    const [etherPrice, setEtherPrice] = useState("1");
    const { ethereum } = window;
    const CONTRACT_ADDRESS = "0x64C7b0C0186484545F799A5CCBa55ad8bE548b93";

    useEffect(() => {
        checkIfWalletIsConnected();
        fetchSupplyAndMintPrice();
    }, []);

    try {
        if (ethereum) {
            ethereum.on("accountsChanged", function(accounts){
                connectWallet()
            });
        }
    } catch (error) {
        console.log(error);
    }

    function handleMintAmountChange(n) {
        if (mintAmount + n > 0 && mintAmount + n < 4) {
            setMintAmount(mintAmount + n);
        }
    }

    const fetchSupplyAndMintPrice = async () => {
        fetch("https://www.teamwenmoon.io/api/launchPubContractInfo")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setRemainingSupply(data.remainingSupply);
                setEtherPrice(data.price);
            });
    };

    const checkIfWalletIsConnected = async () => {
        if (!ethereum) {
            console.log("No wallet connected");
            return;
        } else {
            console.log("We have the ethereum object", ethereum);
        }

        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account:", account);
            setCurrentAccount(account);
        } else {
            console.log("No authorized account found");
        }
    };

    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert("Requires MetaMask - Alternatively buy with credit card!");
                return;
            }
            /*
             * Fancy method to request access to account.
             */
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });

            /*
             * Boom! This should print out public address once we authorize Metamask.
             */
            console.log("Connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
        }
    };
    const handleMint = () => {
        console.log(etherPrice.toString());
        console.log(mintAmount.toString());
        console.log((etherPrice * mintAmount).toString());
        if (!currentAccount) {
            console.log("HI!");
            connectWallet();
        } else {
            MintNFT();
        }
    };
    async function MintNFT() {
        try {
            const { ethereum } = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const connectedContract = new ethers.Contract(
                    CONTRACT_ADDRESS,
                    LaunchPub.abi,
                    signer
                );

                //console.log(signer)
                console.log("Going to pop wallet now to pay gas...");
                //TODO: Move API check to this function!!!
                const options = {
                    value: ethers.utils.parseEther(
                        (etherPrice * mintAmount).toString()
                    ),
                    gasLimit: 1000000,
                };

                let nftTxn = await connectedContract.mint(mintAmount, options);
                //let nftTxn = await connectedContract.withdraw()

                console.log("Mining...please wait.");
                await nftTxn.wait();

                console.log(
                    `Mined, see transaction: https://etherscan.io/tx/${nftTxn.hash}`
                );
            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Fragment>
            <section
                className="launchpub xl:pt-12 pt-8 xl:pb-20 pb-10 xl:px-0 px-5"
                id="launchpub"
            >
                <div className="grid grid-cols-12 max-w-screen-xl mx-auto relative">
                    <a href="/">
                        <img
                            className="a-bg-logo"
                            src={require("./img/a-logo-1@1x.png")}
                            alt=""
                        />
                    </a>
                    <div className="col-span-12">
                        <a href="/">
                            <img
                                className="mx-auto xl:max-w-md max-w-xs"
                                src={require("./img/launchpub-logo-1x-png@1x.png")}
                                alt=""
                            />
                        </a>
                        <h1 className="font-bold text-center xl:text-5xl text-3xl font-montserrat xl:mt-10 mt-4 text-blue">
                            Join the Genesis Syndicate Today!
                        </h1>
                        <p className="text-center text-white xl:text-2xl text-lg font-montserrat xl:mt-6 mt-4">
                            Membership to this exclusive club is extremely
                            limited (3 Genesis Memberships per person)
                        </p>
                    </div>
                    <div className="col-span-12 bg-blue-transparent p-5 xl:mt-9 mt-5">
                        <div className="grid grid-cols-12">
                            <div className="xl:col-span-3 md:col-span-6 col-span-12 xl:mb-0 mb-3 p-3 mx-2 bg-gradient-to-r from-blue-violet to-violet rounded-lg border-4 border-solid border-violet-transparent">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-6 flex items-center">
                                        <p className="text-white xl:text-xl text-lg font-montserrat">
                                            First 250
                                        </p>
                                    </div>
                                    <div className="col-span-6 text-right items-center">
                                        <span className="font-bold text-white xl:text-xl text-lg font-montserrat inline-block mr-2">
                                            1 ETH
                                        </span>{" "}
                                        <img
                                            className="inline-block w-5 xl:-mt-3 -mt-2"
                                            src={require("./img/icon-awesome-ethereum-4@1x.png")}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-3 md:col-span-6 col-span-12 xl:mb-0 mb-3 p-3 mx-2 bg-gradient-to-r from-blue-violet to-violet rounded-lg border-4 border-solid border-violet-transparent">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-6 flex items-center">
                                        <p className="text-white xl:text-xl text-lg font-montserrat">
                                            Second 250
                                        </p>
                                    </div>
                                    <div className="col-span-6 text-right items-center">
                                        <span className="font-bold text-white xl:text-xl text-lg font-montserrat inline-block mr-2">
                                            1.1 ETH
                                        </span>{" "}
                                        <img
                                            className="inline-block w-5 xl:-mt-3 -mt-2"
                                            src={require("./img/icon-awesome-ethereum-4@1x.png")}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-3 md:col-span-6 col-span-12 md:mb-0 mb-3 p-3 mx-2 bg-gradient-to-r from-blue-violet to-violet rounded-lg border-4 border-solid border-violet-transparent">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-6 flex items-center">
                                        <p className="text-white xl:text-xl text-lg font-montserrat">
                                            Third 250
                                        </p>
                                    </div>
                                    <div className="col-span-6 text-right items-center">
                                        <span className="font-bold text-white xl:text-xl text-lg font-montserrat inline-block mr-2">
                                            1.2 ETH
                                        </span>{" "}
                                        <img
                                            className="inline-block w-5 xl:-mt-3 -mt-2"
                                            src={require("./img/icon-awesome-ethereum-4@1x.png")}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-3 md:col-span-6 col-span-12 xl:mb-0 p-3 mx-2 bg-gradient-to-r from-blue-violet to-violet rounded-lg border-4 border-solid border-violet-transparent">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-6 flex items-center">
                                        <p className="text-white xl:text-xl text-lg font-montserrat">
                                            Final 200
                                        </p>
                                    </div>
                                    <div className="col-span-6 text-right items-center">
                                        <span className="font-bold text-white xl:text-xl text-lg font-montserrat inline-block mr-2">
                                            1.5 ETH
                                        </span>{" "}
                                        <img
                                            className="inline-block w-5 xl:-mt-3 -mt-2"
                                            src={require("./img/icon-awesome-ethereum-4@1x.png")}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:mt-12 mt-8">
                        <div className="grid grid-cols-12 max-w-5xl mx-auto">
                            <div className="xl:col-span-6 col-span-12">
                                <div className="left-bg">
                                    <div className="bg-second">
                                        <img
                                            className=""
                                            src={require("./img/LaunchPub_NFTCard_1x1_600px.gif")}
                                            alt=""
                                            style={{borderRadius: 10}}
                                        />
                                    </div>
                                </div>
                                <p className="font-bold xl:text-4xl text-3xl text-center mt-5 font-montserrat text-white">
                                    LaunchPub Genesis Syndicate
                                </p>
                            </div>
                            <div className="xl:col-span-6 col-span-12 xl:pl-10 pl-0 xl:mt-0 mt-10">
                                <p className="font-bold xl:text-4xl text-3xl xl:text-left text-center font-montserrat text-white mb-3">
                                    Mint NFT
                                </p>
                                <p className="font-montserrat font-bold text-3xl xl:text-left text-center text-pink">
                                    {remainingSupply}{" "}
                                    <span className="font-light text-xl text-white">
                                        Remaining NFTS
                                    </span>
                                </p>
                                <p className="font-bold xl:text-2xl text-xl font-montserrat text-white mb-4 xl:mt-10 mt-5">
                                    Balance
                                </p>
                                <img
                                    className="line-1"
                                    src={require("./img/line-1-1@1x.png")}
                                    alt=""
                                />
                                <div className="grid grid-cols-12 xl:mt-7 mt-3 mb-4">
                                    <div className="col-span-4">
                                        <p className="font-bold xl:text-2xl text-xl font-montserrat text-white">
                                            Amount
                                        </p>
                                    </div>
                                    <div className="col-span-4">
                                        <p className="font-bold xl:text-2xl text-xl text-center font-montserrat text-white">
                                            <span
                                                className="select-none"
                                                onClick={() =>
                                                    handleMintAmountChange(-1)
                                                }
                                            >
                                                -
                                            </span>{" "}
                                            <span className="mx-4">
                                                {mintAmount}
                                            </span>
                                            <span
                                                className="select-none"
                                                onClick={() =>
                                                    handleMintAmountChange(1)
                                                }
                                            >
                                                {" "}
                                                +{" "}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <img
                                    className="line-1"
                                    src={require("./img/line-1-1@1x.png")}
                                    alt=""
                                />
                                <div className="grid grid-cols-12 xl:mt-7 mt-3 mb-4">
                                    <div className="col-span-4">
                                        <p className="font-bold xl:text-2xl text-xl font-montserrat text-white">
                                            Total
                                        </p>
                                    </div>
                                    <div className="col-span-4">
                                        <p className="font-bold xl:text-2xl text-xl text-center font-montserrat text-white">
                                            {etherPrice * mintAmount}
                                        </p>
                                    </div>
                                    <div className="col-span-4 text-right">
                                        <img
                                            className="inline-block w-5 -mt-3 mr-2"
                                            src={require("./img/icon-awesome-ethereum-2@1x.png")}
                                            alt=""
                                        />{" "}
                                        <span className="font-bold text-white xl:text-2xl text-xl font-montserrat inline-block">
                                            Eth
                                        </span>
                                    </div>
                                </div>
                                <img
                                    className="line-1"
                                    src={require("./img/line-1-1@1x.png")}
                                    alt=""
                                />
                                <div className="p-6 mt-7 bg-gradient-to-r from-blue-violet to-violet rounded-lg border-4 border-solid border-violet-transparent">
                                    <a>
                                        <button
                                            onClick={handleMint}
                                            className="bg-blue w-full p-3 font-bold font-montserrat xl:text-4xl text-3xl text-center text-white"
                                        >
                                            {currentAccount
                                                ? "Mint"
                                                : "Connect Wallet"}
                                        </button>
                                    </a>
                                </div>
                                <p className="text-white font-montserrat text-center mt-5 mb-5 text-xs">
                                    Make sure your metamask wallet is connected.
                                </p>
                                <CrossmintPayButton
                                    className="mx-auto"
                                    collectionTitle="LaunchPub"
                                    collectionDescription="This token provides exclusive membership to the LaunchPub Genesis Syndicate and all the wonders that this amazing group provides.

Token holders are the foundational members of the Genesis Syndicate community. You will join a like minded group of individuals who share the same passion for NFT projects, private dealflow, high-level partnerships, Web3 opportunities, alternative investing, networking, and everything in between.

If this was simply a “mastermind”, membership could run as high as $30,000 per year. In contrast, membership into the Genesis Syndicate is only 1 ETH (max 2 mints per person). And unlike a normal mastermind you can trade your NFT on the secondary market."
                                    collectionPhoto="<COLLECTION_IMAGE_URL>"
                                    clientId="3d93b194-9b12-4b93-8d59-57ca7b41a9d5"
                                    mintConfig={{
                                        type: "erc-721",
                                        price: etherPrice.toString(),
                                        _count: "1",
                                    }}
                                />
                                <p className="disclaimer font-bold mt-3 font-weight-bold text-white text-center font-montserrat">*Limit one transaction per person when using Credit Card</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 text-center xl:mt-32 mt-16">
                        <p className="text-gray font-bold font-montserrat xl:text-xl text-lg xl:mb-8 mb-5">
                            Copyright © 2022 LAUNCHPUB | NFT Marketplace
                        </p>
                        <p className="text-gray font-bold font-montserrat xl:text-xl text-lg mb-3">
                            <a href="https://launchpub.wpengine.com/privacy/" className="">
                                PRIVACY POLICY
                            </a>
                        </p>
                        <p className="text-gray font-bold font-montserrat xl:text-xl text-lg mb-3">
                            <a href="https://launchpub.wpengine.com/terms/">TERMS OF USE</a>
                        </p>
                        {/* <p className="text-gray font-bold font-montserrat xl:text-xl text-lg">
                            <a href="#">DISCLAIMER</a>
                        </p> */}
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default App;
