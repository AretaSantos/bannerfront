import React, { useState, useEffect } from 'react';
import './styleBlack.css';
import './styleRed.css';
import './styleLight.css';
import logowhite from './jobly-white-logo-36px.svg';
import logogrey from './jobly-darkgrey-logo-36px.svg';

import 'typeface-poppins';

const App = () => {
  const [bannerData, setBannerData] = useState({ logourl: '', title: '', company: '' });
  const [style, setStyle] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/banner-data')
      .then(response => response.json())
      .then(data => {
        setBannerData(data);
        console.log(data)
        const styles = ['styleBlack', 'styleRed', 'styleLight'];
        const selectedStyle = styles[Math.floor(Math.random() * styles.length)];
        setStyle(selectedStyle);
      })
      .catch(error => {
        console.error('Error fetching data:', error);

      });
  }, []);

  const setLogoColor = (style) => {

    if (style === 'styleLight'){
      return logogrey;
    } else if (style === 'styleBlack'){
      return logowhite;
    } else if (style === 'styleRed') {
      return logowhite;
    }

  };

  const getTitleFontSize = (title) => {

    if (title.length >= 58) {
      return '26px';
    } else if (title.length >= 50){
      return '29px';
    } else if (title.length > 40) {
      return '32px';
    } else if (title.length >= 25) {
      return '32px';
    } else if (title.length > 20) {
      return '22px';
    } else {
      return '44px';
    }

  };

  const getCompanyFontSize = (company) => {

    if (company.length > 40) {
      return '18px';
    } else if (company.length >= 25){
      return '20px';
    } else {
      return '30px';
    }
  }
  
return (
<div className={`app ${style} `}>
    <div className="jobly-banner-body">
        <div className="jobly-banner-content">
            <div className="jobly-banner-content-padding">
                <div className="jobly-logo-base-div">
                    <div className="company-logo-div" id="image-header">
                        {bannerData.logourl && (
                        <img src={bannerData.logourl} alt="company-logo" id="company-logo" />
                        )}
                    </div>
                </div>
            </div>
            <div className="jobly-job-title-company-table-div">
                <div className="jobly-job-title-company-table-cell-div">
                    <div className="jobly-job-title" style={{fontSize: getTitleFontSize(bannerData.title)}}>{bannerData.title}</div>
                    <div className="jobly-job-company" style={{fontSize: getCompanyFontSize(bannerData.company)}}>{bannerData.company}</div>
                </div>
            </div>
            <div className="jobly-button-div">
                <div className="jobly-find-job">
                    <span id="text">Lue lisää</span>
                </div>
                <div className="jobly-logo-div">
                    <img id="jobly-logo" src={setLogoColor(style)} alt="jobly.fi"/>
                </div>
            </div>
        </div>
    </div>
</div>

);
};


export default App;

