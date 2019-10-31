import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';

export default class SectionFaq extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'block faq-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <div className="inner-small">
                <div className="block-header">
                  {_.get(this.props, 'section.title') && 
                  <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                  }
                  {_.get(this.props, 'section.subtitle') && 
                  <p className="block-subtitle">
                    {htmlToReact(_.get(this.props, 'section.subtitle'))}
                  </p>
                  }
                </div>
                {_.get(this.props, 'section.faqitems') && 
                <dl className="faq-accordion">
                  {_.map(_.get(this.props, 'section.faqitems'), (faqitem, faqitem_idx) => (<React.Fragment key={faqitem_idx}>
                  <dt key={faqitem_idx} className="accordion-header">
                    <button className="accordion-trigger">
                      <div className="accordion-title">{_.get(faqitem, 'question')}</div>
                      <div className="accordion-icon icon-plus" />
                    </button>
                  </dt>
                  <dd key={faqitem_idx} className="accordion-panel">
                    <div className="accordion-content">
                      {markdownify(_.get(faqitem, 'answer'))}
                    </div>
                  </dd>
                  </React.Fragment>))}
                </dl>
                }
              </div>
            </section>
        );
    }
}
