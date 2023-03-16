"use client"
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PhoneAuthProvider, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '@/firebase/auth'
import { FirebaseError } from 'firebase/app'
import { toast, ToastContainer } from 'react-toastify'
import { Dialog } from '@headlessui/react'
import OtpInput from '@/components/input.otp'


const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const router = useRouter()
  const [countryCode, setCountryCode] = useState("+84")
  const [username, setUsername] = useState("")
  const [errorVerify, setErrorVerify] = useState("")
  const [verificationId, setVerificationId] = useState('');
  const [code, setCode] = useState("");
  const [openVerify, setOpenVerify] = useState(false)

  // const login = () => {
  //   socket.emit("login", {
  //     username: username
  //   }, (response) => {
  //     if (response.status === "OK")
  //       router.push('/home')
  //   })
  // }



  const signInWithPhone = async () => {
    // const applicationVerifier = new RecaptchaVerifier(
    //   'sign-in-button',
    //   {
    //     size: 'invisible',
    //   },
    //   auth,
    // );

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
        },
        auth
      );
    }
    window.recaptchaVerifier.render().then(function (widgetId) {
      grecaptcha.reset(widgetId);
    });

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, countryCode + username, window.recaptchaVerifier);
      setVerificationId(confirmationResult.verificationId);
      setOpenVerify(true)
    } catch (error) {
      if (error instanceof FirebaseError)
        switch (error.code) {
          case "auth/invalid-phone-number":
            toast.error('Số điện thoại không hợp lệ', {
              theme: 'colored',
            })
            break;

          default:
            break;
        }
      console.log(error.message)
    }





  };

  const verify = async () => {
    const authCredential = PhoneAuthProvider.credential(verificationId, code);
    try {
      const userCredential = await signInWithCredential(auth, authCredential);
      const idToken = await userCredential.user.getIdToken()
      console.log("Sending: " + idToken)
      const result = 
    }
    catch (error) {
      if (error instanceof FirebaseError)
        switch (error.code) {
          case "auth/invalid-verification-code":
            setErrorVerify('Mã xác thực không hợp lệ')
            break;

          default:
            break;
        }
      console.log(error.message)
    }
  };


  return (
    <main className="flex h-screen justify-center items-center">
      <ToastContainer />
      <Dialog open={openVerify} onClose={() => {
        setOpenVerify(false)
      }} className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">

          <Dialog.Panel className="card lg:card-side w-full max-w-lg bg-base-100 shadow-xl">
            <div className='card-body gap-5'>
              <Dialog.Title className='card-title'>
                Mã xác thực
              </Dialog.Title>
              <Dialog.Description>
                Chúng tôi đã gửi mã xác thực đến số điện thoại của bạn
              </Dialog.Description>
              {errorVerify !== "" && (
                <div className="alert alert-error shadow-lg">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{errorVerify}</span>
                  </div>

                  <button className="btn btn-ghost btn-xs btn-square" onClick={() => { setErrorVerify("") }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              )}

              <OtpInput className='w-full' valueLength={6} value={code} onChange={(value) => { setCode(value) }}></OtpInput>


              <div className="card-actions justify-end">
                <button className='btn' onClick={() => { setOpenVerify(false) }}>Hủy</button>
                <button className='btn btn-primary gap-2' onClick={verify} >
                  <span>Tiếp tục</span>
                  <ArrowRightIcon className='w-4 h-4'></ArrowRightIcon>
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body gap-4">
          <h2 className="card-title">Đăng nhập</h2>
          <div className="form-control">
            <div className="input-group">
              <select className="select select-bordered border-r-0"
                value={countryCode} // ...force the select's value to match the state variable...
                onChange={e => setCountryCode(e.target.value)}
              >
                <option value="+84" selected>+84</option>
              </select>
              <input value={username}
                onChange={e => setUsername(e.target.value)} type="text" placeholder="Số điện thoại" className="input input-bordered w-full max-w-xs" />

            </div>
          </div>
          <div
            id="recaptcha-container"
          ></div>
          <div className="card-actions">
            <button id='sign-in-button' onClick={signInWithPhone} className="btn btn-primary btn-block gap-2">Bắt đầu <ArrowRightIcon className='w-5 h-5'></ArrowRightIcon></button>
          </div>
        </div>
      </div>
    </main>
  )
}
