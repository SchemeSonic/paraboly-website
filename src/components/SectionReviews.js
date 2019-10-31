import React from 'react';
import _ from 'lodash';

import {htmlToReact, safePrefix} from '../utils';

export default class SectionReviews extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'block reviews-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
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
              {_.get(this.props, 'section.reviews') && 
              <div className="inner">
                <div className="grid">
                  {_.map(_.get(this.props, 'section.reviews'), (review, review_idx) => (
                  <blockquote key={review_idx} className="cell review">
                    <div className="review-inside">
                      <p className="review-text">{htmlToReact(_.get(review, 'content'))}</p>
                      <footer className="review-footer">
                        {_.get(review, 'avatar') && 
                        <img className="review-avatar" src={safePrefix(_.get(review, 'avatar'))} alt="Author avatar"/>
                        }
                        <cite className="review-author">{_.get(review, 'author')}</cite>
                      </footer>
                    </div>
                  </blockquote>
                  ))}
                </div>
              </div>
              }
            </section>
        );
    }
}
