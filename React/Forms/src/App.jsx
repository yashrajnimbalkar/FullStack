import './App.css'
import {useForm} from "react-hook-form"

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

async function onSubmit(data){
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log("your data is : ", data)
}
  return (
    <>
      <form onClick={handleSubmit(onSubmit)}>
        <label >First name</label>
        <input {...register("FirstName",{ required: true, maxLength: 30 })}/>
        <br />
        <label >Middle name</label>
        <input {...register("middleName")}/>
        <br />
        <label >Last name</label>
        <input {...register("lastName")}/>
        <br />
        <label >Password</label>
        <input
        {...register("password", 
          {
            required: true, 
            minLength:{value:3, message:"Min length should be 3"}, 
            maxLength:{value:8, message:"Max length should be 8"}
          })} />

        {errors.password && <p className='error-msg'>{errors.password.message}</p>}
        <br />
        <input type='submit'
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting" : "Submit"}
          />
      </form>
    </>
  )
}

export default App
