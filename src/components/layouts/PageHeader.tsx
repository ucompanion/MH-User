interface HeaderProps {
	children: React.ReactNode;
}

const PageHeader: React.FC<HeaderProps> = ({ children }) => {
	return (
		<header className='page-header'>
			{children}
		</header>
	);
};
export default PageHeader;