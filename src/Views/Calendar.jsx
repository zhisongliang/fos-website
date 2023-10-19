import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";

const Calendar = () => {
  return (
    <section id="calendar">
      <Container>
        <Fade direction="up" duration={500} delay={200} triggerOnce>
          <h1>活动日程</h1>
          <p>
            <b>
              欢迎参加我们未来的活动，点击下方你感兴趣的活动，查看更多信息。
            </b>
          </p>
          <p>
            <b>
              如果想参加我们的活动，点击活动名字，找到报名链接，填写google
              form报名。
            </b>
          </p>
          {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0hn7QdQ20TS9J_87EUOPMPR6KtsE6pJpnIylOokfuj60MIA/viewform?usp=sf_link">
            <span className="button button-hero">
              Fill out the interest form
            </span>
          </a> */}
          <br />
          {/* <div><img src={require("../Images/bonfire.png")} alt="event1" data-cursor-text="Check out"/></div> */}
          <ReactEmbeddedGoogleCalendar
            className="calender"
            publicUrl="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23e08451&ctz=America%2FLos_Angeles&showCalendars=1&hl=zh_CN&showPrint=0&showTitle=0&showNav=1&showTabs=1&src=ZGVhbnphZm9zY2x1YkBnbWFpbC5jb20&color=%23039BE5"
            height="600px"
          />
        </Fade>
      </Container>
    </section>
  );
};

export default Calendar;
