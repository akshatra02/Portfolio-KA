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

        {/* <link href="https://fonts.googleapis.com/css?family=Alegreya|Open+Sans|Tangerine:700" rel="stylesheet"></link> */}
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

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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
