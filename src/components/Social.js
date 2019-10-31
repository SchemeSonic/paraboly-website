import React from 'react';
import _ from 'lodash';

import {Link} from '../utils';

export default class Social extends React.Component {
    render() {
        return (
            <ul className="social-links">
              {_.map(_.get(this.props, 'pageContext.site.data.social.links'), (link, link_idx) => (
              <li key={link_idx}>
                <Link to={_.get(link, 'url')} target="_blank" rel="noopener">{_.get(link, 'title')}</Link>
              </li>
              ))}
            </ul>
        );
    }
}
