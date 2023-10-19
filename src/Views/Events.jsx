import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const Events = () => {
  return (
    <section id="events">
      <Container>
        <Fade diretion="left" duration={500} delay={600} triggerOnce>
          <div className="mb-5 text-center">
            <h2>活动展示</h2>
          </div>
        </Fade>

        <Fade diretion="left" duration={500} delay={600} triggerOnce>
          <Row className="mb-5 mb-lg-0">
            <Col lg={8} className="p-4">
              <img
                src={require("../Images/details/details1.jpg")}
                alt="Details3"
                data-cursor-text="Check out"
              />
            </Col>

            <Col lg={4} className="col-description">
              <div>
                <h3 style={{ fontWeight: "normal" }}>2023新生入学迎新项目</h3>
                <p>
                  {" "}
                  每年的秋季学期，我们都会举办迎新活动，目的是给初来乍到的同学们，提供答疑解惑的项目讲座，包括如何选课、选专业，如何准备转学、文书，如何利用学校的资源等等。我们有很多经验丰富的学长学姐在这里给予你课内课外的支持，欢迎新生加入我们的大家庭。
                </p>
                <a href="https://www.facebook.com/groups/292290343474">
                  <span className="button button-hero">加入我们的FB Group</span>
                </a>
              </div>
            </Col>
          </Row>
        </Fade>

        <div className="pc">
          <Fade diretion="right" duration={500} delay={600} triggerOnce>
            <Row className="mb-5 mb-lg-0">
              <Col lg={4} className="col-description">
                <div>
                  <h3 style={{ fontWeight: "normal" }}>
                    Multi-Cultural Potluck Dinner.
                  </h3>
                  <p>
                    There was a variety of food and dessert from different
                    countries.
                  </p>
                  <a href="https://www.instagram.com/deanza_fos/">
                    <span className="button button-hero">
                      关注我们的Instagram
                    </span>
                  </a>
                </div>
              </Col>

              <Col lg={8} className="p-4">
                <img
                  src={require("../Images/details/details2.jpg")}
                  alt="Details2"
                  data-cursor-text="Check out"
                />
              </Col>
            </Row>
          </Fade>
        </div>

        {/* mobile */}
        <div className="mobile">
          <Fade diretion="right" duration={500} delay={600} triggerOnce>
            <Row className="mb-5 mb-lg-0">
              <Col lg={8} className="p-4">
                <img
                  src={require("../Images/details/details2.jpg")}
                  alt="Details2"
                  data-cursor-text="Check out"
                />
              </Col>

              <Col lg={4} className="col-description">
                <div>
                  <h3 style={{ fontWeight: "normal" }}>
                    Multi-Cultural Potluck Dinner.
                  </h3>
                  <p>
                    There was a variety of food and dessert from different
                    countries.
                  </p>
                  <a href="https://www.facebook.com/groups/292290343474">
                    <span className="button button-hero">
                      关注我们的Instagram
                    </span>
                  </a>
                </div>
              </Col>
            </Row>
          </Fade>
        </div>

        <Fade diretion="left" duration={500} delay={600} triggerOnce>
          <Row className="mb-5 mb-lg-0">
            <Col lg={8} className="p-4">
              <img
                src={require("../Images/details/details3.jpg")}
                alt="Details1"
                data-cursor-text="Check out"
              />
            </Col>

            <Col lg={4} className="col-description">
              <div>
                <h3 style={{ fontWeight: "normal" }}>Morro Bay Kayaking.</h3>
                <p>
                  Kayaking Morro Bay from Central Coast Outdoors ensures you
                  will see the wonders of this extraordinary National Estuary.{" "}
                </p>
                <a href="https://www.facebook.com/groups/292290343474/">
                  <span className="button button-hero">了解更多</span>
                </a>
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Events;
