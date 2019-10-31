import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';

export default class CtaButtons extends React.Component {
    render() {
        return (
            <p className="block-buttons">
              {_.map(_.get(this.props, 'actions'), (action, action_idx) => (
              <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button secondary">{_.get(action, 'label')}</Link>
              ))}
            </p>
        );
    }
}
