import React from 'react';
import ReactDOM from 'react-dom/client';
function App() {
	return (
		<div>
			<Child />
		</div>
	);
}
function Child() {
	return <span>big-react</span>;
}
// FunctionCompoent useState
// useEffect
// reconcile
// update增加优先级调度(schedule调度阶段)
const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(<App />);
console.log(React);
console.log(App);
console.log(ReactDOM);
