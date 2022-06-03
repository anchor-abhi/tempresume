import ResponsiveAppBar from "./components/navbar";
import AddRoute from "./components/routes";

function App() {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
			className="App"
		>
			<ResponsiveAppBar />
			<AddRoute />
		</div>
	);
}

export default App;
