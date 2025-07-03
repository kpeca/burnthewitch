import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ExternalLink,
  Flame,
  Sparkles,
  DollarSign,
  Users,
  Map,
  HelpCircle,
  Mail,
} from "lucide-react"; // Using lucide-react for icons
import witch from "./assets/witch.png";

// Main App Component
const App = () => {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scrolling for navigation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after clicking on mobile
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-inter antialiased">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950 bg-opacity-90 backdrop-blur-sm shadow-lg rounded-b-xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-2">
            <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              BurnTheWitch <span className="text-orange-500">$BTW</span>
            </h1>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection("how-to-buy")}
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300"
            >
              How to Buy
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300"
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300"
            >
              FAQ
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md p-2"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 border-t border-gray-800 pt-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300 px-4 py-2 rounded-md"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="block w-full text-left text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300 px-4 py-2 rounded-md"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection("how-to-buy")}
              className="block w-full text-left text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300 px-4 py-2 rounded-md"
            >
              How to Buy
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="block w-full text-left text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300 px-4 py-2 rounded-md"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="block w-full text-left text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300 px-4 py-2 rounded-md"
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300 px-4 py-2 rounded-md"
            >
              FAQ
            </button>
          </div>
        )}
      </header>

      <main className="pt-24">
        {" "}
        {/* Adjust padding to account for fixed header */}
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 to-black"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src={witch} // Updated to use the uploaded image
              alt="Burn the Witch Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 p-6 mt-96 max-w-4xl mx-auto bg-gray-800 bg-opacity-70 rounded-3xl shadow-2xl border border-orange-600 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-bounce-in">
              BurnTheWitch Token <span className="text-orange-500">$BTW</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Burn the witches, send yourself to the stratosphere!
              <br />
              Memecoin inspired by the legendary TikTok clip.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#how-to-buy"
                onClick={() => scrollToSection("how-to-buy")}
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white text-xl font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-orange-700 group"
              >
                Buy $BTW
                <Sparkles className="ml-3 w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
              </a>
              <a
                href="https://www.tiktok.com/search?q=burnthewitch&t=1751585758179"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xl font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-gray-600 group"
              >
                Join the Community
                <ExternalLink className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section
          id="about"
          className="py-20 bg-gray-900 text-center px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-extrabold text-orange-400 mb-8 flex items-center justify-center">
              <Flame className="w-10 h-10 mr-4" /> About BurnTheWitch Token
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              **BurnTheWitch Token** was created for those who are not afraid to
              show their attitude and have fun while doing it. Inspired by the
              viral TikTok phenomenon "Burn the Witch", we bring you a
              decentralized platform where humor is currency, and your
              investment is a journey to the moon!
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our mission is simple: to create a community that is strong,
              engaged, and ready to grow together. We believe in the power of
              memes to unite people and start a movement. With $BTW, you're not
              just buying a token, you're buying a ticket to the ultimate
              memecoin adventure!
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">
                  Strong Community
                </h4>
                <p className="text-gray-400">
                  An active and passionate community that shares your love for
                  memes and decentralization.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <Sparkles className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">
                  Viral Potential
                </h4>
                <p className="text-gray-400">
                  Inspired by one of the most famous TikTok clips, $BTW has
                  inherent viral potential.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <DollarSign className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">
                  Fun and Profit
                </h4>
                <p className="text-gray-400">
                  Because who says investing can't be fun? Join us and enjoy the
                  ride!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Tokenomics Section */}
        <section
          id="tokenomics"
          className="py-20 bg-black text-center px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-extrabold text-orange-400 mb-8 flex items-center justify-center">
              <DollarSign className="w-10 h-10 mr-4" /> Tokenomics ($BTW)
            </h3>
            <p className="text-lg text-gray-300 mb-10">
              Here is a detailed overview of the BurnTheWitch Token's
              distribution and structure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
                <h4 className="text-3xl font-bold text-white mb-4">
                  Token Details
                </h4>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li>
                    <span className="font-semibold text-orange-400">
                      Token Name:
                    </span>{" "}
                    BurnTheWitch Token
                  </li>
                  <li>
                    <span className="font-semibold text-orange-400">
                      Symbol:
                    </span>{" "}
                    $BTW
                  </li>
                  <li>
                    <span className="font-semibold text-orange-400">
                      Total Supply:
                    </span>{" "}
                    1,000,000,000,000 $BTW
                  </li>
                  <li>
                    <span className="font-semibold text-orange-400">
                      Blockchain:
                    </span>{" "}
                    Solana (SOL)
                  </li>
                  <li>
                    <span className="font-semibold text-orange-400">
                      Contract Address:
                    </span>{" "}
                    <span className="break-all">
                      0xAbC123DeF456GhI789JkL012MnOP345QrS678TuV9
                    </span>{" "}
                    (placeholder)
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
                <h4 className="text-3xl font-bold text-white mb-4">
                  Distribution
                </h4>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li>
                    <span className="font-semibold text-orange-400">
                      Presale:
                    </span>{" "}
                    50%
                  </li>
                  <li>
                    <span className="font-semibold text-orange-400">
                      Liquidity:
                    </span>{" "}
                    30%
                  </li>
                  <li>
                    <span className="font-semibold text-orange-400">
                      Marketing & Development:
                    </span>{" "}
                    10%
                  </li>
                  <li>
                    <span className="font-semibold text-orange-400">Team:</span>{" "}
                    5% (locked for 1 year)
                  </li>
                  <li>
                    <span className="font-semibold text-orange-400">
                      Airdrops & Rewards:
                    </span>{" "}
                    5%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* How to Buy Section */}
        <section
          id="how-to-buy"
          className="py-20 bg-gray-900 text-center px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-extrabold text-orange-400 mb-8 flex items-center justify-center">
              <Sparkles className="w-10 h-10 mr-4" /> How to Buy BurnTheWitch
              Token?
            </h3>
            <p className="text-lg text-gray-300 mb-10">
              Follow these simple steps to become an owner of $BTW tokens!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <div className="text-5xl font-bold text-orange-500 mb-4">1</div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Download Wallet
                </h4>
                <p className="text-gray-400">
                  Download MetaMask or Trust Wallet to your phone or as a
                  browser extension.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <div className="text-5xl font-bold text-orange-500 mb-4">2</div>
                <h4 className="text-2xl font-bold text-white mb-2">Buy BNB</h4>
                <p className="text-gray-400">
                  Buy BNB (Binance Coin) on an exchange of your choice (e.g.,
                  Binance) and transfer it to your wallet.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <div className="text-5xl font-bold text-orange-500 mb-4">3</div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Swap for $BTW
                </h4>
                <p className="text-gray-400">
                  Visit PancakeSwap, connect your wallet, and swap BNB for $BTW
                  using our contract address.
                </p>
                <a
                  href="https://pancakeswap.finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-300 font-semibold"
                >
                  Go to PancakeSwap <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Roadmap Section */}
        <section
          id="roadmap"
          className="py-20 bg-black text-center px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-extrabold text-orange-400 mb-12 flex items-center justify-center">
              <Map className="w-10 h-10 mr-5" /> Roadmap
            </h3>
            <div className="relative">
              {/* Vertical line for roadmap */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700 rounded-full hidden md:block"></div>

              <div className="space-y-16">
                {/* Phase 1 */}
                <div className="flex flex-col md:flex-row items-center md:justify-between relative">
                  <div className="md:w-1/2 md:pr-12 text-right">
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform md:-translate-x-8">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        Phase 1: Launch & Community Building
                      </h4>
                      <ul className="list-disc list-inside text-gray-400 text-left space-y-1">
                        <li>Token creation and deployment on BSC</li>
                        <li>Website and social media launch</li>
                        <li>Presale ($BTW Presale)</li>
                        <li>PancakeSwap listing</li>
                        <li>Initial marketing campaigns</li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute hidden md:block w-6 h-6 bg-orange-500 rounded-full z-10 left-1/2 transform -translate-x-1/2 border-4 border-gray-900"></div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>

                {/* Phase 2 */}
                <div className="flex flex-col md:flex-row items-center md:justify-between relative">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>{" "}
                  {/* Spacer for desktop */}
                  <div className="absolute hidden md:block w-6 h-6 bg-orange-500 rounded-full z-10 left-1/2 transform -translate-x-1/2 border-4 border-gray-900"></div>
                  <div className="md:w-1/2 md:pl-12 text-left">
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform md:translate-x-8">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        Phase 2: Growth & Partnerships
                      </h4>
                      <ul className="list-disc list-inside text-gray-400 text-left space-y-1">
                        <li>CoinGecko and CoinMarketCap listing</li>
                        <li>Influencer marketing campaigns</li>
                        <li>Development of "Witch Hunters" NFT collection</li>
                        <li>Partnerships with other memecoin projects</li>
                        <li>Airdrop campaigns for early adopters</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="flex flex-col md:flex-row items-center md:justify-between relative">
                  <div className="md:w-1/2 md:pr-12 text-right">
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform md:-translate-x-8">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        Phase 3: Ecosystem & Innovations
                      </h4>
                      <ul className="list-disc list-inside text-gray-400 text-left space-y-1">
                        <li>Development of "Burn the Witch" mini-game</li>
                        <li>
                          Introduction of staking and farming options for $BTW
                        </li>
                        <li>Centralized Exchange (CEX) listings</li>
                        <li>Team expansion and global outreach</li>
                        <li>Donations to fight online toxicity (symbolic)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute hidden md:block w-6 h-6 bg-orange-500 rounded-full z-10 left-1/2 transform -translate-x-1/2 border-4 border-gray-900"></div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Community Section */}
        {/* <section
          id="community"
          className="py-20 bg-gray-900 text-center px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-extrabold text-orange-400 mb-8 flex items-center justify-center">
              <Users className="w-10 h-10 mr-4" /> Join the Community
            </h3>
            <p className="text-lg text-gray-300 mb-10">
              Become part of our growing army of witch hunters! Join us on
              social media and stay up-to-date with all the news.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://t.me/BurnTheWitchtoken"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.659 7.426l-3.411 10.518c-.287.886-.886 1.127-1.472.784l-2.753-2.031-1.328 1.28c-.14.136-.257.24-.485.24h-.012c-.227 0-.344-.104-.484-.24l-.794-.766-1.57 1.05c-.277.186-.54.341-.784.341-.444 0-.713-.207-.866-.644l-2.073-6.402c-.286-.886-.07-1.472.784-1.724l13.593-5.06c.886-.33 1.57.199 1.283 1.085z"></path>
                </svg>
                Telegram
              </a>
              <a
                href="https://twitter.com/BurnTheWitchtoken"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-400 hover:bg-blue-500 text-white text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.494 2.9-6.494 6.494 0 .509.058 1.004.167 1.474-5.405-.271-10.181-2.868-13.385-6.816-.562.969-.882 2.09-.882 3.313 0 2.278 1.159 4.287 2.919 5.465-.85-.027-1.65-.26-2.35-.647v.081c0 3.141 2.23 5.764 5.185 6.363-.54.148-1.107.228-1.69.228-.415 0-.816-.041-1.209-.115.823 2.572 3.2 4.444 6.012 4.492-2.214 1.737-5.022 2.771-8.09 2.771-.533 0-1.055-.031-1.566-.092 2.86 1.83 6.264 2.908 9.924 2.908 11.853 0 18.337-9.825 18.337-18.337 0-.278-.006-.554-.019-.828.943-.679 1.769-1.53 2.419-2.508z"></path>
                </svg>
                Twitter/X
              </a>
              <a
                href="https://discord.gg/BurnTheWitchtoken"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.792c-.89-.37-1.837-.655-2.828-.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.494 2.9-6.494 6.494 0 .509.058 1.004.167 1.474-5.405-.271-10.181-2.868-13.385-6.816-.562.969-.882 2.09-.882 3.313 0 2.278 1.159 4.287 2.919 5.465-.85-.027-1.65-.26-2.35-.647v.081c0 3.141 2.23 5.764 5.185 6.363-.54.148-1.107.228-1.69.228-.415 0-.816-.041-1.209-.115.823 2.572 3.2 4.444 6.012 4.492-2.214 1.737-5.022 2.771-8.09 2.771-.533 0-1.055-.031-1.566-.092 2.86 1.83 6.264 2.908 9.924 2.908 11.853 0 18.337-9.825 18.337-18.337 0-.278-.006-.554-.019-.828.943-.679 1.769-1.53 2.419-2.508z"></path>
                </svg>
                Discord
              </a>
            </div>
          </div>
        </section> */}
        {/* FAQ Section */}
        <section
          id="faq"
          className="py-20 bg-black text-center px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-extrabold text-orange-400 mb-8 flex items-center justify-center">
              <HelpCircle className="w-10 h-10 mr-4" /> Frequently Asked
              Questions (FAQ)
            </h3>
            <div className="space-y-6 text-left">
              {/* FAQ Item 1 */}
              <FAQItem
                question="What is BurnTheWitch Token ($BTW)?"
                answer="BurnTheWitch Token is a memecoin inspired by the viral TikTok clip 'Burn the Witch'. It was created for fun and community building, aiming to bring humor and enthusiasm to the crypto world."
              />
              {/* FAQ Item 2 */}
              <FAQItem
                question="Where can I buy $BTW tokens?"
                answer="Currently, you can buy $BTW tokens on DexScreener. Follow our 'How to Buy' section for detailed instructions."
              />
              {/* FAQ Item 3 */}
              <FAQItem
                question="What is the contract address for $BTW token?"
                answer="The contract address for $BTW token is: 0xAbC123DeF456GhI789JkL012MnOP345QrS678TuV9. Always verify that you are using the correct address from our official channels."
              />
              {/* FAQ Item 4 */}
              <FAQItem
                question="Is $BTW a safe investment?"
                answer="Like all memecoins, $BTW carries high risk and volatility. This is not financial advice. Always do your own research (DYOR) and only invest what you are willing to lose."
              />
              {/* FAQ Item 5 */}
              <FAQItem
                question="How can I follow news about $BTW token?"
                answer="You can follow all news and announcements by joining our Telegram group, Discord server, and following our Twitter/X account. Links are available in the 'Community' section."
              />
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gray-900 text-center px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-xl mx-auto">
            <h3 className="text-4xl font-extrabold text-orange-400 mb-8 flex items-center justify-center">
              <Mail className="w-10 h-10 mr-4" /> Contact
            </h3>
            <p className="text-lg text-gray-300 mb-10">
              Have questions? Want to know more? Feel free to send us a message!
            </p>
            <a
              href="mailto:info@BurnTheWitchtoken.com"
              className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white text-xl font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Send Email
              <Mail className="ml-3 w-6 h-6" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 py-10 text-center text-gray-400 text-sm px-4 sm:px-6 lg:px-8 rounded-t-xl">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} BurnTheWitch Token. All rights
            reserved.
          </p>
          <p className="mb-4">
            <span className="font-bold text-orange-400">Legal Notice:</span>{" "}
            BurnTheWitch Token is purely a memecoin and was created for
            entertainment purposes. This is not financial advice and all
            investments carry risk. Please do your own research and invest
            responsibly.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com/BurnTheWitchtoken"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              Twitter/X
            </a>
            <a
              href="https://t.me/BurnTheWitchtoken"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              Telegram
            </a>
            <a
              href="https://discord.gg/BurnTheWitchtoken"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              Discord
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-6 text-xl font-semibold text-white hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronDown
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-6 pt-0 text-gray-300 text-lg leading-relaxed border-t border-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

export default App;
