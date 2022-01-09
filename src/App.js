import React from "react";
import "regenerator-runtime/runtime";

import SurveyWidget from "./Component/SurveyWidget/SurveyWidget";

function App({ domElement }) {
	const attribute = domElement.getAttribute("data-attribute") || "I am test attribute";
	return (
		<div>
      <SurveyWidget domElement={domElement} />
		</div>
	);
}

export default App;
