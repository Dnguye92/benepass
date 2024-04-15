import { useState } from 'react';
import classNames from 'classnames/bind';
import benepassCardBg from './assets/BG.svg';
import logo from './assets/logo-white.svg';
import tag from './assets/Tag.svg';
import visaLogo from './assets/Visa.svg';
import ellipseGroupMd from './assets/ellipse-group-md.svg';
import ellipseGroupSm from './assets/ellipse-group-sm.svg';
import styles from './App.module.css';
import './index.css';

function App() {
  // initialize state variables
  const [isChecked, setIsChecked] = useState(false);
  const cx = classNames.bind(styles);

  // create binded class names to dynamically set styles
  const benepassCardNumberContentContainerClassName = cx({
    [styles.benepassCardNumberContentContainer]: true,
    [styles.benepassCardNumberContentActive]: isChecked ? true : false
  });

  const inputLabelClassname = cx({
    [styles.inputActive]: isChecked ? true : false
  });

  // create onChange function to handle when checkbox is clicked
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      {/* Card Info Description Container */}
      <div className={styles.benepassCardInfoContainer}>
        <p className={styles.benepassCardInfoHeader}>Flex card</p>
        <p className={styles.benepassCardInfoDescription}>Used for pre-tax purchases</p>
      </div>
      {/* Benepass Virtual Card Container */}
      <div className={styles.benepassCardContainer}>
        <div className={styles.benepassCardBgContainer}>
          <img src={benepassCardBg} alt="benepass-bg" className={styles.benepassCardBg}/>
          {/* Benepass Virtual Card Content Container */}
          <div className={styles.benepassCardContentContainer}>
            <div className={styles.benepassCardTopContentContainer}>
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div>
                <img src={tag} alt="tag" />
              </div>
            </div>
            <div className={benepassCardNumberContentContainerClassName}>
              {isChecked ? (
                <p className={styles.ccNumber}>1232 2223 4432</p>
              ) : (
                <img className={styles.ellipseGroupMd} src={ellipseGroupMd} alt="ellipse-group" />
              )}
              <p className={styles.ccNumber}>1732</p>
            </div>
            <div className={styles.benepassCardDetailsContentContainer}>
              <div>
                <p className={styles.ccDetailName}>VALID THRU</p>
                <p className={styles.ccDetailValue}>8/28</p>
              </div>
              <div className={styles.ccCVCContainer}>
                <p className={styles.ccDetailName}>CVC</p>
                {isChecked ? (
                  <p className={styles.ccDetailValue}>345</p>
                ) : (
                  <img className={styles.ellipseGroupSm} src={ellipseGroupSm} alt="ellipse-group" />
                )}
              </div>
            </div>
            <div className={styles.benepassCardBottomContainer}>
              <div>
                <p className={styles.ccDetailZipcode}>ZIP 66062</p>
              </div>
              <div>
                <img src={visaLogo} alt="visa-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Container for the 'Show details' checkbox */}
      <div className={styles.showDetailsContainer}>
        <form>
          <p>
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              checked={isChecked}
              onChange={handleOnChange}
            />
            <label htmlFor="checkbox" className={inputLabelClassname}>Show details</label>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
