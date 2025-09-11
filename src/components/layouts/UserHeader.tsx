interface HeaderProps {
	children: React.ReactNode;
}

const UserHeader: React.FC<HeaderProps> = ({ children }) => {
	return (
		<header className='page-header'>
			<div className="inner">
				{children}
			</div>
		</header>
	);
};
export default UserHeader;