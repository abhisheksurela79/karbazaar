"use client";

import { useState, useRef } from "react";
import styles from "./login-form.module.css";
import { MoveUpRight } from "lucide-react";
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/common/ui/input-otp";

export default function LoginForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState<string[]>(new Array(4).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handlePinChange = (val: string, index: number) => {
    if (isNaN(Number(val))) return;
    const updatedPin = [...pin];
    updatedPin[index] = val;
    setPin(updatedPin);
    if (val !== "" && index < 3) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10) setStep(2);
  };

  if (step === 1) {
    return (
    <form onSubmit={handlePhoneSubmit} action="" method="get" className={styles.dealerLoginForm}>
        <div className={styles.loginHeader}>
        <h6 className={styles.loginHeading}>
            {/* <img className={styles.welcomeHandIcon} src="/waving-hand.svg" alt="" draggable={false} /> */}
            <span>Welcome back</span>
        </h6>
        <p className={styles.loginDescription}>
            Continue with your registered mobile number.
        </p>
        </div>

        <div className="formContent">
        <div className="formField">
            {/* <label htmlFor="" className="formLabel">Enter Registered Mobile Number</label> */}
            <div className="inputGroup text-white">
            <div className="inputPrefix min-w-7 bg-transparent">
                <span>+91</span>
            </div>
            <input
                type="text"
                className="formInput bg-transparent"
                placeholder="Enter Registered Mobile Number"
                pattern="[6-9][0-9]{9}" 
                maxLength={10} 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            </div>
        </div>

        <div className="formActions">
            <button type="submit" className="buttonPrimary light w-full">
            <span className="btnLabel">Login</span>
            <MoveUpRight strokeWidth={1.75} className="arrowRight" />
            </button>
        </div>
        </div>
    </form>
    );
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.dealerLoginForm}>
      <div className={styles.loginHeader}>
        <h6 className={styles.loginHeading}><span>Enter 4-Digit PIN</span></h6>
        <p className={styles.loginDescription}>Enter the secure network PIN assigned to your profile.</p>
      </div>
      <div className="formContent">
        <div className="formField">
          <div className="flex justify-between gap-3 my-4">
            {/* {pin.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-center text-xl font-bold rounded-xl border border-gray-700 bg-transparent text-white focus:border-white focus:outline-none"
                value={data}
                onChange={(e) => handlePinChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => { if (el) inputRefs.current[index] = el; }}
              />
            ))} */}

            <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS} className="text-white w-full">
                <InputOTPGroup className="w-full">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
        <div className="formActions">
          <button type="button" onClick={() => window.location.href = "/"} className="buttonPrimary light w-full">
            <span className="btnLabel">Verify & Enter Network</span>
          </button>
        </div>
      </div>
    </form>
  );

}
