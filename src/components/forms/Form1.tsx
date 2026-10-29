"use client";
import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import useBookingForm from "@/hooks/useBookingForm";
import {
  BookingCalenderIcon,
  CalendarIcon,
  CallIcon,
  MailIcon,
  UserIcon,
} from "@/utils/formIcons";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import { countries } from "../../utils/constent";

interface Props {
  gridView?: boolean;
}

const Form1 = ({ gridView }: Props) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
  } = useBookingForm({
    includeCheckIn: true,
    includeCheckOut: true,
    onSubmitSuccess: () => {
      setStartDate(null);
      setEndDate(null);
    },
  });

  // read the clock after mount: Cache Components blocks `new Date()` during prerender
  const [minDate, setMinDate] = useState<Date | undefined>();
  const [maxDate, setMaxDate] = useState<Date | undefined>();
  // react-datepicker also reads the clock while rendering, so mount it client-side only
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const { min, max } = getDateInputLimits({
      showPast: false,
      showFuture: true,
    });
    setMinDate(min ? new Date(min) : undefined);
    setMaxDate(max ? new Date(max) : undefined);
  }, []);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start) setFieldValue("checkIn", start.toISOString().split("T")[0]);
    if (end) setFieldValue("checkOut", end.toISOString().split("T")[0]);
  };

  const formFields = [
    { name: "name", label: "Full Name", type: "text", icon: <UserIcon /> },
    { name: "phone", label: "Ph Number", type: "tel", icon: <CallIcon /> },
    { name: "email", label: "Email ID", type: "email", icon: <MailIcon /> },
    {
      name: "checkIn",
      label: "Check-in & out",
      type: "date",
      icon: <CalendarIcon />,
    },
  ];

  const fieldClass = `flex items-center gap-2 bg-input text-dark rounded-md border border-black/5 px-3 ${
    gridView ? "h-12" : "h-10"
  }`;
  const inputClass =
    "w-full min-w-0 bg-transparent text-sm placeholder:text-light/80 focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={
        gridView
          ? "flex flex-col gap-3"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-start gap-3"
      }
    >
      {formFields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          {field.type === "date" ? (
            <div className={fieldClass}>
              <span className="text-dark shrink-0">{field.icon}</span>
              {mounted ? (
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  minDate={minDate}
                  maxDate={maxDate}
                  placeholderText={field.label}
                  popperClassName="!z-[99999]"
                  className={inputClass}
                  wrapperClassName="w-full"
                  aria-label={field.label}
                />
              ) : (
                <input
                  readOnly
                  placeholder={field.label}
                  className={`${inputClass} w-full`}
                  aria-label={field.label}
                />
              )}
            </div>
          ) : field.type === "tel" ? (
            <div className={fieldClass}>
              <span className="text-dark shrink-0">{field.icon}</span>
              <div className="relative shrink-0">
                <select
                  className="appearance-none bg-transparent pr-4 text-sm focus:outline-none cursor-pointer"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={(e) => setFieldValue("countryCode", e.target.value)}
                  aria-label="Country Code"
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-xs">
                  <IoIosArrowDown />
                </span>
              </div>
              <input
                type="tel"
                inputMode="numeric"
                name={field.name}
                placeholder={field.label}
                aria-label={field.label}
                className={inputClass}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className={fieldClass}>
              <span className="text-dark shrink-0">{field.icon}</span>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                aria-label={field.label}
                className={inputClass}
                value={formData[field.name] ?? ""}
                onChange={handleChange}
              />
            </div>
          )}
          {(errors[field.name] ||
            (field.type === "date" && errors.checkOut)) && (
            <p className="text-red-700 text-xs">
              {errors[field.name] || errors.checkOut}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-accent text-dark rounded-full text-sm font-medium px-4 ${
          gridView ? "h-12" : "h-10"
        } flex items-center justify-center gap-2 sm:col-span-2 lg:col-span-1 transition-all hover:scale-[0.98] disabled:opacity-70`}
      >
        <BookingCalenderIcon />
        {isSubmitting ? "Submitting..." : "BOOK YOUR STAY"}
      </button>
    </form>
  );
};

export default Form1;
