interface BodyProps {
	children: React.ReactNode;
    pageName?: string;
}

const PageBody: React.FC<BodyProps> = ({ children, pageName }) => {
    const className = `page-body ${pageName}`;
	return (
		<main className={className}>
			<div className='page-content'>
				{children}
			</div>
		</main>
	);
};
export default PageBody;