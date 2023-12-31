import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { MdVolunteerActivism } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiHiking } from "react-icons/gi";
import { GiThreeFriends } from "react-icons/gi";

const iconStyle = { fontSize: 36 };

const About = () => {
  return (
    <>
      <section id="about">
        <Fade direction="left" duration={500} delay={600} triggerOnce>
          <Container>
            <div>
              <p className="title">
                <span className="white-color" style={{ fontWeight: "bold" }}>
                  FOS
                </span>{" "}
                - 海外学生团契
              </p>
              <p className="subtitle">
                <span className="black-color" style={{ fontWeight: "bold" }}>
                  欢迎来到 De Anza College
                  海外学生团契！我们有着数十年的历史，我们是一群爱神的人，凭着神的爱自发的为来自世界各地的国际学生提供关怀、支持、解疑答惑，建立联系和友谊。在这里，你将有机会与不同文化背景的人互动，探讨观点，分享经历，一同学习，一同探索美国的文化。我们也会一起组织参与各种有趣有意义的活动，包括文化交流、学习讲座、志愿者服务、出行游玩，等等。我们希望帮助你在异国他乡，度过愉快并难忘的时光。
                </span>
              </p>
              <br></br>
              <p className="subtitle">
                <span className="black-color" style={{ fontWeight: "bold" }}>
                  换而言之，这是海外学生的家。
                </span>
              </p>
              <br />
              <br />
              <br />
              <br />
              <p className="affliation">
                <small>
                  <span className="white-color">
                    FOS - Fellowship of Overseas Student.
                  </span>
                </small>
              </p>
            </div>
          </Container>
        </Fade>
      </section>

      <section id="about-p2">
        <Fade distance="left" duration={500} delay={600} triggerOnce>
          <Container>
            <div className="mb-5">
              <h2>我们提供</h2>
            </div>
            <Row>
              <Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
                <div style={{ marginBottom: 32 }}>
                  <span className="about-icon">
                    <IoFastFoodSharp style={iconStyle} />
                  </span>
                </div>
                <div>
                  <h5 className="secondary-color">周五晚餐活动</h5>
                </div>
                <div style={{ marginLeft: 30, marginRight: 30 }}>
                  <p>
                    每周五晚上我们都会有免费的晚餐活动，欢迎新老朋友来参加！
                  </p>
                </div>
              </Col>

              <Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
                <div style={{ marginBottom: 32 }}>
                  <span className="about-icon">
                    <MdVolunteerActivism style={iconStyle} />
                  </span>
                </div>
                <div>
                  <h5 className="secondary-color">志愿者活动</h5>
                </div>
                <div style={{ marginLeft: 30, marginRight: 30 }}>
                  <p>
                    我们会定期组织转学需要的志愿者活动，可以关注我们的活动日程！
                  </p>
                </div>
              </Col>

              <Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
                <div style={{ marginBottom: 32 }}>
                  <span className="about-icon">
                    <GiHiking style={iconStyle} />
                  </span>
                </div>
                <div>
                  <h5 className="secondary-color">户外活动</h5>
                </div>
                <div style={{ marginLeft: 30, marginRight: 30 }}>
                  <p>我们会一起出去海边、爬山、游玩，享受愉快的闲暇时光！</p>
                </div>
              </Col>

              <Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
                <div style={{ marginBottom: 32 }}>
                  <span className="about-icon">
                    <GiThreeFriends style={iconStyle} />
                  </span>
                </div>
                <div>
                  <h5 className="secondary-color">海外学生的家</h5>
                </div>
                <div style={{ marginLeft: 30, marginRight: 30 }}>
                  <p>
                    我们欢迎所有背景的海外学生，在这里你可以认识到最真挚的朋友。
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Fade>
      </section>
    </>
  );
};

export default About;
