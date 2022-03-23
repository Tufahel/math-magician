import React from 'react';
import './Quote.css';

function Quote() {
  return (
    <div className="quote-body">
      <p>
        &quot;As far as the laws of mathematics refer to reality, they are not certain,
        and as far as they are certain, they do not refer to reality.&quot;
        <br />
        <br />
        <span className="writer">— Albert Einstein</span>
      </p>
    </div>
  );
}

export default Quote;
