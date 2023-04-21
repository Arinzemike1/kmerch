import React from 'react';
import { withRouter } from 'next/router'
import Icon from '../Icons/icon';

interface ActiveLinkProps {
	router: any
	href: string
	mainIcon: string
	activeIcon: string
	title: string
}

const ActiveLink = ({ router, href, mainIcon, activeIcon, title }: ActiveLinkProps) => {

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		router.push(href)
	};

	return (
		// <a href={href} onClick={handleClick} className={router.pathname === href ? 'active' : ''}>
		<a href={href} onClick={handleClick} className={`flex text-[13px]/24px mt-[3px] px-2.5 py-[5px] w-full ${router.pathname === href ? 'active' : ''}`}>
			<span className="h-[38.4px] mr-[17.6px]"><Icon name={router.pathname === href ? activeIcon : mainIcon} /></span>
			<span className="text-xs font-semi-bold text-secondary mt-0.5">{title}</span>
		</a>
	)
};

export default withRouter(ActiveLink)