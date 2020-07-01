import React from 'react'
import { DiscussionEmbed } from 'disqus-react';


class DisqusTryout extends React.Component{
  render(){
    return(
      <DiscussionEmbed
          shortname='https-portfolio-louislabs-com'
          config={
              {
                  url: this.props.article.url,
                  identifier: this.props.article.id,
                  title: this.props.article.title,
                  language: 'zh_TW'
              }
          }
      />
    )
  }
}


export default DisqusTryout