import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, htmlToReact} from '../utils';
import Social from './Social';
import SubscribeForm from './SubscribeForm';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer">
              <div className="footer-top outer">
                <div className="inner">
                  <div className="footer-widgets">
                    <div className="widget footer-branding">
                      {_.get(this.props, 'pageContext.site.siteMetadata.footer.logo_img') ? 
                      <p className="site-logo">
                        <Link to={safePrefix('/')}><img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.footer.logo_img'))} alt="Logo" /></Link>
                      </p>
                       : 
                      <p className="site-title">
                        <Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link>
                      </p>
                      }
                      {_.get(this.props, 'pageContext.site.siteMetadata.footer.tagline') && 
                      <p className="site-description">
                        {_.get(this.props, 'pageContext.site.siteMetadata.footer.tagline')}
                      </p>
                      }
                    </div>
                    {((_.get(this.props, 'pageContext.menus.secondary') && _.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav')) || _.get(this.props, 'pageContext.site.siteMetadata.footer.has_social')) && 
                    <nav className="widget footer-navigation">
                      <div className="footer-nav-inside">
                        {(_.get(this.props, 'pageContext.menus.secondary') && _.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav')) && 
                        <div className="secondary-nav">
                          <h2 className="widget-title">{_.get(this.props, 'pageContext.site.siteMetadata.footer.nav_title')}</h2>
                          <ul className="secondary-menu">
                            {_.map(_.get(this.props, 'pageContext.menus.secondary'), (item, item_idx) => (
                            <li key={item_idx}>
                              <Link to={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</Link>
                            </li>
                            ))}
                          </ul>
                        </div>
                        }
                        {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social') && 
                        <div className="social-nav">
                          <h2 className="widget-title">{_.get(this.props, 'pageContext.site.siteMetadata.footer.social_title')}</h2>
                          <Social {...this.props} />
                        </div>
                        }
                      </div>
                    </nav>
                    }
                    {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_subscribe') && 
                    <div className="widget footer-subscribe">
                      <h2 className="widget-title">{_.get(this.props, 'pageContext.site.siteMetadata.footer.subscribe_title')}</h2>
                      {_.get(this.props, 'pageContext.site.siteMetadata.footer.subscribe_content') && 
                      <p>{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.subscribe_content'))}</p>
                      }
                      <SubscribeForm {...this.props} />
                    </div>
                    }
                  </div>
                </div>
              </div>
              <div className="site-info outer">
                <div className="inner">
                  {htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content'))}
                  &nbsp;
                  {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links'), (link, link_idx) => (<React.Fragment key={link_idx}>
                  <Link key={link_idx} to={_.get(link, 'url')} {...(_.get(link, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(link, 'text')}</Link>.
                  </React.Fragment>))}
                </div>
              </div>
            </footer>
        );
    }
}
