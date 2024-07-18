"use client";

import { addSchool } from "@/lib/actions";
import School from "@/types/School";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export function AddSchoolForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<School>();

  const onSubmit: SubmitHandler<School> = async (schoolData) => {
    setIsSubmitting(true);

    try {
      await addSchool(schoolData);
      reset();
    } catch (error) {
      console.error("Error adding school: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="label" htmlFor="name">
          School Name
        </label>
        <input
          className="input"
          type="text"
          id="name"
          aria-required="true"
          {...register("name", { required: "School name is required" })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      {/* Contact Details */}
      <section className="input-group">
        <div>
          <label className="label" htmlFor="email_id">
            Email ID
          </label>
          <input
            className="input"
            type="email"
            id="email_id"
            aria-required="true"
            {...register("email_id", {
              required: "Email ID is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email_id && (
            <p className="error">{errors.email_id.message}</p>
          )}
        </div>

        <div>
          <label className="label" htmlFor="contact">
            Contact Number
          </label>
          <input
            className="input"
            type="tel"
            id="contact"
            aria-required="true"
            {...register("contact", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid contact number",
              },
            })}
          />
          {errors.contact && <p className="error">{errors.contact.message}</p>}
        </div>
      </section>

      <div>
        <label className="label" htmlFor="address">
          Address
        </label>
        <input
          className="input"
          type="text"
          id="address"
          aria-required="true"
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && <p className="error">{errors.address.message}</p>}
      </div>

      <div>
        <label className="label" htmlFor="city">
          City
        </label>
        <input
          className="input"
          type="text"
          id="city"
          aria-required="true"
          {...register("city", { required: "City is required" })}
        />
        {errors.city && <p className="error">{errors.city.message}</p>}
      </div>

      <div>
        <label className="label" htmlFor="state">
          State
        </label>
        <input
          className="input"
          type="text"
          id="state"
          {...register("state", { required: "State is required" })}
        />
        {errors.state && <p className="error">{errors.state.message}</p>}
      </div>

      <div>
        <label className="label" htmlFor="image">
          Image URL
        </label>
        <input
          className="input"
          type="url"
          id="image"
          {...register("image", {
            required: "Image link is required",
            pattern: {
              value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/,
              message: "Invalid image URL",
            },
          })}
        />
        {errors.image && <p className="error">{errors.image.message}</p>}
      </div>

      <div>
        <button type="submit" className="btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add School"}
        </button>
      </div>
    </form>
  );
}
