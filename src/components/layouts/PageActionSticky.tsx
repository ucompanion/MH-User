interface Props {
	children: React.ReactNode;
}

const PageActionSticky: React.FC<Props> = ({ children }) => {
	return (
		<div className='page-action-sticky'>
			{children}
		</div>
	);
};
export default PageActionSticky;
