import React from 'react';
import "./HomeBanner.css";
import homeBannerItemProduct from "../../../../homeProduct.json";

const HomeBanner = () => {
  return (
    <div className='homeBanner'>
      <img className='homeBannerImg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg" alt="Home Banner" />
      <div className='grayBackgroundHomeBanner'></div>

      <div className="homeBannerItemDiv">
        {
          homeBannerItemProduct.product.map((item, ind) => {
            return (
              <div className="homeBannerItemDivCard" key={ind}>
                <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                <div className="imgHomeBannerItemDivCard">

                  {
                    item.imgs.map((it, ind) => {
                      return (
                        <div className="imgBannerHomeDiv" key={ind}>
                          <img className='imgBannerHomeDivImg' src={it} alt="" />
                          <div className="imgBannerImgName">Starting ₹249 | boAt</div>
                        </div>
                      );
                    })
                  }


                </div>
                <div className="seeMoreHomeBanner"><span style={{ cursor: "pointer" }}>See More</span></div>
              </div>
            );
          })
        }



      </div>


    </div>
  )
}

export default HomeBanner
