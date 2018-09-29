function route(s) {
  return 'http://10.100.201.130:5000/' + s;
}

async function fetch_json(address, params={}) {
  var url = new URL(address);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
}

export async function set_actions(params) {
  return fetch_json(route('set-actions'), params);
}

export async function join_game() {
  return fetch_json(route('join-game'));
}

export async function get_players(callback) {
  return fetch_json(route('get-players'))
    .then(json => {
      callback(json);
    })
    .catch((e) => {
      console.log('There has been a problem with your fetch operation: ', e.message);
    });
}

export async function get_state(callback) {
  return fetch_json(route('get-state'))
    .then(json => {
      callback(json);
    })
    .catch((e) => {
      console.log('There has been a problem with your fetch operation: ', e.message);
    });
}
