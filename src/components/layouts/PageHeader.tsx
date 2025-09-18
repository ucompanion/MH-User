interface HeaderProps {
	children: React.ReactNode;
}

const PageHeader: React.FC<HeaderProps> = ({ children }) => {
	return (
		<header className='page-header'>
			<div className="inner">
				{children}
			</div>
		</header>
	);
};
export default PageHeader;