import api from "axios";

constBASE_URL = "/api/member";
const headers = { "Content-Type": "multipart/form-data" };

export default {
  async checkUsername(username) {
    const { data } = await api.get(`${BASE_URL}/checkusername/${username}`);
    console.log("AUTH GET CHECKUSERNAME", data);
    return data;
  },

  async create(member) {
    const formData = new FormData();
    formData.append("username", member.username);
    formData.append("email", member.email);
    formData.append("password", member.password);

    if (member.avatar) {
      formData.append("avatar", member.avatar);
    }

    const { data } = await api.post(BASE_URL, formData, headers);
    console.log("AUTH POST: ", data);
    return data;
  },
};
