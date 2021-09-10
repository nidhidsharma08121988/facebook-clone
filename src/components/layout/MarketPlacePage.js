import React from 'react';
import commonClass from './Common.module.css';
const MarketPlacePage = () => {
  return (
    <div
      className={commonClass.wholeContainer}
      data-testid='market-page-container'
    >
      Market
    </div>
  );
};

export default MarketPlacePage;
