import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // console.log(formData);

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
    } catch (error) {}
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left div */}
        <div className="flex-1">
          <Link to="/" className="text-4xl  font-bold dark:text-white">
            <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg text-white">
              Mahi's
            </span>
            Blogs
          </Link>
          <p className="text-sm mt-5">
            This is a demo project . you can sign up with your email and
            password or with Google.
          </p>
        </div>
        {/* right div */}
        <div className="flex-1">
          <form onSubmit={handelSubmit} className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="Username"
                onChange={handelChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@gmail.com"
                id="email"
                onChange={handelChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="password"
                id="password"
                onChange={handelChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 tetx-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
