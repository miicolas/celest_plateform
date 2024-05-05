// AuthCheck.js

export const isAuthentificated = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  }
};
