const newman = require('newman');
const path = require('path');

describe('API Tests', () => {
  const collectionPath = 'C:\\Users\\arkod\\OneDrive\\Desktop\\my-jest-project\\testCrypto.json';

  test('Test GET /chain/getbalance', (done) => {
    newman.run({
      collection: require(collectionPath),
      reporters: 'cli',
      globals: {
        address: '0x731FDBd6871aD5cD905eE560A84615229eD8197a',
      },
    }, function (err) {
      if (err) {
        done.fail(err);
        return;
      }
      done();
    });
  });

  test('Test GET /chain/getblock', (done) => {
    newman.run({
      collection: require(collectionPath),
      reporters: 'cli',
      globals: {
        blockNumber: 16318231,
      },
    }, function (err) {
      if (err) {
        done.fail(err);
        return;
      }
      done();
    });
  });
});
