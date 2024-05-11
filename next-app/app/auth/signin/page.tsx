import Image from "next/image";
import { Signin as SigninComponent } from "@/components/Signin";
// if you remove "as SigninComponent" it would give error since this function is also named Signin thus it is given a different alias by 'as'
export default function Signin() {
  return <div>
      <SigninComponent/>
  </div>
}
