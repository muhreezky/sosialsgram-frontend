import axios from "axios";
import endpoint from "../endpoint";
import useLoginData from "../hooks/useLoginData";

export default async function likePost(form, id) {
  const { access_token } = useLoginData();

  const { data } = await axios.put(`${endpoint}/posts/${id}/likes`, form, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });

  return data;
}