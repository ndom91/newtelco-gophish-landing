import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/images/newtelco.jpg';
import celebrate from '../assets/images/celebrate.svg';
import email from '../assets/images/email.svg';
import ftc from '../assets/images/ftc.jpg';
import kaspersky from '../assets/images/kaspersky.png';
import staysafeonline from '../assets/images/staysafeonline.png';
import ContactForm from '../components/ContactForm';

const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="top right">
            <img src={heroImage} alt="" />
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>Congrats!</h2>
        </header>
        <section>
          <header>
            <h3>On average, a cyber attack costs small businesses $53,987.<a className="toc-link" href="#1">(1)</a></h3>
          </header>
        </section>
        <div className="content">
          <p>
            First of all, <strong>congrats!</strong> Even if you entered your credentials on the last screen, you've statistically survived approximately 4.8 phishing emails / week in 2019! <a className="toc-link" href="#1">(1)</a> That deserves a pat on the back!
          </p>
          <span className="image main">
            <img src={celebrate} alt="" style={{ width: '70%', margin: '0 auto' }} />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Common Tricks</h2>
        </header>
        <div className="content">
          <p>
            People looking to phish you are <strong>usually not very smart</strong>, and so re-use the same old tricks over and over. Once you have an eye for it, you will find it funny how often you stumble upon these things online.
          </p>
          <p>
            Some of the most common phishing emails / text messages...
          </p>
          <ul className="feature-tricks">
            <li>say they’ve noticed some suspicious activity or log-in attempts</li>
            <li>claim there’s a problem with your account or your payment information </li>
            <li>say you must confirm some personal information</li>
            <li> include a fake invoice </li>
            <li>want you to click on a link to make a payment</li>
            <li>say you’re eligible to register for a government refund </li>
            <li>offer a coupon for free stuff </li>
          </ul>
        </div>
      </section>

      <section>
        <header>
          <h2>Tips</h2>
        </header>
        <div className="content">
          <p>
            In general, the saying goes, if you're unsure about anything - DONT CLICK IT! Its always best to double check first!
          </p>
          <ul className="feature-icons">
            <li className="icon fa-link">Hover over any link to see where it really goes!</li>
            <li className="icon fa-lock">Make sure your browser is showing the "Lock" icon in the URL bar for any sensitive sites.</li>
            <li className="icon fa-question">If you're even a bit unsure, feel free to ask your IT colleagues. We don't bite ;)</li>
            <li className="icon fa-laptop">Set your phone / computer to update automatically</li>
            <li className="icon fa-male">Setup multi-factor authentification on your sensitive accounts</li>
            <li className="icon fa-key">Never <strong>ever</strong> give out your password(s) over email!</li>
          </ul>
          <span className="image main">
            <img src={email} alt="" style={{ width: '70%', margin: '0 auto' }} />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Further Reading</h2>
        </header>
        <div className="content">
          <p>
            If you are interested, I've collected a few noteworthy links below for further reading...
          </p>

          <section>
            <header>
              <h3>1 in 99 Emails are Phishing!</h3>
              <p>
                According to Avanan’s phishing statistics, 1 in every 99 emails is a phishing attack. And this amounts to 4.8 emails per employee in a five-day work week. <a className="toc-link" href="#1">(1)</a>
              </p>
            </header>
            <div className="content more-reading">
              <p>
                <img src={ftc} alt="FTC Logo"></img>
                <a href="https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams">
                  <strong>FTC.gov</strong> How to Recognize and Avoid Phishing Scams
                </a>
              </p>
              <p>
                <img src={kaspersky} alt="Kaspersky Logo"></img>
                <a href="https://encyclopedia.kaspersky.ru/knowledge/what-is-phishing/">
                  <strong>Kaspersky</strong> Что такое «фишинг»
                </a>
              </p>
              <p>
                <img src={staysafeonline} alt="StaySafeOnline Logo"></img>
                <a href="https://staysafeonline.org/stay-safe-online/online-safety-basics/spam-and-phishing/">
                  <strong>StaySafeOnline</strong> Online Spam and Phishing Basic
                </a>
              </p>

            </div>
          </section>

        </div>
      </section>

      <section>
        <header>
          <h2>Sources</h2>
        </header>
        <div className="content">
          <p id="1" style={{ fontSize: '16px' }}>
            <ul style={{ listStyle: 'none' }}>
              <li>
                (1) <a href="https://smallbiztrends.com/2019/07/phishing-statistics.html">https://smallbiztrends.com/2019/07/phishing-statistics.html</a>
              </li>
              <li>
                (2) <a href="https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams">https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams</a>
              </li>
            </ul>
          </p>
        </div>
      </section>

      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout >
);

export default IndexPage;
