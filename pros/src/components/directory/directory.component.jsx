import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'opony',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'sklep/opony'
        },
        {
          title: 'zestawy',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'sklep/zestawy'
        },
        {
          title: 'gadżety',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'sklep/gadzety'
        },
        {
          title: 'enduro',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'sklep/enduro'
        },
        {
          title: 'motocross',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'sklep/motocross'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherProps }) => {
          return <MenuItem key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
