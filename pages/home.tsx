import { useState, ChangeEvent, FormEvent, KeyboardEvent } from "react";
import { NextPage } from "next";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { validate } from '../utils/Validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const tabs = [
  { id: 1, name: "Consumer" },
  { id: 2, name: "Business" },
];
const tabsB = [
  { id: 1, name: "Consumer" },
  { id: 2, name: "Business" },
];

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeTabB, setActiveTabB] = useState(1);

  const [values, setValues] = useState<{email: string, emailError?: any, isLoading: any}>({
    email: '',
    emailError: '',
    isLoading: false
  })

  const handleChange = (e:ChangeEvent<HTMLInputElement>): void => {
      setValues({ ...values, [e?.target?.name]: e?.target?.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValues({ ...values, isLoading: true })

    const payload = {
      email: values.email
    }

    try {
//       /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   async rewrites() {
//     return [
//       {
//         source: '/api/waitinglist',
//         destination: 'http://127.0.0.1:84/user/waiting/list',
//       },
//     ]
//   },
// }

// module.exports = nextConfig

      const { data } = await axios.post('/api/waitinglist',payload);
      setValues({ ...values, isLoading: false, email: '' });

      if (data.status == "success") {
        toast.success(data.data.message);
      }
      toast.error(data.message);
    }
    catch(error: any) {
      setValues({ ...values, isLoading: false });
      toast.error(error.message);
    }
  }

  const tab = tabs.map((item, i) => {
    return (
      <div
        key={item.id}
        className={activeTab === item.id ? "tabs active" : "tabs"}
        onClick={() => setActiveTab(item.id)}
      >
        <span>{item.name}</span>
      </div>
    );
  });

  const tabB = tabsB.map((item, i) => {
    return (
      <div
        key={item.id}
        className={activeTabB === item.id ? "tabsB active" : "tabsB"}
        onClick={() => setActiveTabB(item.id)}
      >
        <span>{item.name}</span>
      </div>
    );
  });
  return (
    <div className="wrapper" id="top">
      <nav className="nav">
        <img src="/logo@newDesign.png" width="180" alt="logo" />
        <div className="nav-right">
          <span></span>
          <p>Coming Soon!</p>
        </div>
      </nav>
      <section className="section-container">
        <div className="section-container_contentA">
          <div className="content-left">
            <h1 className="">Redefining<br /> Multi-currency<br /> Electronic Wallet</h1>
            <p>
              KongaPay is changing the way you handle your day-to-day payments needs. 
              From affordable debit card to money remittance, we are offering multiple e-money 
              redemption options including several last mile payout options for remittances to your loved ones
            </p>
            <p>
              KongaPay will offer you flexibility of receiving and sending payments via electronic wallet and pay 
              for goods and services in  multiple currencies, enabling you to save considerably on the currency exchange rates.
            </p>
            <p>Be the first to get access to an e-wallet with seamless and cross-border payments.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="Email Address">Email Address</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="e.g. johndoe@gmail.com"
                className=""
                onChange={handleChange}
                onKeyUp={(e) => validate.email({e, values, setValues})}
                value={values.email}
              />
              <button 
                className="submit-button"
                disabled={!values.email || values.emailError ? true : false}>
                  {values.isLoading ? <Loader /> : 'Notify Me'}
                </button>
              <ToastContainer
                position={"bottom-left"}
                closeOnClick={false}
                draggable={true}
                theme={"colored"}
               />
            </form>
            {values.emailError && <span className="text-sm text-red-dark">{values.emailError}</span>}
          </div>
          <div className="content-right">
            <img
              src="/img01.png"
              className="img"
              alt="smiling man operating a mobile phone"
            />
          </div>
        </div>
        <div className="services">
          <h4>Affordable, Effortless and Secure Payments</h4>
        </div>
        <div className="section-container_contentB">
          <div className="content-holder">
            <div className="header">
              <h1>Why KongaPay?</h1>
            </div>
            <div className="tab">{tab}</div>
            {activeTab === 1 ? (
              <div className="tab-info">
                <div className="image-holder">
                  <img src="/img06.png" />
                </div>
                <ul className="item-list">
                  <li>
                    <span>01</span> Multiple redemption
                  </li>
                  <li>
                    <span>02</span> Electronic wallets in multiple currencies
                  </li>
                  <li>
                    <span>03</span> Debit cards that can be used anywhere
                  </li>
                  <li>
                    <span>04</span> Affordable FX conversion rates
                  </li>
                  <li>
                    <span>05</span> Lower fees on conversions & transfers
                  </li>
                </ul>
              </div>
            ) : (
              <div className="tab-info">
                <div className="image-holder">
                  <img src="/img07.png" />
                </div>{" "}
                <ul className="item-list">
                  <li>
                    <span>01</span> Make instant payments to suppliers in
                    Nigeria/UK
                  </li>
                  <li>
                    <span>02</span> Electronic wallets in multiple currencies
                  </li>
                  <li>
                    <span>03</span> Corporate debit cards
                  </li>
                  <li>
                    <span>04</span> Quik currency conversion settlements
                  </li>
                  <li>
                    <span>05</span> Affordable FX conversion rates
                  </li>
                  <li>
                    <span>06</span> Lower fees on conversions & transfers
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="value-proposition">
        <div className="header-text">
          <h4>Let’s show you why we need each other…</h4>
        </div>
        <div className="tab">{tabB}</div>
        {activeTabB === 1 ? (
          <div className="wrapper">
            <div className="content">
              <div>
                <h5>Make Payments</h5>
                <p>
                  After years of saving, you send your kids to study in the UK
                  but you struggle to make payment for their school fees in
                  pounds.
                </p>
                <p className="emphasize">Kongapay to the rescue! </p>
                <p>
                  With our <span className="emphasize">electronic wallet</span>{" "}
                  you can easily{" "}
                  <span className="emphasize">
                    transfer your Naira to Pounds intently
                  </span>{" "}
                  at the <span className="emphasize">best rates</span> and{" "}
                  <span className="emphasize">make payments</span> for all your
                  child’s expenses, school fees and accommodation. Also don’t
                  forget the pocket money{" "}
                </p>
                <p>
                  Your child does not need to open a UK account; you can make
                  all payments into his/her Kongapay wallet, and they can
                  transact using our{" "}
                  <span className="emphasize">physical or virtual card</span>.
                </p>
              </div>
              <img src="/img03.png" />
            </div>
            <div className="content">
              <img src="/img05.png" />
              <div>
                <h5>Send Money</h5>
                <p>
                  You live in the UK but support your family members in Nigeria.
                  You struggle to <span className="emphasize">send money</span>{" "}
                  to your family at good rates.
                </p>
                <p className="emphasize">Kongapay to the rescue! </p>
                <p>
                  With our electronic wallet, we allow you{" "}
                  <span className="emphasize">
                    make payments to your loved ones
                  </span>{" "}
                  in multiple ways; you can{" "}
                  <span className="emphasize">
                    pay into their kongapay wallets
                  </span>{" "}
                  for free, they can{" "}
                  <span className="emphasize">
                    collect cash from our agents
                  </span>{" "}
                  or they can receive a voucher to place orders for goods and
                  services on konga.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="wrapper">
            <div className="content">
              <div>
                <h5>Instant currency Conversion</h5>
                <p>
                  You are expanding your business to Nigeria to the advantage of
                  its 200 million population. However you find it difficult
                  moving your money to Nigeria.
                </p>
                <p className="emphasize">Kongapay to the rescue! </p>
                <p>
                  We can instantly convert your Pounds to Naira regardless of
                  the volume. Through your business e-wallet you can make
                  payment to partners and employees in Nigeria.
                </p>
              </div>
              <img src="/img04.png" />
            </div>
            <div className="content">
              <img src="/img02.png" />
              <div>
                <h5>Affordable FX Rates</h5>
                <p>
                  You run a business in Nigeria and you need to pay your tech
                  partners and suppliers in pounds. However, it is extremely
                  difficult to get access to FX and transaction fees are
                  exorbitant.
                </p>
                <p className="emphasize">Kongapay to the rescue! </p>
                <p>
                  With our business e-wallet you can move your naira to pounds
                  at great rates and pay your suppliers through your pounds
                  wallet. You can also pay your partners through your KongaPay
                  card.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="footer-section">
        <div className="footer-container">
          <div>
            <div className="coming-soon">
              <span></span>
              <p>Coming Soon!</p>
            </div>
            <h1>Get notified when we launch</h1>
            <p>
              Stay in the loop and be the first to know when we launch! Sign up
              for our notification list to receive updates and be notified as
              soon as we&apos;re ready to go live.
            </p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="Email Address">Email Address</label>
              <br />
              <div className="button-holder">
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. johndoe@gmail.com"
                  className=""
                  // onChange={handleChange}
                />
                <button>Notify Me</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&#169; {new Date().getFullYear()} KongaPay. All Rights Reserved</p>
        <div className="footer-right">
          <span></span>
          <a href="#top">Back to Top</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
