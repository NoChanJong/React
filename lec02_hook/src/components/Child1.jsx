import React, { memo } from 'react';

const Child1 = ({name, age}) => {

	console.log(`자녀 컴퍼넌트가 랜더링 되었습니다`);
	
	// 1. React.memo 적용전
	// 부모가 렌더링될 때 자식은 변경이 없음에도 함께 렌더링이 된다.
	return (
		<div style={{border: '2px solid navy', padding: '10px'}}>
			<h3>자녀</h3>
			<p>이름: {name}</p>
			<p>나이: {age}</p>
		</div>
	);
};

// export default Child1;

// 2. React.memo 적용후
export default memo(Child1);