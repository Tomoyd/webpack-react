import Layout from "../../components/layout";
import useStore from "../../hooks/useStore";
import styles from "./home.less";

const Home = () => {
  const [value, setHome] = useStore("home");
  const handleClick = () => {
    console.log("134 :>> ", 134);
    setHome(Date.now());
  };
  return (
    <Layout className={styles.text} title='home'>
      <div onClick={handleClick}>hello this is home{value}</div>
    </Layout>
  );
};

export default Home;
