"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Switch,
  Field,
  Fieldset,
  Label,
  Listbox,
  Select,
  Textarea,
} from "@headlessui/react";

type Inputs = {
  destination: string;
  departure: {
    month: string;
    year: string;
  };
  guests: {
    adults: number;
    children: number;
  };
  budget: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  followUp: {
    email: boolean;
    phoneCall: boolean;
    text: boolean;
  };
  availability:
    | "Any time"
    | "Morning: 9am - 12pm GMT"
    | "Afternoon: 12pm - 5pm GMT"
    | "Evening (Mon - Thur only): 5pm - 7pm GMT";
  message: string;
};

export const TripForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      followUp: { email: false, phoneCall: false, text: false },
      availability: "Any time",
    },
  });

  const watchGuests = watch("guests", { adults: 1, children: 0 });

  const followUp = watch("followUp");

  const guestOptions = [
    { label: "1 Adult", value: { adults: 1, children: 0 } },
    { label: "2 Adults", value: { adults: 2, children: 0 } },
    { label: "2 Adults, 1 Child", value: { adults: 2, children: 1 } },
    { label: "2 Adults, 2 Children", value: { adults: 2, children: 2 } },
    { label: "3 Adults, 1 Child", value: { adults: 3, children: 1 } },
  ];

  const predefinedOption = guestOptions.find(
    (option) =>
      option.value.adults === watchGuests.adults &&
      option.value.children === watchGuests.children
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div className="bg-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Destination */}
          <Field className="flex flex-col gap-3">
            <Label
              htmlFor="destination"
              className="text-[#b4a269] text-lg font-bold"
            >
              Where would you like to go?
            </Label>
            <Select
              {...register("destination", {
                required: "Destination is required",
              })}
              className="w-full h-10 px-4 py-2 bg-gray-100 focus:ring-2 focus:ring-gray-300 transition cursor-pointer hover:bg-gray-200 text-sm text-gray-700 border-2 border-gray-200"
            >
              {["I don't know yet", "Tanzania", "Kenya", "East Africa"].map(
                (obj) => (
                  <option
                    key={obj}
                    value={obj}
                    className="text-sm text-gray-700"
                  >
                    {obj}
                  </option>
                )
              )}
            </Select>
            {errors.destination && (
              <p className="text-red-500 text-sm mt-1">
                {errors.destination.message}
              </p>
            )}
          </Field>

          {/* Guests */}
          <div className="flex flex-col gap-3">
            <label className="text-[#b4a269] text-lg font-bold">Guests</label>

            {/* Headless UI Listbox */}
            <Listbox
              value={
                predefinedOption || { label: "Custom", value: watchGuests }
              }
              onChange={(option) => setValue("guests", option.value)}
            >
              <Listbox.Button className="w-full h-10 px-4 py-2 bg-gray-100 focus:ring-2 focus:ring-gray-300 transition cursor-pointer hover:bg-gray-200 text-sm text-gray-700">
                {predefinedOption ? predefinedOption.label : "Custom"}
              </Listbox.Button>
              <Listbox.Options className="absolute bg-white shadow-md mt-1 rounded-md w-full">
                {guestOptions.map((option, index) => (
                  <Listbox.Option key={index} value={option} as="li">
                    {({ active, selected }) => (
                      <div
                        className={`cursor-pointer px-4 py-2 ${
                          active ? "bg-gray-200" : ""
                        } ${selected ? "font-bold" : ""}`}
                      >
                        {option.label}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>

            {/* Custom Number Inputs (Always Visible & Editable) */}
            <div className="flex justify-center gap-6 py-4">
              {/* Adults Selection */}
              <div className="flex flex-col items-center gap-3">
                <span className="font-medium text-sm">Adults (15+)</span>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() =>
                      setValue("guests", {
                        ...watchGuests,
                        adults: Math.max(1, watchGuests.adults - 1),
                      })
                    }
                    className="px-3 py-1 bg-gray-300 disabled:opacity-50 rounded-full cursor-pointer hover:bg-gray-400/50"
                    disabled={watchGuests.adults === 1}
                  >
                    -
                  </button>
                  <span className="text-sm border border-gray-400 px-4 py-2">
                    {watchGuests.adults}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setValue("guests", {
                        ...watchGuests,
                        adults: watchGuests.adults + 1,
                      })
                    }
                    className="px-3 py-1 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400/50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children Selection */}
              <div className="flex flex-col items-center gap-3">
                <span className="font-medium text-sm">Children (0-15)</span>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() =>
                      setValue("guests", {
                        ...watchGuests,
                        children: Math.max(0, watchGuests.children - 1),
                      })
                    }
                    className="px-3 py-1 bg-gray-300 disabled:opacity-50 rounded-full cursor-pointer hover:bg-gray-400/50"
                    disabled={watchGuests.children === 0}
                  >
                    -
                  </button>
                  <span className="text-sm border border-gray-400 px-4 py-2">
                    {watchGuests.children}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setValue("guests", {
                        ...watchGuests,
                        children: watchGuests.children + 1,
                      })
                    }
                    className="px-3 py-1 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400/50"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            {/* When would you like to go? */}
            <Fieldset className="flex flex-col gap-3">
              <Label className="text-[#b4a269] text-lg font-bold">
                When would you like to go?
              </Label>
              <div className="flex items-center gap-3">
                <Field className="w-full flex flex-col gap-1">
                  <Select
                    {...register("departure.month", {
                      required: "Departure month is required",
                    })}
                    className="w-full h-10 px-4 py-2 bg-gray-100 focus:ring-2 focus:ring-gray-300 transition cursor-pointer hover:bg-gray-200 text-sm text-gray-700 border-2 border-gray-200"
                  >
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((obj) => (
                      <option key={obj} value={obj}>
                        {obj}
                      </option>
                    ))}
                  </Select>
                  {errors.departure?.month && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.departure?.month.message}
                    </p>
                  )}
                </Field>
                <Field className="w-full flex flex-col gap-1">
                  <Select
                    {...register("departure.year", {
                      required: "Departure year is required",
                    })}
                    className="w-full h-10 px-4 py-2 bg-gray-100 focus:ring-2 focus:ring-gray-300 transition cursor-pointer hover:bg-gray-200 text-sm text-gray-700 border-2 border-gray-200"
                  >
                    {["Any year", "2025", "2026", "2027"].map((obj) => (
                      <option key={obj} value={obj}>
                        {obj}
                      </option>
                    ))}
                  </Select>
                  {errors.departure?.year && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.departure?.year.message}
                    </p>
                  )}
                </Field>
              </div>
            </Fieldset>
          </div>
          {/* How much are you looking to spend? * */}
          <div className="flex flex-col gap-3">
            {/* Budget */}
            <Field className="flex flex-col gap-3">
              <Label
                htmlFor="budget"
                className="text-[#b4a269] text-lg font-bold"
              >
                How much are you looking to spend?
              </Label>
              <Select
                {...register("budget", { required: "Budget is required" })}
                className="w-full h-10 px-4 py-2 bg-gray-100 focus:ring-2 focus:ring-gray-300 transition cursor-pointer hover:bg-gray-200 text-sm text-gray-700 border-2 border-gray-200"
              >
                {[
                  "$10,000-$15,000 (per person sharing)",
                  "Above $15,000 (per person sharing)",
                ].map((obj) => (
                  <option key={obj} value={obj}>
                    {obj}
                  </option>
                ))}
              </Select>
              {errors.budget && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.budget.message}
                </p>
              )}
            </Field>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <div className="flex flex-col gap-2.5 container px-8">
          <h2 className="text-4xl text-[#b4a269]">Your Details</h2>
          <h5 className="text-sm text-gray-500">
            Please add a few details below and we will call you to discuss your
            plans.
          </h5>
        </div>

        <Fieldset className="bg-white p-4 grid grid-cos-1 md:grid-cols-2 gap-3">
          <Field className="flex flex-col gap-2">
            <input
              {...register("firstName", { required: "First name is required" })}
              placeholder="First name*"
              className="w-full h-10 px-4 py-2 bg-gray-100 focus:ring-2 focus:ring-gray-300 transition cursor-pointer hover:bg-gray-200 text-sm text-gray-700 border-2 border-gray-200"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </Field>
          <Field className="flex flex-col gap-2">
            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last name*"
              className="w-full h-10 px-4 py-2 bg-gray-100 focus:ring-2 focus:ring-gray-300 transition cursor-pointer hover:bg-gray-200 text-sm text-gray-700 border-2 border-gray-200"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </Field>
          <Field className="flex flex-col gap-2">
            <input
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              placeholder="Phone number*"
              className="w-full h-10 px-4 py-2 bg-gray-100 focus:ring-2 focus:ring-gray-300 transition cursor-pointer hover:bg-gray-200 text-sm text-gray-700 border-2 border-gray-200"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </Field>
          <Field className="flex flex-col gap-2">
            <input
              {...register("email", { required: "Email is required." })}
              placeholder="Email*"
              className="w-full h-10 px-4 py-2 bg-gray-100 focus:ring-2 focus:ring-gray-300 transition cursor-pointer hover:bg-gray-200 text-sm text-gray-700 border-2 border-gray-200"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </Field>
          <Field className="flex flex-col gap-2">
            <Label className="text-[#b4a269] text-lg font-bold">
              How should we follow up?
            </Label>
            <div className="flex gap-6">
              {/* Email */}
              <div className="flex items-center gap-1.5">
                <Switch
                  checked={followUp.email}
                  onChange={(checked) => setValue("followUp.email", checked)}
                  className={`group block size-5 border border-gray-200 bg-white cursor-pointer rounded ${
                    followUp.email ? "bg-[#b4a269]" : ""
                  }`}
                >
                  {/* Checkmark icon */}
                  {followUp.email && (
                    <svg
                      className="stroke-[#b4a269] w-4 h-4"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Switch>
                <label className="text-sm text-gray-500">Email</label>
              </div>

              {/* Phone Call */}
              <div className="flex items-center gap-1.5">
                <Switch
                  checked={followUp.phoneCall}
                  onChange={(checked) =>
                    setValue("followUp.phoneCall", checked)
                  }
                  className={`group block size-5 border border-gray-200 bg-white cursor-pointer rounded ${
                    followUp.phoneCall ? "bg-[#b4a269]" : ""
                  }`}
                >
                  {followUp.phoneCall && (
                    <svg
                      className="stroke-[#b4a269] w-4 h-4"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Switch>
                <label className="text-sm text-gray-500">Phone Call</label>
              </div>

              {/* Text */}
              <div className="flex items-center gap-1.5">
                <Switch
                  checked={followUp.text}
                  onChange={(checked) => setValue("followUp.text", checked)}
                  className={`group block size-5 border border-gray-200 bg-white cursor-pointer rounded ${
                    followUp.text ? "bg-[#b4a269]" : ""
                  }`}
                >
                  {followUp.text && (
                    <svg
                      className="stroke-[#b4a269] w-4 h-4"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Switch>
                <label className="text-sm text-gray-500">Text</label>
              </div>
            </div>
          </Field>
          <Field className="flex flex-col gap-2">
            <Label className="text-[#b4a269] text-lg font-bold">
              When are you available?
            </Label>
            <Select
              aria-label="When are you available?"
              {...register("availability", {
                required: "Availability is required.",
              })}
              className="w-full h-10 px-4 py-2 bg-gray-100 focus:ring-2 focus:ring-gray-300 transition cursor-pointer hover:bg-gray-200 text-sm text-gray-700 border-2 border-gray-200"
            >
              {[
                "Any time",
                "Morning:9am - 12pm GMT",
                "Afternoon:12pm - 5pm GMT",
                "Evening (Mon-Thu only):5pm-7pm GMT",
              ].map((obj) => (
                <option key={obj} value={obj}>
                  {obj}
                </option>
              ))}
            </Select>
            {errors.availability && (
              <p className="text-red-500 text-sm mt-1">
                {errors.availability.message}
              </p>
            )}
            <p className="text-xs">
              Our team will contact you during office hours
            </p>
          </Field>
        </Fieldset>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <h2 className="text-4xl text-[#b4a269]">Tell Us More</h2>
        <Field className="bg-white p-4 flex flex-col gap-2">
          <Label className="text-sm text-gray-500">
            Please share your ideas and initial plans for your trip below so our
            travel specialists can help you bring them to life.
          </Label>
          <Textarea
            {...register("message")}
            name="description"
            placeholder="Have you seen any hotels you would luke to stay in, or tours that you would like to experience? Do you have any set dates or room requirements? Are you unsure of where to
            start planning? Let our Travel Specialists know so that they can help you plan a trip of a lifetime."
            className="w-full h-32 px-4 py-2 bg-gray-100 focus:ring-2 focus:ring-gray-300 transition cursor-pointer hover:bg-gray-200 text-sm text-gray-700 border-2 border-gray-200"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="bg-[#b4a269] text-sm p-4 text-white tracking-wide max-w-md hover:bg-[#b4a269]/50 cursor-pointer"
      >
        SUBMIT
      </button>
    </form>
  );
};
