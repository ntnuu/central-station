import Api from '$lib/api/index';

export async function load() {
  const api = new Api();

  const data = await api.get('commercial_modes');

  console.log('data ->', data);

  return data;
}
