import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9988057974027423"
        data-ad-slot="1789615271"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    );
  }
}