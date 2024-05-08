import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const Login = () => {

  const {signIn}=useContext(AuthContext)

    const handelLogin = (event)=>{
     event.preventDefault()
     const form = event.target ;
     const email =form.email.value;
     const password =form.password.value;
     signIn(email, password).then(result=> {
      const user =result.user
      console.log(user);
     }).catch(error => {
      const err = error.message 
      console.log(err);
     })

    }
  return (
    <div className=" my-24">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full hidden md:flex">
         <img src={img} alt="" />
        </div>
        <div className="card w-full  border">

            <h1 className="text-center font-bold text-5xl mt-6">Log In</h1>
          <form onSubmit={handelLogin} className="card-body">
          {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="input input-bordered"
                required
              />
            </div> */}
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                className="input input-bordered"
                required
              />
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Log In</button>
            </div>
          </form>
          <p className='mx-auto mb-3'>New to car doctor <Link to="/signUp" className='text-green-600'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
