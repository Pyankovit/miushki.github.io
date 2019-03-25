import React from "react";

 export default class MainSlider extends React.Component {
  constructor() {
    super();
    this.state = {
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
    };
  }

  render() {
    return (
      <div className="main-container">
        <Carousel animationTime={500} slideInterval={10000}>
          {this.state.images.map((item, index) => {
            return (
            <img 
              src={item} 
              key={index} 
              alt=''>          
            </img>)})}
        </Carousel>
      </div>
    );
  }
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,
      transitionDuration: props.animationTime
    };
    this.elements = this.createClones(props.children);
    this.timeoutObject = null;
  }

  createClones(children) {
    const length = children.length;
    const last = Object.assign({}, children[length - 1]);
    const first = Object.assign({}, children[0]);
    return [last, ...children, first];
  }

  componentDidMount() {
    this.startSlideInterval();
  }

  startSlideInterval() {
    if (this.props.slideInterval) {
      this.timeoutObject = setTimeout(this.next, this.props.slideInterval);
    }
  }

  clearSlideInterval() {
    if (this.timeoutObject) {
      clearTimeout(this.timeoutObject);
    }
  }

  handleTransitionEnd = () => {
    const length = this.elements.length;
    const activeIndex = this.state.activeIndex;

    if (activeIndex === 0) {
      this.setState({ transitionDuration: 0, activeIndex: length - 2 });
    } else if (activeIndex === length - 1) {
      this.setState({ transitionDuration: 0, activeIndex: 1 });
    }

    this.clearSlideInterval();
    this.startSlideInterval();
  };

  setActiveIndex = newIndex => {
    if (newIndex >= 0 && newIndex <= this.elements.length - 1) {
      this.setState({
        transitionDuration: this.props.animationTime,
        activeIndex: newIndex
      });
    }
  };

  next = () => {
    this.setActiveIndex(this.state.activeIndex + 1);
  };

  previous = () => {
    this.setActiveIndex(this.state.activeIndex - 1);
  };

  render() {
    const { activeIndex, transitionDuration } = this.state;
    const elements = this.elements;
    const translation = -100 * activeIndex / elements.length;
    const style = {
      transform: "translateX(" + translation.toString() + "%)",
      transitionDuration: transitionDuration / 1000 + "s",
      width: elements.length * 100 + "%"
    };

    return (
      <React.Fragment>
      <div className="carousel-container">
        <div
          className="carousel-items"
          style={style}
          onTransitionEnd={this.handleTransitionEnd}
        >
          {React.Children.map(elements, (element, index) => {
            return (
              <div className="carousel-item" key={index}>
                {element}
                </div>
            );
          })}
        </div>
        <div className="indicators">
          {this.props.children.map((child, index) => {
            let indicatorClass = "indicators-item";
            if (index + 1 === activeIndex) {
              indicatorClass += " active";
            }
            return (
              <div
                className={indicatorClass}
                key={index + 1}
                onClick={() => this.setActiveIndex(index + 1)}
              />
            );
          })}
        </div>
          <Arrow onArrowClick={this.previous} direction="left" />
          <Arrow onArrowClick={this.next} direction="right" />
      </div>
      </React.Fragment>
    );
  }
}

Carousel.defaultProps = {
  animationTime: 600
};

//Arrow component
const Arrow = props => {
  const containerClass = "arrow " + props.direction;
  const iconClass = "fas fa-chevron-" + props.direction;
  
  return (
    <div 
      onClick={props.onArrowClick} 
      className={containerClass}>
      <div className="circle">
        <i className={iconClass} />
      </div>
    </div>
  )
};