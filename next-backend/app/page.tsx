import axios from "axios";

async function getUserDetails(){
  // const response= await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  const response= await axios.get("http://localhost:3000/api/user")
  return response.data;
}

export default async function Home() {
  const userDetails=await getUserDetails();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Hi there!!
      {userDetails.email}
      {userDetails.name}
    </div>
  );
}
