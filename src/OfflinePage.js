import React, { Component } from 'react';
import logo from "./netlify_logo.svg";

export default class OfflinePage extends Component {
  render() {
    return (<section className="nc-gitGatewayAuthenticationPage-root">
      <section className="nc-gitGatewayAuthenticationPage-card">
        <span dangerouslySetInnerHTML={{ __html: logo }} style={{ width: 100 }}></span>
        <p className="nc-gitGatewayAuthenticationPage-message">Admin is offline</p>
      </section>
    </section>);
  }
}
