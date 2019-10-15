import React from 'react';
import { Row, Col, Container } from 'reactstrap';

export default class AdComponent extends React.Component {
  componentDidMount() {
    // (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {/* <a target="_blank" href="https://www.amazon.com/gp/product/B07SJ2P1XC/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07SJ2P1XC&linkCode=as2&tag=pakobird-20&linkId=a374fc1846a205fec0f2233684800d83"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07SJ2P1XC&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=pakobird-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=pakobird-20&l=am2&o=1&a=B07SJ2P1XC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> */}
              <iframe style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pakobird-20&marketplace=amazon&region=US&placement=B07SJ2P1XC&asins=B07SJ2P1XC&linkId=043e443d74aa134f5fd1fe12f971810a&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=16abb8&bg_color=ffffff">
              </iframe>
            </Col>
            <Col>
              <iframe style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pakobird-20&marketplace=amazon&region=US&placement=B07SL6ZXBL&asins=B07SL6ZXBL&linkId=140506fabe4f59a4ef4190e8af747994&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=16abb8&bg_color=ffffff">
              </iframe>
            </Col>
            <Col>
              <iframe style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pakobird-20&marketplace=amazon&region=US&placement=B07PC7X38X&asins=B07PC7X38X&linkId=ac8b9a041596831ecf8b6dd46a5e3b0b&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=16abb8&bg_color=ffffff">
              </iframe>
            </Col>
            <Col>
              <iframe style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=pakobird-20&marketplace=amazon&region=US&placement=B01MS6MO77&asins=B01MS6MO77&linkId=4ae5258b715d0e93f3f12053648fb72d&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=16abb8&bg_color=ffffff">
              </iframe>
            </Col>
            {/* <Col>
              <ins className="adsbygoogle"
                style={{ display: 'inline-block', width: '728px', height: '90px' }}
                data-ad-client="ca-pub-9988057974027423"
                data-ad-slot="1789615271"
                data-full-width-responsive="false"></ins>
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}