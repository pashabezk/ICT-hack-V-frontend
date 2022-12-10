import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoading, selectRespData, tryGetHelloAsync} from "../../Redux/testAPIReducer";
import {Button} from "antd";

const TestPage = () => {

	const RespData = useSelector(selectRespData);
	const loading = useSelector(selectIsLoading);

	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(tryGetHelloAsync())
	}

	return (
		<div>
			<div>test</div>
			<div>responce:</div>
			{
				RespData
			}
			<Button onClick={onClick} loading={loading}>
				try
			</Button>
		</div>
	);
}

export default TestPage;