import { ContactUsForm } from "app/components/home/ContactUs";

export default function ContactUs() {
    return (
      <>
        <h1>Contact us</h1>
        <p className="center">You can write to us at <a href="#">idiomindapp@gmail.com</a> or you can send us a message below</p>
        <ContactUsForm />
      </>
    );
  }
  