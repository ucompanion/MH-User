interface ActionProps {
	children: React.ReactNode;
}

const PageAction: React.FC<ActionProps> = ({ children }) => {
	return (
		<header className='page-action'>
            <div className="btn-group">
                {children}
            </div>
		</header>
	);
};
export default PageAction;