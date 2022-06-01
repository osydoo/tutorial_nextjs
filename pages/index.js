import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>FE Developer</p>
        <p>
          <a href="https://github.com/osydoo">https://github.com/osydoo</a>.
        </p>
      </section>
    </Layout>
  );
}
