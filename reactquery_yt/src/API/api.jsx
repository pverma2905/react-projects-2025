import axios from "axios";

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

// to fetch the data

export const fetchPosts = async(pageNumber)=>{
    const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`)
    return res.status===200?res.data:[];
}


export const fetchInvPost = async (id) => {
    try {
        const res = await api.get(`/posts/${id}`)
        console.log("ffff",res)
        return res.status===200?res.data:[];
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id)=>{
    console.log("delete",id)
    return api.delete(`/posts/${id}`)
}

export const updatePost = (id)=>{
    console.log("delete",id)
    return api.patch(`/posts/${id}`,{title:"I have updated"})
}

export const fetchUsers = async ({ pageParam }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};