import { useState } from "react";
import { SearchSection, ClientDetails } from "../../components";

const ViewDataPage = (props: any) => {
	const [isInforCardCliked, setisInforCardCliked] = useState(false);

	return (
		<>
			{!isInforCardCliked ? (
				<SearchSection
					setisInforCardCliked={setisInforCardCliked}
					setclientCardSelected={props.setclientCardSelected}
				/>
			) : (
				<ClientDetails
					setisInforCardCliked={setisInforCardCliked}
					id={props.clientCardSelected}
				/>
			)}
		</>
	);
};

export default ViewDataPage;
