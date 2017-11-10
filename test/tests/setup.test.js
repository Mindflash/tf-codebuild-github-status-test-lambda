import { before } from 'mocha';
import sinon from 'sinon';

import container from '../../src/container';

before(async function () {
  const ssm = await container.load('ssm');
  sinon.stub(ssm, 'getParameters').returns({
    promise: sinon.stub().resolves({
      Parameters: [{
        Value: JSON.stringify({
          github: {
            url: 'https://www.example.com',
            token: 'xxxxxxxx',
            owner: 'example',
          },
          log: {
            level: process.env.LOG_LEVEL,
          },
        }),
      }],
    }),
  });
});
