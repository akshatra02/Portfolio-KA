import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div id="nav" className={styles.container}>
      <Head>
        <title>Portfolio-MKA</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
          rel="stylesheet"
        />
        <link
          id="bootstrap"
          href="css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />

        <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css?family=Alegreya|Open+Sans|Tangerine:700"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <div></div>
        <div className={styles.navbar}>
          {/* <div className={styles.navbar}>
        <a className={styles.navbar}>My Website</a>
      </div> */}
          <div className={styles.navbar}>
            <ul className={styles.navbar}>
              <li className={styles.navbar}>
                <a className={styles.navbar} href="#about">
                  PORTFOLIO
                </a>
              </li>
              <li className={styles.navbar}>
                <a className={styles.navbar} href="#resume">
                  RESUME
                </a>
              </li>
              <li className={styles.navbar}>
                <a className={styles.navbar} href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.con}>
          <h1 className={styles.title}>Kunguma Akshatra M</h1>
          <span className={styles.title}>A Computer Science Engineer </span>
        </div>
        <section id="about" className={styles.des}>
          <p className={styles.description}>
            <span className={styles.hi}>Hi! I'm Kunguma Akshatra M </span>I am a
            dedicated computer engineering student driven by an unwavering
            commitment to mastering emerging technologies and cultivating
            profound digital acumen. My profound passion lies in the dynamic
            fields of web development, software engineering, and application
            development, where I thrive on crafting innovative solutions. An
            ardent collaborator, I am fueled by the prospect of synergizing with
            diverse teams to unleash the full potential of collective
            creativity, ultimately achieving remarkable outcomes. I am presently
            in pursuit of an opportunity within an organization that not only
            values my relentless pursuit of knowledge but also provides a
            platform to apply my skills, fostering mutual growth and enduring
            success.
          </p>
        </section>

        <section className={styles.project}>
          <h1 className={styles.pro}>PROJECTS</h1>
          <div className={styles.grid}>
            <a
              href="https://github.com/akshatra02/Kranti2k23"
              className={styles.card}
            >
              <img src="kr.png" />
              <h3>KRANTI2K23 &rarr;</h3>
              <p>Front End UI Developer</p>
            </a>

            <a
              href="https://github.com/akshatra02/E-Authentication"
              className={styles.card}
            >
              <img src="eau.png" />
              <h3>E-Authentication &rarr;</h3>
              <p>Full stack Developer</p>
            </a>

            <a
              href="https://github.com/akshatra02/cryptoverse-tracker"
              className={styles.card}
            >
              <img src="crypt0.png" />
              <h3>CRYPTOVERSE &rarr;</h3>
              <p>Full stack Developer</p>
            </a>

            <a
              href="https://github.com/akshatra02/Foreign-Trading-System"
              className={styles.card}
            >
              <img src="fts.jpg" />

              <h3>FOREIGN TRADING SYSTEM &rarr;</h3>
              <p>Full stack Developer</p>
            </a>
          </div>
        </section>
        <section id="skills" className={styles.des}>
          <h2 className={styles.skill}>SKILLS</h2>
          <div className={styles.skillrow}>
            <span className={styles.skillicon}>
              <img src="jee.png" />
            </span>
            <span className={styles.skillicon}>
              <img src="java.png" />
            </span>
            <span className={styles.skillicon}>
              <img src="python.png" />
            </span>
          </div>
          <div className={styles.skillrow}>
            <span className={styles.skillicon}>
              <img src="html.png" />
            </span>
            <span className={styles.skillicon}>
              <img src="css.png" />
            </span>
            <span className={styles.skillicon}>
              <img src="js.png" />
            </span>
            <span className={styles.skillicon}>
              <img src="bootstrap.png" />
            </span>
          </div>
          <div className={styles.skillrow}>
            <span className={styles.skillicon}>
              <img src="node.png" />
            </span>
            <span className={styles.skillicon}>
              <img src="xml.png" />
            </span>
          </div>

          <div className={styles.skillrow}>
            <span className={styles.skillicon}>
              <img src="mysql.png" />
            </span>
            <span className={styles.skillicon}>
              <img src="mongo.jpg" />
            </span>
          </div>
          <div className={styles.skillrow}>
            <span className={styles.skillicon}>
              <img src="git.png" />
            </span>
            <span className={styles.skillicon}>
              <img src="github.png" />
            </span>
          </div>
          <div className={styles.skillrow}>
            <span className={styles.skillicon}>
              <img src="vscode.png" />
            </span>
            <span className={styles.skillicon}>
              <img src="eclipse.png" />
            </span>
            <span className={styles.skillicon}>
              <img src="Intellij.png" />
            </span>
            <span className={styles.skillicon}>
              <img src="netbeans.png" />
            </span>
            <span className={styles.skillicon}>
              <img src="argo-.png" />
            </span>
          </div>

          <div className={styles.skillrow}>
            <span className={styles.skillicon}>
              <img src="windows.png" />
            </span>
            <span className={styles.skillicon}>
              <img src="iso.png" />
            </span>
          </div>
        </section>

        <section id="resume" className={styles.edu}>
          <h1 className={styles.ed}>EDUCATION</h1>
          <ul className={styles.timeline}>
            <li>
              <div className={styles.timage}>
                <div className={styles.content}>2020 - 2024</div>
              </div>
              <div className={styles.panel}>
                <div className={styles.th}>
                  <div className={styles.t1}>
                    Meenakshi Sundararajan Engineering College
                  </div>
                  <div className={styles.t2}>Bachelor of Engineering (BE)</div>
                </div>

                <div className={styles.tb}>
                  <p>Specialization: Computer Science and Engineering</p>
                  <p>Percentage:88.4 %</p>
                </div>
              </div>
            </li>
            <li className={styles.inverted}>
              <div className={styles.timage}>
                <div className={styles.content}>2019 - 2020</div>
              </div>
              <div className={styles.ipanel}>
                <div className={styles.th}>
                  <div className={styles.t1}>
                    P.N.Dhawan Adarsh Vidyalaya Matriculation Higher Secondary
                    School
                  </div>
                  <div className={styles.t2}>XII Std</div>
                </div>
                <div className={styles.tb}>
                  <p></p>
                  <p>Percentage:87.3 %</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.timage}>
                <div className={styles.content}>2017 - 2018</div>
              </div>
              <div className={styles.panel}>
                <div className={styles.th}>
                  <div className={styles.t1}>
                    P.N.Dhawan Adarsh Vidyalaya Matriculation Higher Secondary
                    School
                  </div>
                  <div className={styles.t2}>X Std</div>
                </div>
                <div className={styles.tb}>
                  <p></p>

                  <p>Percentage:94.4 %</p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className={styles.cer}>
          <div className={styles.cer}>
            <span className={styles.hi}>CERTIFICATION</span>
            <ul>
              <li>Full Stack Development-Infosys springboard</li>
              <li>The Complete JAVA Certification-Udemy</li>
              <li>Responsive Web Design-feeCodeCamp</li>
              <li>Network Engineering-Cisco</li>
            </ul>
          </div>
        </section>
        <section id="contact" className={styles.contact}>
          <h1>CONTACT ME</h1>
          <p>Ready to brainstorm together?</p>

          <ul className={styles.cicon}>
            <li>
              <a
                href="mailto:kungumaakshatra@gmail.com"
                target="_blank"
                title="kungumaakshatra@gmail.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-at"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                </svg>
              </a>{" "}
            </li>
            <li>
              <a
                href="https://github.com/akshatra02"
                target="_blank"
                title="akshatra02"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>{" "}
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kunguma-akshatra-m/"
                target="_blank"
                title="kunguma-akshatra-m"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.foot}>
        <div> Designed and Developed by Kunguma Akshatra M</div>
        <a className={styles.top} href="#nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-up-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid plum;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
