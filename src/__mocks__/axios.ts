// __mocks__/axios.ts
const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "John",
          last: "Doe"
        },
        login: {
          username: "john_doe"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/1.jpg"
        }
      },
      {
        name: {
          first: "Jane",
          last: "Smith"
        },
        login: {
          username: "jane_smith"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/2.jpg"
        }
      },
      {
        name: {
          first: "Jack",
          last: "Black"
        },
        login: {
          username: "jack_black"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/3.jpg"
        }
      }
    ]
  }
};

const axios = {
  get: vi.fn().mockResolvedValue(mockResponse),
};

export default axios;
