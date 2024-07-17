import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <main>
      <h1 className="form-title">Add a School</h1>

      <form action="/api/addSchool" method="post">
        <div>
          <label className="label" htmlFor="name">
            School Name
          </label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
          />
        </div>

        {/* Contact Details */}
        <div className="input-group">
          <div>
            <label className="label" htmlFor="email_id">
              Email ID
            </label>
            <input
              className="input"
              type="email"
              id="email_id"
              name="email_id"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label className="label" htmlFor="contact">
              Contact Number
            </label>
            <input
              className="input"
              type="tel"
              id="contact"
              name="contact"
              required
              aria-required="true"
            />
          </div>
        </div>

        <div>
          <label className="label" htmlFor="address">
            Address
          </label>
          <input
            className="input"
            type="text"
            id="address"
            name="address"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label className="label" htmlFor="city">
            City
          </label>
          <input
            className="input"
            type="text"
            id="city"
            name="city"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label className="label" htmlFor="state">
            State
          </label>
          <input className="input" type="text" id="state" name="state" />
        </div>

        <div>
          <label className="label" htmlFor="image">
            Image URL
          </label>
          <input className="input" type="url" id="image" name="image" />
        </div>

        <div className="input-group">
          <button className="btn-primary">+ Add School</button>
          <button className="btn-secondary">
            <Link href="schools">All Schools</Link>
          </button>
        </div>
      </form>
    </main>
  );
}
