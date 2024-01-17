class Api {
  apiBase: string;
  apiKey: string;
  headers: any;

  constructor() {
    this.apiBase = 'api.navitia.io/v1/coverage/sncf';
    this.apiKey = 'e004b2b6-2ec6-4f02-a4dc-ae36266a6b8a'
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': this.apiKey
    }
  }

  async get(node: string) {
    const data = await fetch(`https://${this.apiBase}/${node}`, {
      headers: this.headers
    });

    return data.json();
  }
}

export default Api;
