// menu items service with a single method
// requests array of menu items from JSON via axios
export function getMenuItems() {
    const axios = window.axios;
    return axios.get("../menu.json").then((response) => {
      return response.data.data;
    });
  }
  