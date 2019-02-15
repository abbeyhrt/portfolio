/* eslint-disable */

import React from 'react';
import Page from '../components/Page';

const Writing = () => {
  const [counter, setState] = React.useState(0);
  return (
    <Page>
      <div>
        <h1>Writing</h1>
        <span>This is what I've written:</span>
        <ul className="ul--general">
          <li>404 oops! No writing found!</li>
          <li>
            Click <button onClick={() => setState(counter + 1)}>here</button> to
            bug me into actually writing some damn articles!
          </li>
          {counter !== 0 && <p>I've been bugged {counter} times!</p>}
        </ul>
      </div>
    </Page>
  );
};

export default Writing;
