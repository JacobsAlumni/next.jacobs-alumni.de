import { NextRouter, withRouter } from "next/dist/client/router";
import * as React from "react";
import menu from "../../data/menu.json";
import Link from "next/link";

const internalMenu = menu.filter(x => !x.external);
const externalMenu = menu.filter(x => x.external);


interface HeaderProps {
    router: NextRouter;
}

class Header extends React.Component<HeaderProps> {
    render() {
        const { router: {pathname} } = this.props;
        const curl = pathname.endsWith("/") ? pathname : pathname + "/";

        return (<>
            <div id="offcanvas-menu" className="uk-offcanvas" uk-offcanvas="">
                <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                    <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                        {internalMenu.map(item =>
                            <li className={`${curl === item.url ? "uk-active" : ""} hoverable`} key={item.url}>
                                <Link href={item.url}><a>{item.title}</a></Link>
                            </li>)
                        }
                        <li className="uk-nav-divider"></li>
                        {externalMenu.map(item =>
                            <li className="hoverable" key={item.url}>
                                <Link href={item.url}><a>{item.title}</a></Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
            
            <header>
                <div className="uk-navbar-container navbar">
                    <nav className="uk-navbar">
                        {/* logo */}
                        <div className="uk-navbar-left">
                            <Link href="/">
                            <a className="uk-navbar-item uk-logo">
                                <span className="logo-button uk-margin-small-right">
                                    <img src="/favicon.png" /> {/* TODO: Automatically optimize this */}
                                </span>
                                <span className="uk-visible">{process.env.siteTitle}</span>
                            </a>
                            </Link>
                        </div>
                        <div className="uk-navbar-right">
                            
                            {/* large screen menu */}
                            <ul className="uk-navbar-nav uk-visible@l">
                                {internalMenu.map(item =>
                                    <li className={`${curl === item.url ? "uk-active" : ""} hoverable`} key={item.url}>
                                        <Link href={item.url}><a>{item.title}</a></Link>
                                    </li>)
                                }
                            </ul>
                            
                            {externalMenu.map(item =>
                                <div className="uk-navbar-item uk-visible@l" key={item.url}>
                                    <Link href={item.url}>
                                        <a className="uk-button uk-button-primary uk-button-external bg-transparent uk-text-primary">
                                            {item.title}
                                        </a>
                                    </Link>
                                </div>)
                            }
            
                            <div className="uk-navbar-item uk-hidden@l">
                                <a href="#" className="uk-navbar-toggle uk-navbar-toggle-icon uk-icon uk-hidden@l" uk-toggle="target: #offcanvas-menu" uk-icon="menu">
                                    Menu
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>);
    }
}

export default withRouter(Header);