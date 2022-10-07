import React from "react";

import styles from "./DefensiveDriving.module.css";

import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

const DefensiveDriving = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span>Tata Strive</span> Defensive Driving
              </p>
              <p className={styles.fv_content}>
                This course in this challenge is designed to educate you about
                defensive driving & how you can use these tips and strategies to
                create a safer place for you as drivers and all those who use
                the roads.
              </p>
            </div>

            <div className={styles.fv_image}>
              <img
                src="/assets/challenge/ddriving.gif"
                alt="Group Learning Image"
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>How to the challenge?</p>
              <p className={styles.sv_content}>
                By finishing this challenge you will get a glimpse into the
                specifics of improving your driving skills and share them with
                one and all.
              </p>
            </div>
          </div>
          <div className={styles.steps}>
            <ol className={styles.steps_olist}>
              <li>
                Visit{" "}
                <a href="http://defensivedriving.tatastrive.com">
                  Defensive Driving
                </a>{" "}
                and Click on the ‘Open App’ option.
              </li>
              <li>
                Download the App and Login with your email. Complete the profile
                details
              </li>
              <li>Click on the courses tab.</li>
              <li>
                There are 24 modules in the course. Each module contains a video
                and a quiz
              </li>
              <li>Complete all 24 modules and download the certificate</li>
              <li>
                After course completion, download the certificate and post it in{" "}
                <b>#students</b> channel along with hashtag{" "}
                <b>#defensive-driving </b>
                to avail <b> 400 Karma Points</b>
              </li>
              <img
                className={styles.sample_img}
                src="/assets/challenge/ddrivingsample.png"
                alt=""
                srcset=""
              />
            </ol>

            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message and Image</p>
              <p className={styles.sample_message}>
                Hey! I’ve completed the Defensive Driving Program. Here’s my
                certificate.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DefensiveDriving;
