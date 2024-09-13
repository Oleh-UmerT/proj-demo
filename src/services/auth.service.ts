import axiosInstance from "@/config/http";

interface AuthData {
  email: string;
  password: string;
}

export const checkEmail = async (body: {email: string}) => {
  return await axiosInstance
    .post(`/api/v1/auth/check`, body)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
};

export const loginUser = async (body: AuthData) => {
  return await axiosInstance
    .post(`/api/v1/auth/login`, body)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
};

export const signupUser = async (body: AuthData) => {
  return await axiosInstance
    .post(`/api/v1/auth/register`, body)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
};

export const loginNextAuth = async (body: AuthData) => {
  try {
    const response = await loginUser(body);
    if (response.status === 201) {
      return {
        name: "user",
        token: response.data.access,
      };
    } else {
      throw new Error(JSON.stringify(response.data?.detail));
    }
  } catch (err) {
    throw err;
  }
};