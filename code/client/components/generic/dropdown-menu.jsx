import React from 'react';
import ReactDOM from 'react-dom';

DropdownMenu = React.createClass({
  renderDivider() {
    return <li role="separator" className="divider"></li>;
  },
  renderItem(item, index) {
    let active = item.active ? 'active' : '';
    return <li className="nav-item" key={ `nav-item-${ item.uid }` } className={ active } onClick={ item.action }>
      <a className="dropdown-item" href={ item.href }>{ item.label }</a>
    </li>;
  },
  render() {
    return <ul className="dropdown-menu dropdown-menu-right">
      {this.props.items.map((item, index) => {
        return item.divider ? this.renderDivider(item, index) : this.renderItem(item, index);
      })}
    </ul>;
  }
});
