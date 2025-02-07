import React from 'react';

const Contact = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Address</h1>
                     <h1 className='text-2xl'>Country:Bangladesh</h1>
                     <h2 className='text-2xl'>Division:Sylhet</h2>
                     <h3 className='text-2xl'>District:Hobigonj</h3>
                     <h3 className='text-2xl'>Village:Baniachong</h3>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" placeholder="number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">WhatsApp Number</span>
                            </label>
                            <input type="text" placeholder="WhatsApp Number" className="input input-bordered" required />
                        </div>
                       
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;