import supertest from 'supertest';
const request = supertest('https://eacp.energyaustralia.com.au/codingtest/api-docs/#/festivals/APIFestivalsGet');

import { expect } from 'chai';

describe('Get Festival', () => {
  it('GET /api/v1/festivals', () => {
    return request.get(`/api/v1/festivals`).then((res) => {
      expect(res.body.name).to.not.be.empty;
      expect(res.body.bands).to.not.be.empty;
    });
  });
});
