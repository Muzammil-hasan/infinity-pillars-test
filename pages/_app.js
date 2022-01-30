import Layout from "../layout/Index.jsx";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
