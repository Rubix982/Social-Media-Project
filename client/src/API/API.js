class API {
  static async getRequest(__URL) {
    try {
      const response = await fetch(__URL);
      if(!response.ok) {
        const data = await response.json();
        throw new Error(data.msg);
      }
      const data = await response.json();
      return data;    
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async postRequest(__URL, __data) {
    try {
      const response = await fetch(__URL, {
        method: 'POST',
        body: JSON.stringify(__data),
        headers: {
            'Content-type': 'application/json',
        },
        'credentials': 'include',
      });

      if(response.status===403) {
        localStorage.removeItem('loggedIn');
        const data = await response.json();
        throw new Error(data.msg);
      }
      if(!response.ok) {
        const data = await response.json();
        throw new Error(data.msg);
      }
      const data = await response.json();
      return data;    
    } catch (error) {
      throw new Error(error.message);
    }    
  }
}

export default API;