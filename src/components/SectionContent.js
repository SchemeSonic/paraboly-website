import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify, Link} from '../utils';

export default class SectionContent extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'block text-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <div className="inner">
                <div className="grid">
                  {_.get(this.props, 'section.image') && 
                  <div className="cell block-preview">
                    <img src={safePrefix(_.get(this.props, 'section.image'))} alt={_.get(this.props, 'section.title')} />
                  </div>
                  }
                  <div className="cell block-content">
                    {_.get(this.props, 'section.title') && 
                    <h2 className="block-title underline">{_.get(this.props, 'section.title')}</h2>
                    }
                    <div className="block-copy">
                      {markdownify(_.get(this.props, 'section.content'))}
                    </div>
                    {_.get(this.props, 'section.actions') && 
                    <p className="block-buttons">
                      {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                      <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button secondary">{_.get(action, 'label')}</Link>
                      ))}
                    </p>
                    }
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
