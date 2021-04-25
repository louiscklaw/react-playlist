import React from 'react'
import Quote from './Quote'

const QuoteList = function QuoteList({ quotes }) {
  return quotes.map((quote: QuoteType, index: number) => (
    <Quote quote={quote} index={index} key={quote.id} />
  ))
}

export default React.memo(QuoteList)
// export default QuoteList;
