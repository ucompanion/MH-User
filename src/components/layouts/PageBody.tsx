interface BodyProps {
	children: React.ReactNode;
    template?: string;
}

const PageBody: React.FC<BodyProps> = ({ children, template }) => {
    const className = `page-body ${template}`;
	return (
		<main className={className}>
			<div className='page-content'>
				{children}
			</div>
		</main>
	);
};
export default PageBody;