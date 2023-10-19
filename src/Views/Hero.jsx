import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";
// import { useScrollLock } from '@mantine/hooks';
// import { HiMenuAlt2, HiX } from "react-icons/hi";

const Hero = () => {
  // let [lateralMenu, setLateralMenu] = useScrollLock(false);

  return (
    <section id="hero">
      <Container fluid style={{ height: "100vh" }} className="desktop">
        <Row style={{ height: "100vh" }}>
          <Col lg={6} className="col-content">
            <Fade bottom duration={500} delay={600} distance="30px" triggerOnce>
              <div className="header">
                <div className="header-content">
                  <div></div>
                  <div style={{ display: "flex" }}>
                    <div className="navbar-item">
                      <Link to="about" smooth duration={500}>
                        关于我们
                      </Link>
                    </div>
                    <div className="navbar-item">
                      <Link to="events" smooth duration={500}>
                        活动展示
                      </Link>
                    </div>
                    <div className="navbar-item" style={{ marginRight: 0 }}>
                      <Link to="calendar" smooth duration={500}>
                        活动日程
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            {Content()}
          </Col>

          <Col lg={6} className="p-0">
            {/* <Fade></Fade> ..*/}
            <img src={require("../Images/hero2.png")} alt="Hero" />
          </Col>
        </Row>
      </Container>

      <div className="mobile">
        <Fade bottom duration={500} delay={600} distance="30px" triggerOnce>
          <img src={require("../Images/hero1.png")} alt="Hero" />
          <div className="header">
            <div className="header-content">
              <div></div>
              <div>
                {/* {!lateralMenu 
                                ? <HiMenuAlt2 style={{ fontSize: 24 }} onClick={() => setLateralMenu(true)} /> 
                                : <HiX style={{ fontSize: 24, color: lateralMenu ? "#383535" : "#eeeded"  }} onClick={() => setLateralMenu(false)} /> } */}
              </div>
            </div>
          </div>
          <Container fluid style={{ height: "100vh" }} className="content">
            <div className="margin-adder">{Content()}</div>
          </Container>
        </Fade>

        {/* <div style={{ display: lateralMenu ? 'block' : 'none' }} className="sidebar">
                        <Fade right duration={400} distance="30px">
                            <div className="sidebar-backdrop" />
                            <div className="sidebar-content">
                                <div className="menu-container">
                                    <div className="menu-title">Menu</div>
                                    <div className="menu-item"><Link to="about" smooth duration={500} onClick={() => setLateralMenu(false)}>About</Link></div>
                                    <div className="menu-item"><Link to="events" smooth duration={500} onClick={() => setLateralMenu(false)}>Past Events</Link></div>
                                    <div className="menu-item"><Link to="calendar" smooth duration={500} onClick={() => setLateralMenu(false)}>Events Calendar</Link></div>
                                </div>
                                <div className="menu-container" style={{ marginTop: 30 }}>
                                </div>
                            </div>
                        </Fade>
                    </div> */}
      </div>
    </section>
  );
};

const Content = () => {
  return (
    <div>
      <Fade
        direction="left"
        duration={500}
        delay={600}
        distance="30px"
        triggerOnce
      >
        <div className="mb-4">
          <h1 className="primary-color">FOS</h1>
          <h2>海外学生团契</h2>
          <p style={{ maxWidth: 550 }}>
            De Anza FOS （海外学生团契） 是一群爱神的学生们组成的。 为的是
            关怀、建立、帮助 您的参与会带来别人的祝福 我们乐意与您作朋友
            欢迎来参加！
            <br />
            <p> 我们的主旨：</p>
            <p>1. 分享神的爱、 借着帮助新学生适应美国生活</p>
            <p>2. 建立真诚的友谊、借着有意义的聚会和活动</p>
          </p>
        </div>

        <p style={{ maxWidth: 550 }}>
          <i>
            <strong>
              欢迎参加我们的活动！请点击下面按钮，或滑动到页面底部，在Google日历页面查看并且报名所有即将举行的活动。
            </strong>
          </i>
          <br />
          <br />
        </p>

        {/* <Link to="about" smooth duration={500}>
                    <span className="button button-hero" data-cursor-text="Click me">
                        Tell me more
                    </span>
                </Link> */}
        <Link to="calendar" smooth duration={500}>
          <span className="button button-hero">了解即将举行的活动</span>
        </Link>
      </Fade>
    </div>
  );
};

export default Hero;
