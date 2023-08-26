import axios from "axios";

export async function sendDataToServer(formData) {
  await axios.post("http://localhost:8000/data", {
    formData,
  });
}
