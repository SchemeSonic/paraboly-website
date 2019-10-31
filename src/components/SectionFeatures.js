import React from 'react';
import _ from 'lodash';

import {htmlToReact, safePrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionFeatures extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'block features-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <div className="block-header inner-small">
                {_.get(this.props, 'section.title') && 
                <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                }
                {_.get(this.props, 'section.subtitle') && 
                <p className="block-subtitle">
                  {htmlToReact(_.get(this.props, 'section.subtitle'))}
                </p>
                }
              </div>
              {_.get(this.props, 'section.featureslist') && 
              <div className="inner">
                {_.map(_.get(this.props, 'section.featureslist'), (feature, feature_idx) => (
                <div key={feature_idx} className="block-item">
                  <div className="grid">
                    {_.get(feature, 'image') && 
                    <div className="cell block-preview">
                      <img src={safePrefix(_.get(feature, 'image'))} alt={_.get(feature, 'title')} />
                    </div>
                    }
                    <div className="cell block-content">
                      <h3 className="block-title underline">{_.get(feature, 'title')}</h3>
                      <div className="block-copy">
                        {markdownify(_.get(feature, 'content'))}
                      </div>
                      {_.get(feature, 'actions') && 
                        <CtaButtons {...this.props} actions={_.get(feature, 'actions')} />
                      }
                    </div>
                  </div>
                </div>
                ))}
                </div>
              }
            </section>
        );
    }
}
