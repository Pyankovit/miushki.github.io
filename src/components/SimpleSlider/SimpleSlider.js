import React from 'react';
import Slider from 'react-slick';
import './SimpleSlider.scss'



function Arrow(props) {
  const { onClick} = props;
  let containerClass = "arrow " + props.direction;
  let iconClass = "fas fa-chevron-" + props.direction;
  console.log(iconClass)
  return (
    <div 
      className={containerClass}
      onClick={onClick}>
      <div className="circle">
        <i className={iconClass} />
      </div>
    </div>
  )
};

 class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFooter: 1,
      images: [
        "https://lh3.googleusercontent.com/NU5JGqr5F1Ogp3PqpAxjqw9NPmWDsXnod3M03CGzNFK_oKRBiDnLLhvm9aWUVy4ExaBZCTD2L5zApjVyXa5EdsjEee4hVGEW6_fOCCTgGR4VUtpgf1isXjHQ9r5p9IVgjMKchZTWdsQ2YvSa5DS1TIdbHrS3-61I1JvKQPtV9WoYhV_1789q5c61H8g8KJZuiQn-np-mNdu76ipABUl1ZepsYAK7a83sSjKGwf1tbtMjbLomR9at66kxkBYxkdQmLUBIHirsDEQRrqmIRiM77durXe7kF3pnkgrqkJl01pwXPjFuOm-VEXuTUWjNpqd_JnohjNOpH75-_AxXmdKTYpiT21DxVRUV4zlhehRsV9c4u8sUrGZIA6E3mIT4YY4tYtNR6EP2R0MhqeUqJUsnA4wPUh-g3KInTZxHEe93wCO61ERXSIF02BenV0qlo6y51KWkvlMG97e3j71kSMKl3oMW83mxa7SiB7Nhenan-NjHnn025dU1wOkQ47JHpw-imqeE4UYyBKL9VBSgo4Fr410kYTp2BGEZrygOr01LOmbGY-dUoPAhEPldww2GAmep6iugkiP4vxiO5XXV1roneYm9q2djI9J9npcCKEaR7rbxNhm-vo6CehOcjVfGa4cEVVs8A5VzIi0A5-qtlGnMAsrgghSuvSg=w1366-h481-no",
        "https://lh3.googleusercontent.com/lmLOqsMq8o_P_w5iogkdOT1XY76lSF4LRxScGG4YtB5UVp6Bi4RkP9Hg1Q79oTUKqHzOV1S_-r1q6uFMe8ux8h2jwhvvP7nvFQohpwN3oXHa8IFphKSDs8EAf_nrjkG7jZlMaXNJLjnY2EAClpiQnHltY3taHw25DiyEHbfA6-gG_Qf9v4qD7SGwX7mJRN6ZuFVsP-aMutKZKa3cfbOYbJnp9IXdxHn15KjH7u9I6A0-jlsAGO6CoKvnhBzZoLv8J4C6KKkORecf6V_O9PA76sEghA6ar3KKdI2tAMEawC5Li5OfjiKDbIiIBC4bCvfBMCcd_1LrQoTCrJLzRxcCtOvUIQxaH8uHR-NB2f3hQ9oZGT6sGDBLfkDPIlWyaFgVzl2VMSjb0JIsr2SvkplGItpGn99IhWiXzhk1ZMs1KYOLFGWca-OMGqumH8FlyMrCQ_y5t0-gVxtVIqZoYgMmVWRFrq3Ah_oxOAVe_2EN3ni8J5xmYDurejEB-gZ2Uq8YUv8-ysvtm2_FL0CTr48yRRpozivaeWKoZNd6L7RevVUS19Y3K4E3DdJm3VEbopQNt0p7H6AoBo58dFujjqu6dXnW4WjvnEFPlgMYRPrVIE85y3rrRIAPWkJP7f70Nh2GcILqF09XWsu0NCQleJiaqo3fOWm14wg=w1366-h481-no",
        "https://lh3.googleusercontent.com/EYXvLbinDmls35_1RVqlIMgVZyCa6aXHrZysNsFg-h07ByzqKwQ8CoUWZGvb_dCKby3duagv0ORetRc7aSvIYfil8SC2DE4t6jbYzFJNpqc71jdpU6uWp08b_9xawzecysjMfGdZVFwujDMQkX4abVFwuub5TNY61QF15UrEqjhk5Nv83pC-36E6xX5aE3Flnh4uNc1GG7LKmuUPPrzZAtH_EL2NekwtBDVJINI-HVBil_XKM_IO5Hwr0Rk7LW7jMLrSZgcHA7ZJT5rGkWnnbDOuJ9BSDZW2qqmR47iQvkVhQnBZrKYkgzYo3vWGxqx1COiUPuFc9ifCgl1427wtKBIqXxyi74bWehvO-X6ShDLjb4JwnvQG96yCY57y_c4LcRPFN9AVQNiMbZpJELWXodRxjpCT8j3DbjuMbsOG0rmB1mhMXGokpQNTZ65do8Oc5SNiOFfQbcX0rqrg010nM1mwU1dCvSk3YrKq5ftJ7CsXNvc-Lf_8Ph4OFYTw2oYoZyjlPCPez2QYlBFbhx8QL3dEpYf53RKYzh3lVI5oIsz8mBBElruR48gzy2lg86Moh8cSUVZ1-9W4R_W6nVuET1rbeKGYoxaq4a4OM948dVOHybZKuDPMb1IAyzQbjuXfdl-MnLY0Rm5wvif6MlZweX_VxMeECUc=w1366-h481-no"
      ],
      labels: [
        "Cчастливые часы",
        "Набор суши с икрой",
        "Суши сеты на двоих"
      ],
      timeSale: [
        "C 11 до 16 в будние дни",
        "Круглосуточная доставка",
        "Cкидки до 15%"
      ]
    }
        
    this.settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: <Arrow direction="right"/>,
      prevArrow: <Arrow direction="left"/>
    };
  } 

  render() {
    return (
      <div className="main-slider">
        <CaruoselSlider settings={this.settings} />
      </div>
    );
  }
}

class CaruoselSlider extends React.Component {
  shouldComponentUpdate(nextProps) {
    // TODO: add proper implementation that compares objects
    return false;
  }

  render() {
    console.log("slider render");
    return (
      <Slider {...this.props.settings}>
        <div>
          <div className="card">
            <img src="https://lh3.googleusercontent.com/NU5JGqr5F1Ogp3PqpAxjqw9NPmWDsXnod3M03CGzNFK_oKRBiDnLLhvm9aWUVy4ExaBZCTD2L5zApjVyXa5EdsjEee4hVGEW6_fOCCTgGR4VUtpgf1isXjHQ9r5p9IVgjMKchZTWdsQ2YvSa5DS1TIdbHrS3-61I1JvKQPtV9WoYhV_1789q5c61H8g8KJZuiQn-np-mNdu76ipABUl1ZepsYAK7a83sSjKGwf1tbtMjbLomR9at66kxkBYxkdQmLUBIHirsDEQRrqmIRiM77durXe7kF3pnkgrqkJl01pwXPjFuOm-VEXuTUWjNpqd_JnohjNOpH75-_AxXmdKTYpiT21DxVRUV4zlhehRsV9c4u8sUrGZIA6E3mIT4YY4tYtNR6EP2R0MhqeUqJUsnA4wPUh-g3KInTZxHEe93wCO61ERXSIF02BenV0qlo6y51KWkvlMG97e3j71kSMKl3oMW83mxa7SiB7Nhenan-NjHnn025dU1wOkQ47JHpw-imqeE4UYyBKL9VBSgo4Fr410kYTp2BGEZrygOr01LOmbGY-dUoPAhEPldww2GAmep6iugkiP4vxiO5XXV1roneYm9q2djI9J9npcCKEaR7rbxNhm-vo6CehOcjVfGa4cEVVs8A5VzIi0A5-qtlGnMAsrgghSuvSg=w1366-h481"
              alt=""></img> 
              <div className="headerwrapper">  
                <h4>Cчастливые часы</h4>
                <h3>C 11 до 16 в будние дни</h3>
              </div>   
          </div>
        </div>
        <div>
          <div className="card">
          <img src="https://lh3.googleusercontent.com/lmLOqsMq8o_P_w5iogkdOT1XY76lSF4LRxScGG4YtB5UVp6Bi4RkP9Hg1Q79oTUKqHzOV1S_-r1q6uFMe8ux8h2jwhvvP7nvFQohpwN3oXHa8IFphKSDs8EAf_nrjkG7jZlMaXNJLjnY2EAClpiQnHltY3taHw25DiyEHbfA6-gG_Qf9v4qD7SGwX7mJRN6ZuFVsP-aMutKZKa3cfbOYbJnp9IXdxHn15KjH7u9I6A0-jlsAGO6CoKvnhBzZoLv8J4C6KKkORecf6V_O9PA76sEghA6ar3KKdI2tAMEawC5Li5OfjiKDbIiIBC4bCvfBMCcd_1LrQoTCrJLzRxcCtOvUIQxaH8uHR-NB2f3hQ9oZGT6sGDBLfkDPIlWyaFgVzl2VMSjb0JIsr2SvkplGItpGn99IhWiXzhk1ZMs1KYOLFGWca-OMGqumH8FlyMrCQ_y5t0-gVxtVIqZoYgMmVWRFrq3Ah_oxOAVe_2EN3ni8J5xmYDurejEB-gZ2Uq8YUv8-ysvtm2_FL0CTr48yRRpozivaeWKoZNd6L7RevVUS19Y3K4E3DdJm3VEbopQNt0p7H6AoBo58dFujjqu6dXnW4WjvnEFPlgMYRPrVIE85y3rrRIAPWkJP7f70Nh2GcILqF09XWsu0NCQleJiaqo3fOWm14wg=w1366-h481"
          alt=""></img>
            <div className="headerwrapper">
              <h4>Набор суши с икрой</h4>
              <h3>Круглосуточная доставка</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
          <img src="https://lh3.googleusercontent.com/EYXvLbinDmls35_1RVqlIMgVZyCa6aXHrZysNsFg-h07ByzqKwQ8CoUWZGvb_dCKby3duagv0ORetRc7aSvIYfil8SC2DE4t6jbYzFJNpqc71jdpU6uWp08b_9xawzecysjMfGdZVFwujDMQkX4abVFwuub5TNY61QF15UrEqjhk5Nv83pC-36E6xX5aE3Flnh4uNc1GG7LKmuUPPrzZAtH_EL2NekwtBDVJINI-HVBil_XKM_IO5Hwr0Rk7LW7jMLrSZgcHA7ZJT5rGkWnnbDOuJ9BSDZW2qqmR47iQvkVhQnBZrKYkgzYo3vWGxqx1COiUPuFc9ifCgl1427wtKBIqXxyi74bWehvO-X6ShDLjb4JwnvQG96yCY57y_c4LcRPFN9AVQNiMbZpJELWXodRxjpCT8j3DbjuMbsOG0rmB1mhMXGokpQNTZ65do8Oc5SNiOFfQbcX0rqrg010nM1mwU1dCvSk3YrKq5ftJ7CsXNvc-Lf_8Ph4OFYTw2oYoZyjlPCPez2QYlBFbhx8QL3dEpYf53RKYzh3lVI5oIsz8mBBElruR48gzy2lg86Moh8cSUVZ1-9W4R_W6nVuET1rbeKGYoxaq4a4OM948dVOHybZKuDPMb1IAyzQbjuXfdl-MnLY0Rm5wvif6MlZweX_VxMeECUc=w1366-h481"
          alt=""></img>
            <div className="headerwrapper">
              <h4>Суши сеты на двоих</h4>
              <h3>Cкидки до 15%</h3>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;



