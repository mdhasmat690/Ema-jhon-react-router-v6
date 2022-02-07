import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../hooks/UseAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = UseAuth()
    const onSubmit = data => {
        
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

      <input defaultValue={user.displayName} {...register("name")} />

      <input defaultValue={user.email} {...register("email", { required: true })} />

      {errors.email && <span className="errow">This field is required</span>}
      <input placeholder="Address" defaultValue="" {...register("Address")} />
      <input placeholder="City" defaultValue="" {...register("City")} />
      <input placeholder="Phone" defaultValue="" {...register("Phone")} />


      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;