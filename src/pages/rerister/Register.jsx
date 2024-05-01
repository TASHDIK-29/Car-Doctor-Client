import { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../auth/AuthProvider';

const Register = () => {

    const {user, createUser} = useContext(AuthContext);

    const handelSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="text-center lg:text-left w-1/2 flex justify-center items-center p-5">
                    <img src={img} className='w-4/6' alt="" />
                </div>
                <div className="card shrink-0 w-2/5 px-3 py-4 border">
                    <h1 className="text-4xl font-bold text-center my-3">Sign Up</h1>
                    <form onSubmit={handelSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600 hover:bg-orange-600 text-white text-lg">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;