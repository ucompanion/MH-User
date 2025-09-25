import { Link } from "react-router-dom";
import { Icon } from "../ui";

interface PageProps {
    menu?: string;
}

const PageNav: React.FC<PageProps> = ({menu}) => {
    const navLinks = [
        { text: 'ホーム', to: "/pages/main/Home", id: 'home' },
        { text: '病院', to: "/pages/hospital/Home", id: 'hospital' },
        { text: 'イベント', to: "/pages/event/Home", id: 'event' },
        { text: '医師', to: "/pages/doctor/Home", id: 'doctor' },
        { text: '口コミ', to: "/pages/review/Home", id: 'review' },
    ];

	return (
		<nav className="page-navigation">
			<div className="gnb">
                {navLinks.map((linkData) => {
                    const linkClassName = `gnb-link ${menu === linkData.id ? 'is-selected' : ''}`;
                    const ariaSelected = menu === linkData.id;

                    return (
                        <Link key={linkData.id} to={linkData.to} className={linkClassName} aria-selected={ariaSelected}>
                            <Icon name={"icn-"+linkData.id} />
                            <span className="text">{linkData.text}</span>
                        </Link>
                    );
                })}
            </div>
		</nav>
	);
};
export default PageNav;