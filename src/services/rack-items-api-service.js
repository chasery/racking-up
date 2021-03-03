import TokenService from './token-service';
import config from '../config';

const RackItemsApiService = {
  getRackItem(rackItemId) {
    return fetch(`${config.API_ENDPOINT}/rack-items/${rackItemId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postRackItem(rackItem) {
    const { rackId, name, url, price } = rackItem;
    return fetch(`${config.API_ENDPOINT}/rack-items`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        rack_id: rackId,
        item_name: name,
        item_price: price,
        item_url: url,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  editRackItem(rackItemId, updatedRackItem) {
    const { name, price, url } = updatedRackItem;
    return fetch(`${config.API_ENDPOINT}/rack-items/${rackItemId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        item_name: name,
        item_price: price,
        item_url: url,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.status
    );
  },
  deleteRackItem(rackItemId) {
    return fetch(`${config.API_ENDPOINT}/rack-items/${rackItemId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.status
    );
  },
};

export default RackItemsApiService;
