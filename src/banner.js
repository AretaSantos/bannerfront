import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/banner-data')
      .then(response => response.json())
      .then(data => setBannerData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!bannerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="banner">
      <img src={bannerData.logoUrl} alt="Banner" />
      {/* Add more elements based on the bannerData if needed */}
    </div>
  );
};

export default Banner;
