import api from '../../requests/api';

it('Api route product', async function() {
  await api.get('/product').
    then(response => {
      expect(response.data).toBeTruthy();
    });
});

it('Api route product order by id asc', async function() {
  await api.get('/product').
    then(response => {
      expect(response.data[0].id).toEqual('1');
    });
});
