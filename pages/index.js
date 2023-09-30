import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
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
                <a className={styles.navbar} href="/">
                  RESUME
                </a>
              </li>
              <li className={styles.navbar}>
                <a className={styles.navbar} href="/">
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
   

					
        <section className={styles.edu}>
          <h1 className={styles.ed}>EDUCATION</h1>
          <ul className={styles.timeline}>
					<li>
						<div className={styles.timage}>
							<div className={styles.content}>2020 - 2024</div>
						</div> 
						<div className={styles.panel}>
							<div className={styles.heading}>
								<div className={styles.title1}>Meenakshi Sundararajan Engineering College</div>
								<div className={styles.title2}>Bachelor of Engineering (BE)</div>
							</div> 
							
							<div className={styles.tbody}>
              <p>Specialization: Computer Science and Engineering</p>
              <p>Percentage:88.4 %</p>
							</div> 
						</div> 
					</li> 
					<li className={styles.inverted}>
						<div className={styles.timage}>
							<div className={styles.content}>2019 - 2020</div>
						</div> 
						<div className={styles.panel}>
							<div className={styles.heading}>
								<div className={styles.t1}>P.N.Dhawan Adarsh Vidyalaya Matriculation Higher Secondary School</div>
								<div className={styles.t2}>XII Std</div>
							</div>
							<div className={styles.tb}>
								<p>Specialization: Computer Science</p>
              <p>Percentage:87.3 %</p>
							</div>
						</div>
					</li> 
					<li>
						<div className={styles.timage}>
							<div className={styles.content}>2017 - 2018</div>
						</div>
						<div className={styles.panel}>
							<div className={styles.heading}>
								<div className={styles.title1}>P.N.Dhawan Adarsh Vidyalaya Matriculation Higher Secondary School</div>
								<div className={styles.title2}>X Std</div>
							</div>
							<div className={styles.tbody}>
              <p>Percentage:94.4 %</p>
							</div> 
						</div> 
					</li> 
					</ul> 
        </section>


      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
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
          height: 100px;
          border-top: 1px solid #eaeaea;
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
