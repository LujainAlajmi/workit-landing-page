import Button from "./components/Button";
import Typography from "./components/Typography";
import bg from "./assets/images/bg-lg.svg";

function App() {
  return (
    <div className=" min-h-screen w-full">
      <div className=" relative z-40 h-[481.71px] w-full translate-y-0 bg-bg-sm bg-local bg-no-repeat md:h-[540.24px] md:bg-bg-md  lg:h-[730px] lg:bg-bg-lg">
        <div className="relative w-fit overflow-clip">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="341"
            height="317"
            viewBox="0 0 341 317"
            className=" absolute z-0 hidden -translate-x-[60%] translate-y-12 md:block md:translate-y-20"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="#44FFA1"
              transform="rotate(-152 159.204 128.626)"
            >
              <ellipse cx="54" cy="107.125" rx="53.5" ry="106.5" />
              <ellipse cx="94.706" cy="107" rx="53.5" ry="106.5" />
              <ellipse
                cx="134.529"
                cy="107.344"
                opacity=".75"
                rx="52.5"
                ry="106.5"
              />
              <ellipse
                cx="175.705"
                cy="108.102"
                opacity=".5"
                rx="53.5"
                ry="106.5"
              />
              <ellipse
                cx="217.294"
                cy="107.508"
                opacity=".25"
                rx="52.5"
                ry="106.5"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="174"
            height="181"
            viewBox="0 0 174 181"
            className=" absolute z-0 hidden translate-y-56 md:block md:translate-x-[44rem] lg:translate-x-[83rem] lg:translate-y-[20rem]"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="#44FFA1"
              transform="rotate(-56 110.742 58.398)"
            >
              <ellipse cx="28" cy="56.621" rx="27.5" ry="55.5" />
              <ellipse cx="49.633" cy="56.504" rx="27.5" ry="55.5" />
              <ellipse
                cx="69.878"
                cy="56.117"
                opacity=".75"
                rx="27.5"
                ry="55.5"
              />
              <ellipse cx="91.511" cy="56" opacity=".5" rx="27.5" ry="55.5" />
              <ellipse
                cx="113.703"
                cy="56.712"
                opacity=".25"
                rx="27.5"
                ry="55.5"
              />
            </g>
          </svg>
          <div className="">
            <div className="flex flex-row justify-between px-4 py-8 md:px-10 lg:px-40 lg:py-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="97"
                height="26"
                viewBox="0 0 97 26"
              >
                <path
                  fill="#FFF"
                  d="m10.528 25 4.064-11.2L18.624 25h4.16l6.048-17.472H23.84l-3.392 10.144-3.776-10.144h-4.16L8.704 17.672 5.312 7.528H.352L6.368 25h4.16Zm28.324.384c1.728 0 3.296-.395 4.704-1.184a9.132 9.132 0 0 0 3.376-3.248c.842-1.376 1.264-2.939 1.264-4.688 0-1.77-.422-3.339-1.264-4.704a9.173 9.173 0 0 0-3.376-3.232c-1.408-.79-2.976-1.184-4.704-1.184-1.728 0-3.302.395-4.72 1.184a9.138 9.138 0 0 0-3.392 3.232c-.843 1.365-1.264 2.933-1.264 4.704 0 1.75.42 3.312 1.264 4.688a9.097 9.097 0 0 0 3.392 3.248c1.418.79 2.992 1.184 4.72 1.184Zm0-4.32c-1.302 0-2.363-.448-3.184-1.344-.822-.896-1.232-2.048-1.232-3.456 0-1.387.41-2.533 1.232-3.44.82-.907 1.882-1.36 3.184-1.36 1.3 0 2.357.453 3.168 1.36.81.907 1.216 2.053 1.216 3.44 0 1.408-.406 2.56-1.216 3.456-.811.896-1.867 1.344-3.168 1.344ZM55.367 25v-9.408c0-1.301.363-2.31 1.088-3.024.725-.715 1.675-1.072 2.848-1.072h1.504v-4.16h-1.024c-1.067 0-2.01.197-2.832.592-.821.395-1.456 1.136-1.904 2.224V7.528h-4.48V25h4.8Zm11.908 0v-5.344l1.92-2.112L73.643 25h5.44l-6.304-10.432 6.336-7.04h-5.92l-5.92 6.304V.776h-4.8V25h4.8ZM83.598 4.68V1.16h-1.92v3.52h1.92Zm0 20.32V8.008h-1.92V25h1.92Zm11.012.192c.17 0 .405-.01.704-.032.298-.021.565-.064.8-.128v-1.76a11.29 11.29 0 0 1-1.216.096c-.768 0-1.355-.139-1.76-.416a2.012 2.012 0 0 1-.816-1.088 4.628 4.628 0 0 1-.208-1.376V9.832h3.712V8.008h-3.712V4.04h-1.92v1.824c0 .661-.176 1.184-.528 1.568-.352.384-.838.576-1.456.576h-1.216v1.824h3.2v10.656c0 1.536.378 2.704 1.136 3.504.757.8 1.85 1.2 3.28 1.2Z"
                />
              </svg>
              <Button type="Secondary">Apply for access</Button>
            </div>
            <div className="flex flex-col items-center justify-center space-y-16 md:space-y-14 lg:space-y-12">
              <div className=" flex flex-col items-center justify-center space-y-10">
                <Typography
                  type="HeadingL"
                  className="px-4 text-center text-white md:px-24 lg:px-80"
                >
                  Data{" "}
                  <span className="underline decoration-[#44FFA1]">
                    tailored
                  </span>{" "}
                  to your needs.
                </Typography>
                <Button type="Primary">Learn more</Button>
              </div>
              <div className="">
                <img
                  src="./assets/images/image-hero.webp"
                  className="mx-auto h-[184px] w-[320px] md:h-[296px] md:w-[514px] lg:h-[441px] lg:w-[767px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 h-[1071px] w-full -translate-y-20  bg-bg-sm-2 bg-local bg-no-repeat md:h-[921px] md:bg-bg-md-2 lg:h-[960px] lg:bg-bg-lg-2">
        <div className="flex h-full w-full flex-col items-center  px-4 pt-32 md:mx-auto md:w-[573px] md:px-20  md:pt-48 lg:mx-auto lg:w-[1114px] lg:flex-row lg:space-y-0 lg:px-0 lg:pt-16">
          <div className=" flex h-full w-full flex-col items-center text-left md:flex-row md:justify-between md:space-x-8 lg:flex-col lg:justify-center">
            <div className="">
              <div className="h-[46px] w-[48px]  rounded-full border border-[#584D62]  text-center">
                <Typography type="HeadingS" className="text-[20px] ">
                  1
                </Typography>
              </div>
            </div>
            <div>
              <Typography
                type="HeadingM"
                className="text-center text-[28px] text-[#24053E]  md:text-left md:text-[28px] lg:text-center lg:text-[32px]"
              >
                Actionable insights
              </Typography>
              <Typography
                type="Body"
                className="text-center text-[16px] text-[#584D62] md:text-left lg:text-center lg:text-[18px]"
              >
                Optimize your products, improve customer satisfaction and stay
                ahead of the competition with our product data analytics.
              </Typography>
            </div>
          </div>
          <div className=" flex h-full w-full flex-col items-center text-left md:flex-row md:justify-between md:space-x-8 lg:flex-col lg:justify-center">
            <div className="">
              <div className="h-[46px] w-[48px]  rounded-full border border-[#584D62]  text-center">
                <Typography type="HeadingS" className="text-[20px] ">
                  2
                </Typography>
              </div>
            </div>
            <div>
              <Typography
                type="HeadingM"
                className="text-center text-[28px] text-[#24053E]  md:text-left md:text-[28px] lg:text-center lg:text-[32px]"
              >
                Data-driven decisions
              </Typography>
              <Typography
                type="Body"
                className="text-center text-[16px] text-[#584D62] md:text-left lg:text-center lg:text-[18px]"
              >
                Make data-driven decisions with our product data analytics. Our
                AI-generated reports help you unlock insights hidden in your
                product data.
              </Typography>
            </div>
          </div>
          <div className=" flex h-full w-full flex-col items-center text-left md:flex-row md:justify-between md:space-x-8 lg:flex-col lg:justify-center">
            <div className="">
              <div className="h-[46px] w-[48px]  rounded-full border border-[#584D62]  text-center">
                <Typography type="HeadingS" className="text-[20px] ">
                  3
                </Typography>
              </div>
            </div>
            <div>
              <Typography
                type="HeadingM"
                className="text-center text-[28px] text-[#24053E]  md:text-left md:text-[28px] lg:text-center lg:text-[32px]"
              >
                Always affordable
              </Typography>
              <Typography
                type="Body"
                className="text-center text-[16px] text-[#584D62] md:text-left lg:text-center lg:text-[18px]"
              >
                Always affordable pricing that scales with your business. Get
                top-quality product data analytics services without hidden costs
                or unexpected fees.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex  h-full w-full flex-col items-center bg-white px-4 pt-10 md:flex-row md:items-start  md:justify-between md:px-10 md:pt-32 lg:justify-around ">
        <div className="md:w-48">
          <img
            src="./assets/images/image-founder.webp"
            alt=""
            className="h-[281px] w-[281px]  md:absolute  md:-translate-y-40 lg:h-[477px] lg:w-[477px]"
          />
        </div>

        <div className="  z-40 flex  -translate-y-[10%] flex-col items-center space-y-4 bg-[#24053E] p-8 md:h-[375px] md:w-[514px]  md:items-start  md:self-start lg:h-[413px] lg:w-[730px] lg:p-16 ">
          <Typography type="HeadingS" className="text-white ">
            Be the first to test
          </Typography>
          <Typography
            type="Body"
            className=" text-center text-white md:text-left"
          >
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I’ll be in touch to schedule a
            call.
          </Typography>
          <Button type="Primary">Apply for access</Button>
          <div className=" relative w-fit ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="221"
              height="212"
              viewBox="0 0 221 212"
              className="absolute z-50 hidden -translate-y-12 translate-x-56 md:block lg:translate-x-80"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#44FFA1"
                transform="rotate(-145 104.244 83.528)"
              >
                <ellipse cx="34.5" cy="68.5" rx="34" ry="68" />
                <ellipse cx="60.5" cy="68.5" rx="34" ry="68" />
                <ellipse cx="86" cy="68.5" opacity=".75" rx="33.5" ry="68" />
                <ellipse cx="112.5" cy="68.5" opacity=".5" rx="34" ry="68" />
                <ellipse cx="139" cy="68.5" opacity=".25" rx="33.5" ry="68" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-between space-y-14 bg-white py-16">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="97"
            height="26"
            viewBox="0 0 97 26"
          >
            <path
              fill="#24053E"
              d="m10.528 25 4.064-11.2L18.624 25h4.16l6.048-17.472H23.84l-3.392 10.144-3.776-10.144h-4.16L8.704 17.672 5.312 7.528H.352L6.368 25h4.16Zm28.324.384c1.728 0 3.296-.395 4.704-1.184a9.132 9.132 0 0 0 3.376-3.248c.842-1.376 1.264-2.939 1.264-4.688 0-1.77-.422-3.339-1.264-4.704a9.173 9.173 0 0 0-3.376-3.232c-1.408-.79-2.976-1.184-4.704-1.184-1.728 0-3.302.395-4.72 1.184a9.138 9.138 0 0 0-3.392 3.232c-.843 1.365-1.264 2.933-1.264 4.704 0 1.75.42 3.312 1.264 4.688a9.097 9.097 0 0 0 3.392 3.248c1.418.79 2.992 1.184 4.72 1.184Zm0-4.32c-1.302 0-2.363-.448-3.184-1.344-.822-.896-1.232-2.048-1.232-3.456 0-1.387.41-2.533 1.232-3.44.82-.907 1.882-1.36 3.184-1.36 1.3 0 2.357.453 3.168 1.36.81.907 1.216 2.053 1.216 3.44 0 1.408-.406 2.56-1.216 3.456-.811.896-1.867 1.344-3.168 1.344ZM55.367 25v-9.408c0-1.301.363-2.31 1.088-3.024.725-.715 1.675-1.072 2.848-1.072h1.504v-4.16h-1.024c-1.067 0-2.01.197-2.832.592-.821.395-1.456 1.136-1.904 2.224V7.528h-4.48V25h4.8Zm11.908 0v-5.344l1.92-2.112L73.643 25h5.44l-6.304-10.432 6.336-7.04h-5.92l-5.92 6.304V.776h-4.8V25h4.8ZM83.598 4.68V1.16h-1.92v3.52h1.92Zm0 20.32V8.008h-1.92V25h1.92Zm11.012.192c.17 0 .405-.01.704-.032.298-.021.565-.064.8-.128v-1.76a11.29 11.29 0 0 1-1.216.096c-.768 0-1.355-.139-1.76-.416a2.012 2.012 0 0 1-.816-1.088 4.628 4.628 0 0 1-.208-1.376V9.832h3.712V8.008h-3.712V4.04h-1.92v1.824c0 .661-.176 1.184-.528 1.568-.352.384-.838.576-1.456.576h-1.216v1.824h3.2v10.656c0 1.536.378 2.704 1.136 3.504.757.8 1.85 1.2 3.28 1.2Z"
            />
          </svg>
        </div>
        <div className="flex flex-row items-center justify-between space-x-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="#584D62"
              d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="17"
            viewBox="0 0 20 17"
          >
            <path
              fill="#584D62"
              d="M20 2.172a8.192 8.192 0 0 1-2.357.646 4.11 4.11 0 0 0 1.805-2.27 8.22 8.22 0 0 1-2.606.996A4.096 4.096 0 0 0 13.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 0 1 1.392 1a4.109 4.109 0 0 0 1.27 5.478 4.086 4.086 0 0 1-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 0 1-1.853.07 4.106 4.106 0 0 0 3.833 2.849A8.25 8.25 0 0 1 0 14.658a11.616 11.616 0 0 0 6.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0 0 20 2.172Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="#584D62"
              d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058ZM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0Zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
