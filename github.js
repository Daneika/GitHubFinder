class Github {
  constructor() {
    this.client_id = "481c45f414ab2e11c1fe";
    this.client_secret = "1d39cf63ae184f9750876fce73d23202a0bc91a0";
    this.repos_count = 5;
    this.repos_sort = "created";
    this.repos_direction = "asc";
  }

  async getUser(user) {
    console.log(user);
    const profileResponse = await fetch(
      new Request(`https://api.github.com/users/${user}`, {
        headers: {
          "Authorization": `Basic ${btoa(`${this.client_id}:${this.client_secret}`)}`
        },
      })
    );

    const repoResponse = await fetch(
      new Request(
        `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&direction=${this.repos_direction}`,
        {
          headers: {
            "Authorization": `Basic ${btoa(`${this.client_id}:${this.client_secret}`)}`,
          },
        }
      )
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
