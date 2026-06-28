import {opening} from "./Opening.module.css";

export default function Opening() {
  return (
    <div className={opening}>
      <h4>Opening Hours</h4>

      <p>
        Monday - Saturday : 8:00 AM - 9:00 PM <br />
        Sunday : 10:00 AM - 8:00 PM
      </p>
    </div>
  );
}