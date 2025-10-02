interface BodyProps {
	children: React.ReactNode;
    menuClass?: string;
    pageClass?: string;
    optionClass?: string;
}

const PageBody: React.FC<BodyProps> = ({ menuClass, pageClass, children, optionClass }) => {
	return (
		<main className={`page-body ${menuClass} ${optionClass}`}>
			<div className={`page-content ${pageClass}`}>
				{children}
			</div>
		</main>
	);
};
export default PageBody;