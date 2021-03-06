'use strict';

module.exports = {
  getConfig: function(cb) {
    cb(null, 
      {
        'testKey': {
          'description': 'Some test description',
          'values': [
            {
              'value': 1,
              'percent': 10
            },
            {
              'value': 2,
              'percent': 20
            },
            {
              'value': 3,
              'percent': 30
            },
            {
              'value': 4,
              'percent': 40
            }
          ]
        }
      }
    );
  }
};