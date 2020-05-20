class Github {
  constructor() {
    this.client_id = "481c45f414ab2e11c1fe";
    this.client_secret = "1d39cf63ae184f9750876fce73d23202a0bc91a0";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
        profile
    }
  }
}
